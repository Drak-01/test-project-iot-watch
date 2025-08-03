from functools import wraps
from flask import Blueprint, current_app, make_response, request, jsonify
from flask_jwt_extended import create_access_token, get_jwt_identity, jwt_required, unset_jwt_cookies
from werkzeug.security import generate_password_hash, check_password_hash
import sqlite3
from datetime import timedelta

from models import get_db_connection

auth_bp = Blueprint('auth', __name__)

@auth_bp.route('/api/login', methods=['POST'])
def login():
    """Authenticate user and return JWT TOKEN"""
    data = request.get_json()   # data from frontend login page

    print('++++++++++++++++++  login requests ++++++++++++++++')

    if not data:
        return jsonify({'error', 'Data missing'}) 
    
    email = data.get("email")
    password = data.get("password")

    if not email or not password:
        return jsonify({'success':False, 'message':'Email and password required'})

    try:
        conn = get_db_connection()
        cursor = conn.cursor()

        cursor.execute("SELECT * FROM users WHERE email=? LIMIT 1", (email,))
        user = cursor.fetchone()

        if user and check_password_hash(user['password'], password):
            access_token = create_access_token(
                identity=user['email'],
                expires_delta=timedelta(hours=1)
            )                
            return jsonify({
                'login': True,
                'access_token': access_token 
            }), 200
        else:
            print(f"password incorrect: {password}")
            return jsonify({'success':False, 'message':'email or password invalid!'}), 401
    except sqlite3.Error as e:
        print(f"Sqlite3 error {e}")
        return jsonify({'success':False, 'message':'Error database'}), 500
    except Exception as e:
        print(f"Error inscription {e}")
        return jsonify({'success':False, 'message': str(e)}), 500
    finally:
        conn.close()

@auth_bp.route('/api/register', methods=['POST'])
def register():
    """GET new user information for register"""
    data = request.get_json()  
    print("New user :::::", data)

    if not data:
        return jsonify({'error', 'Data missing'}), 400

    #get data in frontend
    username = data.get('username')
    email = data.get('email')
    password = data.get('password')
    password_confir = data.get('password_confir')

    if not username or not email or not password or not password_confir:
        return jsonify({'success':False, 
                        'message':'users informations required'}), 400
    try:
        conn = get_db_connection()
        cursor = conn.cursor()

        if verifyPassword(password, password_confir):
            password_hash = generate_password_hash(password)
            cursor.execute(
                """
                    INSERT INTO users (username,email,password) 
                        VALUES(?,?,?)
                """,(username, email, password_hash)
            )
            conn.commit()

            return jsonify({'success':True, 
                            'message':'inscription successfull'}), 200
        else:
            print('password differents')
            return jsonify({'success':False,
                        'message':'password not identity!'})
    except Exception as e:
        print(f"Error inscription {e}")
        return jsonify({'success':False,
                        'message': str(e)})
    finally:
        conn.close()

def verifyPassword(password, confirm_pass):
    """check if password and confirmation password are identical"""
    return password==confirm_pass

@auth_bp.route('/api/logout', methods=['POST'])
@jwt_required()
def logout():
    response = jsonify({"message": "Logout successful"})
    unset_jwt_cookies(response)
    return response, 200

@auth_bp.route('/api/check', methods=['GET'])
@jwt_required()
def check_auth():
    print("-------------------------check")
    identity = get_jwt_identity()
    return jsonify({'logged_in': True, 'user': identity}), 200
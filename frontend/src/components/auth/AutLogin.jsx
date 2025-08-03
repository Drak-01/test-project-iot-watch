import { Target, Underline } from 'lucide-react';
import React, {  useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { API_BASE_URL } from '../../config';

const Login = ()=> {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const navigate = useNavigate();
  //const [loading, setLoading] = useState(true);


  //Send requests to login in the backend /api/login
  const loginRequest = async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/api/login`,{
        'method' : 'POST',
        'headers': {    
          'Content-Type':'application/json',
        },
        body: JSON.stringify({email,password}),
      })

      if(!response.ok){
        const errorData = await response.json()
        setErrorMsg(errorData?.message || 'connexion error')
        return;
      }

      const data = await response.json();

      // store token in localStorage
      localStorage.setItem('access_token', data.access_token);

      navigate('/'); 
    } catch (error) {
      console.log('error', error);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen rounded-xl mr-5 ">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          loginRequest();
        }}
        className="max-w-sm w-full bg-white rounded-xl shadow-md px-6 py-8
        ">

        <h2 className="text-2xl font-semibold mb-6 text-center">Connexion</h2>

        {errorMsg && (
          <div className="text-red-500 text-sm mb-4 text-center">{errorMsg}</div>
        )}

        <div className="mb-5 justify-items-start">
          <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-500">
            Email
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder="name@example.com"
          />
        </div>

        <div className="mb-5 justify-items-start">
          <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-500">
            Mot de passe
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="bg-gray-50 border border-gray-300 dark:text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder="••••••••"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-green-900 hover:bg-green-700 text-white font-medium py-2.5 rounded-lg transition duration-200"
        >
          Se connecter
        </button>

        <div className="mt-6 text-center text-sm text-gray-600">
          Don't have an account?{' '}
          <Link to="/register" className="text-blue-600 hover:underline">
            Register
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Login;

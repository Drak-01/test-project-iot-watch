import { Target, Underline } from 'lucide-react';
import React, {  useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { API_BASE_URL } from '../../config';

const AuthRegister =()=> {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [password_confir, setPasswordConfir] = useState('');
  const [username, setUsername] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  const navigate = useNavigate();

  //Register a new user in the database
  const registerRequest = async () => {
    
    const response = await fetch(`${API_BASE_URL}/api/register`, {
        'method': 'POST',
        'headers': {
            'Content-Type':'application/json',
        },
        body: JSON.stringify({username, email, password, password_confir})
    });

    if (!response.ok){
        const errorData = await response.json()
        setErrorMsg(errorData?.message || 'Error inscription')
    }
    const data = await response.json()

    if (data.success){
        navigate('/login');
    }
  };

  return (
    <div className="flex justify-center items-center h-screen rounded-xl">
      <form 
        onSubmit={
            (e) => {
                e.preventDefault();
                registerRequest();
            }
        }
      className="max-w-sm w-full bg-white rounded-xl shadow-md px-6 py-8">        
        <h2 className="m-4 text-xl">Inscription</h2>
        
        <div class="mb-5 justify-items-start">
          <label for="username" className="block mb-1 text-sm font-medium">Username</label>
          <input type="text" id="username" 
            className="bg-gray-50 border  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:text-black  dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500" 
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required />
        </div>

        <div class="mb-5 justify-items-start">
          <label for="email" className="block mb-1 text-sm font-medium">Email</label>
          <input type="email" id="email" 
            className="bg-gray-50 border  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:text-black  dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="name@gmail.com" 
            required />
        </div>

        <div class="mb-5 justify-items-start">
          <label for="password" className="block mb-2 text-sm font-medium">Password</label>
          <input type="password" id="password" 
              className="bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:text-black dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" 
              value={password}
              onChange={(e)=> setPassword(e.target.value)}
              required />
        </div>

        <div class="mb-5 justify-items-start">
          <label for="password_confir" className="block mb-2 text-sm font-medium">Password Confirmation</label>
          <input type="password" id="password_confir" 
              className="bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:text-black dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" 
              value={password_confir}
              onChange={(e)=> setPasswordConfir(e.target.value)}
              required />
        </div>

        <button type="submit" 
          class="w-full bg-green-900 hover:bg-green-700 text-white font-medium py-2.5 rounded-lg transition duration-200">
            register
        </button>
      </form>
    </div>
  );
}

export default AuthRegister;

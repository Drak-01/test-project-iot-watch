import { Target, Underline } from 'lucide-react';
import React, {  useState } from 'react';
import { Link } from 'react-router-dom';

const AuthRegister =()=> {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [password_confir, setPasswordConfir] = useState('');
  const [username, setUsername] = useState('');

  return (
    <div >
      <form class="max-w-sm mx-auto bg-white  rounded-xl shadow-md/30 mt-10 px-2 dark:shadow-red">
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
          class="text-white bg-blue-500 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-gray-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mb-5">
            register
          </button>
        
      </form>

    </div>
  );
}

export default AuthRegister;

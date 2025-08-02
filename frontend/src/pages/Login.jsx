import React from 'react';

//component
import AutLogin from '../components/auth/AutLogin';
import Header from '../components/Header';

function Login(){
    return(
    <div className="w-screen max-w-screen min-h-screen bg-zinc-50 flex flex-col">
        <Header />
        <div className='m-4'>
            <AutLogin />
        </div>
    </div>
    )
}

export default Login;
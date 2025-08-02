import React from "react";

//Component
import AutRegister from '../components/auth/AutRegister';
import Header from "../components/Header";

function Register(){
    return (
        <div className="w-screen max-w-screen min-h-screen bg-zinc-50 flex flex-col">
            <Header />
            <div className='m-4'>
                <AutRegister />
            </div>
        </div>

    )
}

export default Register;
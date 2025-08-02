import React from "react";

//Compenents
import Header from "../components/Header";
import TemperaturePrediction from "../components/TemperaturePrediction";

function Predictions(){
    return(
        <div className="w-screen max-w-screen min-h-screen bg-zinc-50 flex flex-col">
            <Header />
            <div className='m-4'>
                <TemperaturePrediction />
            </div>
        </div>
    )
}

export default Predictions;
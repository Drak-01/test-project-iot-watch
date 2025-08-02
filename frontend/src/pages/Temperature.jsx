import React from 'react';

/* Components */
import Content from '../components/Content';
import Header from '../components/Header';
import WeeklyStats from '../components/WeeklyStats';

function Temperature(){
    return(
      <div className="w-screen max-w-screen min-h-screen bg-zinc-50">
        <Header />
        <Content />
                
        <div className='m-6'>
          <WeeklyStats />
        </div> 
        
      </div>
    )
}

export default Temperature;
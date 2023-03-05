import React from 'react';
import './../App.css';
import './main.css';
import Image from './Countdown frame.png';

function Main() {
  return (
    <div className="App">

      <main className="">
            <br/>
            <br/>
       
       <div className="main_block main">
        <img src={Image} className="countDownImage"/>
       </div>

       <div className="main1">
       </div>

      </main>

    </div>
  );
}

export default Main;

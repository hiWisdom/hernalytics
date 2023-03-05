import React from 'react';
import './../App.css';
import './main.css';
import Image1 from './Countdown frame.png';
import Image2 from './Get started.png';

function Main() {
  return (
    <div className="App">

      <main className="">
        
      <br/>
      <br/>
       
       <div className="main_block main1">
        <img src={Image1} className="countDownImage"/>
       </div>

      <br/>
      <br/>

       <div className="main_block main2">
        <img src={Image2} className="countDownImage"/>
       </div>

      </main>

    </div>
  );
}

export default Main;

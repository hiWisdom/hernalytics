import React from 'react';
import logo from './../Hernalytics Full Logo Yellow@3x 1.png';
import './header.css';
import{ FaChevronCircleDown } from 'react-icons/fa';
// import HeaderSlider from './HeaderSlider';

function Header() {
  return (
    <div className="App">

      <header className="App-header">


          <div class="topnav" id="myTopnav">

            <a><img src={logo}/></a>
            <a href="#news">ABOUT US</a>

            {/* <div className="dropdown">
              <a href="#contact" className="dropdown">OUR COMMUNITIES</a>

              <div className="dropdown-content">
                <p>Hello World!</p>
                </div>
            </div> */}




              {/* <div className="dropdown-content">
                <p>Hello World!</p>
                </div>
                </a> */}

            
            <a href="#about" className="dropdown">OUR COMMUNITIES <FaChevronCircleDown />
                <ul className="dropdown-content">
                  <li>General User</li>
                  <li>Election Candidates</li>
                  <li>Decide To Run (DTR)</li>
                  <li>Reporters</li>
                </ul>
            </a>

            <a href="#about" className="dropdown">ELECTION  <FaChevronCircleDown />
                <ul className="dropdown-content">
                  <li>Election Day Live Updates</li>
                  <li>Post Election Analysis</li>
                </ul>
            </a>

            <a href="#about">E-BUDDY</a>
            <a href="#contact">VEO PLATFORM</a>
            <a href="#about">LOGIN</a>
            <a href="#home" className="active">SIGN UP</a>
            <a href="javascript:void(0);" className="icon" onclick="myFunction()">
                <i className="fa fa-bars"></i>
            </a>
        </div>


        
        <div className="content_container">

                <div className="content_details">
                  <h2>Get Real-Time updates on the Nigeria 2023 Elections</h2>
                  <p>Become a more informed and active citizen by accessing and engaging on just the information you need on the coming elections</p>
                </div>

                <div className="content_button_container">

                  <div className="content_button sign-up">
                    <a>SIGN UP</a>
                  </div>

                  <div className="content_button get-election-update">
                    <a>GET ELECTIONS UPDATE</a>
                  </div>
                  
                </div>
        </div>

      </header>

      

    </div>
  );
}

export default Header;

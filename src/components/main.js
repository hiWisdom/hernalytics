import React from 'react';
import './../App.css';
import './main.css';
import Image1 from './Countdown frame.png';
import Image2 from './Get started.png';
import{ FaChevronCircleDown } from 'react-icons/fa';
import{ FaChevronRight } from 'react-icons/fa';

function Main() {
  return (
    <div className="App">

      <main className="">

      <br/>
      <br/>
       
       <div className="main_block main1">
        <img src={Image1} className="countDownImage"/>
       </div>


{/**main 2begins */}
       <div className="main_block main_block_container main2">

          <div className="main_block_content_container">

            <div className="main_block_content main_block_content1">

              <div className="main_block_content1_ main_block_content1_A">
                <p className="main_block_content1_title">Elections</p>
                <h2 className="main_block_content1_paragraph">Get information on the Nigeria 2023 Elections</h2>
              </div>

              <div className="main_block_content1_ main_block_content1_B">
                <p className="main_block_content1_title">Explore The Date;</p>
                <p className="main_block_content1_button main_block_content1_button1"><a>Election Day Live Updates</a></p>
                <p className="main_block_content1_button main_block_content1_button2"><a>Post-Election information</a></p>
              </div>
              
            </div>

            <div className="main_block_content main_block_conten2">
              <select>
                <option>Nigeria <FaChevronCircleDown /></option>
              </select>
              Map
            </div>
            
          </div>



       </div>
{/**main 2ends */}



{/**main 3 begins */}       
       <div className="main_block main_block_container main3">

          <div className="main_block_content_container">

            <div className="main_block_content main_block_content2">

              <div className="main_block_content2_ main_block_content2_A">
                <p className="main_block_content2_title main_block_content2_title">EBuddy</p>
                <h2 className="main_block_content2_paragraph">What's on your mind? Share real time updates.</h2>
              </div>

              <div className="main_block_content2_ main_block_content2_B">
                <p className="main_block_content2_title">Through the E-Buddy platform, you can share updates and engage others on key discussions around elections</p>
                <p className="main_block_content2_button main_block_content2_button1"><a>Post An Election Update <FaChevronRight /></a></p>
              </div>
              
            </div>

            <div className="main_block_content main_block_conten2">
              <select>
                <option>Nigeria <FaChevronCircleDown /></option>
              </select>
              Map
            </div>
            
          </div>



       </div>
{/**main 3 end */}  


{/**main 4 begins */}       
      <div className="main_block main_block_container main4">

      <div className="main_block_content_container">

        <div className="main_block_content main_block_content3">

          <div className="main_block_content3_ main_block_content3_A">
            <p className="main_block_content3_title main_block_content3_title">The 'Citizen Obeservation Checklist'</p>
            <h2 className="main_block_content3_paragraph">Report your voting experience as a Citizen Observer</h2>
          </div>

          <div className="main_block_content3_ main_block_content3_B">
            <p className="main_block_content3_title">Who says only accredited observers can observe elections? Through the Citizen Observation Checklist, you get to share your Polling Unit experience as an Observer!</p>
          </div>
          
        </div>

        <div className="main_block_content main_block_conten3">

          <form>
            
            <div>  
              <label>Where is your polling unit?</label><br/>
              <input type="text" placeholder="Enter response"/>
            </div>

              <br/>

            <div>  
              <label>How many female officials were present?</label><br/>
              <input type="text" placeholder="Enter response"/>
            </div>

            <br/>

            <div>  
              <label>Was there any sign of violence? *</label><br/>
              <input type="text" placeholder="Enter response"/>
            </div>

            <br/>

            <div>  
              <label>Were you able to cast your vote *</label><br/>
              <input type="text" placeholder="Enter response"/>
            </div>

            <br/>

            <div> 
              <input type="submit" value="SUBMIT AN OBSERVATION"/>
            </div>
          
          </form>
 
        </div>
        
      </div>



      </div>
{/**main 4 end */}  


       
       


      <br/>
      <br/>

       <div className="main_block main3">
        <img src={Image2} className="countDownImage"/>
       </div>

      </main>

    </div>
  );
}

export default Main;

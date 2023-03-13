import React from 'react';
import './../App.css';
import './main.css';
import Image1 from './Countdown frame.png';
import Image3 from './shutterstock_1615848271 1.png';
import Image4 from './pngaaa 1.png';
import{ FaChevronCircleDown } from 'react-icons/fa';
import{ FaChevronRight } from 'react-icons/fa';
import BasicSlider from './BasicSlider';

function Main() {
  return (
    <div className="App">

      <main className="">

      <br/>
      <br/>
       
{/**main 1begins */}
  <div className="main_block main1">
    <img src={Image1} className="countDownImage"/>
  </div>
{/**main 1ends */}


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


        <BasicSlider />
  
      
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


{/**main 5 begins */}       
  <div className="main_block main_block_container main5">

    <div className="main_block_content_container">

      <div className="main_block_content main_block_content2">

        <div className="main_block_content2_ main_block_content2_A">
          <h2 className="main_block_content2_paragraph">Register or Join as a Verified Election Observer (VEO) Member</h2>
        </div>

        <div className="main_block_content2_ main_block_content2_B">
          <p className="main_block_content2_title main_block_content3_title">Through the VEO Portal organisations can onboard accredited observers to observe and report an election...</p>
          <p className="main_block_content2_button main_block_content4_button1"><a>Register <FaChevronRight /></a></p>
        </div>

      </div>

      <div className="main_block_content main_block_content4">

          <div className="ballotBoxImageContainer">
            <img src={Image3}/>
          </div>

          <div className="telescope">      
            <img src={Image4}/>
          </div>

        

      </div>
      
    </div>



  </div>
{/**main 5 end */}         
       

{/**main 6 begins */}   
  <div className="main_block main6">

    <div className="main6_Title">
      <div>
        <p className="main6_title_1">Communities</p>
        <p className="main6_title_2">We are changing the narratives</p>
      </div>
    </div>

    <div className="main6_body">

      <div className="main6_box main6_box1">

        <div className="main6_box_content_container">

          <div className="main6_box_content_title">

            <p className="main6_box_content_titleA">Become a member</p>
            <p className="main6_box_content_titleB">General User</p>
            
            <div className="main6_box_content">
              <p>Register/ join as a General User to engage on Hernalytics</p>
            </div>

          </div>


          <div className="main6_box_content_button">
            <a>JOIN</a>
          </div>

        </div>

      </div>

      <div className="main6_box main6_box2">

        <div className="main6_box_content_container">

          <div className="main6_box_content_title">
            
            <p className="main6_box_content_titleA">Become a member</p>
            <p className="main6_box_content_titleB">Female Candidate Community</p>
            
            <div className="main6_box_content">
              <p>Coming Soon</p>
            </div>

          </div>


          <div className="main6_box_content_button">
            <a>JOIN</a>
          </div>

        </div>

      </div>

      <div className="main6_box main6_box3">

        <div className="main6_box_content_container">

          <div className="main6_box_content_title">
            
            <p className="main6_box_content_titleA">Become a member</p>
            <p className="main6_box_content_titleB">Decide To Run (DTR) Community</p>
            
            <div className="main6_box_content">
              <p>Coming Soon</p>
            </div>

          </div>


          <div className="main6_box_content_button">
            <a>JOIN</a>
          </div>

        </div>

      </div>

      <div className="main6_box main6_box4">

      <div className="main6_box_content_container">

      <div className="main6_box_content_title">
        
        <p className="main6_box_content_titleA">Become a member</p>
        <p className="main6_box_content_titleB">Reporter / Observer</p>
        
        <div className="main6_box_content">
          <p>At bibendum leo eu libero arcu. Condimentum sed nunc volutpat pulvinar.</p>
        </div>

      </div>


      <div className="main6_box_content_button">
        <a>JOIN</a>
      </div>

      </div>

      </div>

    </div>

  </div>
{/**main 6 end */}


{/**main 7 begins */}   
  <div className="main_block main7">

    <div className="main7-container">

      <div className="main7-container-1">
        <h2>Subscribe to our newsletter</h2>
        <p>Join a community of socially conscious people, get the latest updates.</p>
      </div>

      <div className="main7-container-2">
        <p>Email Address</p>
        <input type="email" className="" placeholder="Email Address"/>
        <br/>
        <button className="c_subscribe_btn">SUBSCRIBE NOW</button>
      </div>

    </div>
    
    
  </div>
{/**main 7 end */}

</main>

    </div>
  );
}

export default Main;

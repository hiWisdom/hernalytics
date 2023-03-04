import React from 'react';
import logo from './../Hernalytics Full Logo Yellow@3x 1.png';
import './footer.css';
import{ FaInstagram, FaWhatsapp, FaTwitter } from 'react-icons/fa';


function Footer() {
  return (
    <div className="App">

      <footer className="footer">

        <div className="footer_set_1_container">
          
          <div className="footer_sets">

            <div className="footer_div_1_set">           
              <img src={logo}/><br/>
              <span>&copy; 2022 Hernalytics</span>
            </div>

          </div>


          <div>
            
              <div className="footer_sets footer_set">

                <ul>
                  <h3>About</h3>
                  <li>Our Story</li>
                  <li>Blog</li>
                  <li>About Hernalytics</li>
                  <li>Videos</li>
                </ul>

              </div>

              <div className="footer_sets footer_set">

              <ul>

                <h3>Support</h3>
                <li>FAQs</li>
                <li>Privacy Policy</li>
                <li>Terms of Service</li>

              </ul>


              </div>

              <div className="footer_sets footer_set">
                <ul>
                  
                  <h3>Let's Chat</h3>
                  <li>hernalytics@gmail.com</li>

                  <div>
                    <li className="FaInstagram FaIconsContainer"><FaInstagram className="FaIcons" /></li>
                    <li className="FaTwitter FaIconsContainer"><FaTwitter className="FaIcons" /></li>
                    <li className="FaWhatsapp FaIconsContainer"><FaWhatsapp className="FaIcons" /></li>
                  </div>

                </ul>
              </div>

          </div>
          
        </div>

      </footer>

    </div>
  );
}

export default Footer;

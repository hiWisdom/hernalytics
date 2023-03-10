
//import react
import React from 'react';

//import stylesheet
import './../App.css';
import './main.css';

//import slide-show component and function
import HeroSlider, {Slider} from 'hero-slider';


//images
import Map1 from './Frame1.png';
import Map2 from './Map2.png';
import Map3 from './Map3.png';


//favi-icons
import{ FaChevronCircleDown } from 'react-icons/fa';


const App =  () => {
    return (
        <div className="main_block_content main_block_content2">
        <div className="mapDropDown">
          <select>
            <option>Nigeria <FaChevronCircleDown /></option>
          </select>
        </div>
        <img src={Map1} className="MapImages"/>
      </div>
    )
}

export default App;

//import react
import React, {useEffect, useState} from 'react';

//import stylesheet
import './../App.css';
import './main.css';

//import slide-show component and function
// import HeroSlider, {Slider} from 'hero-slider';
import imageSlide from './imgdata'


//images
import Map1 from './Frame1.png';
import Map2 from './Map2.png';
import Map3 from './Map3.png';


//favi-icons
import{ FaChevronCircleDown } from 'react-icons/fa';


const App =  () => {

    const[currentState, setCurrentState] = useState(0)
    useEffect(()=>{
        const timer = setTimeout(()=> {
            if(currentState===2) {
                setCurrentState(0)
            }
            else{
                setCurrentState(currentState + 1)
            }

        }, 1200)
        return () => clearTimeout(timer);
    }, [currentState])

    const bgImagesStyle =  {
        backgroundImage: `url(${imageSlide[currentState].url})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100%',
        width: '700px',
        marginTop: '2.5%'
    }

    return (
        <div className="main_block_content main_block_content2">



        <div className="mapDropDown">
          <select>
            <option>Nigeria <FaChevronCircleDown /></option>
          </select>
        </div>
        {/* <img src={Map1} className="MapImages"/> */}
        <div className="MapImages" style={bgImagesStyle} ></div>





      </div>
    )
}

export default App;
import React from 'react';
import Home from './component/Home/Home';
import ImageSlider from './component/ImageSlider/ImageSlider';
import CurrentEvents from './component/CurrentEvents/CurrentEvents';
import News from './component/NewsLetter/NewsLetter';


const HomePage = ({homeRef, eventRef}) =>{
  
    return(
        <div>
             {/* <Header handleConsult={handleConsult} scrollHome={scrollHome} scrollsEvents={scrollsEvents}/> */}
            <Home homeRef={homeRef} />
            <ImageSlider  />
            <CurrentEvents eventRef={eventRef}/>
            <News />
        </div>
    )
}
export default HomePage;


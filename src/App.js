import React, { useRef, useState } from "react";
import Header from './component/Header/Header';
import './App.css';
import Footer from "./component/Footer/Footer";
import ConsultationPage from "./ConsultationPage";
import HomePage from "./HomePage";

function App() {
  const [show, setShow] = useState('');
  const homeRef = useRef();
  const eventRef = useRef();
  const consultRef = useRef();
  
  const scrollHome = () =>{
    setShow('')
    
    setTimeout(() => {
      homeRef.current.scrollIntoView({behavior:'smooth'});
    }, 2000);
  }
  const handleConsult = () =>{
    setShow('consult');

    setTimeout(() => {
      consultRef.current.scrollIntoView({behavior:'smooth'});
    },100);
  }
  const scrollsEvents = () =>{
    setShow('');
    
    setTimeout(() =>{
      eventRef.current.scrollIntoView({behavior:'smooth'});
    },2000);
  }

  return (
    <div className="App">
      <Header handleConsult={handleConsult} scrollHome={scrollHome} scrollsEvents={scrollsEvents}/>
        {show ==='consult'? <ConsultationPage consultRef={consultRef}/> :
          <HomePage homeRef={homeRef} eventRef={eventRef} />
        }
      <Footer />
      
    </div>
  );
}

export default App;

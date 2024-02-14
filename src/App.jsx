import { useEffect, useRef, useState } from 'react';

import Header from './components/Header';



//import css
import './App.css'
//import video/pictures
import BackgroundVideo from './assets/images/background-video.mp4';


function App() {
  /* const aboutMeRef = useRef(null);
  const myWorkRef = useRef(null);
  const contactRef = useRef(null); */

  /*  const scrollToAboutMe = () => aboutMeRef.current.scrollIntoView({ behavior: 'smooth' }); */
  /*  const scrollToMyWork = () => myWorkRef.current.scrollIntoView({ behavior: 'smooth' }); */
  /*  const scrollToContact = () => contactRef.current.scrollIntoView({ behavior: 'smooth' }); */

  /* const [scrollPosition, setScrollPosition] = useState(0);
  const handleScroll = () => {
    setScrollPosition(window.scrollY);
  }; */

  /*  useEffect(() => {
     window.addEventListener('scroll', handleScroll);
     return () => {
       window.removeEventListener('scroll', handleScroll);
     };
   }, []); */

  return (
    <div>
      <video id="background-video" autoPlay loop muted>
        <source src={BackgroundVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <Header />

    </div>
  )
}

export default App

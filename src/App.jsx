import { useEffect, useRef, useState } from 'react';

import Header from './components/Header';
import Content from './components/Content';
import AboutMe from './components/AboutMe';
import Timeline from './components/Timeline';
import MyWork from './components/MyWork';
import ContactMe from './components/ContactMe';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

//import css
import './App.css'

//import video/pictures
import BackgroundVideo from './assets/images/background-video.mp4';
import Contact from './components/ContactComponent/Contact';



function App() {
  const aboutMeRef = useRef(null);
  const timeLineRef = useRef(null);
  const myWorkRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToAboutMe = () => aboutMeRef.current.scrollIntoView({ behavior: 'smooth' });
  const scrollToTimeline = () => timeLineRef.current.scrollIntoView({ behavior: 'smooth' });
  const scrollToMyWork = () => myWorkRef.current.scrollIntoView({ behavior: 'smooth' });
  const scrollToContact = () => contactRef.current.scrollIntoView({ behavior: 'smooth' });

  const [scrollPosition, setScrollPosition] = useState(0);
  const handleScroll = () => {
    setScrollPosition(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
      <video id="background-video" autoPlay loop muted>
        <source src={BackgroundVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      {scrollPosition > 100 && <ScrollToTop />}
      <Header scrollToAboutMe={scrollToAboutMe} scrollToTimeline={scrollToTimeline}
        scrollToMyWork={scrollToMyWork} scrollToContact={scrollToContact} />
      <Content />
      <AboutMe aboutMeRef={aboutMeRef} />
      <Timeline timeLineRef={timeLineRef} />
      <MyWork myWorkRef={myWorkRef} />
      <Contact contactRef={contactRef} />
      {/* <ContactMe contactRef={contactRef} /> */}
      <Footer />

    </div>
  )
}

export default App

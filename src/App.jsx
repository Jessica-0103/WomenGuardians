import Header from './components/Header/Header'
import Hero from './components/Hero/Hero';
import Content from './components/Content/Content';
import Courses from './components/Courses/Courses';
import Value from './components/Value/Value';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import './App.css'

function App() {
  return (
    <div className= "App">
      <div>
        <div className="white-gradient"/>
        <Header/>
        <Hero />
      </div> 
      <Content/>
      <Courses/>
      <Value/>
      <Contact/>
      <Footer/>
    </div>
    
    
  );
}

export default App;

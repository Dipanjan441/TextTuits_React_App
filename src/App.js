import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Buttons from './components/Buttons';
import About from './components/About';
import React, {useState} from 'react';




function App() {
  const titlee = "TextTuits";
  const [mode,setMode] = useState('light');
  const toggleMode = ()=>{
        if(mode==='light'){
          setMode('dark');
          document.body.style.backgroundColor='grey';
        }
        else{
          setMode('light');
          document.body.style.backgroundColor='white';
        }
  }
  return (
    <>
    <Navbar title={titlee} modee={mode} toggleModee = {toggleMode}/>
    <div className='container my-2'>
      <TextForm heading={"Enter Your Text to Analyaze"} modee={mode}/>
      {/* <Buttons button_name={"Convert To Uppercase"}/> */}
      {/* <About/> */}
    </div>
    </>
  )
}

export default App;

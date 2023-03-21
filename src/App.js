import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Buttons from './components/Buttons';
import About from './components/About';
import React, {useState} from 'react';
import Alert from './components/Alert';




function App() {
  const titlee = "TextTuits";
  const [mode,setMode] = useState('light');
  const [msg,setMsg] = useState(null);
  const alertMsg = (message,type)=>{
    setMsg({
       msgg:message,
       typee:type
    });
    setTimeout(()=>{
      setMsg(null);
    },1000)
  }
  const toggleMode = ()=>{
        if(mode==='light'){
          setMode('dark');
          document.body.style.backgroundColor='grey';
          alertMsg('Dark mode is enabled successfuly','Success');
        }
        else{
          setMode('light');
          document.body.style.backgroundColor='white';
          alertMsg('Light mode is enabled successfuly','Success');
        }
  }
  return (
    <>
    <Navbar title={titlee} modee={mode} toggleModee = {toggleMode}/>
    <Alert alert_msg={msg}/>
    <div className='container my-2'>
      <TextForm heading={"Enter Your Text to Analyaze"} modee={mode} alertMsgg={alertMsg}/>
      {/* <Buttons button_name={"Convert To Uppercase"}/> */}
      {/* <About/> */}
    </div>
    </>
  )
}

export default App;

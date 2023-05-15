import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Buttons from './components/Buttons';
import About from './components/About';
import React, {useState} from 'react';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";




function App() {
  const titlee = "TextUtils";
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
          document.title = 'TextUtils-Dark Mode';
        }
        else{
          setMode('light');
          document.body.style.backgroundColor='white';
          alertMsg('Light mode is enabled successfuly','Success');
        }
  }
  const toggleGreenMode = ()=>{
      if(mode==='light'){
        setMode('green');
        document.body.style.backgroundColor='#32de84';
        alertMsg('Greenish mode is enabled successfuly','Success');
        document.title = 'TextUtils-Greenish Mode';
      }
      else{
        setMode('light');
        document.body.style.backgroundColor='white';
        alertMsg('Light mode is enabled successfuly','Success');
      }
  }
  return (
    <>
    <Router>
    <Navbar title={titlee} modee={mode} toggleModee = {toggleMode} toggleGreenModee={toggleGreenMode}/>
    <Alert alert_msg={msg}/>
    <div className='container my-2'>
      <Routes>
            <Route path="/about" element={<About/>}>
            </Route>
            <Route path="/" element={<TextForm heading={"Enter Your Text to Analyaze"} modee={mode} alertMsgg={alertMsg}/>}>
            </Route>
      </Routes>
      {/* <Buttons button_name={"Convert To Uppercase"}/> */}
    </div>
    </Router>
    </>
  )
}

export default App;

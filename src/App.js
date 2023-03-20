import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Buttons from './components/Buttons';
import About from './components/About';



function App() {
  const titlee = "TextTuits";
  return (
    <>
    <Navbar title={titlee}/>
    <div className='container my-2'>
      <TextForm heading={"Enter Your Text to Analyaze"}/>
      {/* <Buttons button_name={"Convert To Uppercase"}/> */}
      {/* <About/> */}
    </div>
    </>
  )
}

export default App;

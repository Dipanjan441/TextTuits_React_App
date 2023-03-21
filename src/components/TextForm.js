import React,{useState} from 'react';
import PropTypes from 'prop-types';


export default function TextForm(props) {
    const [text,setText] = useState("");
    const convToUppercase = ()=>{
        setText(text.toUpperCase());
    }
    const convToLowercase = ()=>{
        setText(text.toLowerCase());
    }
    const textConvtToUpp = (event)=>{
        setText(event.target.value);
    }
    const count_words = ()=>{
        let text_array = text.split(" ");
        let length = text_array.length;
        let count=0
        for(let i =0;i<length;i++){
            if(text_array[i]!==""){
                count++;
            }
        }
        return count;
    }
    const coppyText = ()=>{
        let reqText = document.getElementById('exampleFormControlTextarea1');
        reqText.select();
        navigator.clipboard.writeText(reqText.value);
    }
    const removeExtraSpace = ()=>{
        let text_array = text.split(/[ ]+/);
        setText(text_array.join(" "));
    }
  return ( 
    <>
    <div className={`text-${props.modee==='light'?'dark':'light'}`}>
        <h2>{props.heading}</h2>
        <div className="mb-3">
            <textarea className="form-control" value={text} onChange={textConvtToUpp} id="exampleFormControlTextarea1" rows="5" style={props.modee==='dark'?{backgroundColor:'grey',color:'white',caretColor:'white'}:{backgroundColor:'white',color:'black',caretColor:'black'}}></textarea>
        </div>
        <div>
            <button type="button" className="btn btn-success mx-2" onClick={convToUppercase}>Convert To Uppercase</button>
            <button type="button" className="btn btn-success mx-2" onClick={convToLowercase}>Convert To Lowecase</button>
            <button type="button" className="btn btn-success mx-2" onClick={coppyText}>Coppy Text</button>
            <button type="button" className="btn btn-success mx-2" onClick={removeExtraSpace}>Remove Extra Spaces</button>
            {/* <button type="button" className="btn btn-success mx-2" onClick={convToNoOfReptWord}>No of Repetetive Word</button> */}
        </div>
        <div className="container my-3">
            <h3>Text Summary</h3>
            <p>No of Words : {count_words()} and No of Characters : {text.length}</p>
        </div>
    </div>
    </>
  )
}
TextForm.propTypes = {
    heading: PropTypes.string.isRequired
}
TextForm.defaultProps={
    heading:"Button"
}


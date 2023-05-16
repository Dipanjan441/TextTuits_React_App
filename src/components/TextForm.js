import React,{useState} from 'react';
import PropTypes from 'prop-types';


export default function TextForm(props) {
    const [text,setText] = useState("");
    const convToUppercase = ()=>{
        setText(text.trim().toUpperCase());
        props.alertMsgg('Your text has been successfully converted to Uppercase','Success');
    }
    const convToLowercase = ()=>{
        setText(text.trim().toLowerCase());
        props.alertMsgg('Your text has been successfully converted to Lowercase','Success');
    }
    const textConvt = (event)=>{
        setText(event.target.value);
    }
    const count_words = ()=>{
        let text_array = text.trim().split(/\s+/);
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
        // let reqText = document.getElementById('exampleFormControlTextarea1');
        // reqText.select();
        navigator.clipboard.writeText(text.trim());
        // document.getSelection().removeAllRanges();  //removed selection
        props.alertMsgg('Your text has been successfully coppied','Success');
    }
    const removeExtraSpace = ()=>{
        let text_array = text.trim().split(/[ ]+/);
        setText(text_array.join(" "));
        props.alertMsgg('Extra spaces of your text has been removed successfully','Success');
    }
  return ( 
    <>
    <div className={`text-${props.modee==='light'?'dark':'light'}`}>
        <h2>{props.heading}</h2>
        <div className="mb-3">
            <textarea className="form-control" value={text} onChange={textConvt} id="exampleFormControlTextarea1" rows="5" style={(props.modee==='dark')||(props.modee==='green')?{backgroundColor:'#5a4c63',color:'white',caretColor:'white'}:{backgroundColor:'white',color:'black',caretColor:'black'}}></textarea>
        </div>
        <div>
            <button disabled={text.trim().length===0} type="button" className={`btn btn-${props.modee==='green'?'primary':'success'} mx-2`} onClick={convToUppercase}>Convert To Uppercase</button>
            <button disabled={text.trim().length===0} type="button" className={`btn btn-${props.modee==='green'?'primary':'success'} mx-2`} onClick={convToLowercase}>Convert To Lowecase</button>
            <button disabled={text.trim().length===0} type="button" className={`btn btn-${props.modee==='green'?'primary':'success'} mx-2`} onClick={coppyText}>Coppy Text</button>
            <button disabled={text.trim().length===0} type="button" className={`btn btn-${props.modee==='green'?'primary':'success'} mx-2`} onClick={removeExtraSpace}>Remove Extra Spaces</button>
            {/* <button type="button" className="btn btn-success mx-2" onClick={convToNoOfReptWord}>No of Repetetive Word</button> */}
        </div>
        <div className="container my-3">
            <h3>Text Summary</h3>
            <p>No of Words : {count_words()} and No of Characters : {text.trim().length}</p>
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


import React, { useState } from 'react';

export default function TextForm(props) {
    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to Uppercase!", 'success');
    }

    const handleDownClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to Lowercase!", 'success');
    }

    const handleOnChange = (event) => {
        setText(event.target.value);
    }
    
    const handleCopy = () =>{
        let text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Copied to clipboard!", "success");
    }

    const handleExtraSpaces = () =>{
        let newText = text.split(/[ ]+/);                // here we use "RegEx" function. (RegEx -> regular expression) 
        setText(newText.join(" "));
        props.showAlert("Extra Spaces removed!", 'success');
    }

    const clearAll = () => {
        setText("");
        props.showAlert("Text Cleared!", 'success');
    }

    const [text, setText] = useState("");

    return (
        <>
        <div className="container">
            <h3>{props.heading}</h3>
            <div className="mb-3">
                <textarea className="form-control" value={text} /*style={{backgroundColor: props.mode==='light'?'white':'grey', color: props.mode==='light'?'black':'white'}}*/ onChange={handleOnChange} id="myBox" rows="8"></textarea>
            </div>
            <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
            <button className="btn btn-primary mx-2" onClick={handleDownClick}>Convert to Lowercase</button>
            <button className="btn btn-primary mx-2" onClick={handleCopy}>Copy Text</button>
            <button className="btn btn-primary mx-2" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
            <button className="btn btn-primary mx-2" onClick={clearAll}>Clear Text</button>
        </div>
        <div className="container">
            <hr/>
            <h4><em><u>Your text summary</u></em></h4>
            <p>{text.split(" ").length} words, {text.length} characters</p>
            <p>{(0.008 * text.split(" ").length).toFixed(2)} Minutes read</p>
            <hr />
            <h4><em><u>Preview</u></em></h4>
            <p>{text.length>0?text:"-> Enter something in the textbox above to preview it here."}</p>
        </div>
        </>
    )
}

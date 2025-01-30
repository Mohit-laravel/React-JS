import React , { useState } from 'react'


export default function Textform(props) {
    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
    }

    const handleLoClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
    }

    const handleClrClick = () => {
        setColor(prevColor => (prevColor === "black" ? "red" : "black"));
    }

    const handleClearClick = () => {
        setText("");
    }

    const handleOnChange = (event) => {
        setText(event.target.value)
    }
    const [text , setText] = useState("Enter Text Here");
    const [color , setColor] = useState("black");
    return (
        <>
            <div className='container'>
            <div className="mb-8">
                <label htmlFor="exampleFormControlTextarea1" className="form-label">{props.heading}</label>
                <textarea className="form-control"  id="exampleFormControlTextarea1" rows="3" value={text} onChange={handleOnChange} style={{ color: color }}></textarea>
            </div>
            <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Uppercase</button>    
            <button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to Lowercase</button>    
            <button className="btn btn-primary mx-2" onClick={handleClrClick}>Change Color To Red</button>    
            <button className="btn btn-primary mx-2" onClick={handleClearClick}>Clear Text</button>    
            </div>
            <div className='container' my-3>
                <h1>Text Summary</h1>   
                <p>{text.split(" ").length} words and {text.length} characters</p>
                <p>{0.008 * text.split(" ").length} minutes read</p>
                <h2>Preview</h2>
                <p>{text}</p>
            </div>
        </>
    )   
}

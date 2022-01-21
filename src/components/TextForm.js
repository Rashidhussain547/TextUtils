import React,{useState} from 'react';

export default function TextForm(props) {
    const handleUpClick = ()=>{
        console.log('Uppercase was clicked')
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert(' Converted to UpperCase !!','success')
    }
    const handleLcClick = ()=>{
        console.log('Lowercase was clicked')
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert(' Converted to LowerCase !!','success')
    }

    const handleTitleClick = ()=>{
        let words = text.split(" ")
        let uppercaseword = ''
        words.forEach(element => {
           uppercaseword += element.charAt(0).toUpperCase() + element.slice(1) +" "
        });
        setText(uppercaseword)
        props.showAlert(' Converted to Capitalized !!','success')
    }

    const handlecopy = ()=>{
       var text = document.getElementById("mybox");
       text.select();
       navigator.clipboard.writeText(text.value);
       props.showAlert(' Text has been Copied !!','success')
    }

    const handleSpace = ()=>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
        props.showAlert(' Removed extra spaces !!','success')
     }



    const handleClearClick = ()=>{
        let newText = '';
        setText(newText)
        props.showAlert(' Text has been Cleared !!','success')
    }



    const handleOnChange = (event) =>{
        console.log("On change")
        setText(event.target.value)
    }
    const [text, setText] = useState('')
  return (
    <>  
        <div className='container'>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" value={text} onChange={handleOnChange}  id="mybox" rows="8"></textarea>
            </div>
            <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to UpperCase</button>
            <button className="btn btn-primary mx-1 my-1" onClick={handleLcClick}>Convert to LowerCase</button>
            <button className="btn btn-primary mx-1 my-1" onClick={handleTitleClick}>Capitalize</button>
            <button className="btn btn-primary mx-1 my-1" onClick={handlecopy}>Copy Text</button>
            <button className="btn btn-primary mx-1 my-1" onClick={handleSpace}>Remove Extra Space</button>
            <button className="btn btn-primary mx-1 my-1" onClick={handleClearClick}>Clear Text</button>

            
        </div>

        <div className='container my-4'>
            <h2>Your Texr Summary Here:</h2>
            <strong><p style={{color: props.mode==='dark'?'white':'black'}}>Words count: {text.split(" ").length} - Characters count: {text.length}</p></strong>
            <strong><p style={{color: props.mode==='dark'?'white':'black'}}>{0.008*text.split(" ").length} minutes , you can read </p></strong>
            <h2>Preview</h2>
            <p style={{color: props.mode==='dark'?'white':'black'}}>{text.length>0?text:"Enter something above in the box to preview here !!"}</p>
        </div>    
    </>
  )
}

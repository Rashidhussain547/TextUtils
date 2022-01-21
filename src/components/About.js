import React,{useState} from 'react';

export default function About() {
    const [myStyle,setMyStyle] = useState({
        color:'black',
        backgroundColor: 'white'
    })

    const [BtnText,setBtnText] = useState('Enable Dark mode')
    let toggle = ()=>{
        if(myStyle.color === 'black'){
            setMyStyle({
                color:'white',
                backgroundColor: 'black'
            })
            setBtnText('Enable light mode')
        }
        else{
            setMyStyle({
                color:'black',
                backgroundColor: 'white'
            })
            setBtnText('Enable dark mode')
        }
    }
  return (
      <div className='container' style={myStyle}>
          <h1>About us</h1>
          <div className="accordion" id="accordionExample" style={myStyle}>
            <div className="accordion-item">
                <h2 className="accordion-header" id="headingOne">
                <button className="accordion-button"  style={myStyle}  type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                  <strong> Easy way to change Uppercase to lowercase and Capitalize</strong>
                </button>
                </h2>
                <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                   <p>Have you ever typed out a document, made a few capitalization mistakes and wished you won't have to waste much time editing? It happens a lot, and if you are using a typical word processing tool, you will have your mistakes autocorrected as you type, but those kinds of software only correct grammatical errors. If you have to capitalize on a whole portion, you will need to do it manually. And that takes time. However, with an online text transforming tool like ours, you can easily transform the case of your texts. All you have to do is copy and paste your text, then select the case you want to transform it to.

                            The Change Uppercase to Lowercase Tool is one of several SEO tools available on our site SmallSEOTools.com. It is an online text Converter that can receive both upper cases and lower case letters as input and do a text transform on them into desired cases.

                            There are several sub tools inside the Change Title Case Converter Tool; we will review them below.</p>
                </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header" id="headingTwo">
                <button className="accordion-button collapsed"  style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                    <strong>Convert capital letter to small letter</strong>
                </button>
                </h2>
                <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                <p >The Capitalize Word text tool will take every first lower case letters of every word in the sentence inputted and change all to upper case letters.

Capitalized words or “Title Cases” as they are known are widely used for titles in texts where every word in the sentence; except for articles, conjunctions and prepositions; begins with a capital letter.

It's common to see title cases used for titles of books, plays, and movies, but seldom for articles. This variation is mostly a question of style. When writing, decide the headline style you want to use. This is of course if you are not writing under strict guidelines where you are given a headline style.

Capitalize word tool in action :

Copy the text you want to convert from the word processor you are using.
Once you have the text copied,
Paste the text you copied into the text area provided on the screen:
Click on the “Capitalize Word” button.
You should have your output in a few seconds:</p>
                </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header" id="headingThree">
                <button className="accordion-button collapsed"  style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                    <strong>Convert Uppercase letter to Smallcase letter</strong>
                </button>
                </h2>
                <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                <p>The UPPER CASE text tool takes every lower case letter inputted into the text area and converts all to upper case letters.

Upper case letters or “ALL CAPS” find use in words or phrases a writer wants to emphasize, in titles on book covers; in advertisements, to highlight a message; in newspaper headlines, and on building plaques. They also indicate acronyms in texts.

How to convert to uppercase:

Copy the text you want to convert from the word processor you are using.
Once you have the text copied.
Paste the text you copied into the text area provided on the screen:
Click on the “UPPER CASE” button.
You should have your output in a few seconds:</p>
                </div>
                </div>
            </div>
            </div>
            {/* <button className="btn btn-primary mx-1 my-3" onClick={toggle}>{BtnText}</button> */}
      </div>
  );
}

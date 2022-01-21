import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
// import About from './components/About';
import TextForm from './components/TextForm';
import React, {useState} from 'react';
import Alert from './components/Alert';
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
// } from "react-router-dom";



function App() {
  const [toggleText,settoggleText] = useState('Enable dark mode');
  const [mode,setMode] = useState('light');
  const [alert,setAlert] = useState(null);
  const showAlert = (message,type) =>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(
      ()=>{
        setAlert(null)
      }
    ,2000)
  }



  let toggleMode = ()=>{
    if(mode==='light'){
      setMode('dark')
      document.body.style.backgroundColor= '#062438'
      settoggleText('Enable light mode')
      showAlert(' Dark mode has been enabled !!','success')
    }
    else{
      setMode('light')
      document.body.style.backgroundColor= 'white'
      settoggleText('Enable dark mode')
      showAlert(' light mode has been enabled !!','success')
    }
  }
  const handleTitleA = ()=>{
    document.title = 'TextUtils - about'
  }
  const handleTitleH = ()=>{
    document.title = 'TextUtils - home'
  }
  return (
    <>
    {/* <Router> */}
          <Navbar title="TextUtils" aboutText="About us" mode={mode} toggleMode={toggleMode}  toggleText={toggleText} handleTitleA={handleTitleA} handleTitleH={handleTitleH}/>
          <Alert alert={alert}/>
          <div className="container my-3">
          {/* <Switch> */}
            {/* <Route path="/about">
              <About />
            </Route> */}
            {/* <Route path="/"> */}
              <TextForm heading="Enter the text to analyze below" mode={mode} showAlert={showAlert}/>
            {/* </Route>
          </Switch> */}
          </div>
          {/* <About/> */}
    {/* </Router> */}
    </>
  );
}

export default App;

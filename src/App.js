// import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
// import About from './components/About';
// import Imad from './components/Imad';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
// } from "react-router-dom";

//let name = "Imad";                // Here we made a variable to use in our JSX.
function App() {
  const [alert, setAlert] = useState(null)
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }
  const [mode, setMode] = useState('light');

  const [modeText, setModeText] = useState("Enable Dark Mode");

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      setModeText("Enable Light Mode");
      document.body.style.backgroundColor = '#042743';
      document.body.style.color = 'white';
      showAlert("Dark mode has been enabled.", "success");
      document.title = 'TextUtils - Dark Mode';
      // setInterval(() => {
      //   document.title = 'TextUtils is Amazing.'
      // }, 1500);
      // setInterval(() => {
      //   document.title = 'Install TextUtils Now.'
      // }, 1000);

    }
    else {
      setMode('light');
      setModeText("Enable Dark Mode");
      document.body.style.backgroundColor = 'white';
      document.body.style.color = 'black';
      showAlert("Light mode has been enabled.", "success");
      document.title = 'TextUtils - Light Mode';
    }

  }
  return (                        // In react we only return one function. So, we can use "div" or we can use "JSX Fragment(<></>)"
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    <>
      {/* Here we use JSX Fragment(<> </>) */}
      {/* <nav>
      <li>Home</li>
      <li>About</li>
      <li>Contact</li>
    </nav>
    <h2>hello world!</h2>
    <p>My name is {name}</p> */}
      {/* <Router>                  this is because we need to wrap every thing in router. */}
        <Navbar title="textUtils" aboutText="About" mode={mode} toggleMode={toggleMode} modeText={modeText} />
        <Alert alert={alert} />
        <div className="container my-3">

          {/* <Switch> */}
            {/* <Route exact path="/about">          we can also write only "path" at the place of exact path. but react do partial match if we use only "path" which is not good.
              <About />
            </Route>
            <Route exact path="/">                    thats why we use "exact path" at the place of path */}
              <TextForm heading="Enter the text below to analyse : " showAlert={showAlert} mode={mode} />
            {/* </Route>
          </Switch> */}

          {/* <Imad/> */}
        </div>
      {/* </Router> */}
    </>
  );
}

export default App;

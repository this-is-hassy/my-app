import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import About from "./components/About";
import Alert from "./components/Alert";
import React, {useState} from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [mode, setmode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      typ: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };


  // const removeBodyClasses = ()=> {
  //   document.body.classList.remove('bg-warning')
  //   document.body.classList.remove('bg-dark')
  //   document.body.classList.remove('bg-danger')
  //   document.body.classList.remove('bg-success')
    
  // }

  const toggleModes = () => {
    // removeBodyClasses()
    // console.log(cls)
    // document.body.classList.add('bg-'+ cls)
    if (mode === "light") {
      setmode('dark');
      document.body.style.backgroundColor = "#343a40";
      showAlert("Dark mode has been enabled", "success");
      document.title = "iCoder - Dark Mode";
    } else {
      setmode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "success");
      document.title = "iCoder - Light Mode";
    }
  };

  return (
    <>
      {
        <Router>
          <Navbar title="iCoder" mode={mode} toggleModes={toggleModes} />
          <Alert alert={alert} />
          <div className="container my-4">
            <Routes>
              <Route exact path="/about" element={<About mode={mode}/>} />

              <Route
                exact
                path="/"
                element={
                  <TextForm
                    heading="Word Counter, Character Counter"
                    ShowAlert={showAlert}
                    mode={mode}
                  />
                }
              />
              {/* for without route FormText */}
              {/* <TextForm showAlert={showAlert} heading = "Enter the text to analyze below" mode={mode}/> */}
            </Routes>
          </div>
        </Router>
      }
    </>
  );
}

export default App;

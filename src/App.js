// import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import Textform from './Components/Textform';
import Acordian from './Components/Acordian'
import React, { useState } from 'react'
import { HashRouter , Route, Routes, Link } from "react-router-dom";

function App() {
  // setInterval(() => {
  //   document.title="!?!?!?"
  // }, 1000);
  // setInterval(() => {
  //   document.title="?!?!?!"
  // }, 500);
  const [mode,setmode]=useState("light")
  const toggle =()=>{
    // console.log("click")
    if(mode==="light")
    {
      setmode("dark")
      document.body.style.backgroundColor="black"
      document.body.style.color="white"

    }
    else{
      setmode("light")
      document.body.style.backgroundColor="white"
      document.body.style.color="black"
    }
  }
  return (
    <>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD" crossorigin="anonymous"></link>
    
    <HashRouter>
    <Navbar title="Textutils" mode={mode} num={13} toggle={toggle} />
    <Routes>
            <Route path="/acordian" element={<Acordian />}>
            </Route>
            <Route path="/" element={<Textform   mode={mode}  />}>
            </Route>
          </Routes>
          </HashRouter>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js" integrity="sha384-w76AqPfDkMBDXo30jS1Sgez6pr3x5MlQ1ZAGC+nuZB+EYdgRZgiwxhTBTkF7CXvN" crossorigin="anonymous"></script>
    </>

    // <>
    //   {/* <input type="text" name="name" id="name"  /> */}
    // <h1 id="warn">Hello,{name}</h1>
    // <ul>
    //   <li>Home</li>
    //   <li>About</li>
    //   <li>Contact</li>
    // </ul>
    // <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente a reprehenderit similique molestiae ab voluptas, harum sit excepturi temporibus suscipit numquam exercitationem, adipisci qui perspiciatis perferendis possimus magni nesciunt atque?</p>
    // </>


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
  );
}

// let warn=document.getElementById("warn");
// let input=document.getElementById("name");
// if(input){
//   warn.innerHTML="LIMIT";
// }
export default App;

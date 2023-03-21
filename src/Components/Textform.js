import React,{useState} from 'react'
import propTypes from 'prop-types'
export default function Textform(props) {
    const onclickup = ()=>{
        // console.log("convert to uppercase button is clicked.")
        let newtext=text.toUpperCase();
        setText(newtext)
    }
    
    const onclicklow = ()=>{
        // console.log("convert to lowercase button is clicked.")
        let newtext=text.toLowerCase();
        setText(newtext)
    }
    const onclickclear = ()=>{
      let newtext=""
      setText(newtext)
    }
    const onclickcopy = ()=>{
      var text=document.getElementById("mybox")
      text.select()
      navigator.clipboard.writeText(text.value)
    }
    const onclickremovespace = ()=>{
      let newtext=text.split(/[]+/)
      setText(newtext.join(""))
    }
    const onchange= (event)=> {
        console.log(event)
        setText(event.target.value)
    }
    
    const[text,setText]=useState("")
    // text="can't change wrong method"
    // setText="xyz can be change"
  return (
    <>
    <div className="my-5"> 
    
      <div className="container">  
      <h1>BOX</h1>
      <textarea className="" onChange={onchange} value={text} id="mybox" cols="180" rows="10" placeholder='Type here'></textarea>
      
      <button type="submit" onClick={onclickup} className={`btn btn-${props.mode==="light"?"dark":"light"} my-2 mx-2`}>Convert to UpperCase</button>
      <button type="submit" onClick={onclicklow} className={`btn btn-${props.mode==="light"?"dark":"light"} my-2 mx-2`}>Convert to LowerCase</button>
      <button type="submit" onClick={onclickclear} className={`btn btn-${props.mode==="light"?"dark":"light"} my-2 mx-2`}>Clear Text</button>
      <button type="submit" onClick={onclickcopy} className={`btn btn-${props.mode==="light"?"dark":"light"} my-2 mx-2`}>Copy Text</button>
      <button type="submit" onClick={onclickremovespace} className={`btn btn-${props.mode==="light"?"dark":"light"} my-2 mx-2`}>Remove Extra Spaces</button>
      </div>
    </div>  
    <div className="container">
    <h2>Summary</h2>
    <p>No. of characters {text.length}</p>
    <p>No. of words {text.split(" ").length}</p>
    </div>
    </>
  )
}

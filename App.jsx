import React, { useState } from 'react'
import Navbar from '../src/Navbar';
const Apps = () => 
{
       const handelUpfirstClick = (props) => 
       {

              let newtext = text.toLowerCase();
              const arr = newtext.split(" ");
              //loop through each element of the array and capitalize the first letter.
              for (var i = 0; i < arr.length; i++)
              {
                     arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
              }
              //Join all the elements of the array back into a string 
              //using a blankspace as a separator 
              const Join = arr.join(" ");
              setText(Join);
       }
       
       const handelUpClick=()=>
       {
              let newtext=text.toUpperCase();
              setText(newtext);
       }
       const handelOnChange = (event) => {
              setText(event.target.value);
       }
       const handelLowerClick = (props) => {
              let newtext = text.toLowerCase();
              setText(newtext);
       }
       const [text, setText] = useState("Enter something");

// ===========================================================
       const [Style, setStyle] = useState({ color:'black', backgroundColor:'white'});
       const [bgStyle, setbgStyle] = useState({ color:'black', backgroundColor:'white', height:'4008px'});
       const [btn, setbtn] = useState("Enable dark mode");
       const handelDarkModeClick = () =>
       {
              if(Style.color=='white')
              {
                     setStyle({color:'black', backgroundColor:'white'});
                     setbtn("Enable to dark mode");
                     setbgStyle({color:'black', backgroundColor:'white'});
                     document.body.style.backgroundColor='white';
              }
              else
              {
                     setStyle({color:'white', backgroundColor:'#042743'});
                     setbtn("Enable to white mode",{color:'while'});
                     setbgStyle({color:'white', backgroundColor:'#042743'});
                     document.body.style.backgroundColor='#042743';
              }
       }
       return (
              <>
              <Navbar/>
              <div className='container' style={bgStyle}>
                     <div class="mb-3">
                            <h1>Change Text</h1>
                     </div>
                     <div class="mb-3" style={Style}>
                            <label for="exampleFormControlTextarea1" class="form-label">Example textarea</label>
                            <textarea  style={Style} class="form-control" id="exampleFormControlTextarea1" rows="8" value={text} onChange={handelOnChange}></textarea>
                            <button type="button" class="btn btn-outline-warning my-4 mx-4" onClick={handelUpClick}>CHANGE TO UPPERCASE</button>
                            <button type="button" class="btn btn-outline-warning my-4 mx-4" onClick={handelLowerClick}>change to lowercase</button>
                            <button type="button" class="btn btn-outline-warning my-4 mx-4" onClick={handelUpfirstClick}>Change To First Character to Uppercase</button>
                            <button className='btn btn-outline-secondary my-4 mx-4' onClick={handelDarkModeClick}>{btn}</button>
                     </div>
              </div>
              </>
       )
}
export default Apps;

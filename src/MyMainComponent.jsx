import React, { useEffect, useState } from "react";

function MyMainComponent(props) {
  const[value, setValue] = useState(false);
  const [keyVal, setKeyVal] = useState(false);
  const [keyVal2, setKeyVal2] = useState(false);
  // const [keyVal3, setKeyVal3] = useState(false);
  
  useEffect(()=>{console.log("where am I?")},[])
  useEffect(()=>()=>{console.log("I am done!")},[])

  useEffect(()=>{console.log("HaaHaaaa!")},[value])
useEffect(()=>{console.log("I am working now!")},[keyVal])
useEffect(()=>{console.log("I am working too:)!")},[keyVal2])
useEffect(()=>{console.log("We both working")},[keyVal , keyVal2])
useEffect(()=>{console.log("We are all working now!")},[value,keyVal,keyVal2])
  return (
    <>
    <div onClick={()=>setValue(!value)}>Hello Haaahaaa</div>
    <div onClick={()=> setKeyVal(!keyVal)}>Hello world</div>;
           <div onClick={()=> setKeyVal2(!keyVal2)}>Hello worldiiii</div>;
           <button>{props.buttonTitle}</button>
           <input onChange={(e)=>{props.onInputChange(e.target.value) }} />
          
   </>
  ) ;
 
}
export default MyMainComponent;

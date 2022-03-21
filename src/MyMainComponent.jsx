import React, { useEffect, useState } from "react";

function MyMainComponent() {
  const [keyVal, setKeyVal] = useState(false);
  const [keyVal2, setKeyVal2] = useState(false);
  
  useEffect(()=>{console.log("where am I?")},[])
  useEffect(()=>()=>{console.log("I am done!")},[])

useEffect(()=>{console.log("I am working now!")},[keyVal])
useEffect(()=>{console.log("I am working too:)!")},[keyVal2])
useEffect(()=>{console.log("We both working")},[keyVal , keyVal2])
  return (
    <>
    <div onClick={()=> setKeyVal(!keyVal)}>Hello world</div>;
           <div onClick={()=> setKeyVal2(!keyVal2)}>Hello world</div>;
   </>
  ) ;
 
}
export default MyMainComponent;

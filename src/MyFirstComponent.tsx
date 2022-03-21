import React, { useEffect, useState } from "react";

interface Props{
  buttonTitle:string,
  onInputChange : (value : string) => void,
}

function MyFirstComponent(props : Props) {
  const [show, setShow] = useState(false);
  const [show1, setShow1] = useState(false);
  useEffect(() => {
    console.log("salam Man Be Donia Amadam");
    console.log(props)
  }, []);
  useEffect(
    () => () => {
      console.log("Man daram Mimiram.");
    },
    []
  );
useEffect(() => {console.log("Show Avaz Shod")}, [show])
useEffect(() => {console.log("show1 Avaz Shod")}, [show1])
useEffect(() => {console.log("show ya show1 ya Props.buttonTitle Avaz Shod ")}, [show , show1 , props.buttonTitle])
function consoler(e : any){
  console.log(e.target.value, e);
}
  return (
    <>
      <div onClick={() => setShow(!show)}>showChange</div>
      <div onClick={() => setShow1(!show1)}>show1Change</div>
      <label>child button</label>
      <button>{props.buttonTitle}</button>
      <label>child Input</label>
      {/* <input onChange={(e: any) => consoler({...e})} /> */}
      <input onChange={(e: any) => {props.onInputChange(e.target.value)}} />
    </>
  );
}

export default MyFirstComponent;

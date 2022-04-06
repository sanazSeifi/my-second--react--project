import React, { useEffect, useState } from "react";

function MyFirstComponent(props) {
  const [show, setShow] = useState(false);
  const [show1, setShow1] = useState(false);
  const [inputVal, setInputVal] = useState("");

  useEffect(() => {
    console.log("Man be Donia umadam");
  }, []);
  useEffect(() => {
    console.log("show daram zendegi mikonam");
  }, [show]);
  useEffect(() => {
    console.log("Man show1 daram zendegi mikonam");
  }, [show1]);
  useEffect(() => {
    console.log("Man show1 va show darim zendegi mikonam");
  }, [show1, show]);
  useEffect(
    () => () => {
      console.log("Man daram mimiram");
    },
    []
  );
  return (
    <>
      <div onClick={() => setShow(!show)}>Good day Sanaz</div>
      <div onClick={() => setShow1(!show1)}>Good night Sanaz</div>
      <button onClick={()=>setShow(!show)}>{props.buttonTitle}</button>
      <input onChange={()=> setInputVal(props.inputVal)} />
    </>
  );
}
export default MyFirstComponent;

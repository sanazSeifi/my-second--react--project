import { useState } from "react";
import "./App.css";
import MyFirstComponent from "./MyFirstComponent";

function App() {
  const [childInputVal, setChildInputVal] = useState<string>("");
  const [inputVal, setInputVal] = useState<string>("");
  const [myFirstComponentShow, setMyFirstComponentShow] = useState<boolean>(false);
  return (
    <div className="Sanaz">
      <label>parent Input</label>
      <input value={inputVal} onChange={(e : any) => setInputVal(e.target.value)} />
      <p>{inputVal}</p>
      <label>parent button</label>
      <button>{childInputVal}</button>
      <div onClick={() => setMyFirstComponentShow(!myFirstComponentShow)}>toggel</div>
      {/* {myFirstComponentShow === true ? <MyFirstComponent buttonTitle={"Jafar"} /> : undefined} */}
      <MyFirstComponent buttonTitle={inputVal} onInputChange= {(childInputVal1: string) => setChildInputVal(childInputVal1)} />
    </div>
  );
}

export default App;

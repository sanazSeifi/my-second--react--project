import { useState } from "react";
import "./App.css";
import MyFirstComponent from "./MyFirstComponent";

function App() {
  const [value, setValue] = useState("jafar");
  const [show, setShow] = useState(false);
  const [inputVal, setInputVal] = useState("");

  return (
    <div className="sanaz">
      <input onChange={(e) => setValue(e.target.value)} />
      <p onClick={() => setValue("")}>{value}</p>
      <div onClick={() => setShow(!show)}>Click Me</div>
      <p>{inputVal}</p>
      <button>{inputVal}</button>
      {show === true ? (
        <MyFirstComponent
          buttonTitle={value}
          // onChange={() => setInputVal(inputVal)}
        />
      ) : undefined}
    </div>
  );
}
export default App;

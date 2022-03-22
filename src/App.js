import { useState } from "react";
import MyMainComponent from "./MyMainComponent";
import "./App.css";

function App() {
  const [value, setValue] = useState("");
  const [keyValue, setKeyValue] = useState(false);
  const [inputVal, setInputVal] = useState("");
  return (
    <div className="Sanaz">
      <input onClick={(e) => setValue(e.target.value)} />
      <p>{value}</p>

      <div onClick={()=> setKeyValue(!keyValue)}>
        click kon
      </div>
      {keyValue === true ? <MyMainComponent buttonTitle= {value} 
      onInputChange={(inputVal)=> setInputVal(inputVal)}/> : undefined};
      <button>{inputVal}</button>
    
      <p>{inputVal}</p> 
    </div>
  );
}

export default App;

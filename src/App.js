import { useState } from "react";
import MyMainComponent from "./MyMainComponent";
import "./App.css";

function App() {
  const [value, setValue] = useState("");
  const [keyValue, setKeyValue] = useState(false);
  return (
    <div className="Sanaz">
      <input onClick={(e) => setValue(e.target.value)} />
      <p>{value}</p>???

      <div onClick={()=> setKeyValue(!keyValue)}>
        click kon
      </div>
      {keyValue === true ? <MyMainComponent /> : undefined}
      <p>{keyValue}</p> 
    </div>
  );
}

export default App;

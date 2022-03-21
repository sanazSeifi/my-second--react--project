import { useState } from "react";
import MyMainComponent from "./MyMainComponent";

function App() {
  const [value, setValue] = useState("");
  return (
    <div className="Sanaz">
<input  onClick = {(e)=> setValue(e.target.value)} />  
    <p>{value}</p>
      <MyMainComponent />
    </div>
  );
}

export default App;

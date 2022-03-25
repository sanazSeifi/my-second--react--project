import React from "react";
import { useState } from "react";
import axios from "axios";
import "./App.css"; 
//https://jsonplaceholder.typicode.com/users//

export default function App(){
const[counter, setCounter] = useState(0);


const fetchData = ()=>{
  axios.get("https://jsonplaceholder.typicode.com/users")
  .then( response => {
    // handle success
    console.log(response);
    return response;
  })
  .catch(error => {
    // handle error
    console.error(error);
  })
}


  return(
<div className="App">
<h1>Here is our Counter</h1>
<p>{counter}</p>
<button onClick={() =>setCounter( counter + 10)}>
  Increase Counter 
</button>
<button onClick={() =>{
  fetchData();
  console.log("foo");
}}>
  Fetch the API
</button>
</div>
  )
}
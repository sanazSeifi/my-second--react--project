import React, { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import "./App.css"; 
//https://jsonplaceholder.typicode.com/users//

export default function App(){
const[counter, setCounter] = useState(0);
const[Users, setUsers] = useState("");

/////////////////
useEffect(() =>{
  fetchData().then(fetchedData => {
    setUsers(fetchedData);
  })
   
  }, []
  
  );
  ///////////////////

const fetchData = async ()=>{
 return axios.get("https://jsonplaceholder.typicode.com/users")
  .then( ({data}) => {
    // handle success
    console.log(data);
    return JSON.stringify(data);
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


<p>
  {Users}
</p>
</div>
  )
}
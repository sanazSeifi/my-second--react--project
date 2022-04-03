import React, { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import "./App.css"; 
//https://jsonplaceholder.typicode.com/users//

export default function App(){
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
<h1>Here is fetch Data😊😎</h1>
<p>
  {Users}
</p>
</div>
  )
}

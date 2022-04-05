import React, { useState } from "react";
import "./App.css";
import data from "./data.json";

const App = () => {
  const [contacts, setContact] = useState(data);
  const[addFormData, setAddFormData] = useState({
      name:"",
      username:"",
      email:"",
      phone:"",
  })

  const handleAddFormChange = (event) =>{
    // event.preventDefault();

    const fieldName = event.target.getAttribute("name");
    const filedValue = event.target.value;
    const newFormData = {...addFormData};
    newFormData[fieldName]=filedValue;
    setAddFormData(newFormData);
  }

//   const handleAddFormSubmit = (event) =>{
//       enevt.preventDefault();

//       const newContact ={
//           fullName: addFormData.fullName,
//           addres
//       }
//   }

  return (
    <div className="app-container">
      <tabl>
        <thead>
          <tr>
            <th>Name</th>
            <th>UserName</th>
            <th>Email</th>
            <th>Phone Number</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((contact) => (
            <tr>
              <td>{contact.name}</td>
              <td>{contact.username} </td>
              <td>{contact.email}</td>
              <td>{contact.phone}</td>
            </tr>
          ))}
        </tbody>
      </tabl>
      <h2>Add contacts</h2>

      <form>
        <input
          type="text"
          name="fullName"
          required="requires"
          placeholder="Enter your Address"
          onChange={handleAddFormChange}
        />
        <input
          type="text"
          name="username"
          required="requires"
          placeholder="Enter User Name"
          onChange={handleAddFormChange}
        />
        <input
          type="email"
          name="email"
          required="requires"
          placeholder="Enter your Email"
          onChange={handleAddFormChange}
        />
        <input
          type="text"
          name="phone"
          required="requires"
          placeholder="Enter your EPhone number"
          onChange={handleAddFormChange}
        />
        <button type="submit"> Add</button>
      </form>
    </div>
  );
};
export default App;

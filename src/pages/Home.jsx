import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setUsers } from "../slices/userSlice";
import "./styles/form.css"

function Home() {
   const dispatch= useDispatch()
  const [formInput, setFormInput] = useState({
    name: "",
    age: "",
    email: "",
    contact: "",
  });

  const handlechange = (event) => {
    const { name, value } = event.target;
    setFormInput((currInput) => {
      return {
        ...currInput,
        [name]: value,
      };
    });
  };

 const addUser=(e)=>{
    e.preventDefault();
  
dispatch(setUsers(formInput));
setFormInput({
    name: "",
    age: "",
    email: "",
    contact: "",
  });
  }
  return (
    <div>
      <form action="" >
        <label htmlFor="">Name</label>
        <br />
        <input type="text" name="name" value={formInput.name}onChange={handlechange} />
        <br />
        <label htmlFor="">Age</label>
        <br />
        <input type="text" name="age" value={formInput.age}onChange={handlechange} />
        <br />
        <label htmlFor="">Email</label>
        <br />
        <input type="text" name="email" value={formInput.email}onChange={handlechange} />
        <br />
        <label htmlFor="">Contact</label>
        <br />
        <input type="text" name="contact" value={formInput.contact}onChange={handlechange} />
        <br />
        <button onClick={addUser}>Add</button>
      </form>
    </div>
  );
}

export default Home;

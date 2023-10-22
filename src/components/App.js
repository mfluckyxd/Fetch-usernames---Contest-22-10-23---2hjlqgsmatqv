import React from 'react'
import '../styles/App.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
const App = () => {
//code here 
const [userInput, setInput] = useState();
const [name,setName] = useState()
console.log(name);
 
  const fetchData = async()=>{
    try {
      let id = 1
      if (userInput) {
        id = userInput
      }
      const res = await axios.get(`https://content.newtonschool.co/v1/pr/main/users/${id}`)
      
      setName(res.data.name)
    } catch (error) {
      
    }
  }
  const changeInput = (e)=>{
    const {value}=e.target
    setInput(value)
  }

  useEffect(()=>{
    fetchData()
  },[userInput])
  return (
    <div className="App">
      <h1 id="text">Type a number between 1 and 10</h1>
      <input id="input" onChange={changeInput} value={userInput} />
      <p id="name">{name}</p>
    </div>
  );
}


export default App;

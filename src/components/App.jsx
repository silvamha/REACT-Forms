import React, { useState } from "react";

function App() {

const [name, setName] = useState("")

const [click, setClick] = useState("")

  const handleChange = (e) => {
e
setName(e.target.value)
console.log(e.target.type)

  }
const handleClick = () => {
  setClick(name)
}


  return (
    <div className="container">
      <h1>Hello {click} </h1>
      <input onChange={handleChange}
       type="text" 
       placeholder="What's your name?"
       value={name} />
      <button onClick={handleClick}>Submit</button>
    </div>
  );
}

export default App;

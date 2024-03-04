import React, { useState } from "react";

function App() {

const [name, setName] = useState("")

const [click, setClick] = useState("")

  const handleChange = () => {

setName(e.target.value)

  }
const handleClick = (e) => {
  setClick(name)
}


  return (
    <div className="container">
      <h1>Hello {click} </h1>
      <input onChange={handleChange}
       type="text" 
       placeholder="What's your name?"
       value={click} />
      <button onClick={handleClick}>Submit</button>
    </div>
  );
}

export default App;

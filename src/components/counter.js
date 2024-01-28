import React, { useState } from 'react'

const Counter = () => {
    let [c,setCount]= useState(0);
    const Inc =() =>{
        setCount(c++);
    }
  return (
    <>
        <h1>{c}</h1>
        <button onClick={Inc}>Click Me!</button>
    </>
  )
}

export default Counter

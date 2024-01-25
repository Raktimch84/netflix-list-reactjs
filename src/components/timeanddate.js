import React from 'react'
const datenow = new Date().toLocaleDateString();
const timenow = new Date().toLocaleTimeString();
const Timeanddate = () => {
  return (
    <>
        <p> {datenow} </p>
        <p> {timenow} </p> 
    </>
  )
}

export default Timeanddate

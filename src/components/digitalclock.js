import React, { useState } from 'react'

const Digital = () => {

    const [newtime,setTime] = useState(new Date().toLocaleDateString());
    const Time =()=>{
        setTime(new Date().toLocaleTimeString());
    }
    setInterval(() => {
        Time();
    }, 1);
  return (
    <>
        <h1 className='raktim'>Digital Clock By Raktim</h1>
        <div className='dil'>
                <h1 className='chal'> {newtime} </h1>
        </div>
    </>
  )
}

export default Digital

import React,{useState} from 'react'


const Time = () => {
    const [t,setCount] = useState(new Date().toLocaleTimeString())
    const getTime = ()=>{
        setCount(new Date().toLocaleTimeString())
    }
  return (
    <>
        <h1>{t}</h1>
        <button onClick={getTime}>Click Me!</button>
    </>
  )
}

export default Time;

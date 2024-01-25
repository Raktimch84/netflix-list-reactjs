import React from 'react'

const add =(x,y) => x+y;
const Calculator = () => {
  return (
    <>
        <ol>
            <li>The sum of two numbers is {add(30,3)}</li>
        </ol>
    </>
  )
}

export default Calculator

import React from 'react'
const img1 = 'https://picsum.photos/200/300'
const targ = 'https://www.youtube.com/'
const Basicimg = () => {
  return (
    <>
        <a href={targ} target='_raktim'>
            <img src={img1}></img>
        </a>
    </>
  )
}

export default Basicimg


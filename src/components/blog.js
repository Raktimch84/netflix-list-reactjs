import React from 'react'

const img1 = "https://picsum.photos/200/300";
const img2 = "https://picsum.photos/250/300";
const img3 = "https://picsum.photos/300/300";
const my_name = 'Raktim';
// .lalu{
//     color: #fa9191;
//     text-align: center;
//     text-transform: capitalize;
//     font-weight: bold;
//     text-shadow: 0px 2px 4px #ffe9c5;
//     margin-top: 70px;
//     font-family: 'Josefin Sans', sans-serif;
// }
const lalu ={
    color: '#fa9191',
    textTransform: 'capitalize',
    textAlign: 'center',
     fontWeight: 'bold',
     textShadow: '0px 2px 4px #ffe9c5',
     marginTop: '70px',
     fontFamily: '"Josefin Sans", sans-serif'
}
const Blog = () => {
  return (
    <>
        <h1 style={lalu}> Hello My name is {my_name}</h1>
        <div className='img_div'>
            <img src={img1} alt='img1'/>
            <img src={img2} alt='img2'/>
            <a href='https://www.youtube.com/watch?v=MutW7PhlYQ4&list=PLwGdqUZWnOp3aROg4wypcRhZqJG3ajZWJ&index=17&ab_channel=ThapaTechnical' target='_raktim'>
                <img src={img3} alt='img3'/>
            </a>
        </div>
    </>
  )
}

export default Blog

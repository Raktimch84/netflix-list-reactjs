import React from 'react'

const att ={}
let currdate = new Date(2024,5,5,21);
currdate = currdate.getHours();
var greet='';
var chelo;
if(currdate>=4 && currdate<12)
{
    greet='Good Morning';
    att.color= 'green';
}
else if(currdate>=12 && currdate<17){
    greet='Good Afternoon';
    att.color= 'orange';
}
else if(currdate>=17 && currdate <=21)
{
    greet='Good Evening';
    att.color = 'blue';
}
else{
    greet='Good Night';
    att.color= 'black';
}
const Span = () => {
  return (
    <>
      <span style={att}> {greet} </span>
    </>
  )
}

export default Span

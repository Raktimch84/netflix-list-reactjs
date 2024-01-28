import React from 'react'
import sarray from './sarray';
import Netcards from './netcards';

const Demo = () => { return(
        <>
          <h1 className='heading_style'>List of my top 5 favourite Netflix Series</h1>
          {/* {sarray.map(ncard)} */}
          {sarray.map((val)=>{
            return <Netcards imgsrc={val.imgsrc} targ={val.targ} orig={val.orig} sname={val.sname} id={val.id}/>
          })}
        </> ) }


 export default Demo;
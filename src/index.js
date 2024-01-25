import React from 'react';
import ReactDOM from 'react-dom/client';
// import './styles.css';
import './net.css';
import reportWebVitals from './reportWebVitals';
import sarray from './components/sarray';
import Netcards from './components/netcards';

// const ncard=(val) =>
//     <Netcards imgsrc={val.imgsrc}
//     sname={val.sname} targ={val.targ} orig={val.orig}
//   />


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <h1 className='heading_style'>List of my top 5 favourite Netflix Series</h1>
    {sarray.map((val) => <Netcards imgsrc={val.imgsrc}
    sname={val.sname} targ={val.targ} orig={val.orig}
  />)}
  </>
);
reportWebVitals();

import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
// import './styles.css';
// import './net.css';
import './new.css';
import reportWebVitals from './reportWebVitals';
import sarray from './components/sarray';
import Netcards from './components/netcards';
import Demo from './components/demo';
import Counter from './components/counter';
import Time from './components/time';
import Digital from './components/digitalclock';

// const ncard=(val) =>
//     <Netcards imgsrc={val.imgsrc}
//     sname={val.sname} targ={val.targ} orig={val.orig}
//   />
// const pp = 'net'
// const Nella =() =>{
//     if(pp==='net')
//     {
//       return <Demo />
//     }
// }

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
      <Digital />
  </>
);
reportWebVitals();

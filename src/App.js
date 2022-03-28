import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const[investorsList,setinvestorsList]=useState([])
  
  useEffect(()=>{
    fetch("http://192.168.1.39:5000/test")
    .then((response)=> response.json())
    .then((data)=>{setinvestorsList(data)})
  },[])

  return (
    <div className="App">
    <h1>LOAN APPLICATION : #XM4568520753159</h1>
    <div className="mainForm">
      <div className="sectionHeader">

        <p>SL NO</p>
        <p>INVESTORS</p>
        <p>INTEREST RATE</p>
        <p>SELECT PREFERENCE</p>

      </div>
      {/* <div className="bodyPos">
        <div className="investor1">
          <p>1</p>
          <p>INVESTOR 1</p>
          <p>10%</p>
           </div>
      </div> */}


    </div>
   { investorsList.map(({name,id,rate},i) =>
    <div className="investors-container" key={id}>
      <div className="investor-id">{id}</div>
      <div className="investor-name">{name}</div>
      <div className="investor-rate">{rate}</div>
      </div>)}
    
    </div>
  );
}

export default App;

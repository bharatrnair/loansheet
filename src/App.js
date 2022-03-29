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
    <div className="container">
      <div className="table-container">
        <div className="table-heading-cell">
          SL NO
        </div>
        <div className="table-heading-cell">
          INVESTORS
        </div>
        <div className="table-heading-cell">
          INTREST RATE
        </div>
        <div className="table-heading-cell">
          SELECT PREFERENCE
        </div>
  { investorsList.map(({name,id,rate},index) =>
     <InvestorRow key={id} name={name} rate={rate} index={index}/>)}

   </div>
 </div>
</div>
  );
}

const InvestorRow = ({name,rate,index}) => {
  return (
    <>

    <div className="table-cell">
      {index+1}
    </div>
    <div className="table-cell">
      {name}
    </div>
    <div className="table-cell">
      {rate}
    </div>
    <div className="table-cell">
      <input type="radio"/>
      <label htmlFor=''>
        1st Option
      </label>
      <input type="radio"/>
      <label htmlFor=''>
        2nd Option
      </label>
    <input type="radio"/>
    <label htmlFor=''>
      3rd Option
    </label>
    </div>
    </>)
}

export default App;

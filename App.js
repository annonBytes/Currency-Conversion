import React, {useEffect, useState} from 'react';
import CurrencyRow from './currencyRow'
import './App.css';

const App  =  () => {

  const BASE_URL = 'https://api.exchangeratesapi.io/latest';

  const [currencyOptions, setCurrencyOptions] = useState([]);


  useEffect(() => {
     fetch(BASE_URL).then( res => res.json()).then(data => {
       setCurrencyOptions([data.base, ...Object.keys(data.rates)]) 
     });
  },[]); 

  return(
    <>
    <h1>The World's Trusted Currency Converter</h1>
    <div className="box">
     <h2>BT Currency Converter</h2>
    <CurrencyRow 
    currencyOptions = {currencyOptions}
    />
    <div className="equals">=</div>
    <CurrencyRow 
     currencyOptions = {currencyOptions}
    />
    </div>
   </>
  );
}


export default App;
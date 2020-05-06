import React from 'react';

const CurrencyRow = (props) => {

const {currencyOptions} = props;

  return(
   <div className="currency">
      
      <div>
          <input type="number" className="input" />
      </div>

      <div>
          <select>
             {currencyOptions.map(option => (
               <option key={option} value={option}> {option} </option>
             ))}
          </select>
      </div>
      
      
   </div>
      );
}



export default CurrencyRow;
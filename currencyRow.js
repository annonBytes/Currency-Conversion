import React from 'react';

const CurrencyRow = (props) => {

const {
    currencyOptions,
    selectedCurrency,
    onChangeCurrency,
    onChangeAmount,
    amount
  } = props

  return(
   <div className="currency">
      
      <div>
          <input type="number" className="input" value={amount} onChange={onChangeAmount} />
      </div>

      <div>
          <select value={selectedCurrency} onChange={onChangeCurrency}>
             {currencyOptions.map(option => (
               <option key={option} value={option}> {option} </option>
             ))}
          </select>
      </div>
      
      
   </div>
      );
}



export default CurrencyRow;
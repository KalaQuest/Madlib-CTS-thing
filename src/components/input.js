import React from 'react';
const Input = ({label, state, name}, onChange, index) => {
    return (
        <div key={index} className="input">
          <label className="input__number">{index +1}</label>
          <input name= {name} value={state} onChange= {onChange} /> 
          <label className="input__label">{label}</label>
        </div>    
    )
}
export default Input;
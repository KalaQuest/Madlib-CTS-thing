import React from 'react';
const Input = ({label, state, name}, onChange) => {
    return (
        <div key={name} className="input">
          <input name= {name} value={state} onChange= {onChange} /> 
          <label>{label}</label>
        </div>    
    )
}
export default Input;
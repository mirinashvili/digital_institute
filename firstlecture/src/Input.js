import React, {useState} from "react";

function Input () {
    const [inputValue, setInputValue] = useState(' ')
    const handleSubmit = (event) => {
        event.preventDefault();
      };
    return (
        <div>
            <form onSubmit={handleSubmit}>
            <input
             type= 'text'
             value = {inputValue}
             onChange = {(even) =>setInputValue(even.target.value)}>
            </input>
            <p>full Name: {inputValue}</p>
            </form>
    
        </div>
    )
}

export default Input
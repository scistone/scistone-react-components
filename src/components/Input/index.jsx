import React, { useEffect, useState } from 'react'

export default function Input(props) {
  const required = props.required;
  const type = props.type;
  const placeholder = props.placeholder;
  const label = props.label;
  const errorMessage = props.errorMessage;

  const [value,setValue] = useState('')
  const [error,setError] = useState(false)
  const [counter,setCounter] = useState(0)
  
  useEffect(() => {
    if (counter === 0){
      setCounter(counter+1)
      return(setError(false))
    }
    if (required && value === ''){
      setError(true)
    }else{
      setError(false)
    }
  }, [value])
  

  if (type==='email' || type==='password' || type==='number' || type==='text' || type==='url' ){
    return (
      <div style={props.style} className='scistone-container row scistone-input-container'>
        <div className='scistone-container col-8 input-label' >
        <label className={required && 'required'}>{label}</label>
        </div>

        <div className='scistone-container col-16 scistone-input-area'>
        <input onChange={(e)=>setValue(e.target.value)} value={value} type={type} className={`scistone-input ${error === true && 'error'}`} placeholder={placeholder}/>
        {error === true && 
          <p>{errorMessage}</p>
        }
        </div>
      </div>
    )
  }
}
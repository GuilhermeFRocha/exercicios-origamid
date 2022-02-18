import React from 'react'

const Input = ({id, label, onChange}) => {
  return (
    <>
    <label htmlFor={id}>{label}</label>
    <input 
     type="text"
     id={id}
     name={id}
     value= {value}
     onChange={onChange}
     />
    </>
  )
}

export default Input
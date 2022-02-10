import React from 'react'

const Button = ({setModal}) => {
  return (
    <button onClick={() => setModal(true)}>
      Abrir
    </button>
  )
}

export default Button
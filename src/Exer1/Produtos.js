import React from 'react'
import Titulo from './Titulo'

const produtos = [
  {nome: 'Notebook', propriedades: ['16gb ram', '512gb']},
  {nome: 'Smartphone', propriedades: ['2gb ram', '128gb']},
]

const Produtos = () => {
  return (
    
    <section>
      <Titulo texto="Produtos" />

      {produtos.map(({nome, propriedades}) =>(
        <div style={{border: '1px solid', margin:'1rem 0', padding: '1rem'}}>
        <h1>{nome}</h1>
        <ul>{propriedades.map((prop) =>(
          <li>{prop}</li>
        ))}</ul>
        </div>
      ) )}

    </section>
  )
    
}

export default Produtos
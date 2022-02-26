import React from 'react'
import styles from './Contato.module.css'
import foto from '../img/contato.jpg'
import Head from '/Head'


const Contato = () => {
  return (
    <section className= {`${styles.contato} animeLeft`  }>
      <Head title="Ranek | Contato" description="Entre em contato" />
      <img src={foto} alt="Maquina de escrever" />
     <div>
      <h1> Entre em contato </h1>
      <ul className={styles.dados}>
        <li>guilhermefdarocha@outlook.com</li>
        <li>34 98886-0312</li>
        <li>Rua Ali perto, 777</li>
      </ul>
     </div>
    </section>
  )
}

export default Contato
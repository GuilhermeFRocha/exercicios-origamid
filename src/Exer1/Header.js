import React from 'react'
import Produtos from './Produtos'

const Header = () => {
  return (
    <header>
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/produtos">Produtos</a></li>
      </ul>
    </header>
  )
}

// App.js
// const App = () => {
  // const {pathname} = window.location
  
  // let Pagina;
  // if (pathname === '/produtos') {
  //   Pagina = Produtos;
  // } else {
  //   Pagina = Home;
  // }
  
  // return (
    
    // <section>
    //   <Header />
    //   <Pagina />
    // </section>
  // )
    
// }

export default Header
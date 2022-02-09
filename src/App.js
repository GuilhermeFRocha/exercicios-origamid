import React from "react";
import Header from "./Exer1/Header";
import Home from "./Exer1/Home";
import Produtos from "./Exer1/Produtos";
import Form from "./Form/Form"


const App = () => {

   const {pathname} = window.location
  
  let Pagina;
  if (pathname === '/produtos') {
    Pagina = Produtos;
  } else {
    Pagina = Home;
  }
  
  return (
    
    <section>
      <Header />
      <Pagina />
    </section>
  )
    
}

 

export default App
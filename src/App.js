import React from "react";
// EXERCICIES 1
// const luana = {
//   cliente: 'Luana',
//   idade: 27,
//   compras: [
//    {nome: 'Notebook', preco: 'R$2500'},
//    {nome: 'Geladeira', preco: 'R$3000'},
//    {nome: 'Smarthone', preco: 'R$1500'},
//   ],
//   ativa: true,
// };

// const mario = {
//   cliente: 'Mario',
//   idade: 31,
//   compras: [
//    {nome: 'Notebook', preco: 'R$2500'},
//    {nome: 'Geladeira', preco: 'R$3000'},
//    {nome: 'Smarthone', preco: 'R$1500'},
//    {nome: 'Guitarra', preco: 'R$3500'},
//   ],
//   ativa: false,
// }

// EXERCICIES 2
// const produtos = [
//   {
//     id: 1,
//     nome: 'Smartphone',
//     preco: 'R$ 2000',
//     cores: ['#29d8d5', '#252a34', '#fc3766']
//   },
//   {
//     id: 2,
//     nome: 'Notebook',
//     preco: 'R$ 3000',
//     cores: ['#^ff5045', '#d4394b', '#f37c59']
//   },
//   {
//     id: 3,
//     nome: 'Tablet',
//     preco: 'R$ 1500',
//     cores: ['#365069', '#47c1c8', '#f95786']
//   }

// ]




const App = () => {
  // EXERCICIES 2
  // const dados = produtos.filter(
  //   ({preco}) => Number(preco.replace("R$", "")) > 1500,
  // );


  // return (
  //   <section>
  //     {dados.map(({id, nome, preco, cores}) =>(
  //       <div key={id}>
  //       <h1>{nome}</h1>
  //       <p>{preco}</p>
  //       <ul>
  //         {cores.map((cor)=> (
  //           <li style={{backgroundColor: cor, color: 'white'}} key={cor}>{cor}</li>
  //         ))}
  //       </ul>
  //       </div>
  //     ) )}

  //   </section>
  // )
    
  // EXERCICIES 1
  // const dados = mario
  // const total = dados.compras.map((item) => 
  //   Number(item.preco.replace("R$", ""))
  // ).reduce((a , b) => a+b)

  // return ( <div>
  // <p>Nome: {dados.cliente} </p> 
  // <p>Idade: {dados.idade} </p>
  // <p>Situaçao: <span style={{ color: dados.ativa ? 'green' : 'red'}}> {dados.ativa ? 'ativa' : 'inativa'}</span></p>
  // <p>Total gasto: {total}</p>
  // <p> {total > 10000 ? 'Voce esta gastando muito' : ''}  </p>
  // </div>
  // )
}

 

export default App
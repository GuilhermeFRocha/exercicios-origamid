import React from "react";
import Produto from "./Produto";

const App = () => {
 const [dados, setDados] = React.useState(null)
 const [load, setLoad] = React.useState(null)

 async function handleClick (event) {

 setLoad(true)
 const response = await fetch(`https://ranekapi.origamid.dev/json/api/produto/${event.target.innerText}`) 
 const json = await response.json();
 setDados(json);
 setLoad(false)

 }

return (
  <div>
    <button onClick={handleClick}>Notebook</button>
    <button onClick={handleClick}>Smartphone</button>
    <button onClick={handleClick}>Tablet</button>
    {load && <p>Carregando...</p>}
   {!load && dados && <Produto dados={dados} />}
  </div>
)
}

export default App
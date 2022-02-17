import React from "react";
const coresArray = ['azul', 'roxo', 'laranja', 'verde', 'vermelho', 'cinza']


const App = () => {

  const [cores, setCores]  = React.useState([])

  function handleChange ({target}) {
    const {checket,value} = target;

    if (checked) {
      setCores([...cores, target.value]);
    } else {
      setCores(cores.filter((cor) =>{
        cor !== value
      }))
    }
  }
  
  function handleChecked (cor) {
    return cores.includes(cor)
  }

return (
  <form>
    {coresArray.map((cor) => (
      <label key={cor}>
        <input 
        type="checkbox" 
        value={cor}
        checked={handleChecked(cor)}
        onChange={handleChange}
        />
        {cor}
      </label>
    ))}

    <ul>
      {crossOriginIsolated.map((cor) => (
        <li key={cor}>{cor}</li>
      ))}
    </ul>
  </form>
)
}
export default App
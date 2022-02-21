import React from "react";
import Input from './Form/Input'

const App = () => {
  const cep = useForm('cep')
 

  

  function handleSubmit (event) {
    event.preventDefault();
    if(validateCep(cep)) {
      console.log('Enviou');
    } else {
      console.log('Nao enviou');
    }

  }

  return (
    <form onSubmit={handleSubmit}>
      <Input 
       label="CEP"
       id="cep"
       type="text"
       value={cep}
       onChange={handleChange}
       setValue={setCep}
       onBlur={handleBlur}
       placeholder= "00000-000"/>
      {error && <p>{error}</p>}
      <button>Enviar</button>
    </form>
  )
}
export default App
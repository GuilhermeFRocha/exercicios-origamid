import React from "react";


const App = () => {

  const formFields = [
    {
      id: 'nome',
      label:'Nome',
      type: 'text'
    },
    {
      id: 'email',
      label:'email',
      type: 'email'
    },
    {
      id: 'senha',
      label:'senha',
      type: 'password'
    },
    {
      id: 'cep',
      label:'cep',
      type: 'text'
    },
    {
      id: 'numero',
      label:'numero',
      type: 'text'
    },
    {
      id: 'rua',
      label:'rua',
      type: 'text'
    },
    {
      id: 'bairro',
      label:'bairro',
      type: 'text'
    },{
      id: 'cidade',
      label:'cidade',
      type: 'text'
    },{
      id: 'estado',
      label:'estado',
      type: 'text'
    }
  ]
 
  const [form, setForm] = React.useState({
    nome: '',
    email: '',
    senha: '',
    cep: '',
    rua: '',
    numero: '',
    bairro: '',
    cidade: '',
    estado: '',
  })

  const [response, setResponse] =React.useState(null)


  function handleChange ({target}) {
      const {id, value} = target
      setForm({...form, [id]: value})
  }

  function handleSubmit(event) {
    event.preventDefault()
    fetch('https://ranekapi.origamid.dev/json/api/usuario', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(form),
    }).then((response) => {
      setResponse(response);
    });
  }

return (
  <form onSubmit={handleSubmit}>
    {formFields,map(({ id, label, type}) => (
      <div key={id}>
      <label htmlFor={id}>{label}</label>
      <input type={type} id={id} value={form[id]} onChange={handleChange}/>
      </div>
    ))}


    <button> Enviar </button>
    {response && response.ok && <p>Usuário Criado</p>}
  </form>
)
}
export default App
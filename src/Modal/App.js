import React from "react";
import Modal from "./Modal/Modal";
import Button from "./Modal/Button";



const App = () => {

  const [modal, setModal] = React.useState(false)

return (
<div>
  <div>{modal ? 'Modal Aberto' : 'Modal Fechado'}</div>
    <Modal modal={modal} setModal={setModal} />
    <Button setModal={setModal} />
</div>
)
}

export default App
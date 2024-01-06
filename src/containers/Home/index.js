import React, { useState, useRef } from "react";
import { useNavigate } from "react-router";

import axios from "axios";

import People from "../../assets/people.svg"
import Arrow from "../../assets/arrow.svg"

import H1 from "../../components/Title"
import ContainerItens from "../../components/ContainerItens";
import Button from "../../components/Button";

import {
  Container,
  Image,
  InputLabel,
  Input,
} from "./styles";

//JSX
function App() {
  // const users = [];
  const [users, setUsers] = useState([]);  //REACT HOOKS => FERRAMENTAS AUXILIARES
  const navigate = useNavigate()
  const inputName = useRef()
  const inputAge = useRef()

  async function addNewUser() {

     const { data: newUser } = await axios.post("http://localhost:3001/users", {name:inputName.current.value, age: inputAge.current.value });


     setUsers([...users, newUser]);

     navigate("/usuarios");
    
  }


  // REACT HOOK => useEffect (Efeito Colateral)
  // A minha aplicação inicia (A pagina carregou, useEffect é chamado )
  // Quando um estado que está no array de dependência do useEffect é alterado


  return (
    <Container>
      <Image alt="logo-imagem" src={People} />
      <ContainerItens>
        <H1>Olá!</H1>

        <InputLabel>Nome</InputLabel>
        <Input ref={inputName} placeholder="Nome" />

        <InputLabel>Idade</InputLabel>
        <Input ref={inputAge} placeholder="Idade" />

        <Button onClick={addNewUser}>Cadastrar <img alt="seta" src={Arrow} /></Button>

      </ContainerItens>
    </Container>
  );
}

export default App;

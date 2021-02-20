import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Axios from 'axios';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import './login.css';

export default function Login() {

  const [login, setLogin] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  function handlePasswordChange(event) { setPassword(event.target.value);}
  function handleNameChange(event) { setEmail(event.target.value);}
  
  
  //POST
  function handleSubmit(event){
    const pacotinho = [
      {
        email: email,
        password: password
      }
    ]  
    Axios.post("http://localhost:4001/user/login", pacotinho)
    .then((res) => {
      if(res.status === 200){
        setLogin(true);
      }else{
        alert(res.data);
      }
    })
    .catch(function (err){console.log(err);})
  }

  return (
    <div>
      <Container fluid>
        <Row>
          <Col>
            <h1>Página de Login</h1>
            <Form method="POST" onSubmit={handleSubmit}>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Nome de usuário</Form.Label>
                <Form.Control type="username" placeholder="Insíra seu nome de usuário"  onChange={handleNameChange} required />
              </Form.Group>
              <Form.Group controlId="formBasicPassword">
                <Form.Label>Senha</Form.Label>
                <Form.Control type="password" placeholder="Insira sua senha" onChange={handlePasswordChange} required />
              </Form.Group>
              <Button variant="primary" type="submit">Logar</Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  )
}
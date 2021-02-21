import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import './login.css';

export default function Login(props) {

  const {handlePasswordChange, handleNameChange, handleSubmit} = props.formHandlers;

  return (
    <div>
      <Container fluid>
        <Row>
          <Col>
            <h1>Página de Login</h1>
            <Form onSubmit={handleSubmit}>
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
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import './cadastro.css';

export default function Cadastro() {
  return (
    <div>
      <Container fluid>
        <Row>
          <Col>
            <h1>Página de Cadastro</h1>
            <Form>
            <Form.Group controlId="formBasicEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Insíra o email a ser cadastrado" />
              </Form.Group>
              <Form.Group controlId="formBasicPhone">
                <Form.Label>Número de Contato</Form.Label>
                <Form.Control type="phone" placeholder="(XX) XXXX-XXXX" />
              </Form.Group>
              <Form.Group controlId="formBasicUsername">
                <Form.Label>Nome de usuário</Form.Label>
                <Form.Control type="username" placeholder="Insíra o nome de usuário a ser cadastrado" />
              </Form.Group>
              <Form.Group controlId="formBasicPassword">
                <Form.Label>Senha</Form.Label>
                <Form.Control type="senha" placeholder="Insira a senha a ser cadastrada" />
              </Form.Group>
              <Button variant="success" type="cadastrar">
                Cadastrar
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  )
}
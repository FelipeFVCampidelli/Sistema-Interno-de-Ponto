import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import './edit.css';

export default function Edit(props) {
  const {handleEmailEditChange, handlePhoneEditChange, handleNameEditChange,
         handlePasswordEditChange, handleSubmitEdit} = props.formHandlersEdit;
  return (
    <div>
      <Container fluid>
        <Row>
          <Col>
            <h1>Página de Edição</h1>
            <Form onSubmit={handleSubmitEdit}>
            <Form.Group controlId="exampleForm.ControlSelect1">
              <Form.Label>Escolha o Perfil a ser editado</Form.Label>
              <Form.Control as="select">
                <option>1</option>
                <option>2</option>
              </Form.Control>
            </Form.Group>
            <Form.Group controlId="formBasicEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control onChange={handleEmailEditChange} type="email" placeholder="Insíra o novo email" />
              </Form.Group>
              <Form.Group controlId="formBasicPhone">
                <Form.Label>Número de Contato</Form.Label>
                <Form.Control onChange={handlePhoneEditChange} type="phone" placeholder="Insíra o novo número de contato (XX) XXXX-XXXX" />
              </Form.Group>
              <Form.Group controlId="formBasicUsername">
                <Form.Label>Nome de usuário</Form.Label>
                <Form.Control onChange={handleNameEditChange} type="username" placeholder="Insíra o novo nome de usuário" />
              </Form.Group>
              <Form.Group controlId="formBasicPassword">
                <Form.Label>Senha</Form.Label>
                <Form.Control onChange={handlePasswordEditChange} type="senha" placeholder="Insira a nova senha" />
              </Form.Group>
              <Button variant="warning" type="editar">Editar</Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  )
}
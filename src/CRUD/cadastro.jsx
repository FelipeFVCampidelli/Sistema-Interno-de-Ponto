import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import './cadastro.css';

export default function Cadastro(props) {
  const {handleEmailCadastroChange, handlePhoneCadastroChange, handleNameCadastroChange,
         handlePasswordCadastroChange, handleRankCadastroChange, handleSubmitCadastro} = props.formHandlersCadastro;
  return (
    <div>
      <Container fluid>
        <Row>
          <Col>
            <h1>Página de Cadastro</h1>
            <Form onSubmit={handleSubmitCadastro}>
            <Form.Group controlId="formBasicEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" onChange={handleEmailCadastroChange} placeholder="Insíra o email a ser cadastrado" />
              </Form.Group>
              <Form.Group controlId="formBasicPhone">
                <Form.Label>Número de Contato</Form.Label>
                <Form.Control type="phone" onChange={handlePhoneCadastroChange} placeholder="XXXXXXXXXX" />
              </Form.Group>
              <Form.Group controlId="formBasicUsername">
                <Form.Label>Nome de usuário</Form.Label>
                <Form.Control type="username" onChange={handleNameCadastroChange} placeholder="Insíra o nome de usuário a ser cadastrado" />
              </Form.Group>
              <Form.Group controlId="formBasicPassword">
                <Form.Label>Senha</Form.Label>
                <Form.Control type="password" onChange={handlePasswordCadastroChange} placeholder="Insira a senha a ser cadastrada" />
              </Form.Group>
              <Form.Group controlId="exampleForm.ControlSelect1">
                <Form.Label>Escolha o nível de hierarquia do usuário</Form.Label>
                <Form.Control type="rank" onChange={handleRankCadastroChange} placeholder="member/director" />
            </Form.Group>
              <Button variant="success" type="cadastrar">Cadastrar</Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  )
}
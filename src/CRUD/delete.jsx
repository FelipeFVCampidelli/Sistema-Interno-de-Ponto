import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import './delete.css';

export default function Delete() {
  return (
    <div>
      <Container fluid>
        <Row>
          <Col>
            <h1>Página de Exclusão</h1>
            <Form>
            <Form.Group controlId="exampleForm.ControlSelect1">
              <Form.Label>Escolha o Perfil a ser deletado</Form.Label>
              <Form.Control as="select">
                <option>1</option>
                <option>2</option>
              </Form.Control>
            </Form.Group>
            <Button variant="danger" type="excluir">Excluir</Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  )
}
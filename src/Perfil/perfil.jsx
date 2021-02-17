import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Table from 'react-bootstrap/Table'
import './perfil.css';

export default function Perfil() {
  const name = 'EXEMPLO'
  const mail = 'EXEMPLO@gmail.com'
  const phone = '0000-0000'
  const segunda = '00:00'
  const terca = '00:00'
  const quarta = '00:00'
  const quinta = '00:00'
  const sexta = '00:00'
  
  return (
      <div>
        <Container fluid>
          <Row>
            <Col>
              <h1>Perfil</h1>
              <p>Nome: {name} </p>
              <p>Email: {mail} </p>
              <p>Telefone: {phone} </p>
            </Col>
          </Row>
        </Container>
        <h1>Pontos Marcados</h1>
        <Table striped bordered hover variant="dark">
          <thead>
            <tr>
              <th>Segunda</th>
              <th>Terça</th>
              <th>Quarta</th>
              <th>Quinta</th>
              <th>Sexta</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{segunda}</td>
              <td>{terca}</td>
              <td>{quarta}</td>
              <td>{quinta}</td>
              <td>{sexta}</td>
              <td>SOMA</td>
            </tr>
          </tbody>
        </Table>
      </div>
  )
}

import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Table from 'react-bootstrap/Table'
import './diretor.css';

export default function Perfil() {
  const name = 'DIRETOR'
  const mail = 'DIRETOR@gmail.com'
  const phone = '0000-0000'
  
  const funcionarios = [
    {
      id: 0,
      Name: 'EXEMPLO 1',
      segunda: '00:00',
      terca: '00:00',
      quarta: '00:00',
      quinta: '00:00',
      sexta: '00:00',
      total: 'Soma'
    },
    {
      id: 1,
      Name: 'EXEMPLO 2',
      segunda: '00:00',
      terca: '00:00',
      quarta: '00:00',
      quinta: '00:00',
      sexta: '00:00',
      total: 'Soma'
    },
    {
      id: 2,
      Name: 'EXEMPLO 3',
      segunda: '00:00',
      terca: '00:00',
      quarta: '00:00',
      quinta: '00:00',
      sexta: '00:00',
      total: 'Soma'
    },
    {
      id: 3,
      Name: 'EXEMPLO 4',
      segunda: '00:00',
      terca: '00:00',
      quarta: '00:00',
      quinta: '00:00',
      sexta: '00:00',
      total: 'Soma'
    }
  ]

  const renderFuncionario = (funcionario, index) => {
    return (
      <tr key={index}>
        <td>{funcionario.Name}</td>
        <td>{funcionario.segunda}</td>
        <td>{funcionario.terca}</td>
        <td>{funcionario.quarta}</td>
        <td>{funcionario.quinta}</td>
        <td>{funcionario.sexta}</td>
        <td>{funcionario.total}</td>
      </tr>
    )
  }
  
  return (
      <div>
        <Container fluid>
          <Row>
            <Col>
              <h1>Diretor</h1>
              <p>Nome: {name} </p>
              <p>Email: {mail} </p>
              <p>Telefone: {phone} </p>
            </Col>
          </Row>
        </Container>
        <h1>Tabela de Pontos</h1>
        <Table striped bordered hover variant="dark">
          <thead>
            <tr>
              <th>#</th>
              <th>Segunda</th>
              <th>Terça</th>
              <th>Quarta</th>
              <th>Quinta</th>
              <th>Sexta</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            {funcionarios.map(renderFuncionario)}
          </tbody>
        </Table>
      </div>
  );
}

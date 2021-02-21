import React, {useState, useEffect} from 'react';
import Axios from 'axios';
import { Container, Row, Col } from 'react-bootstrap';
import Table from 'react-bootstrap/Table'
import './perfil.css';

export default function Perfil(props) {
  const segunda = '00:00'
  const terca = '00:00'
  const quarta = '00:00'
  const quinta = '00:00'
  const sexta = '00:00'
  const id = props.id
  //GET de perfil
  const [perfil, setPerfil] = useState( {username: '', email: '', cellphoneNumber: ''} );
  useEffect(() => {
    Axios.get(`http://localhost:4001/user/perfil/${id}`).then(res => {
      setPerfil(res.data)
    }).catch((err) => {console.error("ops! ocorreu um erro " + err.response);})
  }, [id])//{perfil.username/.email/.cellphoneNumber}
  return (
    <div>
      <Container fluid>
        <Row>
          <Col>
            <h1>Página de Perfil</h1>
              <p>Nome: {perfil.username} </p>
              <p>Email: {perfil.email} </p>
              <p>Telefone: {perfil.cellphoneNumber} </p>
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

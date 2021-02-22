import React, {useState, useEffect} from 'react';
import Axios from 'axios';
import { Container, Row, Col } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import Select from 'react-select';
import './diretor.css';
import { Redirect } from 'react-router-dom';

export default function Perfil(props) {
  
  const id = props.id
  const {handleSelectChange, handleSubmitSearch, options} = props.formHandlersBusca
  const [perfilD, setPerfilD] = useState({username: '', email: '', cellphoneNumber: ''});
  useEffect(() => {
    Axios.get(`http://localhost:4001/user/diretor/${id}`).then(res => {setPerfilD(res.data)})
    .catch((err) => {console.error("ops! ocorreu um erro " + err.response);})
  }, [id])
  
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
    },
    {
      id: 4,
      Name: 'EXEMPLO 5',
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
            <p>Nome: {perfilD.username} </p>
            <p>Email: {perfilD.email} </p>
            <p>Telefone: {perfilD.cellphoneNumber} </p>
            <Button href="/cadastro" className="verde" variant="success">Cadastrar</Button>
            <Button href="/edit" className="amarelo" variant="warning" type="editar">Editar</Button>
            <Button href="/delete" className="vermelho" variant="danger" type="excluir">Excluir</Button>
            
            <Form className="FormDiretorP" inline onSubmit={handleSubmitSearch}>
              <Select className="FormDiretor" styles="neutral190" onChange={handleSelectChange} options={options} value={options.id}/>
              <Button type="submit" variant="outline-light">Search</Button>
            </Form>
          
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
        <tbody>{funcionarios.map(renderFuncionario)}</tbody>
      </Table>
    </div>
  );
}

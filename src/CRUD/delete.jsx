import React, {useState, useEffect} from 'react';
import Axios from 'axios';
import { Container, Row, Col } from 'react-bootstrap';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import './delete.css';

export default function Delete(props) {
  const {handleSubmitDelete} = props.formHandlersDelete;
  //GET de pesquisa
  let [funcionario, setFuncionario] = useState( [{ funcionarios: {} }] );
  useEffect(() => {
    Axios.get("http://localhost:4001/user/search").then(res => {
      setFuncionario(res.data)
    }).catch((err) => { console.error("ops! ocorreu um erro" + err.response);})
  }, [])
  return (
    <div>
      <Container fluid>
        <Row>
          <Col>
            <h1>Página de Exclusão</h1>
            <Form onSubmit={handleSubmitDelete}>
            <Form.Group controlId="exampleForm.ControlSelect1">
              <Form.Label>Escolha o Perfil a ser deletado</Form.Label>
              <Form.Control as="select" value={funcionario.username}>
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
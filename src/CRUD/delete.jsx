import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Select from 'react-select'
import './delete.css';

export default function Delete(props) {
  const {handleSelectChangeDelete, handleSubmitDelete, optionsD} = props.formHandlersDelete;

  return (
    <div>
      <Container fluid>
        <Row>
          <Col>
            <h1>Página de Exclusão</h1>
            <Form inline onSubmit={handleSubmitDelete}>
              <Select className="FormDelete" placeholder="Digite o nome do perfil a ser deletado" styles="neutral190" onChange={handleSelectChangeDelete} options={optionsD} value={optionsD.id}/>
              <Button variant="danger" type="excluir">Excluir</Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  )
}
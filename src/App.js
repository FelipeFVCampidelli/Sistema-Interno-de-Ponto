/* eslint-disable react/jsx-no-comment-textnodes */
import React, { Fragment, useEffect, useState } from "react"
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom"
import Axios from 'axios';
import Navbar from "react-bootstrap/Navbar"
import Nav from "react-bootstrap/Nav"
import Button from "react-bootstrap/Button"
import Form from "react-bootstrap/Form"
import FormControl from "react-bootstrap/FormControl"

import './App.css';
import Perfil from './Perfil/perfil'
import Diretor from './Diretor/diretor'
import Login from './Login/login'
import Cadastro from './CRUD/cadastro'
import Edit from './CRUD/edit'
import Delete from './CRUD/delete'
import Ponto from './Ponto/ponto'


export default function App() {

  const name = 'EXEMPLO'

  //GET
  const [funcionario, setFuncionario] = useState([])
  useEffect(() => {
    Axios.get("http://localhost:4001/user/search").then(res => {
      console.log(res.data)
      setFuncionario(res.data)
    })
  })

  return (
      
    <Router>
      <main>
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand><Link to="/">Home</Link></Navbar.Brand>
            <Nav className="mr-auto">
              <Nav.Link><Link to={`/perfil/${name}`}>Perfil</Link></Nav.Link>
              <Nav.Link><Link to="/ponto">Ponto</Link></Nav.Link>
              <Nav.Link><Link to="/login">Login</Link></Nav.Link>
              <Nav.Link><Link to="/diretor">Diretor</Link></Nav.Link>
              <Nav.Link><Link to="/cadastro">Cadastro</Link></Nav.Link>
            </Nav>
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-light">Search</Button>
          </Form>
        </Navbar>
        <br />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/diretor" component={Diretor} />
          <Route path="/login" component={Login} />
          <Route path="/cadastro" component={Cadastro} />
          <Route path="/edit" component={Edit} />
          <Route path="/delete" component={Delete} />
          <Route path="/perfil/:name" component={Perfil} />
          <Route path="/ponto" component={Ponto} />
          <Route render={() => <h1>404: página não encontrada</h1>} />
        </Switch>
      </main>
    </Router>
  );
}

// Home Page
const Home = () => (
  <Fragment>
    <h1>Home</h1>
    <p>Bem vindo de volta!</p>
  </Fragment>
);

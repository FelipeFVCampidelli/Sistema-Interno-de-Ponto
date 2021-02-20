/* eslint-disable react/jsx-no-comment-textnodes */
import React, { Fragment, useEffect, useState } from "react"
import { BrowserRouter as Router, Link, Route, Switch, Redirect } from "react-router-dom"
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

  const [login, setLogin] = useState(false);
  const [diretor, setDiretor] = useState(false);

  function redirectToLogin() {
    if (!login) {
      return <Redirect to='/login'></Redirect>;
    }
  }
  
  function redirectToPerfil(){
    if (login) {
      return <Redirect to='/perfil' ></Redirect>;
    }
    if (login && diretor) {
      return <Redirect to='/diretor' ></Redirect>;
    }
  }
  
  //GET
  let [funcionario, setFuncionario] = useState( [{funcionarios: {} }] );
  useEffect(() => {
    Axios.get("http://localhost:4001/user/search").then(res => {
      setFuncionario(res.data)
    }).catch((err) => { console.error("ops! ocorreu um erro" + err);})
  }, [])//{funcionario[0].username}
  
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
          <Route path="/diretor" component={Diretor}>{redirectToLogin()}</Route>
          <Route path="/login" component={Login}>{redirectToPerfil()}</Route>
          <Route path="/cadastro" component={Cadastro} />
          <Route path="/edit" component={Edit} />
          <Route path="/delete" component={Delete} />
          <Route path="/perfil/:name" component={Perfil}>{redirectToLogin()}</Route>
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

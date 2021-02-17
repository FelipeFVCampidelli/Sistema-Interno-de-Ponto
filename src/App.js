import React, { Fragment } from "react"
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom"
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
    <FakeText />
  </Fragment>
);

const FakeText = () => (
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
)


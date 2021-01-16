import React, { Fragment } from "react"
import { BrowserRouter as Router, Route } from "react-router-dom"

import './App.css';


export default function App() {

  return (
    <Router>
      <main>
        <nav>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/diretor">Diretor</a></li>
            <li><a href="/login">login</a></li>
            <li><a href="/cadastro">Cadastro</a></li>
            <li><a href="/perfil">Perfil</a></li>
            <li><a href="/ponto">Ponto</a></li>
          </ul>
          </nav>
          <Route path="/" component={Home} />
          <Route path="/diretor" component={Diretor} />
          <Route path="/login" component={Login} />
          <Route path="/cadastro" component={Cadastro} />
          <Route path="/perfil" component={Perfil} />
          <Route path="/ponto" component={Ponto} />
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

// Director Page
const Diretor = () => (
  <Fragment>
    <h1>diretor</h1>
    <FakeText />
  </Fragment>
  );

// Login Page
const Login = () => (
  <Fragment>
    <h1>login</h1>
    <FakeText />
  </Fragment>
  );

//signup Page
const Cadastro = () => (
  <Fragment>
    <h1>cadastro</h1>
    <FakeText />
  </Fragment>
  );

//profile Page
const Perfil = () => (
  <Fragment>
    <h1>perfil</h1>
    <FakeText />
  </Fragment>
  );

//Ponto Page
const Ponto = () => (
  <Fragment>
    <h1>ponto</h1>
    <FakeText />
  </Fragment>
  );

const FakeText = () => (
  <p>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
  </p>
  )


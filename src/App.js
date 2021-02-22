import React, { Fragment, useEffect, useState } from "react"
import { BrowserRouter as Router, Link, Route, Switch, Redirect } from "react-router-dom"
import Axios from 'axios';
import Navbar from "react-bootstrap/Navbar"
import Nav from "react-bootstrap/Nav"

import './App.css';
import Perfil from './Perfil/perfil'
import Diretor from './Diretor/diretor'
import Login from './Login/login'
import Cadastro from './CRUD/cadastro'
import Edit from './CRUD/edit'
import Delete from './CRUD/delete'
import Ponto from './Ponto/ponto'

export default function App() {

  /////////////
  ////LOGIN////
  /////////////
  const [login, setLogin] = useState(false);
  const [diretor, setDiretor] = useState(false);
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  let dados = [0, ''];
  const [id, setId] = useState(0)
  function handlePasswordChange(event) { setPassword(event.target.value);}
  function handleNameChange(event) { setName(event.target.value);}
  function handleSubmit(event){
    event.preventDefault();
    const pacotinho = {username: name, password: password}
    Axios.post("http://localhost:4001/user/login", pacotinho)
    .then((res) => {
      if(res.status === 200){
        dados = res.data;
        setId(dados.id)
        if(dados.director){setDiretor(true)}
        setLogin(true);
      }else{alert("Erro no envio")}
    })
    .catch(function (err){alert("Erro no login");})
  }
  const formHandlers = {handlePasswordChange, handleNameChange, handleSubmit};
  function redirectToLogin() {if (!login) {return <Redirect to='/login'></Redirect>;}}
  function redirectToPerfil(){
    if (login && diretor) {return <Redirect to='/diretor' ></Redirect>;}
    if (login) {return <Redirect to='/perfil' ></Redirect>;}
  }
  function redirectToHome() {if (!diretor) {return <Redirect to='/'></Redirect>;}}
  
  //////////////
  ///CADASTRO///
  //////////////
  const [nameCadastro, setNameCadastro] = useState('');
  const [passwordCadastro, setPasswordCadastro] = useState('');
  const [emailCadastro, setEmailCadastro] = useState('');
  const [phoneCadastro, setPhoneCadastro] = useState('');
  const [rankCadastro, setRankCadastro] = useState('');
  function handleEmailCadastroChange(event) {setEmailCadastro(event.target.value);}
  function handlePhoneCadastroChange(event) {setPhoneCadastro(event.target.value);}
  function handleNameCadastroChange(event) {setNameCadastro(event.target.value);}
  function handlePasswordCadastroChange(event) {setPasswordCadastro(event.target.value);}
  function handleRankCadastroChange(event) {setRankCadastro(event.target.value);}
  function handleSubmitCadastro(event){
    event.preventDefault();
    const pacotinho = {username: nameCadastro, password: passwordCadastro, email: emailCadastro, celphoneNumber: phoneCadastro, role: rankCadastro}
    Axios.post("http://localhost:4001/user/cadastro", pacotinho)
    .then((res) => {if(res.status === 201){alert("Perfil cadastrado")}})
    .catch(function (err){console.log(err); alert("Erro no cadastro")})
  }
  const formHandlersCadastro = {handleEmailCadastroChange, handlePhoneCadastroChange, handleNameCadastroChange,
                                handlePasswordCadastroChange, handleRankCadastroChange, handleSubmitCadastro};
  //////////////
  ////EDIÇÃO////
  //////////////
  const [nameEdit, setNameEdit] = useState('');
  const [passwordEdit, setPasswordEdit] = useState('');
  const [emailEdit, setEmailEdit] = useState('');
  const [phoneEdit, setPhoneEdit] = useState('');
  function handleEmailEditChange(event) {setEmailEdit(event.target.value);}
  function handlePhoneEditChange(event) {setPhoneEdit(event.target.value);}
  function handleNameEditChange(event) {setNameEdit(event.target.value);}
  function handlePasswordEditChange(event) {setPasswordEdit(event.target.value);}
  const [optionsE,setOptionsE] = useState([])
  useEffect(() => {
    Axios.get("http://localhost:4001/user/search")
    .then(res => {setOptionsE(res.data)})
    .catch((err) => { console.error("ops! ocorreu um erro" + err.response);})
  }, [])
  const [idE,setIdE] = useState()
  const handleSelectChangeEdit = (e) => {
    const {value} = e
    console.log(value)
    setIdE(value)
  }
  function handleSubmitEdit(event){
    event.preventDefault();
    const pacotinho = { id: idE, username: nameEdit, password: passwordEdit, email: emailEdit, celphoneNumber: phoneEdit}
    Axios.put("http://localhost:4001/user", pacotinho)
    .then((res) => {
      if(res.status === 200){
        alert("Perfil atualizado")
      }else{alert("Erro na atualização do perfil");}
    })
    .catch(function (err){console.log(err);})
  }
  const formHandlersEdit = {handleEmailEditChange, handlePhoneEditChange, handleNameEditChange,
                            handlePasswordEditChange, handleSelectChangeEdit, handleSubmitEdit, optionsE};
  //////////////
  ////DELETE////
  //////////////
  const [optionsD,setOptionsD] = useState([])
  useEffect(() => {
    Axios.get("http://localhost:4001/user/search")
    .then(res => {setOptionsD(res.data)})
    .catch((err) => { console.error("ops! ocorreu um erro" + err.response);})
  }, [])
  const [idD,setIdD] = useState()
  const handleSelectChangeDelete = (e) => {
    const {value} = e
    console.log(value)
    setIdD(value)
  }
  function handleSubmitDelete(event){
    event.preventDefault();
    Axios.delete(`http://localhost:4001/user/${idD}`)
    .then((res) => {if(res.status === 200) alert("Usuário " + res.data.username + " apagado")})
    .catch(function (err){console.log(err.response);})
  }
  const formHandlersDelete = {handleSelectChangeDelete, handleSubmitDelete, optionsD};
  //////////////
  ////SEARCH////
  //////////////
  const [options,setOptions] = useState([])
  useEffect(() => {
    Axios.get("http://localhost:4001/user/search")
    .then(res => {setOptions(res.data)})
    .catch((err) => { console.error("ops! ocorreu um erro" + err.response);})
  }, [])
  const [idS,setIdS] = useState()
  const handleSelectChange = (e) => {
    const {value} = e
    console.log(value)
    setIdS(value)
  }
  function handleSubmitSearch (event) {
    event.preventDefault();
    return(<Redirect to="/perfil"></Redirect>)
  }
  const formHandlersBusca = {handleSelectChange, handleSubmitSearch, options};

  
  return (
    <Router>
      <main>
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand><Link to="/">Home </Link></Navbar.Brand>
            <Nav className="mr-auto">
              <Nav.Link><Link to="/login">Login</Link></Nav.Link>
              <Nav.Link><Link to="/perfil">Perfil</Link></Nav.Link>
              <Nav.Link><Link to="/diretor">Diretor</Link></Nav.Link>  
              <Nav.Link><Link to="/cadastro">Cadastro</Link></Nav.Link>
              <Nav.Link><Link to="/edit">Edit</Link></Nav.Link>
              <Nav.Link><Link to="/delete">Delete</Link></Nav.Link>
              <Nav.Link><Link to="/ponto">Ponto</Link></Nav.Link>
            </Nav>
        </Navbar>
        <br />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/diretor">{redirectToLogin()}<Diretor formHandlersBusca={formHandlersBusca} id={id}></Diretor></Route>
          <Route path="/login">{redirectToPerfil()}<Login formHandlers={formHandlers}></Login></Route>
          <Route path="/cadastro">{redirectToHome()}<Cadastro formHandlersCadastro={formHandlersCadastro}></Cadastro></Route>
          <Route path="/edit">{redirectToHome()}<Edit formHandlersEdit={formHandlersEdit}></Edit></Route>
          <Route path="/delete">{redirectToHome()}<Delete formHandlersDelete={formHandlersDelete}></Delete></Route>
          <Route path="/perfil">{redirectToLogin()}<Perfil id={id}></Perfil></Route>
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
    <div className="Recipiente"><Link className="LinkLogin" to="/login">Login</Link></div>
  </Fragment>
);

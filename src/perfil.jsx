import React from 'react';
import './perfil.css';

export default function Perfil() {

    const name = 'EXEMPLO'
    const mail = 'EXEMPLO@gmail.com'
    const phone = '0000-0000'
    return (
        <>
          <p>Nome: {name} </p>
          <p>Email: {mail} </p>
          <p>Telefone: {phone} </p>
        </>
    )
}

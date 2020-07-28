import React from 'react'
import PageDefault from '../../components/PageDefault';
import { Link } from 'react-router-dom'
import  './erro404.css'

function Erro404() {
    return (
        <PageDefault>
    <>
    <h1>ERRO 404</h1>
   <button> <Link to="/">
          Ir para home
        </Link>
    </button>
        </>
      </PageDefault>
    )
}


export default Erro404;

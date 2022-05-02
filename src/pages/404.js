import React from 'react'
import { Link } from 'gatsby'
import Head from "../components/head"


const NotFound = () => {
  return (
    <div>
      <Head title="404"></Head>
      <div>
        <h1>Pagina no encontrada</h1>
        <p><Link to="/">Ir a la pagina principal</Link></p>
      </div>
    </div>
  )
}

export default NotFound
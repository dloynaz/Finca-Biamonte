import React, { useState, useEffect } from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'


import * as headerStyles from './header.module.scss'

import Navbar from './NavBar';

import {

  makeStyles,

} from "@material-ui/core";

const useStyles = makeStyles(() => ({
  header: {
    backgroundColor: "#400CCC",
    paddingRight: "79px",
    paddingLeft: "118px",
  },
  toolbar: {
    display: "flex",
    justifyContent: "space-between",
  },
  logo: {
    fontFamily: "Work Sans, sans-serif",
    fontWeight: 600,
    color: "#FFFEFE",
    textAlign: "left",
  },
  menuButton: {
    fontFamily: "Open Sans, sans-serif",
    fontWeight: 700,
    size: "18px",
    marginLeft: "38px",
  },
  "@media (max-width: 900px)": {
    paddingLeft: 0,
  },
  drawerContainer: {
    padding: "20px 30px",
  }
}));




const Header = () => {
 


  const data = useStaticQuery(graphql`
    query{
        site{
          siteMetadata {
            title
          }
        }
      }
    ` )



  return (
    <header className={headerStyles.header}>
      <h1>
        <Link className={headerStyles.title} to='/'>
          <img className={headerStyles.logoImg} alt="Logo Finca Biamonte" src="https://i.ibb.co/BN6q8fR/azul-1.png"></img>
        </Link>
      </h1>
      <Navbar/>
    </header>
  )
}

export default Header
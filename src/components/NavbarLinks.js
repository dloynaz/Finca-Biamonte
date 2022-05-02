import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

const NavItem = styled(Link)`
  text-decoration: none;
  color: #111;
  display: inline-block;
  white-space: nowrap;
  margin: 0 1vw;
  transition: all 200ms ease-in;
  position: relative;

  :after {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    width: 0%;
    content: ".";
    color: transparent;
    background: goldenrod;
    height: 1px;
    transition: all 0.4s ease-in;
  }

  :hover {
    color: goldenrod;
    ::after {
      width: 100%;
    }
  }

  @media (max-width: 768px) {
    padding: 20px 0;
    font-size: 1.5rem;
    z-index: 6;
  }
`


  
const NavbarLinks = () => {
  return (
    <>
    <NavItem to="/" id="nav-item">Inicio</NavItem>
    <NavItem to="/proyectos" id="nav-item">Proyectos</NavItem>
    <NavItem to="/articulos" id="nav-item">Articulos</NavItem>
    <NavItem to="/nosotros" id="nav-item">Nosotros</NavItem>
    <NavItem to="/contacto" id="nav-item">Contacto</NavItem>
    </>
  )
}

export default NavbarLinks
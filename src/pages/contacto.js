import { Link } from "gatsby"

import Layout from '../components/layout'
import Head from "../components/head"

import ProyectoContainer from "../components/proyectos/proyectoContainer"

import styled from 'styled-components'

import React, { useEffect, useState } from 'react'

import Aos from "aos"
import "aos/dist/aos.css"


const IndexHeaderWrapper = styled.div`
  display: flex; 
  align-content: center;
  height: 500px;
  width: 100%;
  background-image: url("https://i.ibb.co/kytX1Ng/image-2.webp");
  position: relative;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  border-top-left-radius: 25px;
  border-top-right-radius: 25px;
`

const IndexHeaderDiv = styled.div`
  height: 100%;
  width: 100%;
  position: absolute;
  background-color: white;
  opacity: 0.7;
`

const Title = styled.h1`
  z-index: 1;
  text-align: center;
  height: fit-content;
  margin: auto;
  @media (max-width: 768px) {
    font-size: 25px;
    padding-left: 1rem;
    padding-right: 1rem;
  }
`

const NosotrosWrapper = styled.div`
  padding-top: 3rem;
`


const ContactoPagina = () => {
    return (

        <div>
            <Head title="Nostros"></Head>
            <div data-aos="fade-up">
                <IndexHeaderWrapper>
                    <IndexHeaderDiv>
                    </IndexHeaderDiv >
                    <Title data-aos="fade-right">Ven y visita nuestra finca</Title>
                </IndexHeaderWrapper>
            </div>
            <NosotrosWrapper>
                <p>En enero del 2021 logramos materializar un sueño que teníamos desde hace muchos años, crear un espacio donde pudiéramos recibir a  familias, parejas, amigos, escuelas, en la finca.</p>
                <p>Creamos este espacio con el fin de integrar la realización de diferentes procesos educativos, creativos y productivos para el desarrollo armónico y sostenible de la evolución humana.</p>
                <h3>¡Te esperamos para compartir juntos una experiencia de conexión y aprendizaje!</h3>
                <ul className="contact-list">
                    <li> <b>Waze:</b> <a href="https://www.waze.com/en/live-map/directions/costa-rica/san-jose-province/san-isidro-district,-vasquez-de-coronado/finca-agroecologica-biamonte?place=ChIJU4z7xJHmoI8RiYiL4_kzvMQ" target="_blank">Finca Agroecológica Biamonte</a></li>
                    <li> <b>Correo electrónico:</b> <a href="mailto:quesosbiamonte@gmail.com">quesosbiamonte@gmail.com</a></li>
                    <li> <b>Teléfono:</b><a href="tel:84275590">8427-5590</a></li>
                    <li> <b>Dirección:</b> Del cementerio de Coronado 400 metros este y 400 sur del súper campos segunda entrada a mano derecha hasta topar con tapia amarilla.</li>
                </ul>
                <div id="map-container"><iframe id="map" src="https://embed.waze.com/iframe?zoom=16&lat=9.970173&lon=-84.002673&ct=livemap&pin=1" width="600" height="450" allowfullscreen></iframe></div>
            </NosotrosWrapper>            </div >

    )
}

export default ContactoPagina
import { Link } from "gatsby"

import Layout from '../components/layout'
import Head from "../components/head"

import ProyectoContainer from "../components/proyectos/proyectoContainer"

import styled from 'styled-components'

import React, { useEffect, useState } from 'react'

import Aos from "aos"
import "aos/dist/aos.css"


const data = {
    Layout: "title",
    title: "Nosotros",
    id: "nosotros"
}

const dataCarrusel = {
    layout: "carrusel",
    images: [
        {
            src: "https://lh3.googleusercontent.com/6MyAFW9-3uyegYHGCYNlbKmuMZJox1b0gCWy_qai_DQDdCz9mAInrc_jatddsVXx1cqRhntaGS0FDESa-SX2QNwrdqRL8-3ZtDjKZmDHTGMEP31e-QODRVC_5uygDpRwUww3CwkmrSheMEzh6Dc3HRMB9evklvnR9IVDm8X8p6pCFPjLfDo1j3Pmhedjej2rqpPmZ2PGfKxoyJo3k048xTNLCHJCK_axFFHjkETrXutkgFRQ8l4Q3AsiInsf-xwgQ7VIDeGCIW7LaNlMrci0sosvZ9GxD4RIxLm0KtIBcgwDnVPaIl1FUSskHHv1zBdQs6krzPEttDeZLRiRUvSCMGLd2kdsQG7njPAQe8tEoZAoj__t6mWkPaBzoJfmqmNWuAJ5F98UPdqEyKPAMqcRhTRYUejBLYcO-0oQiF_bOP8-SHgfD6xPJMMZUx7iQw6Li_rw3x8Ogn8U_P8Joh0EjkE9xlYOC3dLMihl2s-ppwJ_cxb_7Iq29a9E0wXwItVfF-Kwhrk512eoFej2rXUfSR8ln3ScFTO1hXq1KhSQwhitZ0i5XhJKeoI_0DtSCF_Jw2iTU2p4-DgeN75zt6qdUogpWPHFqQ4gGAWOxca7lB1bJcU-1qWCx-sfHVR4vyC2Lzw0ImC1hc94GUcgZz2nTdfYYeCTr5OaqkwG_Nl7r3SgSdWgSo-8qpzcVrHzRWmuPEZX1Y2moLjtD7GpjC7MMW0=w1263-h568-no?authuser=0",
            alt: "Niños en el jardín reciendo taller de actividades recreativas."
        },
        {
            src: "https://lh3.googleusercontent.com/KnDHX4rCqjP3VQf-eqaT0qo-8Yh9dVPyI-TQq7wy16UR5knH1YU0_5zogjbN6TxdCpQNtdOLb3KCZ_l3XJo-qCZHaq0LhvVzhS9bjIvoMpm7nbtaPgJ_dA9D13J9gE89FN7_uDC-pMo9fb18nYL9b6vfANsvvEWpPvDKUBpta54EePO068g_qH10SWJwD-Z9SJBFDl3YykjUyoMRlfyaks6fo3bECBCJD-OEcwrcZYPa5tLFKlAKtdrg74Hj3YQ_wMxSrxvjc3hLSGLClFUzNv5e4S0tID7qg3Jzht6EdsupIk2-pFL-BqrACIrIHQZQQEoiHNW8Dfh9r4cgnOzOI3gkkvMqViIfXok528a_3qhK9ERSGlL6qIvAqxXIDolJvR3h_fvEZRtbhFrFtmeMM5BZqASh4J5APv_xdNqNCGtX0abgicRxtEGylhh-_PTLo7Cwq_XNx5naNae59bi6diyCKWe44DE-N0k2GZlWCsZUB8SXhiDWMjZ7iWpUAjd0VxvJ7UqHyntZGKl4owcdVOsdhTplCWt5j4MAMbhC2RDd6OTtximWd0t3Vx0ZMZk7nrWVuUU91DTHq7qCZuLWlsFZDEJwyhJZgns8Yf6k2NlZjpH3YI-9eTOa4M1FxYRtMdMCUcZT8DF3tjLmErhFMlfZUUY2zMmeXtK4bkdM5PUmzzcNRzID3FCUWwLk80vw8twqH-U877SK44WIV95MMgU=w146-h193-no?authuser=0",
            alt: "Niños batiendo el cuajo para la elaboración de queso."
        }
    ]
}

const IndexHeaderWrapper = styled.div`
  display: flex; 
  align-content: center;
  height: 500px;
  width: 100%;
  background-image: url("https://i.ibb.co/6yD0QHk/image.webp");
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
 

`

const Title = styled.h1`
  z-index: 1;
  text-align: center;
  height: fit-content;
  margin: auto;
  color: white;
  @media (max-width: 768px) {
    font-size: 25px;
    padding-left: 1rem;
    padding-right: 1rem;
  }
`

const NosotrosWrapper = styled.div`
  padding-top: 3rem;
`


const NostrosPagina = () => {

    useEffect(() => {

        Aos.init({ duration: 2000 })
    });
    

    return (

        <div>
            <Head title="Nostros"></Head>
            <div data-aos="fade-up">
                <IndexHeaderWrapper>
                    <IndexHeaderDiv>
                    </IndexHeaderDiv >
                    <Title data-aos="fade-right">Nosotros</Title>
                </IndexHeaderWrapper>
            </div>
            <NosotrosWrapper>
                <p>En el año 2000 empezamos nuestro sueño en este hermoso territorio con el objetivo de resguardarlo del crecimiento urbano y crear un espacio educativo vivencial que promueva el arte y la salud tanto física como mental, en un entorno agrícola,  fusionando así, el diario vivir de una finca real con actividades lúdicas que potencian la experiencia. </p>
                <p>Siendo muy jóvenes buscamos la manera de hacer económicamente sostenible el proyecto por lo que incursionamos en la producción artesanal de quesos, cultivo de hortalizas orgánicas, plantas medicinales, proyectos educativos y campamentos de verano, además de la reforestación de la cuenca del río ipís, recuperación de suelos, producción de biogás y abonos orgánicos y preparados biodinámicos, creando a lo largo del tiempo un oasis en la ciudad.</p>
                <p>A 20 años de haber iniciado esta aventura nos sentimos satisfechos de lo logrado y listos para continuar nuestra visión. </p>
                <p>En la Finca Biamonte se integra la realización de diferentes procesos educativos, creativos y productivos para el desarrollo armónico y sostenible de la evolución humana. Actualmente, contamos con diversos proyectos, entre ellos, Quesos Biamonte, con 20 años de funcionamiento especializado en productos a base de leche de cabra y vaca, la pulpería dónde podrán degustar de nuestros deliciosos quesos artesanales, campamentos de verano dónde los niños podrán disfrutar de la experiencia del día a día de una finca agroecológica y espacios de recreación para distintos eventos. </p>
                <h3>Valores</h3>
                <ul id="valores-lista">
                    <li> <b>Integralidad</b> <i>“La educación del hombre completo, de todas y cada una de sus facultades y dimensiones”</i></li>
                    <li> <b>Sostenibilidad</b> Garantizando el equilibrio entre crecimiento económico, cuidado del medio ambiente y bienestar social.</li>
                    <li> <b>Respeto</b> Vivir con atención, con consideración por el derecho ajeno y ser consecuente de nuestras decisiones. </li>
                    <li> <b>Interculturalidad</b> Se refiere a la presencia e interacción equitativa de diversas culturas y a la posibilidad de generar expresiones culturales compartidas, a través del diálogo y del respeto mutuo.</li>
                    <li> <b>Intergeneracional</b> Conectar generaciones, empatía, tolerancia.</li>
                </ul>
            </NosotrosWrapper>

        </div>

    )
}

export default NostrosPagina
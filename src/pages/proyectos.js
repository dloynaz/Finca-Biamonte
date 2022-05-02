import React, { useEffect, useState } from "react"

import Layout from '../components/layout'
import Head from "../components/head"
import ProyectosHeader from "../components/proyectos/proyectos-header"

import ProyectoContainer from "../components/proyectos/proyectoContainer"

import { SLIDE_INFO } from '../constants/constants';


import "../style.css"


import styled from 'styled-components'




const Div = styled.div`
overflow-x: hidden;
`


const ProyectosPagina = () => {



    const content = SLIDE_INFO



    return (
        // Refractor this code to array.map
        <Div>
            <Head title="Proyectos"></Head>
            <ProyectosHeader />
            {
                content.map((item) => {
                    return(
                        <ProyectoContainer content={item} />
                    )
                })
            }
        </Div>

    )
}

export default ProyectosPagina
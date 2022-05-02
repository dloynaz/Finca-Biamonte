import React from "react"
import { Link } from 'gatsby'

import IndexHeaderContainer from "../components/inicio/imageContainer"
import SectionContainer from "../components/inicio/SectionContainer"
import { INDEX_INFO } from "../constants/constants" 

import Head from "../components/head"


const IndexPage = () => {
  return(
    <div>
      <Head title="Inicio"></Head>
      <IndexHeaderContainer/>
      {
        INDEX_INFO.map(item => {
          return <SectionContainer title={item.title} description={item.description} direction={item.direction} scale={item.scale} href={item.href} src={item.src} alt={item.alt}/>
        })
      }
      
    </div>
  )
}

export default IndexPage
import styled from 'styled-components'

import React, { useEffect, useState } from 'react'

import Aos from "aos"
import "aos/dist/aos.css"

const IndexHeaderWrapper = styled.div`
  padding: 1rem;
  display: flex; 
  align-content: center;
  height: 500px;
  width: 100%;
  background-image: url("https://i.ibb.co/P4R0szd/image-1.webp");
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
  opacity: 0;
`

const Title = styled.h1`
  z-index: 1;
  text-align: center;
  height: fit-content;
  margin: auto;
  color: white;
  font-size: 1.4rem;
  @media (max-width: 768px) {
    font-size: 25px;
    padding-left: 1rem;
    padding-right: 1rem;
  }

`

const IndexHeaderContainer = () => {
  useEffect(() => {

    Aos.init({ duration: 2000 })
});

  return (
    <div data-aos="fade-up">
    <IndexHeaderWrapper>
      <IndexHeaderDiv>
      </IndexHeaderDiv >
      <Title data-aos="fade-right">La Finca Biamonte es un proyecto agrícola que implementa técnicas orgánicas, alternativas y artesanales para la producción de quesos, huevos y vegetales, así como la realización de diferentes procesos educativos y creativos.</Title>
    </IndexHeaderWrapper>
    </div>
  )
}

export default IndexHeaderContainer
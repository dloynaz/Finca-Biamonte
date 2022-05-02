import React, { useEffect, useState } from 'react'

import { Link } from "gatsby"

import styled from 'styled-components'

import Aos from "aos"

import "aos/dist/aos.css"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'


const SectionContainerWrapper = styled.div`
  display: flex;
  flex-direction: ${props => props.direction ? "row" : "row-reverse"};
  @media (max-width: 768px) {
    flex-direction: column;
  }
`

const ImageContainer = styled.div`
  width: 70%;
  overflow: hidden;
  height: 700px;
  @media (max-width: 768px) {
    width: 100%;
    overflow: hidden;
    height: 400px;
  }
`

const Image = styled.img`
width: 100%;
height: 100%;
object-fit: contain;
transform: ${props => props.scale};
filter: blur(1px);
`

const TextContainer = styled.div`
  width: 31%;
  background-color: ivory;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  @media (max-width: 768px) {
    width: 100%;
  }

`

const ContainerParapragh = styled.p`
  text-align: center;
`

const ContainerTitle = styled.h2`
  text-align: center;
`

const SectionContainer = (props) => {
  useEffect(() => {

    Aos.init({ duration: 2000 })



  });

  const [animate, setAnimate] = useState({transform:"rotate(0deg)"})

const animatePlus = () => {
  if(animate.transform === "rotate(360deg)") {
    setAnimate({transform:"rotate(0deg)"})
  } else {
    setAnimate({transform:"rotate(360deg)"})
  }
  
}




  return (
    <SectionContainerWrapper direction={props.direction}>
      <ImageContainer data-aos="fade-left">
        <Image scale={props.scale} src={props.src} alt={props.alt}></Image>
      </ImageContainer>
      <TextContainer data-aos="fade-right">
        <ContainerTitle id="section-title">{props.title}</ContainerTitle>
        <ContainerParapragh>{props.description}</ContainerParapragh>
        <div className="link-home-container">
          <Link to={props.href} className={`box bounce-2`} id="home-link-icon">
            <FontAwesomeIcon id="icon" icon={faPlus} style={animate}/>
          </Link>
          <Link to={props.href} id="home-link" onMouseEnter={animatePlus} onMouseLeave={animatePlus} >
            <span>MÁS INFORMACIÓN</span>
          </Link>
        </div>
      </TextContainer>
    </SectionContainerWrapper>
  )
}

export default SectionContainer

import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import Aos from "aos"
import "aos/dist/aos.css"

import { Card, makeStyles, Slide } from '@material-ui/core';

import Arrow from './arrow';

const useStyles = makeStyles(() => ({
    card: {
        borderRadius: 5,
        width: "800px",
        padding: '0px',
        margin: '0px',
        display: 'flex',
        justifyContent: 'center',
        ['@media (max-width:767px)']: { // eslint-disable-line no-useless-computed-key
            width: "600px"
        }
    }
}));

const Container = styled.div`

overflow: hidden;
height: 55vh;
width: 100%;
display: flex; 
background-color: ${props => props.layout.layout === "title" ? "beige" : "lightsteelblue;"};
align-content: center;
padding: 30px;
@media (max-width: 767px) {
    flex-direction: column;
    max-height: ${props => props.layout.layout === "title" ? "300px" : "auto"}
  }
  @media (min-width: 767px) {
    flex-direction: ${props => props.layout.reversed === true ? "row-reverse" : "row"}
  }

`

const Title = styled.h2`
margin:auto;
border-radius: 10px;

`

const Div = styled.div`
text-align: center;
padding: 25px;
display: flex;
justify-content: center;
align-items: center;
overflow: hidden;
background-color: darkcyan;
height: 600px;
@media (max-width: 767px) {
    padding: 0px;
  }
`

const CarruselImage = styled.img`
margin-bottom: 0rem;
/* max-height: 300px; */
min-width: 100%;
@media (max-width: 767px) {
    position: relative;
    right: 10%;
  }
`

const ImageDiv = styled.div`
border-radius: 15px;
overflow: hidden;
margin: auto;
width: 100%;
display: flex;
max-height: 350px;
max-width: 550px;
`

const Containerimage = styled.img`
margin-bottom: 0rem;
margin: auto;

`

const ContainerParapragh = styled.p`
  max-width: 400px;
  margin: auto;
  @media (min-width: 768px) {
    padding-right: 10px;
    padding-left: 10px;
    text-align: ${props => props.layout.reversed ? "right" : "left"}
  }
  @media (max-width: 767px) {
    padding-bottom: 20px;
  }
`

const ProyectoContainer = (props) => {

    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.keyCode === 39) {
                onArrowClick('right');
            }
            if (e.keyCode === 37) {
                onArrowClick('left');
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        Aos.init({ duration: 2000 })

        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };


    });


    const [index, setIndex] = useState(0);
    let numSlides = 0

    props.content.images ? numSlides = props.content.images.length : numSlides = 0

    const [slideIn, setSlideIn] = useState(true);
    const [slideDirection, setSlideDirection] = useState('down');
    const [absoluteImage, setAbsoluteImage] = useState({
        left: "50%", transform: "translate(-50%,0)", position: "absolute", zIndex: 1, display: "none"
    })


    const onArrowClick = (direction) => {
        const increment = direction === 'left' ? -1 : 1;
        const newIndex = (index + increment + numSlides) % numSlides;

        const oppDirection = direction === 'left' ? 'right' : 'left';
        setSlideDirection(direction);
        setSlideIn(false);

        setTimeout(() => {
            setIndex(newIndex);
            setSlideDirection(oppDirection);
            setSlideIn(true);
        }, 500);
    };

    const handleAbsoluteImage = (e) => {
        if(absoluteImage.display){
            setAbsoluteImage(
                {
                    left: "50%", transform: "translate(-50%,0)", position: "absolute", zIndex: 1
                }
            )
        } else {
            setAbsoluteImage(
                {
                    left: "50%", transform: "translate(-50%,0)", position: "absolute", zIndex: 1, display: "none"
                }
            )
        }
    }


    const classes = useStyles()

    const setLayout = () => {
        if (props.content.layout === "title") {
            return (
                <Container layout={props.content} data-aos="fade-up" id={props.content.id}><Title id="proyect-container-title">{props.content.title}</Title></Container>
            )
        } else if (props.content.layout === "text") {
            return (
                <Container layout={props.content} data-aos="fade-right">
                    <ContainerParapragh layout={props.content}>{props.content.text}</ContainerParapragh>
                    <ImageDiv>
                        <Containerimage src={props.content.img} alt={props.content.alt}></Containerimage>
                    </ImageDiv>
                </Container>
            )
        } else {
            let { src, alt } = props.content.images[index];
            return (
                <div data-aos="fade-left">
                    <Div >
                        <Arrow direction='left' clickFunction={() => onArrowClick('left')} />
                        <Slide in={slideIn} direction={slideDirection} >
                            <div className="carrusel-div" style={{ maxHeight: "540px", overflow: "hidden", borderRadius: "5px" }}>
                                <Card className={classes.card}>
                                    <CarruselImage src={src} alt={alt}></CarruselImage>
                                </Card>
                            </div>
                        </Slide>
                        <Arrow direction='right' clickFunction={() => onArrowClick('right')} />
                    </Div>
                    <div style={absoluteImage} onClick={handleAbsoluteImage}>
                        <img src={src} alt={alt}></img>
                    </div>
                </div>
            )
        }
    }

    return (
        <div>
            {setLayout()}
        </div>
    )
}


export default ProyectoContainer
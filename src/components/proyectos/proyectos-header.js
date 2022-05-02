import { divide } from 'lodash'
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { makeStyles } from '@material-ui/core/styles';

import ListItem from '@material-ui/core/ListItem';
import { ThumbUpOutlined } from '@material-ui/icons';

import Grow from '@material-ui/core/Grow';


const List = styled.ul`
display:flex;
list-style-type: none;
margin: 0;
justify-content: center;
margin-bottom: 5vh;
@media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }

`

const ListContent = styled.a`
color: #999999;
font-size: .9rem;
margin-right: auto;
margin-left: auto;
text-decoration: none;
height: fit-content;
margin-top: auto;
margin-bottom: auto;
`

const StyledListItem = styled(ListItem)`
    display: flex;
    flex-direction: column;
    opacity: 1;
    border-radius: 10px;
    transition: 1s;

     div{
        background-color: black;
        height: 2px;
        width: 0px;
        margin-left: auto;
        transition: 500ms;
    }
    :hover div{
        width: 15px;
        transition: 500ms;
    }
    :hover {
        background-color: transparent;
    }
`


const useStyles = makeStyles((theme) => ({

}));


const ProyectosHeader = () => {

    const classes = useStyles();

    useEffect(() => {
        handleGrowAnimation()
    },[])

    const handleGrowAnimation = () => {

        setTimeout(function () {
            setState(prevState => {
                return { ...prevState, checked: true }
            })


        }, 1000);

    }


    const [state, setState] = useState({
        height: "0px",
        opacityStyle: "&#hello {opacity: 0}",
        count: 0,
        checked: false
    })

    const animateArrow = () => {
        state.height === "0px" ?             setState(prevState => {
            return { ...prevState, height: "15px" }
        }) :             setState(prevState => {
            return { ...prevState, height: "0px" }
        })
    }

    const proyectos = [
        { name: "Talleres", href: "talleres" },
        { name: "Salón", href: "salon" },
        { name: "Quesera", href: "quesera" },
        { name: "Pulpería", href: "pulperia" },
        { name: "Huerta", href: "huerta" },
        { name: "Campamentos de verano", href: "campamentos-de-verano" }
    ]
    let id = "hello";
    return (
        <List>
            {
                proyectos.map((item) => {
                    id = id + "o"
                    return (
                        <Grow in={state.checked} {...(state.checked ? { timeout: 2000 } : {})}>
                            <StyledListItem id={id} opacity={state.opacityStyle} button onMouseEnter={animateArrow} onMouseLeave={animateArrow}><div></div><ListContent href={`#${item.href}`} id="proyecto-header-title">{item.name}</ListContent></StyledListItem>
                        </Grow>
                    )
                })
            }
        </List>
    )
}

export default ProyectosHeader
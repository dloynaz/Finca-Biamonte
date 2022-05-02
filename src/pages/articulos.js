import React, { useLayoutEffect, useState, useEffect } from "react"

import Layout from '../components/layout'

import { graphql, useStaticQuery, Link } from 'gatsby'


import * as blogStyles from './blog.module.scss'

import Head from "../components/head"

import Grow from '@material-ui/core/Grow';


const ArticulosPagina = () => {

  const data = useStaticQuery(graphql`
  query {
    allContentfulArticulo (
      sort: {
        fields: fechaDePublicacin,
        order: DESC
      }
    ){
      edges{
        node{
          title
          slug
          portada{
            file{
              url
            }
          }
          fechaDePublicacin(formatString: "Do MMM, YYYY")
        }
      }
    }
  }
    `)

  let counter = 0;


  useEffect(() => {
    handleGrowAnimation()
  }, [])

  const handleGrowAnimation = () => {

    setTimeout(function () {
      setState(prevState => {
        return { ...prevState, checked: true }
      })


    }, 1000);

  }

  const [state, setState] = useState({
    checked: false
  })


  return (

    <div>
      <Head title="Articulos"></Head>
      <ol className={blogStyles.posts}>
        {
          data.allContentfulArticulo.edges.map((item) => {
            counter++
            if (counter == 1) {
              return (
                <Grow in={state.checked} {...(state.checked ? { timeout: 2000 } : {})}>
                  <li className={blogStyles.postHeading}>
                    <Link to={`/articulos/${item.node.slug}`}>
                      <div id="image-box">
                        <img src={item.node.portada.file.url}></img>
                      </div>
                      <div className={blogStyles.titleContainer}>
                        <h2 id="blog-title">{item.node.title}</h2>
                        <p>{item.node.fechaDePublicacin}</p>
                      </div>
                    </Link>
                  </li>
                </Grow>
              )
            } else if (counter > 1 && counter < 4) {
              return (
                <Grow in={state.checked} {...(state.checked ? { timeout: 2000 } : {})}>
                  <li className={blogStyles.postSubHeading}>
                    <Link to={`/articulos/${item.node.slug}`}>
                      <div id="image-box">
                        <img src={item.node.portada.file.url}></img>
                      </div>
                      <div className={blogStyles.titleContainer}>
                        <h2 id="blog-title">{item.node.title}</h2>
                        <p>{item.node.fechaDePublicacin}</p>
                      </div>
                    </Link>
                  </li>
                </Grow>
              )
            } else {
              return (
                <Grow in={state.checked} {...(state.checked ? { timeout: 2000 } : {})}>
                  <li className={blogStyles.postItem}>

                    <Link to={`/articulos/${item.node.slug}`}>
                      <div id="image-box">
                        <img src={item.node.portada.file.url}></img>
                      </div>
                      <div className={blogStyles.titleContainer}>
                        <h2 id="blog-title">{item.node.title}</h2>
                        <p>{item.node.fechaDePublicacin}</p>
                      </div>
                    </Link>

                  </li>
                </Grow>
              )
            }
          }
          )
        }
      </ol>
    </div>

  )
}

export default ArticulosPagina


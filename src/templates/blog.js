import React from 'react'

import Layout from '../components/layout'

import { graphql } from 'gatsby'

import { documentToReactComponents } from '@contentful/rich-text-react-renderer'

import { renderRichText } from "gatsby-source-contentful/rich-text"

import Head from "../components/head"


export const query = graphql`
query($slug: String!) {
  contentfulArticulo(slug: { eq: $slug }) {
    title
    fechaDePublicacin(formatString: "MMMM Do, YYYY")
    cuerpoDelArtculo {
      raw
      references {
        ... on ContentfulAsset {
          contentful_id
          __typename
          file {
            url
          }
          title
        }
      }
    }
  }
}
`

const Blog = ({ data }) => {
  const options = {
    renderNode: {
      "embedded-asset-block": node => {
        return (
          <>
            <img
              src={node.data.target.file.url}
              alt={node.data.target.title}
            />
          </>
        )

      },
    },
  }

  return (
    <div id="articulo-container">
      <Head title={data.contentfulArticulo.title}></Head>
      <h1>{data.contentfulArticulo.title}</h1>
      <p>{data.contentfulArticulo.fechaDePublicacin}</p>
      {data.contentfulArticulo.cuerpoDelArtculo && renderRichText(data.contentfulArticulo.cuerpoDelArtculo, options)}

    </div>


  )
}

export default Blog
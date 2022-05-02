/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */


require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})


module.exports = {
  siteMetadata: {
    title: "Finca Biamonte",
    author: "David Loynaz"
  },
  /* Your site config here */
  plugins: [
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'React go',
        short_name: 'Reactgo',
        start_url: '/',
        background_color: '#f7f0eb',
        theme_color: '#a2466c',
        display: 'standalone',
        icon: 'static/favicon.png',
      },
    },
    `gatsby-plugin-layout`,
    `gatsby-plugin-react-helmet`,
    'gatsby-plugin-sass',
    `gatsby-plugin-sharp`,
    `gatsby-plugin-image`,
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "src",
        path: `${__dirname}/src/`
      }
    },
    'gatsby-plugin-sharp',
    `gatsby-theme-material-ui`,
    {
      resolve: "gatsby-transformer-remark" 
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: "ma4rt5elvesx",
        accessToken: "8EC7hMMjpG9PXWhBPFJ5UKrXveGTWsphPx96K3LQhog"
      },
    },
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        // Defaults used for gatsbyImageData and StaticImage
        defaults: {},
        // Set to false to allow builds to continue on image errors
        failOnError: true,
        // deprecated options and their defaults:
        base64Width: 20,
        forceBase64Format: `png`, // valid formats: png,jpg,webp
        useMozJpeg: process.env.GATSBY_JPEG_ENCODER === `MOZJPEG`,
        stripMetadata: true,
        defaultQuality: 50,
      },
    },
  ],
  

}


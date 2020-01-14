import React from 'react'
import { Link, graphql } from 'gatsby'
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Masonry from 'react-masonry-component'
import Img from 'gatsby-image'
import Main from '../components/main';
import MainFeaturedPost from '../components/main-featured-post';
import Flyier from '../components/flyier';
import Layout from "../components/layout"

const IndexPage = ({ data }) => (
  
  <Layout>
    {data.allDatoCmsFlyier.edges.map(({ node: flyier }) => (
        <Flyier key={flyier.id} flyier={flyier} />
      ))}      
    {data.allDatoCmsMainFeaturedPost.edges.map(({ node: post }) => (
        <MainFeaturedPost key={post.id} post={post} />
      ))}        
  </Layout>
)

export default IndexPage

export const query = graphql`
  query IndexQuery {
    allDatoCmsMainFeaturedPost {
      edges {
        node {
          id
          description
          linkText
          title
          image {
              url
            }
        }
      }
    }  
    allDatoCmsFlyier {
      edges {
        node {
          id
          linkText
          title
          subtitle
          description
          servicesIncluded
          content {
            ... on DatoCmsFlyierMainContent {
              id
              column1
              column2
              title
            }
            ... on DatoCmsFlyierSecondaryContent {
              id
              column1
              column1Title
              column2
              column2Title
              column3
              column3Title
              title
              column1Image {
                url
              }
              column2Image {
                url
              }
              column3Image {
                url
              }
            }
          }
          background {
            url
          }
        }
      }
    }    
  }
`

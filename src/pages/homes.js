import React from 'react'
import { Link, graphql } from 'gatsby'
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Masonry from 'react-masonry-component'
import Img from 'gatsby-image'
import Main from '../components/main';
import MainFeaturedPost from '../components/main-featured-post';
import Layout from "../components/layout"

const HomesPage = ({ data }) => (
  
  <Layout>
    {data.allDatoCmsRetreat.edges.map(({ node: retreat }) => (
        <MainFeaturedPost key={retreat.id} post={retreat} />
      ))}  
  </Layout>
)

export default HomesPage

export const query = graphql`
  query HomesPageQuery {
    allDatoCmsRetreat {
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
  }
`
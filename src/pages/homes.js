import React from 'react'
import { Link, graphql } from 'gatsby'
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Masonry from 'react-masonry-component'
import Img from 'gatsby-image'
import Main from '../components/main';
import MainFeaturedPost from '../components/main-featured-post';
import Layout from "../components/layout";
import PageBanner from '../components/page-banner';

const HomesPage = ({ data }) => (  
  <Layout>
        <PageBanner key={data.datoCmsHomesBanner.id} post={data.datoCmsHomesBanner} />
  </Layout>
)

export default HomesPage

export const query = graphql`
  query HomesPageQuery {
    datoCmsHomesBanner {
        id
        image {
            url
        }
        title
        subtitle
        description
        linkText
    } 
  }
`
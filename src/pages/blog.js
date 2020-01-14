import React from 'react'
import { Link, graphql } from 'gatsby'
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Masonry from 'react-masonry-component'
import Img from 'gatsby-image'
import Main from '../components/main';
import FeaturedPost from '../components/featured-post';
import Layout from "../components/layout"


const featuredPosts = [
    {
      title: 'Location',
      date: 'Easy access',
      description:
        'This is a wider card with supporting text below as a natural lead-in to additional content.',
      image: 'https://source.unsplash.com/random',
      imageText: 'Image Text',
    },
    {
      title: 'Safety',
      date: 'Smartlock',
      description:
        'This is a wider card with supporting text below as a natural lead-in to additional content.',
      image: 'https://source.unsplash.com/random',
      imageText: 'Image Text',
    },
  ];

const BlogPage = ({ data }) => (
  
  <Layout>
    <Grid container spacing={4}>
    {featuredPosts.map(post => (
    <FeaturedPost key={post.title} post={post} />
    ))}                
    </Grid>
  </Layout>
)

export default BlogPage

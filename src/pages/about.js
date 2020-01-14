import React from 'react'
import { graphql } from 'gatsby'
import { HelmetDatoCms } from 'gatsby-source-datocms'
import Typography from '@material-ui/core/Typography';
import Img from 'gatsby-image'
import Layout from "../components/layout"

const About = ({ data: { about } }) => (
  <Layout>
    <article className="sheet">
      <HelmetDatoCms seo={about.seoMetaTags} />
      <div className="sheet__inner">
        <Typography variant="h3" gutterBottom>
          {about.title}
        </Typography>        
        <Typography variant="body1" gutterBottom>{about.subtitle}</Typography>
        <div className="sheet__gallery">
          <Img fluid={about.photo.fluid} />
        </div>
        <Typography variant="body2" gutterBottom>
        <div
          dangerouslySetInnerHTML={{
            __html: about.bioNode.childMarkdownRemark.html,
          }}
        />
        </Typography>
      </div>
    </article>
  </Layout>
)

export default About

export const query = graphql`
  query AboutQuery {
    about: datoCmsAboutPage {
      seoMetaTags {
        ...GatsbyDatoCmsSeoMetaTags
      }
      title
      subtitle
      photo {
        fluid(maxWidth: 600, imgixParams: { fm: "jpg", auto: "compress" }) {
          ...GatsbyDatoCmsSizes
        }
      }
      bioNode {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`

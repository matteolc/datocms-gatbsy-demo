import React, { useState } from "react";
import PropTypes from "prop-types";
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Header from './header';
import Footer from './footer';
import { StaticQuery, graphql } from "gatsby";
import { HelmetDatoCms } from "gatsby-source-datocms";

import "../styles/index.sass";


const useStyles = makeStyles(theme => ({
  mainGrid: {
    marginTop: theme.spacing(3),
  },
}));

const sections = [
  { title: 'Homes', url: '/homes' },
  { title: 'Retreats', url: '/retreats' },
  { title: 'Blog', url: '/blog' },
  { title: 'About', url: '/about' },
  //{ title: 'Contact', url: '/contact' },
];

const TemplateWrapper = ({ children }) => {
  const [showMenu, setShowMenu] = useState(false);
  const classes = useStyles();
  return (
    <StaticQuery
      query={graphql`
        query LayoutQuery {
          datoCmsSite {
            globalSeo {
              siteName
            }
            faviconMetaTags {
              ...GatsbyDatoCmsFaviconMetaTags
            }
          }
          datoCmsHome {
            seoMetaTags {
              ...GatsbyDatoCmsSeoMetaTags
            }
            introTextNode {
              childMarkdownRemark {
                html
              }
            }
            copyright
          }
          allDatoCmsSocialProfile(sort: { fields: [position], order: ASC }) {
            edges {
              node {
                profileType
                url
              }
            }
          } 
        }
      `}
      render={data => (
        <React.Fragment>
          <CssBaseline />
          <Container maxWidth="lg">
            <HelmetDatoCms
              favicon={data.datoCmsSite.faviconMetaTags}
              seo={data.datoCmsHome.seoMetaTags}
            />            
            <Header title={data.datoCmsSite.globalSeo.siteName} sections={sections} />
            
            <main style={{paddingTop: 180}}>
              {children}
            </main>
          </Container>
          <Footer title="Footer" description="Something here to give the footer a purpose!" />
        </React.Fragment>  
      )}
    />
  );
};

TemplateWrapper.propTypes = {
  children: PropTypes.object
};

export default TemplateWrapper;

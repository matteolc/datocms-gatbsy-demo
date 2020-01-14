import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { StaticQuery, graphql } from "gatsby";
//import { Link } from "gatsby";
import Link from '@material-ui/core/Link';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },  
  toolbar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
    paddingTop: theme.spacing(2),
  },
  toolbarTitle: {
    flex: 1,
  },
  toolbarSecondary: {
    justifyContent: 'flex-start',
    overflowX: 'auto',
  },
  toolbarLink: {
    padding: theme.spacing(1),
    flexShrink: 0,
  },
}));

export default function Header(props) {
  const classes = useStyles();
  const { sections, title, logo } = props;
  

  return (
    <StaticQuery
      query={graphql`
        query LogoQuery {
          datoCmsAsset( tags: { eq: "logo"} ) {
            id
            url
          }
        }
      `}    
      render={data => (
    <React.Fragment>
      <div className={classes.root}>
        <AppBar position="static" style={{ background: 'transparent', boxShadow: 'none'}}>
          <Toolbar className={classes.toolbar}>
              <Link 
                color="inherit"
                noWrap              
                href="/">
                  <img src={data.datoCmsAsset.url}/>
              </Link>           
          </Toolbar>
          <Toolbar component="nav" variant="dense" className={classes.toolbarSecondary}>
            {sections.map(section => (
              <Link
                color="inherit"
                noWrap
                key={section.title}
                variant="body1"
                href={section.url}
                className={classes.toolbarLink}
              >
                {section.title}
              </Link>
            ))}
          </Toolbar>
        </AppBar>
      </div>
    </React.Fragment>
      )}
    />
  );
}

Header.propTypes = {
  sections: PropTypes.array,
  title: PropTypes.string,
};

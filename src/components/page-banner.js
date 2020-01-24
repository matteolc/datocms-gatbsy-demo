import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import Markdown from "../components/markdown";

const useStyles = makeStyles(theme => ({
  pageBanner: {
    position: 'relative',
    backgroundColor: theme.palette.grey[800],
    color: theme.palette.common.white,
    marginBottom: theme.spacing(4),
    backgroundImage: 'url(https://source.unsplash.com/random)',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(12),
    minHeight: 600
  },
  overlay: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    backgroundColor: 'rgba(0,0,0,.3)',
  },
  pageBannerContent: {
    position: 'relative',
    padding: theme.spacing(1),
    [theme.breakpoints.up('md')]: {
      padding: theme.spacing(6),
      //paddingRight: 0,
    },  
  },
  bannerTitle: {
    background: 'linear-gradient(290deg, rgba(255,255,255,1) 40%, rgba(210,210,210,1) 50%)',
    borderRadius: 4,
    color: 'black',
    padding: theme.spacing(1),
    [theme.breakpoints.up("md")]: {
      padding: theme.spacing(6)
      //paddingRight: 0,
    }

  },  
}));

export default function PageBanner(props) {
  const classes = useStyles();
  const { post } = props;
  
  return (
    <Paper 
      className={classes.pageBanner} 
      style={{ backgroundImage: `url(${post.image.url})` }}>
      {/* Increase the priority of the hero background image */}
      {
        <img 
          style={{ display: 'none' }} 
          src={post.image.url} 
          alt={post.imageText} />
      }
      <div className={classes.overlay} />
      <div className={classes.pageBannerContent}>
      <Grid 
        spacing={2}
        container >
          <Grid item xs={12}>
          <div className={classes.bannerTitle}>
            <Typography 
              component="h1" 
              variant="h3" 
              color="inherit" 
              gutterBottom>
              <div className="flyier__title">{post.title}</div>
            </Typography>
            <Typography
              component="h2"
              variant="h4"
              color="inherit"
              gutterBottom
            >
              <div className="flyier__subtitle">{post.subtitle}</div>
            </Typography>
            <Typography
              component="p"
              variant="h5"
              color="inherit"
              paragraph
            >
              <Markdown className={classes.markdown}>
                {post.description}
              </Markdown>          
            </Typography>   

{/*             <Link variant="subtitle1" href="#">
              <Button variant="contained" color="secondary">              
                  {post.linkText}
              </Button>          
            </Link>  */} 
          </div>
        </Grid>
      </Grid>
      </div>
    </Paper>
  );
}

PageBanner.propTypes = {
  post: PropTypes.object,
};

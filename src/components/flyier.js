import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Link from "@material-ui/core/Link";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Markdown from "../components/markdown";
import Divider from "@material-ui/core/Divider";

const useStyles = makeStyles(theme => ({
  mainFeaturedPost: {
    position: "relative",
    backgroundColor: theme.palette.grey[800],
    color: theme.palette.common.white,
    marginBottom: theme.spacing(4),
    backgroundImage: "url(https://source.unsplash.com/random)",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(12),
    height: "auto"
  },
  overlay: {
    position: "absolute",
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    backgroundColor: "rgba(0,0,0,.3)"
  },
  mainFeaturedPostContent: {
    position: "relative",
    padding: theme.spacing(3),
    [theme.breakpoints.up("md")]: {
      padding: theme.spacing(6)
      //paddingRight: 0,
    }
  },
  card: {
    // minWidth: 275,
    display: "flex"
  },
  markdown: {
    //...theme.typography.body2,
  },
  media: {
    height: 140
  },
  cover: {
    width: 351
  },
  details: {
    display: "flex",
    flexDirection: "column"
  },
  transparentCard: {
      backgroundColor: "rgba(0,0,0,.5)"
  },
  patternCard: {
    //backgroundImage: "url(https://www.transparenttextures.com/patterns/exclusive-paper.png)",
    backgroundColor: "rgba(0,0,0,.8)"
  },
  gradient0: {
    background: 'linear-gradient(290deg, rgba(255,255,255,0.85) 50%, rgba(210,210,210,0.85) 50%)',
    color: 'black'
  },
  gradient4: {
    background: 'linear-gradient(290deg, rgba(255,255,255,0.85) 50%, rgba(210,210,210,0.85) 50%)',
    color: 'black'
  },  
  gradient1: {
    //background: 'linear-gradient(to right, rgba(102, 45, 140, 0.5) 0%, rgba(237, 30, 121, 0.5) 100%),url(https://www.transparenttextures.com/patterns/exclusive-paper.png)'
  },
  gradient2: {
    //background: 'linear-gradient(to right, rgba(213, 133, 255, 0.5) 0%, rgba(0, 255, 238, 0.5) 100%),url(https://www.transparenttextures.com/patterns/exclusive-paper.png)'
  },
  gradient3: {
    //background: 'linear-gradient(to right, rgba(0, 146, 69, 0.5) 0%, rgba(252, 238, 33, 0.5) 100%),url(https://www.transparenttextures.com/patterns/exclusive-paper.png)'
  }
}));

export default function Flyier(props) {
  const classes = useStyles();
  const { flyier } = props;

  return (
    <Paper
      className={classes.mainFeaturedPost}
      style={{ background: `url(${flyier.background.url}) no-repeat rgba(0,0,0,1)` }}
    >
      {/* Increase the priority of the hero background image */}
      {
        <img
          style={{ display: "none" }}
          src={flyier.background.url}
          alt={flyier.imageText}
        />
      }
      <div className={classes.overlay} />
        <div className={classes.mainFeaturedPostContent}>
      <Grid 
        spacing={2}
        container >
          <Grid item xs={12}>
            <Typography
              component="h1"
              variant="h3"
              color="inherit"
              gutterBottom
            >
              <div className="flyier__title">{flyier.title}</div>
            </Typography>
            <Typography
              component="h2"
              variant="h4"
              color="inherit"
              gutterBottom
            >
              {flyier.subtitle}
            </Typography>
            <Typography variant="h5" color="inherit" paragraph>
              <Markdown className={classes.markdown}>
                {flyier.description}
              </Markdown>
            </Typography>
               
          </Grid>          
            <Grid item xs={12} sm={4} md={4}>
              <Card className={classes.gradient0}>
                <CardActionArea>
                  <CardContent>
                    <Typography variant="h4" component="h2">
                    <span
                        className="flyier__title"
                        style={{ "text-align": "left" }}
                      >                        
                      What's included
                      </span>
                    </Typography>
                    <Typography className={classes.pos} color="textSecondary">
                      adjective
                    </Typography>
                    <Typography variant="body2" component="p">
                      <Markdown className={classes.markdown}>
                        {flyier.servicesIncluded}
                      </Markdown>
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Link variant="subtitle1" href="#">
                    <Button variant="contained" size="large" color="secondary">
                      {flyier.linkText}
                    </Button>
                  </Link>
                </CardActions>
              </Card>
            </Grid>
            <Grid item xs={12} sm={8} md={8}>
              <Card className={classes.gradient0}>
                <CardActionArea>
                  <CardContent>
                    <Typography component="h2" variant="h4">
                      <div
                        className="flyier__title"
                        style={{ "text-align": "left" }}
                      >
                        {flyier.content[0].title}
                      </div>
                    </Typography>
                    <Typography variant="subtitle1" color="textSecondary">
                      Mac Miller
                    </Typography>
                    <Markdown className={classes.markdown}>
                      {flyier.content[0].column1}
                    </Markdown>
                  </CardContent>
                </CardActionArea>
{/*                 <CardActions>
                  <Button variant="contained" size="small" color="secondary">
                      Learn More
                    </Button>
                </CardActions>  */}
{/*                 <CardMedia
                  className={classes.cover}
                  image="https://www.datocms-assets.com/20583/1579002542-canva-beautiful-girl-with-art-hair-composition.jpg"
                  title="Live from space album cover"
                /> */}
              </Card>
            </Grid> 
      </Grid>
          <div style={{ paddingTop: 20 }}>
            <Grid
              container
              direction="row"
              justify="center"
              alignItems="top"
              spacing={3}
            >
              {/*                     <Grid item md={12} spacing={0} >
                            <Typography component="h1" variant="h5" color="inherit" gutterBottom>
                    <div className="flyier__title" style={{'text-align': 'center'}}>
                    {flyier.content[1].title}
                    </div>
                    </Typography> 
                    </Grid> */}
              <Grid item xs={12} sm={12} md={3}>
                <Card className={classes.gradient4}>
                  <CardActionArea>
                    <CardMedia
                      className={classes.media}
                      image={flyier.content[1].column1Image.url}
                      title="Contemplative Reptile"
                    />
                    <CardContent>
                      <Typography
                        className={classes.title}
                        color="textSecondary"
                        gutterBottom
                      >
                        Connection Cerimonies
                      </Typography>
                      <Typography variant="h5" component="h2">
                      <div className="flyier__title">{flyier.content[1].column1Title}</div>
                      </Typography>
                      <Typography className={classes.pos} color="textSecondary">
                        adjective
                      </Typography>
                      <Typography variant="body2" component="p">
                        {flyier.content[1].column1}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                  <CardActions>
                    <Button variant="contained" size="small" color="secondary">
                      Learn More
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
              <Grid item xs={12} sm={12} md={3}>
                <Card className={classes.gradient4}>
                  <CardActionArea>
                    <CardMedia
                      className={classes.media}
                      image={flyier.content[1].column2Image.url}
                      title="Contemplative Reptile"
                    />
                    <CardContent>
                      <Typography
                        className={classes.title}
                        color="textSecondary"
                        gutterBottom
                      >
                        Connection Cerimonies
                      </Typography>
                      <Typography variant="h5" component="h2">
                      <div className="flyier__title">{flyier.content[1].column2Title}</div>
                      </Typography>
                      <Typography className={classes.pos} color="textSecondary">
                        adjective
                      </Typography>
                      <Typography variant="body2" component="p">
                        {flyier.content[1].column2}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                  <CardActions>
                    <Button variant="contained" size="small" color="secondary">
                      Learn More
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
              <Grid item xs={12} sm={12} md={3}>
                <Card className={classes.gradient4}>
                  <CardActionArea>
                    <CardMedia
                      className={classes.media}
                      image={flyier.content[1].column3Image.url}
                      title="Contemplative Reptile"
                    />
                    <CardContent>
                      <Typography
                        className={classes.title}
                        color="textSecondary"
                        gutterBottom
                      >
                        Connection Cerimonies
                      </Typography>
                      <Typography variant="h5" component="h2">
                      <div className="flyier__title">{flyier.content[1].column3Title}</div>
                      </Typography>
                      <Typography className={classes.pos} color="textSecondary">
                        adjective
                      </Typography>
                      <Typography variant="body2" component="p">
                        {flyier.content[1].column3}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                  <CardActions>
                    <Button variant="contained" size="small" color="secondary">
                      Learn More
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            </Grid>
          </div>
        </div>
    </Paper>
  );
}

Flyier.propTypes = {
  flyier: PropTypes.object
};

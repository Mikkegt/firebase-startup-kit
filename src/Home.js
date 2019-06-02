import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Header from './Header';
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import StarBorderIcon from '@material-ui/icons/StarBorder';

import image0 from './image/img0.jpg';
import image1 from './image/img1.jpg';
import image2 from './image/img2.jpg';
import image3 from './image/img3.jpg';
import image4 from './image/img4.jpg';
//import tileData from './tileData';

const styles = theme => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing(1),
    paddingTop: theme.spacing(10),
  },
  caption: {
    textAlign: "center",
    width: "100%",
  },
});

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    flexWrap: 'nowrap',
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: 'translateZ(0)',
  },
  title: {
    color: theme.palette.primary.light,
  },
  titleBar: {
    background:
      'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
  },
}));

const tileData = [
  {
    img: image0,
    title: 'Image',
    author: 'author',
  },
  {
    img: image1,
    title: 'Image',
    author: 'author',
  },
  {
    img: image2,
    title: 'Image',
    author: 'author',
  },
  {
    img: image3,
    title: 'Image',
    author: 'author',
  },
  {
    img: image4,
    title: 'Image',
    author: 'author',
  },
];

function ComplexGrid(props) {
  const { classes, user } = props;
  const classes2 = useStyles();

  return (
    /*
    <React.Fragment>
      <Header user={user} />
      <Grid container justify="center" alignItems="center" direction="row" className={classes.root}>
          <Grid className={classes.caption}>
          <Typography component="h2" variant="h5" gutterBottom>
            Welcome to Firebase Starter Kit! 
          </Typography>
          </Grid>
      </Grid>
    </React.Fragment>
    */
   <React.Fragment>
     <Header user={user} />
     <Grid container justify="center" alignItems="center" direction="row" className={classes.root}>
     <Grid className={classes.caption}>
          <Typography component="h2" variant="h5" gutterBottom>
          Hello React+Firebase! 
          </Typography>
          </Grid>
   <div className={classes2.root}>
      <GridList className={classes2.gridList} cols={2.5}>
        {tileData.map(tile => (
          <GridListTile key={tile.img}>
            <img src={tile.img} alt={tile.title} />
            <GridListTileBar
              title={tile.title}
              classes2={{
                root: classes2.titleBar,
                title: classes2.title,
              }}
              actionIcon={
                <IconButton>
                  <StarBorderIcon className={classes2.title} />
                </IconButton>
              }
            />
          </GridListTile>
        ))}
      </GridList>
    </div>
    </Grid>
    </React.Fragment>
  );
}

ComplexGrid.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ComplexGrid);

import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';


const styles = {
    avatar: {
      margin: 10,
    },
    bigAvatar: {
      margin: 10,
      width: 60,
      height: 60,
    },
  }

const placeholderImageUrl = 'https://static.productionready.io/images/smiley-cyrus.jpg'

function ImageAvatars(props) {
    const { classes, src } = props;
    return (
      <Grid container justify="center" alignItems="center">
        <Avatar alt="Remy Sharp" src={src || placeholderImageUrl} className={classes.avatar} />
      </Grid>
    );
}

ImageAvatars.propTypes = {
  src: PropTypes.string // eslint-disable-line react/require-default-props
}

export default withStyles(styles)(ImageAvatars)
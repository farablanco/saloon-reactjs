import _ from 'lodash'
import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';

const styles = theme => ({
    root: {
      position: 'relative',
      overflow: 'hidden',
    },
    appFrame: {
      width: 360,
      height: 360,
      backgroundColor: theme.palette.background.paper,
    },
    menuButton: {
      marginLeft: -12,
      marginRight: 20,
    },
    button: {
      marginBottom: theme.spacing.unit,
    },
    fab: {
      position: 'absolute',
      bottom: theme.spacing.unit * 2,
      right: theme.spacing.unit * 2,
    },
    fabMoveUp: {
      transform: 'translate3d(0, -46px, 0)',
      transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.enteringScreen,
        easing: theme.transitions.easing.easeOut,
      }),
    },
    fabMoveDown: {
      transform: 'translate3d(0, 0, 0)',
      transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.leavingScreen,
        easing: theme.transitions.easing.sharp,
      }),
    },
    snackbar: {
      position: 'absolute',
    },
    snackbarContent: {
      width: 360,
    },
  });

const FormErrors = ({ errors }) => {
  const { classes } = this.props;
  const { open } = this.state;
  
  if (_.isEmpty(errors)) return null

  return (

    <div className={classes.root}>
        <Button className={classes.button} onClick={this.handleClick}>
          Open snackbar
        </Button>
        <div className={classes.appFrame}>
          <AppBar position="static" color="primary">
            <Toolbar>
              <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
                <MenuIcon />
              </IconButton>
              <Typography variant="h6" color="inherit">
                {Object.values(errors).map(error => <li key={error}>{error}</li>)}
              </Typography>
            </Toolbar>
          </AppBar>
          <Snackbar
            open={open}
            autoHideDuration={4000}
            onClose={this.handleClose}
            ContentProps={{
              'aria-describedby': 'snackbar-fab-message-id',
              className: classes.snackbarContent,
            }}
            message={<span id="snackbar-fab-message-id">Archived</span>}
            action={
              <Button color="inherit" size="small" onClick={this.handleClose}>
                Undo
              </Button>
            }
            className={classes.snackbar}
          />
        </div>
      </div>
  )
}

FormErrors.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  classes: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

export default withStyles(styles)(FormErrors);
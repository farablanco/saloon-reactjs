import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Tooltip from '@material-ui/core/Tooltip';
import { lighten } from '@material-ui/core/styles/colorManipulator';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Button from '@material-ui/core/Button';

const toolbarStyles = theme => ({
    root: {
      paddingRight: theme.spacing.unit,
      flexFlow: 'row wrap',
      justifyContent: 'flex-start',
    },
    highlight:
      theme.palette.type === 'light'
        ? {
            color: theme.palette.secondary.main,
            backgroundColor: lighten(theme.palette.secondary.light, 0.85),
          }
        : {
            color: theme.palette.text.primary,
            backgroundColor: theme.palette.secondary.dark,
          },
    spacer: {
      flex: '1 1 100%',
    },
    actions: {
      color: theme.palette.text.secondary,
      display: 'flex',
    },
    title: {
      flex: '0 0 auto',
    },
  });

class DataTableToolbar extends React.Component {

    render() {

        const { numSelected, classes } = this.props;
        return (
            <Toolbar className={classNames(classes.root, {
                [classes.highlight]: numSelected > 0,
            })}
            >
            
                
            <Tooltip title="Delete">
                <Button variant="contained" color="secondary" aria-label="Delete">
                    <FontAwesomeIcon icon="trash" />
                    &nbsp;Delete
                </Button>
            </Tooltip>
            &nbsp;
            <Tooltip title="Edit">
                <Button variant="contained" color="primary" aria-label="Edit">
                    <FontAwesomeIcon icon="edit" />
                    &nbsp;Edit
                </Button>
            </Tooltip>
            &nbsp;
            <Tooltip title="Add">
                <Button variant="contained" color="primary" aria-label="Add">
                    <FontAwesomeIcon icon="plus" />
                    &nbsp;Add
                </Button>
            </Tooltip>  
                
               
            </Toolbar>
        )
    }

}

DataTableToolbar.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
export default withStyles(toolbarStyles, { name: 'MuiToolbar' })(DataTableToolbar);
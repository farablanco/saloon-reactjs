import React from 'react';
import PropTypes from 'prop-types';
//import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
//import DialogActions from '@material-ui/core/DialogActions';
import DialogTitle from '@material-ui/core/DialogTitle';
import Avatar from '@material-ui/core/Avatar';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
//import PersonIcon from '@material-ui/icons/Person';
//import { withStyles } from '@material-ui/core/styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const languages = ['English', '中文'];


class LanguageDialog extends React.Component {

  state = {
    open: false,
  };

  handleClose = () => {
    this.props.onClose(this.props.selectedValue);
  };

  handleListItemClick = value => {
    //this.state.open = false;
    this.props.onClose(value);
  };

  render() {
    const { fullScreen, openLangDialog, classes } = this.props;
    console.log(openLangDialog);
    console.log(fullScreen);
    return (
      <div>
        <Dialog
          fullScreen={fullScreen}
          open={openLangDialog}
          onClose={this.handleClose} 
          aria-labelledby="responsive-dialog-title"
        >
          <DialogTitle id="responsive-dialog-title">{"Change language ?"}</DialogTitle>
          <div>
          <List>
            {languages.map(lang => (
              <ListItem button onClick={() => this.handleListItemClick(lang)} key={lang}>
                <ListItemAvatar>
                  <Avatar className={classes.avatar}>
                    <FontAwesomeIcon icon="language" size="2x" />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText primary={lang} />
              </ListItem>
            ))}
          </List>
          </div>
        </Dialog>
      </div>
    );
  }
}

LanguageDialog.propTypes = {
  fullScreen: PropTypes.bool.isRequired,
  classes: PropTypes.object.isRequired,
  onClose: PropTypes.func,
  selectedValue: PropTypes.string,
};

export default LanguageDialog;
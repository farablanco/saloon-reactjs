import React from "react";
import PropTypes from "prop-types";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import Avatar from "@material-ui/core/Avatar";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListItemText from "@material-ui/core/ListItemText";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core/styles";
import blue from "@material-ui/core/colors/blue";
import DialogContent from "@material-ui/core/DialogContent";
const languages = ["English", "中文"];

const styles = {
  avatar: {
    backgroundColor: blue[100],
    color: blue[600]
  }
};

class LanguageDialog extends React.Component {
  state = {
    open: false,
    selectedValue: "English"
  };

  componentDidMount() {
    //setInterval(this.open, 1000);
  }

  handleClose = () => {
    this.setState({ open: false });
  };

  handleListItemClick = value => {
    this.setState({
      open: false
    });
    this.props.onClose(value);
  };

  handleLanguageMenuOpen = event => {
    console.log(">>> lang menu open");
    this.setState({ open: true });
  };

  render() {
    const { classes, ...other } = this.props;
    return (
      <div>
        <Button
          size="small"
          variant="outlined"
          color="primary"
          onClick={this.handleLanguageMenuOpen}
        >
          <FontAwesomeIcon icon="language" size="2x" />
          &nbsp;Language &nbsp;{this.state.selectedValue}
        </Button>
        <Dialog
          fullScreen
          open={this.state.open}
          aria-labelledby="confirmation-dialog-title"
          {...other}
        >
          <DialogTitle id="confirmation-dialog-title">
            {"Change language ?"}
          </DialogTitle>
          <DialogContent>
            <div>
              <List>
                {languages.map(lang => (
                  <ListItem
                    button
                    onClick={() => this.handleListItemClick(lang)}
                    key={lang}
                  >
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
          </DialogContent>
        </Dialog>
      </div>
    );
  }
}

LanguageDialog.propTypes = {
  classes: PropTypes.object.isRequired
};

const SimpleDialogWrapped = withStyles(styles)(LanguageDialog);
export default SimpleDialogWrapped;

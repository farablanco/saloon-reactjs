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
import i18n from '../../../i18n';

const languages = ["English", "中文"];
const languageCodes = ["en", "zh"];

const styles = {
  avatar: {
    backgroundColor: blue[100],
    color: blue[600]
  }
};

class LanguageDialog extends React.Component {
  state = {
    openDialog: false,
    selectedValueFromdialog: "English"
  };

  componentDidMount() {
    console.log(">>> componentDidMount..." + this.state.openDialog);
    //setInterval(this.open, 1000);
  }

  handleClose = value => {
    console.log(">>> handleclose..." + this.state.openDialog);
    this.setState({ openDialog: false, selectedValueFromdialog: value });
  };

  handleEntered = () =>{
    console.log(">>> handleEntered..." + this.state.openDialog);
    this.refs.listOfLang.focus();
  }

  handleListItemClick = value => {
    console.log(">>> handleListItemClick..." + this.state.openDialog);
    this.setState({
      openDialog: false,
      selectedValueFromdialog: value
    });
    let selectedLangIndex = languages.indexOf(value);
    console.log(languageCodes[selectedLangIndex]);
    i18n.changeLanguage(languageCodes[selectedLangIndex]);
  };

  handleLanguageMenuOpen = () => {
    console.log(">>> lang menu open");
    this.setState({ openDialog: true });
  };

  render() {
    const { classes, ...other } = this.props;
    return (
     
      <div>
        <Button
          className="nav-link"
          onClick={this.handleLanguageMenuOpen}
        >
          <FontAwesomeIcon icon="language" size="2x" />
          &nbsp;Language &nbsp;{this.state.selectedValueFromdialog}
        </Button>
        {this.state.openDialog && (
        <Dialog
          fullScreen
          open={this.state.openDialog}
          aria-labelledby="simple-dialog-title"
          onClose={this.handleClose}
          onEntered={this.handleEntered}
          {...other}
        >
          <DialogTitle id="simple-dialog-title">
            {"Change language ?"}
          </DialogTitle>
          <DialogContent>
            <div ref="listOfLang">
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
        )}
      </div>
    );
  }
}

LanguageDialog.propTypes = {
  classes: PropTypes.object.isRequired
};

const SimpleDialogWrapped = withStyles(styles)(LanguageDialog);
export default SimpleDialogWrapped;

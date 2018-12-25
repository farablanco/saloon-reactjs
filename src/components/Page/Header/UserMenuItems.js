import React from 'react'
import { NavLink } from 'react-router-dom'
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ImageAvatars from '../../Avatar'
//import PropTypes from 'prop-types'
import Button from '@material-ui/core/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import LanguageDialog from './LangDialog';

class UserMenuItems extends React.Component {
    state = {
        openLanguageDialog: false,
        selectedValue: "English"
    };

    handleLanguageMenuOpen = event => {
        console.log("lang menu open");
        this.setState({ openLanguageDialog: true });
    };

    handleClose = value => {
        this.setState({ selectedValue: value, openLanguageDialog: false });
    };

    //<ImageAvatars src={user.image} className="user-pic" alt="" /> {user.username}
    render() {
        const { userA, anchorEl, isMenuOpen, menuClose, classes} = this.props;
        return (
            
            <Menu
              anchorEl={anchorEl}
              anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
              transformOrigin={{ vertical: 'top', horizontal: 'right' }}
              open={isMenuOpen}
              onClose={menuClose}
            >
                <MenuItem>
                <ImageAvatars src={userA.image} className="user-pic" alt="" />{userA.email}
                </MenuItem>
                <MenuItem onClick={menuClose}>
                    <NavLink to="/profile" exact className="nav-link">
                        <Button size="small" className={classes.margin}>
                            <FontAwesomeIcon icon="user" size="2x" />&nbsp;My Account
                        </Button>
                    </NavLink>
                </MenuItem>
                <MenuItem onClick={menuClose}>
                    <Button size="small" className={classes.margin} onClick={this.handleLanguageMenuOpen}>
                        <FontAwesomeIcon icon="language" size="2x" />&nbsp;Language ({this.state.selectedValue})
                    </Button> 
                    <LanguageDialog onClose={this.handleClose} openLangDialog={this.state.openLanguageDialog} fullScreen={false} classes={classes} selectedValue={this.state.selectedValue}></LanguageDialog>
                </MenuItem>
                <MenuItem onClick={menuClose}><NavLink to="/logout" exact className="nav-link">
                    <Button size="small" className={classes.margin}>
                    <FontAwesomeIcon icon="sign-out-alt" size="2x" />&nbsp;Logout
                    </Button></NavLink>
                </MenuItem>
            </Menu>
            
        );
    }
}

/*
UserMenuItems.propTypes = {
    user: PropTypes.shape({
      username: PropTypes.string.isRequired,
      image: PropTypes.string
    }).isRequired
  }
  */

export default UserMenuItems                    
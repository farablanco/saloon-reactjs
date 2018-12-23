import React from 'react'
import { NavLink } from 'react-router-dom'
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ImageAvatars from '../../Avatar'
//import PropTypes from 'prop-types'
import Button from '@material-ui/core/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class UserMenuItems extends React.Component {

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
                            My Account
                        </Button>
                    </NavLink>
                </MenuItem>
                
                <MenuItem onClick={menuClose}><NavLink to="/logout" exact className="nav-link">
                    <Button size="small" className={classes.margin}>
                        Logout
                    </Button></NavLink>
                </MenuItem>
                <MenuItem onClick={menuClose}>
                    <NavLink to="/changeLanguage" className="nav-link">
                        <Button size="small" className={classes.margin}>
                            <FontAwesomeIcon icon="language" />Language
                        </Button> 
                    </NavLink>
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
import React from 'react'
import { NavLink } from 'react-router-dom'
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import SimpleDialogWrapped from "./LangDialog";

class GuestMenuItems extends React.Component {

    render() {
        const { anchorEl, isMenuOpen, menuClose , classes} = this.props;
        console.log("GuestMenuItems > isMenuOpen >"  + isMenuOpen);
        return (
            <Menu
              anchorEl={anchorEl}
              anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
              transformOrigin={{ vertical: 'top', horizontal: 'right' }}
              open={isMenuOpen}
              onClose={menuClose}
            >
                <MenuItem onClick={menuClose}>
                    <NavLink to="/login" exact className="nav-link">
                        <Button size="small" className={classes.margin}>
                        <FontAwesomeIcon icon="user" size="2x"/>&nbsp;Sign In
                        </Button>
                    </NavLink>
                </MenuItem>
                <MenuItem>
                    <NavLink to="/register" className="nav-link">
                        <Button size="small" className={classes.margin}>
                            <FontAwesomeIcon icon="user" size="2x"/>&nbsp;Sign up 
                        </Button> 
                    </NavLink>
                </MenuItem>
                <MenuItem >
                    <SimpleDialogWrapped />
                </MenuItem>
            </Menu>
        );
    }
}

export default GuestMenuItems
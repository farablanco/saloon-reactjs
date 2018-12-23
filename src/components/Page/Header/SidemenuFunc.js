import { Fragment } from "react";
import React from 'react';
//import InboxIcon from '@material-ui/icons/MoveToInbox';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
//import MailIcon from '@material-ui/icons/Mail';
import HomeIcon from '@material-ui/icons/Home';
import CardGiftcardIcon from '@material-ui/icons/CardGiftcard';

import { NavLink } from 'react-router-dom'
import Divider from '@material-ui/core/Divider';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class SidemenuFunc extends React.Component {
    
    render() {
        return (
            <Fragment>
            <List>
                <ListItem button key="Outlet">
                    <ListItemIcon><HomeIcon /></ListItemIcon>
                    <NavLink to="/outlet" exact className="nav-link">
                    <ListItemText primary="Outlet" />
                    </NavLink>  
                </ListItem>
                <ListItem button key="Product">
                    <ListItemIcon><CardGiftcardIcon /></ListItemIcon>
                    <NavLink to="/product" exact className="nav-link">
                    <ListItemText primary="Product" />
                    </NavLink>  
                </ListItem>
                <ListItem button key="Hairdresser">
                    <ListItemIcon><FontAwesomeIcon icon="cut" /></ListItemIcon>
                    <NavLink to="/hairdresser" exact className="nav-link">
                    <ListItemText primary="Hairdresser" />
                    </NavLink>  
                </ListItem>
                <ListItem button key="User">
                    <ListItemIcon><FontAwesomeIcon icon="user" /></ListItemIcon>
                    <NavLink to="/user" exact className="nav-link">
                    <ListItemText primary="User" />
                    </NavLink>  
                </ListItem>
                <ListItem button key="User Pts">
                    <ListItemIcon><FontAwesomeIcon icon="gifts" /></ListItemIcon>
                    <NavLink to="/userPts" exact className="nav-link">
                    <ListItemText primary="User Pts" />
                    </NavLink>  
                </ListItem>
                <ListItem button key="Membership">
                    <ListItemIcon><FontAwesomeIcon icon="user-circle" /></ListItemIcon>
                    <NavLink to="/membership" exact className="nav-link">
                    <ListItemText primary="Membership" />
                    </NavLink>  
                </ListItem>
                <ListItem button key="Membership Product">
                    <ListItemIcon><FontAwesomeIcon icon="rocket" /></ListItemIcon>
                    <NavLink to="/membershipProduct" exact className="nav-link">
                    <ListItemText primary="Membership Product" />
                    </NavLink>  
                </ListItem>
                <ListItem button key="Payment">
                    <ListItemIcon><FontAwesomeIcon icon="money-bill-alt" /></ListItemIcon>
                    <NavLink to="/payment" exact className="nav-link">
                    <ListItemText primary="Payment" />
                    </NavLink>  
                </ListItem>
                <ListItem button key="Booking">
                    <ListItemIcon><FontAwesomeIcon icon="calendar-check" /></ListItemIcon>
                    <NavLink to="/booking" exact className="nav-link">
                    <ListItemText primary="Booking" />
                    </NavLink>  
                </ListItem>
            </List>
            <Divider />
            <List>
                <ListItem button key="Settings">
                    <ListItemIcon><FontAwesomeIcon icon="wrench" /></ListItemIcon>
                    <NavLink to="/Settings" exact className="nav-link">
                    <ListItemText primary="Settings" />
                    </NavLink>  
                </ListItem>
                <ListItem button key="About">
                    <ListItemIcon><FontAwesomeIcon icon="carrot" /></ListItemIcon>
                    <NavLink to="/About" exact className="nav-link">
                    <ListItemText primary="About" />
                    </NavLink>  
                </ListItem>
            </List>
            </Fragment>
        )
    }
}

export default SidemenuFunc;
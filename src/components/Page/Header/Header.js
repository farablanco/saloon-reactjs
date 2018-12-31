//import { NavLink } from 'react-router-dom'
import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
//import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import AppBar from '@material-ui/core/AppBar';
import InputBase from '@material-ui/core/InputBase';
import Badge from '@material-ui/core/Badge';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { fade } from '@material-ui/core/styles/colorManipulator';
import { withStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import AccountCircle from '@material-ui/icons/AccountCircle';
import NotificationsIcon from '@material-ui/icons/Notifications';
import MoreIcon from '@material-ui/icons/MoreVert';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import classNames from 'classnames';
import WithViewer from '../../WithViewer'
import { NavLink } from 'react-router-dom'
//import Button from '@material-ui/core/Button';
import GuestMenuItems from './GuestMenuItems'
import UserMenuItems from './UserMenuItems'
import SidemenuFunc from './SidemenuFunc'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Trans } from 'react-i18next';
import { withGlobalState } from 'react-globally'

const drawerWidth = 240;

const styles = theme => ({
    root: {
      display: 'flex',
    },
    grow: {
        flexGrow: 1,
    },
    appBar: {
      transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
    },
    appBarShift: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
      transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    menuButton: {
      marginLeft: 12,
      marginRight: 20,
    },
    hide: {
      display: 'none',
    },
    drawer: {
      width: drawerWidth,
      flexShrink: 0,
    },
    drawerPaper: {
      width: drawerWidth,
    },
    drawerHeader: {
      display: 'flex',
      alignItems: 'center',
      padding: '0 8px',
      ...theme.mixins.toolbar,
      justifyContent: 'flex-end',
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing.unit * 3,
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      marginLeft: -drawerWidth,
    },
    contentShift: {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    },
    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.white, 0.15),
        '&:hover': {
          backgroundColor: fade(theme.palette.common.white, 0.25),
        },
        marginRight: theme.spacing.unit * 2,
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
          marginLeft: theme.spacing.unit * 3,
          width: 'auto',
        },
      },
      searchIcon: {
        width: theme.spacing.unit * 9,
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      },
      inputRoot: {
        color: 'inherit',
        width: '100%',
      },
      inputInput: {
        paddingTop: theme.spacing.unit,
        paddingRight: theme.spacing.unit,
        paddingBottom: theme.spacing.unit,
        paddingLeft: theme.spacing.unit * 10,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
          width: 200,
        },
      },
      sectionDesktop: {
        display: 'none',
        [theme.breakpoints.up('md')]: {
          display: 'flex',
        },
      },
      sectionMobile: {
        display: 'flex',
        [theme.breakpoints.up('md')]: {
          display: 'none',
        },
      },
      margin: {
        margin: theme.spacing.unit,
      },
      navLink: { 
        textDecoration: 'none', 
        color: 'white' 
      },
  });


  class Header extends React.Component {
    state = {
      open: false,
      anchorEl: null,
      openLanguageDialog: false
    };
  
    handleDrawerOpen = () => {
        this.setState({ open: true });
    };

    handleDrawerClose = () => {
        this.setState({ open: false });
    };

    handleProfileMenuOpen = event => {
      this.setState({ anchorEl: event.currentTarget });
    };

    handleMenuClose = () => {
        this.setState({ anchorEl: null });
        this.handleMobileMenuClose();
    };
    
    handleMobileMenuOpen = event => {
        this.setState({ mobileMoreAnchorEl: event.currentTarget });
    };

    handleMobileMenuClose = () => {
        this.setState({ mobileMoreAnchorEl: null });
    };

    componentWillReceiveProps(props) {
      console.log("componentWillReceiveProps ???")
    }

    render() {
        const { classes, theme, globalState} = this.props;
        const { open, anchorEl, mobileMoreAnchorEl } = this.state;
        const isMenuOpen = Boolean(anchorEl);
        const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
        console.log("isLoggedIn ? " + globalState.isLoggedIn)
        
        const renderMenu = (
            <Fragment>
            {
                globalState.isLoggedIn ? (
                  <WithViewer>
                  {viewer => (
                      viewer? <UserMenuItems classes={classes}  userA={viewer} menuClose={this.handleMenuClose} isMenuOpen={isMenuOpen} anchorEl={anchorEl}/> :<GuestMenuItems classes={classes}  menuClose={this.handleMenuClose} isMenuOpen={isMenuOpen} anchorEl={anchorEl}/>
                  )}
                  </WithViewer>
                ): 
                  <GuestMenuItems classes={classes}  menuClose={this.handleMenuClose} isMenuOpen={isMenuOpen} anchorEl={anchorEl}/>
              }</Fragment>
        );
    
        const renderMobileMenu = (
            <Menu
                anchorEl={mobileMoreAnchorEl}
                anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
                transformOrigin={{ vertical: 'top', horizontal: 'right' }}
                open={isMobileMenuOpen}
                onClose={this.handleMobileMenuClose}
            >
                <MenuItem>
                <NavLink to="/Home" exact className={classes.navLink}>
                  <IconButton color="inherit">
                      <FontAwesomeIcon icon="home" />
                  </IconButton>
                  <p>Home</p>
                </NavLink>
                </MenuItem>
                <MenuItem>
                <IconButton color="inherit">
                    <Badge badgeContent={11} color="secondary">
                    <NotificationsIcon />
                    </Badge>
                </IconButton>
                <p>Notifications</p>
                </MenuItem>
                <MenuItem onClick={this.handleProfileMenuOpen}>
                <IconButton color="inherit">
                    <AccountCircle />
                </IconButton>
                {globalState.isLoggedIn ?(
                    <WithViewer>
                    {viewer => (
                         viewer ? <UserMenuItems classes={classes}  userA={viewer} menuClose={this.handleMenuClose} isMenuOpen={isMenuOpen} anchorEl={anchorEl}/> : <GuestMenuItems classes={classes}  menuClose={this.handleMenuClose} isMenuOpen={isMenuOpen} anchorEl={anchorEl}/>
                    )}
                    </WithViewer>
                    ): 
                    <GuestMenuItems classes={classes}  menuClose={this.handleMenuClose} isMenuOpen={isMenuOpen} anchorEl={anchorEl}/>
                }
                
                </MenuItem>
            </Menu>
        );
      
        return (
            <div className={classes.root}>
              <CssBaseline />
              <AppBar
                position="fixed"
                className={classNames(classes.appBar, {
                  [classes.appBarShift]: open,
                })}
              >
                <Toolbar disableGutters={!open}>
                  <IconButton
                    color="inherit"
                    aria-label="Open drawer"
                    onClick={this.handleDrawerOpen}
                    className={classNames(classes.menuButton, open && classes.hide)}
                  >
                    <MenuIcon />
                  </IconButton>
                  <Typography variant="h6" color="inherit" noWrap>
                  <Trans>Reward Pts Admin</Trans>
                  </Typography>
                  <div className={classes.search}>
                    <div className={classes.searchIcon}>
                    <SearchIcon />
                    </div>
                    <InputBase
                    placeholder="Search…"
                    classes={{
                        root: classes.inputRoot,
                        input: classes.inputInput,
                    }}
                    />
                </div>
                <div className={classes.grow} />
                <div className={classes.sectionDesktop}>
                    <NavLink to="/Home" exact className={classes.navLink}>
                        <IconButton color="inherit">
                            <FontAwesomeIcon icon="home" />
                        </IconButton>
                    </NavLink>
                    <IconButton color="inherit">
                    <Badge badgeContent={17} color="secondary">
                        <NotificationsIcon />
                    </Badge>
                    </IconButton>
                    <IconButton
                    aria-owns={this.state.open ? 'material-appbar' : undefined}
                    aria-haspopup="true"
                    onClick={this.handleProfileMenuOpen}
                    color="inherit"
                    >
                    <AccountCircle />
                    </IconButton>
                </div>
                <div className={classes.sectionMobile}>
                    <IconButton aria-haspopup="true" onClick={this.handleMobileMenuOpen} color="inherit">
                    <MoreIcon />
                    </IconButton>
                </div>
                </Toolbar>
              </AppBar>
              {renderMenu}
              {renderMobileMenu}
              <Drawer
                className={classes.drawer}
                variant="persistent"
                anchor="left"
                open={open}
                classes={{
                  paper: classes.drawerPaper,
                }}
              >
                <div className={classes.drawerHeader}>
                  <IconButton onClick={this.handleDrawerClose}>
                    {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
                  </IconButton>
                </div>
                <Divider />
                <SidemenuFunc></SidemenuFunc>
              </Drawer>
            </div>
          );
        }
    }

Header.propTypes = {
    classes: PropTypes.object.isRequired,
    container: PropTypes.object,
    theme: PropTypes.object.isRequired,
};

export default withGlobalState(withStyles(styles, { withTheme: true })(Header));
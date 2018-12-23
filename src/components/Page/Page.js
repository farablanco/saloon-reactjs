import PropTypes from 'prop-types'
import React, {Fragment} from 'react'
//import classNames from 'classnames';
import { Helmet } from 'react-helmet'
import Footer from './Footer'
import Header from './Header'
import { withStyles } from '@material-ui/core/styles';

//const drawerWidth = 240;
const styles = theme => ({
    Site: {
        margin: 0,
    },
    Sitecontent: {
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
    
        display: "flex",
        flexFlow: "column"
    },
    topmenu: {
        width: "100%",
        padding: "1em",
        flex: "0 0 auto",
    },
    mainPage: {
        flex: "1 1 auto",
        overflowY: "scroll"
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing.unit * 10,
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        marginLeft: 0,
    },
});


class Page extends React.Component {
    

    render() {
        const { classes, children, title, ...otherProps} = this.props;
        return (
            <Fragment>
                <Helmet title={`${title} - Reward Pts Admin`} />
                <Header className="topmenu"/>
                <main className={classes.content}>
                <div className="mainPage" {...otherProps}>
                    {children}
                </div>
                </main>
                <Footer />
            </Fragment>
        )
    }
}

Page.propTypes = {
    children: PropTypes.node.isRequired,
    title: PropTypes.string.isRequired
}

export default withStyles(styles)(Page)
import gql from 'graphql-tag'
import PropTypes from 'prop-types'
import React, { Component, Fragment } from 'react'
import { withApollo } from 'react-apollo'
import Page from './Page'
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
//import Paper from '@material-ui/core/Paper';
import TablePaginationActions from './TablePagination'
import TableFooter from '@material-ui/core/TableFooter';
import TablePagination from '@material-ui/core/TablePagination';

/* eslint-disable graphql/template-strings */
const CHANGE_FEED_FILTER = gql`
  mutation ChangeFeedFilter($type: String) {
    changeFeedFilter(type: $type) @client
  }
`
/* eslint-enable */
const styles = theme => ({
    root: {
      width: '100%',
      marginTop: theme.spacing.unit * 3,
      overflowX: 'auto',
    },
    table: {
      minWidth: 700,
    },
    tableCell: {
      paddingRight: 4,
      paddingLeft: 5,
    },
    tableRow: {
      display: 'flex',
      flexWrap: 'wrap',
    },
  });
 
class DataTable extends Component {
    state = {
        rows: [
           
        ],
        page: 0,
        rowsPerPage: 15,
        activateScroll: 'hidden',
    }

    componentWillUnmount() {
        const { client } = this.props
    
        client.mutate({
          mutation: CHANGE_FEED_FILTER,
          variables: { type: null }
        })
    
        window.removeEventListener('resize', this.resize)
      }
    
      handleChangePage = (event, page) => {
        this.setState({ page });
      };
    
      handleChangeRowsPerPage = event => {
        this.setState({ rowsPerPage: event.target.value });
      };
    
      resize = () => {
        if(window.innerWidth <= 760){
          this.setState({activateScroll: 'scroll'});
        }else{
          this.setState({activateScroll: 'hidden'});
        }
      }
    
      componentDidMount() {
        window.addEventListener('resize', this.resize)
      }

        render(){
            const { classes , rows} = this.props;
            const { rowsPerPage, page } = this.state;

            //const emptyRows = rowsPerPage - Math.min(rowsPerPage, rows.length - page * rowsPerPage);
            return (
            
            <Page title="Home" className="classes.mainPage">
            <div style={{width: 'auto', overflowX: this.state.activateScroll}}>
                <Table className={classes.table}>
                    <TableHead>
                    <TableRow className="classes.tableRow">
                        <TableCell align="right">Employee Name</TableCell>
                        <TableCell align="right">Customer Name</TableCell>
                        <TableCell align="right">Booking Datetime</TableCell>
                        <TableCell align="right">Status</TableCell>
                    </TableRow>
                    </TableHead>
                    <TableBody>
                    {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map(row => {
                        return (
                        <TableRow className="classes.tableRow" key={row.id}>
                            <TableCell component="th" scope="row">
                            {row.employee}
                            </TableCell>
                            <TableCell align="right">{row.customer}</TableCell>
                            <TableCell align="right">{row.datetime}</TableCell>
                            <TableCell align="right">{row.status}</TableCell>
                        </TableRow>
                        );
                    })}
                    {rows.length === 0 ? (
                        <TableRow className="classes.tableRow">
                            <TableCell colSpan={2}></TableCell>
                            <TableCell align="center">No record found !</TableCell>
                            <TableCell colSpan={2}></TableCell>
                        </TableRow>
                    ):(
                        <Fragment/>
                    )}
                    </TableBody>
                    
                    <TableFooter>
                        <TableRow>
                        {rows.length > 0 ? (  
                        <TablePagination
                            rowsPerPageOptions={[5, 10, 25]}
                            colSpan={4}
                            count={rows.length}
                            rowsPerPage={rowsPerPage}
                            page={page}
                            SelectProps={{
                            native: true,
                            }}
                            onChangePage={this.handleChangePage}
                            onChangeRowsPerPage={this.handleChangeRowsPerPage}
                            ActionsComponent={TablePaginationActions}/>
                        ):(
                            <Fragment/>
                        )}
                        </TableRow>
                    </TableFooter>
                </Table>
                </div>
            </Page>
        )
    }
}

DataTable.propTypes = {
    client: PropTypes.shape({
      mutate: PropTypes.func.isRequired
    }).isRequired
  }

export default withApollo(withStyles(styles)(DataTable))
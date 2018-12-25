import gql from 'graphql-tag'
import PropTypes from 'prop-types'
import React, { Component, Fragment } from 'react'
import { withApollo } from 'react-apollo'
import Page from '../Page'
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
//import Paper from '@material-ui/core/Paper';
import TablePaginationActions from '../TablePagination'
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
  });

  let id = 0;
  function createData(employee, customer, datetime, status) {
    id += 1;
    return { id, employee, customer, datetime, status };
  }

class Home extends Component {

    state = {
        rows: [
            createData('Employee A', 'Customer A', '24-12-2018 11:00', 'confirm'),
            createData('Employee B', 'Customer A', '24-12-2018 12:00', 'confirm'),
            createData('Employee C', 'Customer A', '24-12-2018 13:00', 'confirm'),
            createData('Employee D', 'Customer A', '24-12-2018 14:00', 'confirm'),
            createData('Employee E', 'Customer A', '24-12-2018 15:00', 'confirm'),
        ].sort((a, b) => (a.datetime < b.datetime ? -1 : 1)),
        page: 0,
        rowsPerPage: 15,
    }

  componentWillUnmount() {
    const { client } = this.props

    client.mutate({
      mutation: CHANGE_FEED_FILTER,
      variables: { type: null }
    })
  }

  handleChangePage = (event, page) => {
    this.setState({ page });
  };

  handleChangeRowsPerPage = event => {
    this.setState({ rowsPerPage: event.target.value });
  };

  render() {
    const { classes } = this.props;
    const { rows, rowsPerPage, page } = this.state;

    //const emptyRows = rowsPerPage - Math.min(rowsPerPage, rows.length - page * rowsPerPage);
    return (
      <Page title="Home" className="home-page">
        <Table className={classes.table}>
            
            <TableHead>
            <TableRow>
                <TableCell align="right">Employee Name</TableCell>
                <TableCell align="right">Customer Name</TableCell>
                <TableCell align="right">Booking Datetime</TableCell>
                <TableCell align="right">Status</TableCell>
            </TableRow>
            </TableHead>
            <TableBody>
            {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map(row => {
                return (
                <TableRow key={row.id}>
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
                <TableRow>
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
      
      </Page>
    )
  }
}

Home.propTypes = {
  client: PropTypes.shape({
    mutate: PropTypes.func.isRequired
  }).isRequired
}

export default  withApollo(withStyles(styles)(Home))
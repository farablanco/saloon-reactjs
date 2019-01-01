import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import DataTable from "../DataTable";
import Page from "../Page";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import Checkbox from "@material-ui/core/Checkbox";

const styles = theme => ({
  root: {
    width: "100%",
    marginTop: theme.spacing.unit * 3,
    overflowX: "auto"
  }
});

let id = 0;
function createData(
  email,
  firstName,
  lastName,
  ptsBalance,
  membership,
  contacNo
) {
  id += 1;
  return { id, email, firstName, lastName, ptsBalance, membership, contacNo };
}

const CustomTableCell = withStyles(theme => ({
  head: {
    backgroundColor: theme.palette.common.white,
    color: theme.palette.common.black
  },
  body: {
    fontSize: 14
  }
}))(TableCell);

class Users extends Component {
  state = {
    rows: [],
    page: 0,
    rowsPerPage: 15,
    selected: []
  };

  componentDidMount() {
    let arrUsers = [];
    arrUsers.push(
      createData(
        "bunnyppl@gmail.com",
        "Kenneth",
        "Phang",
        "1000",
        "Gold",
        "6591450518"
      )
    );
    console.log(arrUsers);
    this.setState({
      rows: arrUsers
    });
    console.log(this.state.rows);
  }

  getStripedStyle(index) {
    return { background: index % 2 ? "#fafafa" : "white" };
  }

  isSelected = id => this.state.selected.indexOf(id) !== -1;

  render() {
    //const { classes } = this.props;
    const { rowsPerPage, page } = this.state;
    const { rows } = this.state;

    const userHeader = (
      <Fragment>
        <CustomTableCell align="right">Email</CustomTableCell>
        <CustomTableCell align="right">First Name</CustomTableCell>
        <CustomTableCell align="right">Last Name</CustomTableCell>
        <CustomTableCell align="right">Pts Balance</CustomTableCell>
        <CustomTableCell align="right">Membership</CustomTableCell>
        <CustomTableCell align="right">Contact No.</CustomTableCell>
      </Fragment>
    );

    const userCols = (
      <Fragment>
        {rows
          .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
          .map((row, index) => {
            const isSelected = this.isSelected(row.id);
            return (
              <TableRow
                className="classes.tableRow"
                style={{ ...this.getStripedStyle(index) }}
                key={row.id}
              >
                <TableCell style={{ width: "10%" }}>
                  <Checkbox checked={isSelected} />
                </TableCell>
                <CustomTableCell align="right">{row.email}</CustomTableCell>
                <CustomTableCell align="right">{row.firstName}</CustomTableCell>
                <CustomTableCell align="right">{row.lastName}</CustomTableCell>
                <CustomTableCell align="right">
                  {row.ptsBalance}
                </CustomTableCell>
                <CustomTableCell align="right">
                  {row.membership}
                </CustomTableCell>
                <CustomTableCell align="right">{row.contacNo}</CustomTableCell>
              </TableRow>
            );
          })}
        {rows.length === 0 ? (
          <TableRow className="classes.tableRow">
            <TableCell colSpan={2} />
            <TableCell align="center">No record found !</TableCell>
            <TableCell colSpan={2} />
          </TableRow>
        ) : (
          <Fragment />
        )}
      </Fragment>
    );

    return (
      <Page title="Users" className="classes.mainPage">
        <DataTable
          rows={this.state.rows}
          header={userHeader}
          columns={userCols}
        />
      </Page>
    );
  }
}

Users.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Users);

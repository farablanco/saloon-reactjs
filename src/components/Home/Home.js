import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import DataTable from "../DataTable";
import Page from "../Page";

/* eslint-disable graphql/template-strings */

/* eslint-enable */
const styles = theme => ({
  root: {
    width: "100%",
    marginTop: theme.spacing.unit * 3,
    overflowX: "auto"
  }
});

let id = 0;
function createData(employee, customer, datetime, status) {
  id += 1;
  return { id, employee, customer, datetime, status };
}

class Home extends Component {
  state = {
    rows: [
      createData("Employee A", "Customer A", "24-12-2018 11:00", "confirm"),
      createData("Employee B", "Customer A", "24-12-2018 12:00", "confirm"),
      createData("Employee C", "Customer A", "24-12-2018 13:00", "confirm"),
      createData("Employee D", "Customer A", "24-12-2018 14:00", "confirm"),
      createData("Employee E", "Customer A", "24-12-2018 15:00", "confirm"),
      createData("Employee E", "Customer A", "24-12-2018 9:00", "confirm"),
      createData("Employee E", "Customer A", "24-12-2018 23:00", "confirm"),
      createData("Employee E", "Customer A", "24-12-2018 22:00", "confirm"),
      createData("Employee E", "Customer A", "24-12-2018 22:00", "confirm"),
      createData("Employee E", "Customer A", "24-12-2018 22:00", "confirm"),
      createData("Employee E", "Customer A", "24-12-2018 22:00", "confirm"),
      createData("Employee E", "Customer A", "24-12-2018 22:00", "confirm"),
      createData("Employee E", "Customer A", "24-12-2018 22:00", "confirm"),
      createData("Employee E", "Customer A", "24-12-2018 22:00", "confirm"),
      createData("Employee E", "Customer A", "24-12-2018 22:00", "confirm"),
      createData("Employee E", "Customer A", "24-12-2018 22:00", "confirm")
    ].sort((a, b) => (a.datetime < b.datetime ? -1 : 1))
  };

  render() {
    return (
      <Page title="Home" className="classes.mainPage">
        <DataTable rows={this.state.rows} />
      </Page>
    );
  }
}

export default withStyles(styles)(Home);

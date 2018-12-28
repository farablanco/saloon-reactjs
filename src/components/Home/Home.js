import gql from 'graphql-tag'
import PropTypes from 'prop-types'
import React, { Component } from 'react'
import { withApollo } from 'react-apollo'
import { withStyles } from '@material-ui/core/styles';
import DataTable  from '../DataTable';

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
            createData('Employee E', 'Customer A', '24-12-2018 9:00', 'confirm'),
            createData('Employee E', 'Customer A', '24-12-2018 23:00', 'confirm'),
            createData('Employee E', 'Customer A', '24-12-2018 22:00', 'confirm'),
            createData('Employee E', 'Customer A', '24-12-2018 22:00', 'confirm'),
            createData('Employee E', 'Customer A', '24-12-2018 22:00', 'confirm'),
            createData('Employee E', 'Customer A', '24-12-2018 22:00', 'confirm'),
            createData('Employee E', 'Customer A', '24-12-2018 22:00', 'confirm'),
            createData('Employee E', 'Customer A', '24-12-2018 22:00', 'confirm'),
            createData('Employee E', 'Customer A', '24-12-2018 22:00', 'confirm'),
            createData('Employee E', 'Customer A', '24-12-2018 22:00', 'confirm'),
            createData('Employee E', 'Customer A', '24-12-2018 22:00', 'confirm'),
        ].sort((a, b) => (a.datetime < b.datetime ? -1 : 1)),
        
    }

  componentWillUnmount() {
    const { client } = this.props

    client.mutate({
      mutation: CHANGE_FEED_FILTER,
      variables: { type: null }
    })
  }

  render() {
    return (
      <DataTable rows={this.state.rows} />
    )
  }
}

Home.propTypes = {
  client: PropTypes.shape({
    mutate: PropTypes.func.isRequired
  }).isRequired
}

export default withApollo(withStyles(styles)(Home))
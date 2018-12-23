import gql from 'graphql-tag'
import PropTypes from 'prop-types'
import React from 'react'
import { Query } from 'react-apollo'

const GET_VIEWER = gql`
    {
        query: User(dummy: "") 
        {
            id, 
            firstname, 
            lastname, 
            email, 
            isAdmin, 
            createdAt, 
            updatedAt, 
            contactNo, 
            password, 
            hairloss_treatment_cnt, 
            treatment_cnt, 
            cutCnt, 
            expiry_date, 
            ptsBalance,
            image,
            bio,
        }
    }
`

const WithViewer = ({ children }) => (
  <Query query={GET_VIEWER}>
    {({ loading, error, data }) => {
      if (loading || error) {
          return children(null)
      }
      return children(data.query)
    }}
  </Query>
)

WithViewer.propTypes = {
  children: PropTypes.func.isRequired
}

/*
WithViewer.fragments = {
  viewer: USER_FRAGMENT
}*/

export default WithViewer
import ApolloClient from 'apollo-boost'
import tokenStorage from './tokenStorage'

const GRAPHQL_URL = process.env.REACT_APP_GRAPHQL_URL || 'http://localhost:3000/restricted'

const clientState = {
  defaults: {
    feedFilter: {
      __typename: 'FeedFilter',
      type: null,
      tag: null
    }
  },
  resolvers: {
    Mutation: {
      changeFeedFilter: (_, { type, tag = null }, { cache }) => {
        const feedFilter = { __typename: 'FeedFilter', type, tag }
        cache.writeData({ data: { feedFilter } })
        return feedFilter
      }
    }
  }
}

const client = new ApolloClient({
  uri: GRAPHQL_URL,
  request: (operation) => {
    const token = tokenStorage.read()
    //const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhZG1pbiI6ZmFsc2UsImV4cCI6MTU0NTIxNjg4NiwibmFtZSI6ImJ1bm55cHBsQHlhaG9vLmNvbSJ9.HYjTtGaNsuh_pPYBByeqFWzcQHDho5drKFCjq6NuLi4"
    let headers = { 'Content-Type': "application/json"}
    if (token) {
      headers = { authorization: `Bearer ${token}` }
    }
    operation.setContext({ headers })
  },
  clientState
})

export default client
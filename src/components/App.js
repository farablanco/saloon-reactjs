import React, { Fragment } from 'react'
import { ApolloProvider } from 'react-apollo'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import apolloClient from '../apolloClient'
import Home from './Home'
import Login from './Login'
import Profile from './Profile'
import LogOut from './Logout'
import Register from './Register'
import Settings from './Settings'
import { library } from '@fortawesome/fontawesome-svg-core'
import { withNamespaces } from 'react-i18next'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faIgloo, faCheckSquare, faCoffee, faCut, faUser, faGifts, faUserCircle, faRocket, faMoneyBillAlt, faCalendarCheck, faWrench, faCarrot, faHome, faLanguage, faSignOutAlt, faBuilding, faPlus, faTrash, faEdit} from '@fortawesome/free-solid-svg-icons'
library.add(fab, faIgloo, faCheckSquare, faCoffee, faCut, faUser, faGifts , faUserCircle, faRocket, faMoneyBillAlt, faCalendarCheck, faWrench, faCarrot, faHome, faLanguage, faSignOutAlt, faBuilding, faPlus, faTrash, faEdit)

const App = () => (
    <ApolloProvider client={apolloClient}>
      <BrowserRouter>
        <Fragment>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/home" component={Home} />
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
            <Route path="/settings" component={Settings} />
            <Route path="/profile" component={Profile} />
            <Route path="/logout" component={LogOut} />
            <Route component={Login} />
          </Switch>
        </Fragment>
      </BrowserRouter>
    </ApolloProvider>
)
export default withNamespaces()(App);
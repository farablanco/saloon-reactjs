import React from 'react'
import { Redirect } from 'react-router-dom'
import httpClient from '../httpClient';
import { withGlobalState } from 'react-globally'

class LogOut extends React.Component {

	componentDidMount() {
		console.log("Logout !");
		this.props.setGlobalState(prevGlobalState => ({
			isLoggedIn: false,
		}));
		httpClient.logout();	
    }
	
	render() {
		return <Redirect to="/" />
	}
}

export default withGlobalState(LogOut)
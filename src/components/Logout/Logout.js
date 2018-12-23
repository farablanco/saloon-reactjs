import React from 'react'
import { Redirect } from 'react-router-dom'
import httpClient from '../httpClient';

class LogOut extends React.Component {

	componentDidMount() {
        console.log("Logout !")
        httpClient.logout();
    }
	
	render() {
		return <Redirect to="/login" />
	}
}

export default LogOut
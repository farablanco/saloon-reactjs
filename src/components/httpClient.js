import axios from 'axios'
import jwtDecode from 'jwt-decode'
import tokenStorage from '../tokenStorage'
// instantiate axios
const httpClient = axios.create()

httpClient.getCurrentUser = function() {
    const token = tokenStorage.read()
    console.log(token)
    if(token) return jwtDecode(token)
    return null
}

var config = {
    headers: {'Content-Type': 'application/json'}
};

httpClient.login = function(credentials) {
    return this({ method: 'post', url: "/api/login", data:credentials , config})
		.then((serverResponse) => {
			const token = serverResponse.data.token
			if(token) {
				// sets token as an included header for all subsequent api requests
                this.defaults.headers.common.token = tokenStorage.write(token)
    			return jwtDecode(token)
			} else {
				return false
			}
		})
}


httpClient.signUp = function(userInfo) {
	return this({ method: 'post', url: "/api/register", data:userInfo, config})
		.then((serverResponse) => {
			const token = serverResponse.data.token
			if(token) {
				// sets token as an included header for all subsequent api requests
                this.defaults.headers.common.token = tokenStorage.write(token)
                return jwtDecode(token)
			} else {
				return false
			}
		})
}

httpClient.logout = function() {
	tokenStorage.delete()
	delete this.defaults.headers.common.token
	return true
}

httpClient.defaults.headers.common.token = tokenStorage.read()
export default httpClient
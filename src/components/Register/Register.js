import React from 'react';
import PropTypes from 'prop-types';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import LockIcon from '@material-ui/icons/LockOutlined';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';
import FormHelperText from '@material-ui/core/FormHelperText';
import NativeSelect from '@material-ui/core/NativeSelect';
import countries from "../../countries.json";
import phone from "../../phone.json";
import httpClient from '../httpClient';
import FormMessages from '../FormMessages';
import { withGlobalState } from 'react-globally'

import _ from 'lodash';

const styles = theme => ({
  main: {
    width: 'auto',
    display: 'block', // Fix IE 11 issue.
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
      width: 400,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  paper: {
    marginTop: theme.spacing.unit * 8,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme.spacing.unit * 3}px`,
  },
  avatar: {
    margin: theme.spacing.unit,
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing.unit,
  },
  submit: {
    marginTop: theme.spacing.unit * 3,
  },
});

class SignUp extends React.Component {

  constructor(props) {
    super(props);
    console.log("constructor")
    this.state = {
      fields: { email: '',
              firstName: '',
              lastName: '',
              password: '', 
              confirmPassword: '',
              country: 'Singapore',
              contactNo: '65',
              companyId: ''},
      hasError: false,
      openError: false,
      errorMessage: [],
      name: 'hai',
      countries: countries,
      phones: phone,
    };

    this.handleChange = this.handleChange.bind(this);
  }

  onInputChange(evt) {
      this.setState({
          fields: {
              ...this.state.fields,
              [evt.target.name]: evt.target.value
          }
      })
  };

  async onFormSubmit(evt) {
      evt.preventDefault()
      evt.preventDefault()
        await httpClient.signUp(this.state.fields).then(user => {
            this.setState(
              { fields: { email: '', 
                    password: '',
                    firstName: '',
                    lastName: '',
                    confirmPassword: '',
                    country: 'Singapore',
                    contactNo: '65',
                    companyId: ''
                  } })
            if(user) {
                this.props.setGlobalState(prevGlobalState => ({
                  isLoggedIn: true,
                }))
                this.props.history.push('/')
            }
        }).catch((error)=>{
          console.log("ERROR !" + JSON.stringify(error));
          const errors = [];
          errors.push({ errorMessage: error.response.data.message });
          this.props.setGlobalState(prevGlobalState => ({
            hasMessage: true,
            messages: errors,
            variant: "error"
          }))
        })
  }

  goBack(){
    this.props.history.push('/')
  }

  handleChange = name => event => {
    this.setState({ [name]: event.target.value });
    let invertedCountries = _.invert(this.state.countries);
    this.setState({ fields: {contactNo: this.state.phones[invertedCountries[event.target.value]] }});
  };

  render() {
      const { classes } = this.props;
      
      let arrCountries = _.keys(this.state.countries).sort();
      let optionCountriesItems = arrCountries.map((country) =>
              <option key={country}>{this.state.countries[country]}</option>
      );
      return (
        <main className={classes.main}>
          <CssBaseline />
          <Paper className={classes.paper}>
            <Avatar className={classes.avatar}>
              <LockIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign Up
            </Typography>
            <form noValidate className={classes.form} onChange={this.onInputChange.bind(this)} onSubmit={this.onFormSubmit.bind(this)}>
              <FormMessages />  
              <FormControl margin="normal" required fullWidth>
                <InputLabel htmlFor="email">Email Address</InputLabel>
                <Input id="email" name="email" autoComplete="email" autoFocus />
              </FormControl>
              <FormControl margin="normal" required fullWidth>
                <InputLabel htmlFor="firstName">First Name</InputLabel>
                <Input id="firstName" name="firstName" autoComplete="email" autoFocus />
              </FormControl>
              <FormControl margin="normal" required fullWidth>
                <InputLabel htmlFor="lastName">Last Name</InputLabel>
                <Input id="lastName" name="lastName" autoComplete="email" autoFocus />
              </FormControl>
              <FormControl margin="normal" required fullWidth>
                <InputLabel htmlFor="country">Country</InputLabel>
                <NativeSelect
                  value={this.state.fields.country}
                  onChange={this.handleChange('country', this)}
                  input={<Input name="country" id="country-native-helper" />}
                  autoFocus
                >
                  {optionCountriesItems}
                </NativeSelect>
                <FormHelperText>Phone and Nationality</FormHelperText>
              </FormControl>
              <FormControl margin="normal" required fullWidth>
                <InputLabel htmlFor="contactNo">Contact No.</InputLabel>
                <Input id="contactNo" name="contactNo" value={this.state.fields.contactNo} autoComplete="email" />
              </FormControl>
              <FormControl margin="normal" required fullWidth>
                <InputLabel htmlFor="password">Password</InputLabel>
                <Input name="password" type="password" id="password" autoComplete="current-password" />
              </FormControl>
              <FormControl margin="normal" required fullWidth>
                <InputLabel htmlFor="cpassword">Confirm Password</InputLabel>
                <Input name="cpassword" type="password" id="cpassword" autoComplete="current-password" />
              </FormControl>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
              >
                Sign up
              </Button>
              <Button
                type="button"
                fullWidth
                variant="contained"
                color="secondary"
                className={classes.submit}
                onClick={this.goBack.bind(this)}
              >
                Cancel
              </Button>
            </form>
          </Paper>
        </main>
      );
  }
}

SignUp.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withGlobalState(withStyles(styles)(SignUp));
import React from 'react';
import PropTypes from 'prop-types';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import LockIcon from '@material-ui/icons/LockOpenOutlined';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';
import httpClient from '../httpClient';
import FormMessages from '../FormMessages';
import { withGlobalState } from 'react-globally'

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

class SignIn extends React.Component {
    state = {
        fields: { email: '', password: ''},
        hasError: false,
        openError: false,
        errorMessage: [],
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
        await httpClient.login(this.state.fields).then(user => {
            this.setState({ fields: { email: '', password: '' } })
            if(user) {
                //this.props.onSignInSuccess(user)
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

    render() {
        const { classes } = this.props;
        const { email, password } = this.state.fields
        console.log("ERROR !" + this.state.openError);
        return (
            <main className={classes.main}>
              <CssBaseline />
              <Paper className={classes.paper}>
                <Avatar className={classes.avatar}>
                  <LockIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                  Sign in
                </Typography>
                <form noValidate  className={classes.form} onChange={this.onInputChange.bind(this)} onSubmit={this.onFormSubmit.bind(this)}>
                  <FormMessages />  
                  <FormControl margin="normal" required fullWidth>
                    <InputLabel htmlFor="email">Email Address</InputLabel>
                    <Input id="email" name="email" autoComplete="email" value={email} autoFocus />
                  </FormControl>
                  <FormControl margin="normal" required fullWidth>
                    <InputLabel htmlFor="password">Password</InputLabel>
                    <Input name="password" type="password" id="password" value={password}  autoComplete="password" />
                  </FormControl>
                  <FormControlLabel
                    control={<Checkbox value="remember" color="primary" />}
                    label="Remember me"
                  />
                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                    className={classes.submit}
                  >
                    Sign in
                  </Button>
                </form>
              </Paper>
            </main>
          );
    }
}

SignIn.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withGlobalState(withStyles(styles)(SignIn));
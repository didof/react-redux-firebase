// dependencies
import React from 'react'
import { Redirect } from 'react-router'
import { connect } from 'react-redux'
import { signIn } from '../../../store/actions/authActions'

// UI
import Flexer from '../../UI/Flexer'

// material-ui
import { Container, Paper, Button, Typography, TextField, Snackbar } from '@material-ui/core'
import MuiAlert from '@material-ui/lab/Alert'

const Alert = props => {
    return <MuiAlert elevation={3} variant="filled" {...props} />
}


class SignIn extends React.Component {
    state = {
        email: '',
        password: ''
    }

    handleTyping = e => {
        const { target } = e
        const { value } = target
        
        this.setState({
            ...this.state,
            [target.id]: value
        })
    }

    handleSignIn = () => {
        console.log('[Component] sending credentials:', this.state)
        this.props.signIn(this.state)
    }

    handleClose = (e, reason) => {
        console.log(e, reason)
    }
   
    render() {

        //TODO: get props
        const { auth } = this.props
        if(auth.uid) {
            return <Redirect to="/" />
        }

        return(
            <>
            <Container maxWidth="sm">
                <Paper style={{minHeight: 400, marginTop: 16, padding: 32, position: 'relative'}}>
                    <Typography variant="h3" style={{marginBottom: 16}}>Login</Typography>
                    <Flexer column>
                        <TextField
                            required
                            id="email"
                            label="email"
                            value={this.state.email}
                            onChange={this.handleTyping}
                        />
                        <TextField
                            required
                            id="password"
                            label="password"
                            type="password"
                            value={this.state.password}
                            onChange={this.handleTyping}
                            style={{marginTop: 64}}
                        />
                        <Button
                            variant="contained"
                            color="secondary"
                            onClick={this.handleSignIn}
                            size="large"
                            style={{marginTop: 64}}
                        >LOGIN</Button>
                    </Flexer>
                </Paper>
            </Container>
            <Snackbar
                open={this.props.authError}
                onClick={this.props.closeSnackbar}
                autoHideDuration={3000}
            >
                <Alert severity="error">
                {this.props.authErrorMessage}
                </Alert>
            </Snackbar>
        </>
        )
    }
}

const mapStateToProps = state => {
    return {
        authError: state.auth.authError,
        authErrorMessage: state.auth.authErrorMessage,
        auth: state.firebase.auth
    }
}

const mapDispatchToProps = dispatch => {
    return {
        signIn: (credentials) => dispatch(signIn(credentials))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignIn)
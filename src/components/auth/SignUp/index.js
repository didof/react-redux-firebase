// dependencies
import React from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router'
import { signUp } from '../../../store/actions/authActions'

import { Container, Paper, Button, Typography, TextField, Stepper, Step, StepButton } from '@material-ui/core'

// UI
import Flexer from '../../UI/Flexer'
import FAB from '../../UI/FAB'


class SignUp extends React.Component {
    state = {
        activeStep: 0,
        firstName: '',
        lastName: '',
        email: '',
        password: ''
    }

    //TODO: handles
    handleTyping = e => {
        const { target } = e
        const { value } = target
        
        this.setState({
            ...this.state,
            [target.id]: value
        })
    }

    handleGender = (e, value) => {
        const parent = e.target.parentNode.parentNode.parentNode.parentNode
        console.log(parent, value)
        this.setState({
            ...this.state,
            [parent.id]: value
        })
    }

    handleSelect = e => {
        const { value } = e.target
        const { name } = e.target
        this.setState({
            [name]: value
        })
    }

    handleSubmit = () => {
        this.props.signUp(this.state)
    }

    //TODO: stepper architecture
    getSteps = () => {
        return [
            'Name and Surname',
            'E-mail',
            'Password',
            'Complete'
        ]
    }

    getStepContent = (step) => {
        switch(step) {
            case 0:
                return (
                    <div style={{display: 'flex', flexDirection: 'column'}}>
                        <TextField
                            id="firstName"
                            label="Name"
                            value={this.state.firstName}
                            required
                            onChange={this.handleTyping}
                        />
                        <TextField
                            id="lastName"
                            label="Surname"
                            value={this.state.lastName}
                            required
                            onChange={this.handleTyping}
                        />
                    </div>
                )
            case 1:
                return (
                    <TextField
                        id="email" 
                        label="e-mail" 
                        value={this.state.email}
                        required
                        onChange={this.handleTyping}
                    />
                )
            case 2:
                return (
                    <TextField
                        id="password" 
                        label="password" 
                        type="password"
                        value={this.state.password}
                        required
                        onChange={this.handleTyping}
                    />
                )
            default: return (
                <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                    <Typography varinat="body1">
                        Discaimer
                    </Typography>
                    <Button
                        style={{marginTop: 32}}
                        color="secondary"
                        variant="contained"
                        size="large"
                        onClick={this.handleSubmit}
                    >
                    Join our community
                    </Button>
                </div>
            )
        }
    }

    //TODO: navigation
    handleNext = () => {
        this.setState(prevState => {
            return { ...prevState, activeStep: prevState.activeStep + 1 }
        })
    }
    handleBefore = () => {
        if(this.state.activeStep === 0) return
        this.setState(prevState => {
            return { ...prevState, activeStep: prevState.activeStep - 1 }
        })
    }

    render() {

        const steps = this.getSteps()

        //TODO: get props
        const { auth } = this.props
        if(auth.uid) {
            return <Redirect to="/" />
        }

        //TODO: get state
        const { activeStep } = this.state

        return(
            <Container maxWidth="sm">
                <Paper style={{minHeight: 400, marginTop: 16, padding: 32, position: 'relative'}}>
                    <Typography variant="h3" style={{marginBottom: 16}}>Sign Up</Typography>
                    <Flexer column>
                        <Flexer>
                            <FAB icon="left" clicked={this.handleBefore} disabled={activeStep === 0}/>
                            <FAB icon="right" clicked={this.handleNext} disabled={activeStep === steps.length - 1}/>
                        </Flexer>
                            <Flexer column>
                                {this.getStepContent(activeStep)}
                                <Stepper
                                    style={{position: 'absolute', bottom: 0}}
                                    alternativeLabel
                                    activeStep={activeStep}
                                >
                                    {steps.map((label, index) => (
                                        <Step key={label}>
                                            <StepButton>{label}</StepButton>
                                        </Step>
                                    ))}
                                </Stepper>
                            </Flexer>
                    </Flexer>
                </Paper>
            </Container>
        )
    }
}

const mapStateToProps = state => {
    return {
        auth: state.firebase.auth
    }
}


const mapDispatchToProps = (dispatch) => {
    return {
        signUp: (credentials) => dispatch(signUp(credentials))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUp)
// dependencies
import React from 'react'
import { connect } from 'react-redux'
import { createProposal } from '../../../store/actions/proposalActions'

// material-ui
import { Grid, TextField, Button, 
FormControl, InputLabel, Input, InputAdornment,
Stepper, Step, StepLabel, StepContent } from '@material-ui/core'


// components
import Preview from './Preview'
import DateAndTime from './DateAndTime'
import Participans from './Participans'
import Confirmation from './Confirmation'

class Guide extends React.Component {
    state ={
        activeStep: 0,
        title: '',
        day: '',
        dayName: '',
        hours: '',
        minutes: '',
        content: '',
        participans: 1,
        budget: 0,
        confirm: false
        // picture: null

    }

    handleTyping = e => {
        const { target } = e
        const { value } = target
        
        this.setState({
            ...this.state,
            [target.id]: value
        })
    }

    handlePickDate = string => {
        const array = string.toString().split(" ")
        this.setState({
            ...this.state,
            day: array[2],
            dayName: array[0],
            month: array[1]
        })
    }

    handlePickTime = string => {
        const time = string.toString().split(" ")[4].split(":")
        this.setState({
            hours: time[0],
            minutes: time[1]
        })
    }

    handleWelcome = () => {
        this.setState({
            ...this.state,
            participans: this.state.participans ? null : 1
        })
    }

    handleParticipans = (e, value) => {
        this.setState({
            ...this.state,
            participans: value
        })
    }

    handleTakeBudget = () => {
        console.log(this.state.budget)
        this.setState({
            ...this.state,
            budget: this.state.budget ? null : 1
        })
    }

    handlePicture = e => {
        this.setState({
            ...this.state,
            picture: e.target.value
        })
    }

    handleOpen = () => {
        this.setState({
            ...this.state,
            confirm: true
        })
    }

    handleClose = () => {
        this.setState({
            ...this.state,
            confirm: false
        })
    }

    getSteps = () => {
        return [
            'Choose a title',
            'Pick date and time',
            'Add some information about your plans. We suggest you to be concise and clear',
            'Is there a limit to the number of participants?',
            'Do you recommend a minimum budget to take with you?'
            // '[optional] Pick a picture to catch the eye!'
        ]
    }

    getStepContent = step => {
        
        switch(step) {
            case 0:
                return (
                    <TextField
                        id="title"
                        label="Funky title"
                        value={this.state.title}
                        onChange={e => this.handleTyping(e)}
                    />
                )
            case 1:
                return (
                    <DateAndTime
                        dateChanged={this.handlePickDate}
                        timeChanged={this.handlePickTime}
                    />
                )
            case 2:
                return (
                    <TextField
                        id="content"
                        label="Awesome plans"
                        value={this.state.content}
                        multiline
                        rowsMax="5"
                        onChange={e => this.handleTyping(e)}
                        style={{width: '100%'}}
                    />
                )
            case 3:
                return (
                    <Participans
                        participans={this.state.participans}
                        slideParticipans={this.handleParticipans}
                        clickWelcome={this.handleWelcome}
                    />
                )
            default:
                return (
                    <FormControl fullWidth>
                        <InputLabel>Budget</InputLabel>
                        <Input
                            id="budget"
                            type="number"
                            value={this.state.budget}
                            startAdornment={<InputAdornment position="start">$</InputAdornment>}
                            onChange={this.handleTyping}
                            style={{width: 80}}
                        />
                    </FormControl>
                )
            // case 5:
            //     return (
            //         <FormControl>
            //             <InputLabel>Picture</InputLabel>
            //             <Select
            //                 style={{width: 120}}
            //                 id="picture"
            //                 onChange={this.handlePicture}
            //             >
            //                 <MenuItem value={'friends'}>Friends</MenuItem>
            //                 {/* <MenuItem value={20}>Party</MenuItem>
            //                 <MenuItem value={30}>Pic-Nic</MenuItem>
            //                 <MenuItem value={30}>Shopping</MenuItem>
            //                 <MenuItem value={30}>Walk</MenuItem>
            //                 <MenuItem value={30}>Footing</MenuItem>
            //                 <MenuItem value={30}>Icecream</MenuItem>
            //                 <MenuItem value={30}>Food</MenuItem>
            //                 <MenuItem value={30}>Sushi</MenuItem>
            //                 <MenuItem value={30}>Cards</MenuItem>
            //                 <MenuItem value={30}>Match</MenuItem> */}
            //             </Select>
            //         </FormControl>
            //     )
        }
    }

    handleNext = () => {
        this.setState(prevState => {
            return { ...prevState, activeStep: prevState.activeStep + 1 }
        })
    }

    handleBack = () => {
        if(this.state.activeStep === 0) return
        this.setState(prevState => {
            return { ...prevState, activeStep: prevState.activeStep - 1 }
        })
    }

    handleSubmit = () => {
        this.props.createProposal({
            title: this.state.title,
            //author
            day: this.state.day,
            month: this.state.month,
            hours: this.state.hours,
            minutes: this.state.minutes,
            content: this.state.content,
            participans: this.state.participans,
            budget: this.state.budget
        })
    }

    render() {

        const steps = this.getSteps()

        return (
            <Grid container spacing={2}>
                <Grid item lg={6}>
                    <div style={{width: '100%'}}>
                        <Stepper
                            orientation="vertical"
                            activeStep={this.state.activeStep}
                        >
                            {steps.map((label, index) => {
                                return (
                                    <Step key={label}>
                                        <StepLabel>{label}</StepLabel>
                                        <StepContent>
                                            {this.getStepContent(index)}
                                            <div>
                                                <Button
                                                    style={{marginTop: 8, marginRight: 8}}
                                                    variant="contained"
                                                    color="primary"
                                                    onClick={this.handleBack}
                                                    disabled={this.state.activeStep === 0}
                                                >
                                                Back
                                                </Button>
                                                <Button
                                                    style={{marginTop: 8}}
                                                    variant="contained"
                                                    color={this.state.activeStep === steps.length - 1 ? 'secondary' : 'primary'}
                                                    onClick={this.handleNext}
                                                >
                                                {this.state.activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                                                </Button>
                                            </div>
                                        </StepContent>
                                    </Step>
                                )
                            })}
                        </Stepper>
                        {this.state.activeStep === steps.length && (
                            <>
                            <Button
                                style={{marginTop: 8, marginRight: 8}}
                                variant="contained"
                                color="primary"
                                onClick={this.handleBack}
                            >
                            Back
                            </Button>
                            <Confirmation
                                value={this.state.confirm}
                                open={this.handleOpen}
                                close={this.handleClose}
                                submit={this.handleSubmit}
                            />
                            </>
                        )}
                    </div>
                </Grid>
                {/* PREVIEW */}
                <Grid item lg={6}>
                    <div style={{paddig: 16, margin: '0 auto', width: '90%', height: '100%'}}>
                        <Preview {...this.state} />
                    </div>
                </Grid>
            </Grid>
            
        )

    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        createProposal: (proposal) => dispatch(createProposal(proposal))
    }
}

export default connect(null, mapDispatchToProps)(Guide)
// dependencies
import React from 'react'
import { Redirect } from 'react-router'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'

// material-ui
import { Container, Paper, Grid } from '@material-ui/core'

// components
import ProposalRandom from '../users/ProposalRandom'

class Dashboard extends React.Component {

    render() {
        //TODO: get props
        const { proposals, auth } = this.props

        //TODO: route guard
        if(!auth.uid) {
            return <Redirect to="/signin" />
        }

        return(
            <Container maxWidth="md">
                <Paper style={{minHeight: 450, marginTop: 16, padding: 16}}>
                    <Grid container spacing={2}>
                        <Grid item lg={6}>
                            <ProposalRandom proposals={proposals} />
                        </Grid>
                    <Grid item lg={6}>Your plans</Grid>
                    <Grid item lg={6}>Our events</Grid>
                    <Grid item lg={6}>chat</Grid>
                    </Grid>
                </Paper>
            </Container>
        )
    }
}

const mapStateToProps = state => {
    return {
        proposals: state.firestore.ordered.proposals,
        auth: state.firebase.auth
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        { collection: 'proposals' }
    ])
)(Dashboard)

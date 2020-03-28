// dependencies
import React from 'react'
import { Redirect } from 'react-router'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'

// material-ui
import { Container, Paper, Grid } from '@material-ui/core'

// components
import Spinner from '../../UI/Spinner'
import Detail from './Detail'

const detailProposal = ({proposal, auth}) => {

    if(!auth.uid) {
        return <Redirect to="/signin" />
    }

    let detail = proposal ? <Detail {...proposal} /> : <Spinner />

    return (
        <Container maxWidth="md">
            <Paper style={{minHeight: 400, marginTop: 16, padding: 32}}>
                <Grid container spacing={2}>
                    <Grid item lg={6}>
                        {detail}
                    </Grid>
                    <Grid item lg={6}>
                        user bag
                    </Grid>

                </Grid>

            </Paper>
        </Container>
        
    )
}

const mapStateToProps = (state, ownProps) => {
    const id = ownProps.match.params.id
    const proposals = state.firestore.data.proposals
    const proposal = proposals ? proposals[id] : null
    return {
        proposal: proposal,
        auth: state.firebase.auth
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        { collection: 'proposals' }
    ])
)(detailProposal)
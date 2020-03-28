// dependencies
import React from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

// material-ui
import { Container } from '@material-ui/core'

// components
import Background from './Background'
import Title from './Title'
import Guide from './Guide'

const root = props => {

    //TODO: get props
    const { auth } = props
    if(!auth.uid) {
        return <Redirect to="/signin" />
    }
    
    return(
        <Container maxWidth="md">
            <Background>
                <Title />
                <Guide />
            </Background>
        </Container>
    )
}

const mapsStateToProps = state => {
    return {
        auth: state.firebase.auth
    }
}

export default connect(mapsStateToProps)(root)
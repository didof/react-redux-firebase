// dependencies
import React from 'react'
import { Link } from 'react-router-dom'

// material-ui
import { AppBar, Toolbar, IconButton, Typography } from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'

// firebase
import { connect } from 'react-redux'

// components
import SignInLinks from './SignInLinks'
import SignOutLink from './SignOutLinks'

const navbar = props => {

    const { auth } = props
    // console.log(auth)
    let links = auth.uid ? <SignInLinks /> : <SignOutLink />
    // console.log(props)

    return (
        <AppBar position="static">
            <Toolbar>
                <IconButton
                    edge="start"
                    color="inherit"
                    style={{marginRight: 16}}
                >
                    <MenuIcon />
                </IconButton>
                <Typography
                    variant="h5"
                    style={{flexGrow: 1, textTransform: 'uppercase', letterSpacing: '0.1em'}}
                >
                    <Link to="/" style={{textDecoration: 'none', color: 'inherit'}}>Digital Host</Link>
                </Typography>
                
                {links}

            </Toolbar>  
        </AppBar> 
    )
}

const mapStateToProps = state => {
    const { uid } = state.firebase.auth
    console.log(state)

    return {
        auth: state.firebase.auth
    }
}

export default connect(mapStateToProps)(navbar)
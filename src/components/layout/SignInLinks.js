// dependencies
import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { signOut } from '../../store/actions/authActions'

// material-ui
import { Button, Avatar } from '@material-ui/core'

// style
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
    button: {
        marginRight: theme.spacing(2),
        textTransform: 'uppercase'
    }
    }))

const SignInLinks = props => {
    const styles = useStyles()

    const handleSignOut = () => {
        props.signOut()
    }
    
    return (
        <>
            <Button color="inherit" className={styles.button}>
                <Link to="/new-proposal" style={{textDecoration: 'none', color: 'inherit'}}>New Proposal</Link>
            </Button>
            <Button
                variant="outlined"
                color="inherit"
                className={styles.button}
                onClick={handleSignOut}
            >
                logout
            </Button>
            <Avatar></Avatar>
        </>
    )
}

const mapDispatchToProps = dispatch => {
    return {
        signOut: () => {dispatch(signOut())}
    }
}

export default connect(null, mapDispatchToProps)(SignInLinks)
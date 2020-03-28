// dependencies
import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
    button: {
        marginRight: theme.spacing(2),
        textTransform: 'uppercase'
    }
    }))

export default props => {
    const styles = useStyles()

    return (
        <>
            <Button variant="outlined" color="inherit" className={styles.button}>
                <Link to="/signin" style={{textDecoration: 'none', color: 'inherit'}}>Login</Link>
            </Button>
            <Button variant="contained" color="secondary" className={styles.button}>
                <Link to="/signup" style={{textDecoration: 'none', color: 'inherit'}}>Signup</Link>
            </Button>
        </>
    )
}
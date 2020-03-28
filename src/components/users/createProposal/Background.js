// dependencies
import React from 'react'
import { Paper } from '@material-ui/core'

import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
    paper: {
        marginTop: 16,
        paddingLeft: 40,
        paddingRight: 40,
        paddingTop: 16,
        paddingBottom: 16
    }
    }))

export default props => {
    const styles = useStyles()

    return (
        <Paper className={styles.paper}>
            {props.children}
        </Paper>
    )
}
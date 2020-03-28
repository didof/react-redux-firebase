// dependencies
import React from 'react'
import { Fab } from '@material-ui/core'

// icons
import NavigateNextIcon from '@material-ui/icons/NavigateNext'
import WarningIcon from '@material-ui/icons/Warning'
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore'

// style
import { makeStyles } from '@material-ui/core/styles'
const useStyles = makeStyles(theme => ({
    margin: {
        margin: theme.spacing(1),
    },
}))

export default ({ size, color, icon, disabled, clicked }) => {
    const classes = useStyles()

    //TODO: pick the right icon
    let display = <WarningIcon />
    switch(icon) {
        case 'right':
            display = <NavigateNextIcon />
            break
        case 'left':
            display = <NavigateBeforeIcon />
            break

        default: console.log('[FAB] no icon passed')
    }

    return (
        <Fab
            size={size ? size : 'small'}
            color={color ? color : 'primary'}
            className={classes.margin}
            disabled={disabled}
            onClick={() => clicked()}
        >
            {display}
        </Fab>
    )
}
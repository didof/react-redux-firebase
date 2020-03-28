// dependencies
import React from 'react'

// material-ui
import { ExpansionPanel, ExpansionPanelSummary, ExpansionPanelDetails,
Typography, Button, Grid, IconButton, Avatar } from '@material-ui/core'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import DirectionsWalkIcon from '@material-ui/icons/DirectionsWalk'
import HomeIcon from '@material-ui/icons/Home'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
    root: {
        width: '100%',
    },
    heading: {
        fontSize: theme.typography.pxToRem(20),
        fontWeight: theme.typography.fontWeightRegular,
        textTransform: 'uppercase'
    },
    content: {
        borderBottom: '1px solid rgba(0, 0, 0, 0.1)',
        width: '100%'
    },
    time: {
        marginLeft: 8,
    }
    }))

export default ({title, organizer, start, end, content, participans, budget}) => {
    const styles = useStyles()
    
    return (
        <div className={styles.root}>
            <ExpansionPanel>
                <ExpansionPanelSummary
                    expandIcon={<ExpandMoreIcon />}
                    id="1"
                >
                    <Typography className={styles.heading}>{title}</Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                    <Grid container>
                        <Grid item lg={6}>
                            <div style={{display: 'flex'}}>
                                <Avatar style={{width: 32, height: 32, backgroundColor: 'blue'}}>F</Avatar>
                                <Typography variant="subtitle2">{organizer}</Typography>
                            </div>
                        </Grid>
                        <Grid item lg={6}>
                            <div style={{display: 'flex'}}>
                            <IconButton edge="start" color="inherit" size="small">
                                <DirectionsWalkIcon />
                            </IconButton>   
                                <Typography variant="body2" className={styles.time}>{start}</Typography>
                            <IconButton edge="end" color="inherit">
                                <HomeIcon />
                            </IconButton>   
                                <Typography variant="body2" className={styles.time}>{end}</Typography>
                            </div>
                        </Grid>
                        <Grid item lg={12}>
                            <Typography variant="body1" className={styles.content}>{content}</Typography>
                        </Grid>
                        <Grid item lg={6}>
                            <Typography variant="body1">Participans: {participans}</Typography>
                        </Grid>
                        <Grid item lg={6}>
                            <Typography variant="body1">Reccomended budget: {budget}</Typography>
                        </Grid>
                        <Grid item lg={12}>
                            <Button>Join</Button>
                        </Grid>
                    </Grid>
                </ExpansionPanelDetails>
            </ExpansionPanel>
        </div>
    )
}
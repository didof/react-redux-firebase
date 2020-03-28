// dependencies
import React from 'react'
import { Link } from 'react-router-dom'

// material-ui
import { ExpansionPanel, ExpansionPanelSummary, ExpansionPanelDetails, Typography, IconButton } from '@material-ui/core'
import ZoomOutMapIcon from '@material-ui/icons/ZoomOutMap'

// components
import Spinner from '../UI/Spinner'


export default class extends React.Component {
    state = {
        expanded: null
    }

    handleChange = which => {
        this.setState(prevState => {
            if(prevState.expanded === which) {
                return { expanded: null }
            } else {
                return { expanded: which}
            }
        })
    }

    render() {

        let panelList = <Spinner />
        if(this.props.proposals) {
            panelList = this.props.proposals.map(({ id, title, content, day, month }) => {
                let suffix
                switch(day) {
                    case 1: suffix = 'st'; break
                    case 2: suffix = 'nd'; break
                    case 3: suffix = 'rd'; break
                    default: suffix = 'th'; break
                }
                return (
                    <ExpansionPanel
                        key={id}
                        square expanded={this.state.expanded === id}
                        onClick={() => this.handleChange(id)}
                    >
                        <ExpansionPanelSummary>
                            <div style={{width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                                <Typography
                                    variant={this.state.expanded === id ? 'h6': 'subtitle1'}
                                >{title}</Typography>
                                <Typography variant="subtitle2">{day}{suffix} {month}</Typography>
                                {this.state.expanded === id ? (
                                    <Link to={`/proposal/${id}`}>
                                        <IconButton edge="start" color="secondary" size="small">
                                            <ZoomOutMapIcon />
                                        </IconButton>
                                    </Link>
                                ) : null}
                            </div>
                        </ExpansionPanelSummary>
                        <ExpansionPanelDetails>
                            <Typography variant="body1">
                                {content}
                            </Typography>
                        </ExpansionPanelDetails>
                    </ExpansionPanel>
                );
            })
        }
        

        // return {panelList}
        return (
            <>
                {panelList}
            </>
        )
    }
}
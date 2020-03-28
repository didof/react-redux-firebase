// dependencies
import React from 'react'
import { Card, CardHeader, Avatar, CardContent, Typography, Badge } from '@material-ui/core'
import PersonIcon from '@material-ui/icons/Person'
import PeopleAltIcon from '@material-ui/icons/PeopleAlt'
import PublicIcon from '@material-ui/icons/Public'


export default ({ title, day, dayName, month, hours, minutes, content, participans, budget, picture }) => {

    let date = day
    ? dayName + ' ' + day + ', ' + month
    : null

    let time = hours
    ? ' - ' + hours + ':' + minutes
    : null

    let partyIcon = participans > 1
    ? participans > 2 ? <Badge badgeContent={participans} color="primary"><PeopleAltIcon /></Badge> : <PeopleAltIcon />
    : <PersonIcon />

    let budgetMessage = budget > 0
    ? <Typography variant="subtitle2" color="textSecondary">Reccomended budget: {budget}.00 euro</Typography>
    : null

    let subheader = (
        <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
            <div>
                {date}
                {time}
            </div>
            {participans ? partyIcon : <PublicIcon />}
        </div>
    )

    return (
        <Card>
            <CardHeader
                avatar={<Avatar>FD</Avatar>}
                title={title.toUpperCase()}
                subheader={subheader}
            />
            <CardContent>
                <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                    style={content ? {borderBottom: '1px solid rgba(0, 0, 0, 0.1)'} : null}
                >
                {content}
                </Typography>
                {budgetMessage}
            </CardContent>
        
        </Card>
    );
}
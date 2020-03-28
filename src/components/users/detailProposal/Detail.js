// dependencies
import React from 'react'

// material-ui
import { Card, CardHeader, CardContent, Typography, Avatar } from '@material-ui/core'

export default ({ authorFirstName, authorLastName, title, content, month, day,
hours, minutes, participans, budget }) => {
    
    return (
        <Card>
            <CardHeader
                avatar={<Avatar>{authorFirstName[0]}{authorLastName[0]}</Avatar>}
                title={title}
                subheader={`${day} ${month} at ${hours}:${minutes}`}
            />
            <CardContent>
                <Typography varinat="body1">
                    {content}
                </Typography>
            </CardContent>
        </Card>
    )
}
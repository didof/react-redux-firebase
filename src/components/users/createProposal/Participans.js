// dependencies
import React from 'react'

import { FormControlLabel, Checkbox, Slider } from '@material-ui/core'
import Favorite from '@material-ui/icons/Favorite'
import FavoriteBorder from '@material-ui/icons/FavoriteBorder'

export default ({ participans, slideParticipans, clickWelcome}) => {

    const slider = participans
    ? ( <Slider
            id="participas"
            defaultValue={1}
            step={1}
            min={1}
            max={20}
            valueLabelDisplay="auto"
            marks={true}
            onChange={slideParticipans}
            /> )
    : null
                         
    return (
        <>
            <FormControlLabel
                control={<Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />}/>}
                label="All are welcome"
                onClick={clickWelcome}
            />
            {slider}
        </>
    )
}
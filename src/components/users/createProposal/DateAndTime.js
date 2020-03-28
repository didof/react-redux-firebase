// dependencies
import React from 'react'

import DateFnsUtils from '@date-io/date-fns'
import { MuiPickersUtilsProvider, DatePicker, TimePicker } from '@material-ui/pickers'

export default props => {
    return (
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <div style={{display: 'flex'}}>
                <DatePicker
                    required
                    id="date"
                    label="date"
                    onChange={e => props.dateChanged(e)}
                />
                <TimePicker
                    required
                    id="time"
                    label="time"
                    style={{marginLeft: 8}}
                    onChange={e => props.timeChanged(e)}
                />
            </div>
        </MuiPickersUtilsProvider>
    )
}
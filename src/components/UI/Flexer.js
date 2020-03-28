// dependencies
import React from 'react'

export default ({children, column}) => {
    //TODO: check direction
    let direction = column ? 'column' : 'row'

    return (
        <div style={{
            height: '100%',
            width: '100%',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexDirection: direction
        }}>
            {children}
        </div>
    )
}
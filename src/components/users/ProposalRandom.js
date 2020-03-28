// dependencies
import React from 'react'

// material-ui
import { Button } from '@material-ui/core'

// components
import ExpansionProposals from './ExpansionProposal'

export default ({proposals}) => {

    return (
        <>
            <div style={{display: 'flex', justifyContent: 'space-around', alignItems: 'center'}}>
                <Button color="primary" style={{marginBottom: 16}}>Show All</Button>
                <Button color="primary" style={{marginBottom: 16}}>Shuffles</Button>
                <Button color="primary" style={{marginBottom: 16}}>Filter</Button>
            </div>
            <ExpansionProposals proposals={proposals} />
        </>
    )
}
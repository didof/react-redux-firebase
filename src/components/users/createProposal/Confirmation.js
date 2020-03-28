// dependencies
import React from 'react'
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@material-ui/core'

export default ( {value, open, close, submit }) => {
    return (
        <>
        <Button
            variant="outlined"
            color="secondary"
            size="large"
            onClick={open}
        >
            Proceed
        </Button>
        <Dialog
            open={value}
            onClose={close}
        >
            <DialogTitle>Last look</DialogTitle>
            <DialogContent>
                <DialogContentText>
                    by continuing with the posting, you declare that you have not used
                    harmful language or that it may be a nuisance to other users.
                </DialogContentText>
                <DialogActions>
                    <Button 
                        color="secondary"
                        onClick={close}
                    >
                        Fix something
                    </Button>
                    <Button
                        color="primary"
                        size="large" 
                        variant="contained"
                        onClick={submit}
                    >
                        Let's go
                    </Button>
                </DialogActions>
            </DialogContent>
        </Dialog>
        </>
    )
}
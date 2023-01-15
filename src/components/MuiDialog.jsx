import React from 'react'
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Menu, MenuItem } from '@mui/material'
import { useState } from 'react'

export const MuiDialog = () => {
    const [open, setOpen] = useState(false)
    
  return (
    
    <div>
        
        <Button onClick={() => setOpen(true)}>Open Dialog</Button>
        
        
        <Dialog open={open} onClose={() => setOpen(false)} aria-labelledby='dialog-title' aria-describedby='dialog-description'>
            
            <DialogTitle id='dialog-title'>Submit the Text?</DialogTitle>
            
            <DialogContent>
                <DialogContentText id='dialog-description'>Are you sure you want to submit the text because editing is impossible after submission</DialogContentText>
            </DialogContent>
            
            <DialogActions>
                <Button onClick={() => setOpen(false)}>Cancel</Button>
                <Button onClick={() => setOpen(false)} autofocus>Submit</Button>
            </DialogActions>
            
        </Dialog>
    </div>
  )
}

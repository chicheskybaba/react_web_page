import React from 'react'
import { AppBar, Toolbar, IconButton, Typography, Stack, Button, Menu, MenuItem } from '@mui/material'
import { Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material'
import CatchingPokemonIcon from '@mui/icons-material/CatchingPokemon';
import { useState } from 'react';
import TextField from '@mui/material/TextField';


export const MuiMenu = () => {
    const [open, setOpen] = useState(false)
    const [register, setRegister] = useState(false)
    const [anchor1, setAnchor1] = useState<null | HTMLElement>(null)
    const open_menu = Boolean(anchor1)
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchor1(event.currentTarget)
    
    }
    
  return (
    
    <div>
        <AppBar position='static'>
            <Toolbar>
                <IconButton size='large' edge='start' color='inherit' aria-label='logo'>
                    <CatchingPokemonIcon />
                </IconButton>
                <Typography variant='h6' component={'div'} sx={{flexGrow: 1}}> 
                    POKEMON-APP
                </Typography>
                <Menu id='resources-menu' anchorEl={anchor1} open={open_menu} MenuListProps={{'aria-labelledby': 'resources-button'}} onClose>
                    <MenuItem>Blog</MenuItem >
                    <MenuItem>Pictures</MenuItem>
                    <MenuItem>Videos</MenuItem>
                    <MenuItem>Podcast</MenuItem>
                </Menu>
                <Stack direction={'row'} spacing={2}>
                    <Button color='inherit'>Home</Button>
                    <Button color='inherit'>About</Button>
                    <Button color='inherit'>Features</Button>
                    <Button color='inherit'>Pricing</Button>
                    <Button color='inherit' id='resources-button' onClick={handleClick} aria-controls={open_menu ? 'resources-menu' : undefined} aria-haspopup = 'true' aria-expanded={open_menu ? 'true' : undefined}>Resources</Button>
                    <Button color='inherit'>Career</Button>
                    <Button onClick={() => setRegister(true)} color='inherit'>Register</Button>
                    <Button onClick={() => setOpen(true)} color='inherit'>Login</Button>
                </Stack>
            </Toolbar>
        </AppBar>  
        
        
        
        
        
        
        <Dialog open={register} onClose={() => setRegister(false)} aria-labelledby='dialog-title' aria-describedby='dialog-description'>
            
            <DialogTitle id='dialog-title'>Register</DialogTitle>
            
            <DialogContent>
                <DialogContentText id='dialog-description'>Register with your details.
                    <TextField autoFocus margin="dense" id="first" label="First Name" type="name" fullWidth variant="standard"/>
                    <TextField autoFocus margin="dense" id="last" label="Last Name" type="name" fullWidth variant="standard"/>
                    <TextField autoFocus margin="dense" id="email" label="Email Address" type="email" fullWidth variant="standard"/>
                    <TextField autoFocus margin="dense" id="password" label="Password" type="password" fullWidth variant="standard"/>
                    <TextField autoFocus margin="dense" id="password" label="Password Again" type="password" fullWidth variant="standard"/>
                </DialogContentText>
            </DialogContent>
            
            <DialogActions>
                <Button onClick={() => setRegister(false)}>Cancel</Button>
                <Button onClick={() => setRegister(false)} autofocus>Submit</Button>
            </DialogActions>
            
        </Dialog>
                
         
         
         
         
         
         
        <Dialog open={open} onClose={() => setOpen(false)} aria-labelledby='dialog-title' aria-describedby='dialog-description'>
            
            <DialogTitle id='dialog-title'>Login</DialogTitle>
            
            <DialogContent>
                <DialogContentText id='dialog-description'>Login with your registration details.
                    <TextField autoFocus margin="dense" id="email" label="Email Address" type="email" fullWidth variant="standard"/>
                    <TextField autoFocus margin="dense" id="password" label="Password" type="password" fullWidth variant="standard"/>
                </DialogContentText>
            </DialogContent>
            
            <DialogActions>
                <Button onClick={() => setOpen(false)}>Cancel</Button>
                <Button onClick={() => setOpen(false)} autofocus>Submit</Button>
            </DialogActions>
            
        </Dialog>
         
        
    </div>   
  )
}

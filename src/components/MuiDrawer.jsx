import React from 'react'
import { Drawer, Typography, Box, IconButton, Stack,  } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from 'react'

export const MuiDrawer = () => {
    const [IsDrawerOpen, setIsDrawerOpen] = useState(false)
    
  return (
    <div>
        <Stack marginTop={3}>
            <IconButton size='large' edge='start' color='inherit' aria-label='logo' onClick={() => setIsDrawerOpen(true)}>
                <MenuIcon />
            </IconButton>
        </Stack>
            <Drawer anchor='left' open={IsDrawerOpen} onClose={() => setIsDrawerOpen(false)}>
                <Box p={4} width='250px' textAlign='center' role='presentation'>
                    <Typography variant='h6' component={'div'}>Side Panel</Typography>
                </Box>
            </Drawer>
        
    </div>
    
  ) 
}

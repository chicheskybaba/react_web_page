import React from 'react'
import { Typography, Stack } from '@mui/material'

export const MuiTypography = () => {
  return (
    <Stack marginLeft={6} marginRight={4}>
       
        <Typography variant='h5' marginBottom={2}>Welcome to A-B Olus and Associates</Typography>
        <Typography variant='subtitle1'>A-B Olus and Associates, Provider of Quality Engineering Services in Nigeria.</Typography>
        
        <Typography variant='body1' marginTop={2} marginBottom={1} justifyContent>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure 
          dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non 
          proident, sunt in culpa qui officia deserunt mollit anim id est laborum. 
        </Typography>
        <Typography variant='body2' gutterBottom={true} marginBottom={1}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure 
          dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non 
          proident, sunt in culpa qui officia deserunt mollit anim id est laborum. 
        </Typography>
        <Typography variant='body2' gutterBottom={true} marginBottom={1}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure 
          dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non 
          proident, sunt in culpa qui officia deserunt mollit anim id est laborum. 
        </Typography>
    </Stack>
  )
}


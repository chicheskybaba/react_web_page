import React from 'react'
import { Stack, Card, CardContent, Typography, CardActions, Button, CardMedia } from '@mui/material'

export const MuiCard = () => {
  return (
    <Stack width={'1000px'} marginTop={3} marginLeft={20} position={'center'}>
        
        
        <Card elevation={20}>
            <CardMedia component={'img'} height='400' image='https://source.unsplash.com/random' alt='unsplash image'/>
            <CardContent>
                <Typography gutterBottom variant='h5' component={'div'}>
                    Our Vision
                </Typography>
                
                <Typography variant='body1' color={'text.secondary'} component={'div'}>
                “Dedication to the highest quality of Customer Service delivered with a sense of warmth, friendliness, individual pride, and Company 
                Spirit.”
                </Typography>
            </CardContent>
            
            <CardActions>
                <Button size='small'>Share</Button>
                <Button size=''>Learn More</Button>
            </CardActions>
            
        </Card>
        
        
        
        
        
        <Card color='primary' elevation={18}>
        <CardMedia component={'img'} height='400' image='https://source.unsplash.com/random/?city,night' alt='unsplash image'/>
            <CardContent>
                <Typography gutterBottom variant='h5' component={'div'}>
                    Our Mission
                </Typography>
                
                <Typography variant='body1' color={'text.secondary'} component={'div'}>
                “To attract and attain customers with high-valued products and services and the most satisfying ownership experience in Africa.”
                </Typography>
            </CardContent>
            
            <CardActions>
                <Button size='small'>Share</Button>
                <Button size=''>Learn More</Button>
            </CardActions>
        </Card>
        
        
        
        
        <Card color='primary' elevation={20}>
        <CardMedia component={'img'} height='400' image='https://source.unsplash.com/user/wsanter' alt='unsplash image'/>
            <CardContent>
                <Typography gutterBottom variant='h5' component={'div'}>
                    Our Core Values
                </Typography>
                
                <Typography variant='body1' color={'text.secondary'} component={'div'}>
                    Quality, Service, Delivery, Innovation, Integrity, Accountability, and Leadership.
                </Typography>
            </CardContent>
            
            <CardActions>
                <Button size='small'>Share</Button>
                <Button size=''>Learn More</Button>
            </CardActions>
        </Card>
    
    
    </Stack>
  )
}

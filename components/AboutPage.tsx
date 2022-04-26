import React, { FunctionComponent } from "react";
import { Box, Button, ButtonProps, Container, Grid, ImageList, ImageListItem, styled, Typography } from "@mui/material";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const AboutPage: FunctionComponent = () => {
    return (
        <Container 
            sx={{ 
                height: '100vh', 
                padding: '10px', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center'
            }}
        >
            <Box>
                <Typography 
                    variant="h4" 
                    align="center"
                    sx={{ 
                        py: '4px' 
                    }}
                >
                    About Me
                </Typography>
                <Typography 
                    variant="subtitle1" 
                    align="center"
                    sx={{
                        color: '#777777', 
                        py: '4px'
                    }}
                >
                    My introduction
                </Typography>
            </Box>
        </Container>
    )
}

const ContactButton = styled(Button)<ButtonProps>(({ theme }) => ({
    color: 'white',
    backgroundColor: '#581FF3',
    padding: '6px 10px',
    '&:hover': {
      backgroundColor: '#581FF3',
      opacity: 0.5
    },
}));


export default AboutPage
import React, { FunctionComponent } from "react";
import { Box, Button, ButtonProps, Container, styled, Typography } from "@mui/material";
import MouseOutlinedIcon from '@mui/icons-material/MouseOutlined';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';

const AboutPage: FunctionComponent = () => {
    return (
        <Container sx={{ height: '100vh' }}>
            <Box 
                height='90vh'
                sx={{ padding: '10px' }}
            >
                <Typography 
                    variant="h4" 
                    align="center"
                    sx={{ 
                        py: '4px',
                        mt: '22%'
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
                    Summary Statement
                </Typography>
                <Box sx={{ textAlign: '-webkit-center' }}>
                    <Typography 
                        variant='body1'
                        sx={{ 
                            paddingBottom: '30px', 
                            lineHeight: '1.8',
                            width: '55vw'
                        }}
                        align='center'
                        mt={3}
                    >
                        I am a Software Engineer (Front-End Developer) who is providinga web application and application solutions for driving a business to be success.
                        I have skills at designing and developing web-based applications.
                        I am eager to learn new things, team worker, interpersonal skills, and work hard in order to get the best result for myself and the company.
                    </Typography>
                </Box>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <MouseOutlinedIcon fontSize='medium' sx={{ color: '#7397af' }}/>
                <Typography 
                    variant='body1' 
                    sx={{ 
                        mx: '2px', 
                        color: '#3a3a3a', 
                        '&:hover': {
                            cursor: 'pointer', 
                            color: '#7397af',
                        }
                    }}
                >
                    Scroll Down
                </Typography>
                <ArrowDownwardIcon fontSize='small' sx={{ color: '#7397af' }}/>
            </Box>
        </Container>
    )
}


export default AboutPage
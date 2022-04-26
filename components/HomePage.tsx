import React, { FunctionComponent } from "react";
import { Box, Button, ButtonProps, Container, Grid, styled, Typography } from "@mui/material";
import PermContactCalendarIcon from '@mui/icons-material/PermContactCalendar';
import MouseOutlinedIcon from '@mui/icons-material/MouseOutlined';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';

const HomePage: FunctionComponent = () => {
    return (
        <Container sx={{ height: '100vh'}}>
            <Box 
                sx={{ 
                    padding: '10px', 
                    display: 'flex', 
                    alignItems: 'center', 
                    height: '85vh'
                }}
            >
                <Grid container columns={16} >
                    <Grid item xs={8}>
                        <Box>
                            <Typography 
                                variant="h4" 
                                sx={{ 
                                    py: '4px' 
                                }}
                            >
                                Thanyalak Luamsai
                            </Typography>
                            <Typography 
                                variant="subtitle1" 
                                sx={{
                                    color: '#777777', 
                                    py: '4px'
                                }}
                            >
                                Frontend Developer
                            </Typography>
                            <Typography 
                                variant="body1" 
                                sx={{
                                    color: '#8a8a8a', 
                                    pt: '4px', 
                                    pb: '28px'
                                }}
                            >
                                I am a Software Engineer (Front-End Developer) who is providing a web application and application solutions for driving a business to be success. 
                                I have skills at designing and developing web-based applications.
                                I am eager to learn new things, team worker, interpersonal skills, and work hard in order to get the best result for myself and the company.
                            </Typography>
                            <ContactButton endIcon={<PermContactCalendarIcon fontSize="small" />}>
                                Contact Me
                            </ContactButton>
                        </Box>
                    </Grid>
                    <Grid 
                        item 
                        xs={8} 
                        sx={{ 
                            display: 'flex', 
                            justifyContent: 'center', 
                            alignItems: 'center'
                        }}
                    >
                        <img
                            src='/images/profile-image.jpg'
                            srcSet={`/images/profile-image.jpg 2x`}
                            alt={'Thanyalak'}
                            loading="lazy"
                            style={{
                                width: '230px',
                                borderRadius: '50%'
                            }}
                        />
                    </Grid>
                </Grid>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center'}}>
                <MouseOutlinedIcon fontSize="medium" sx={{ color: '#581FF3' }}/>
                <Typography 
                    variant="body1" 
                    sx={{ 
                        mx: '2px', 
                        color: '#3a3a3a', 
                        "&:hover": {
                            cursor: 'pointer', 
                            color: '#581FF3',
                        }
                    }}
                >
                    Scroll Down
                </Typography>
                <ArrowDownwardIcon fontSize="small" sx={{ color: '#581FF3' }}/>
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


export default HomePage
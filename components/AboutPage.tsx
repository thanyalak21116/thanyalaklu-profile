import React, { FunctionComponent } from "react";
import { Box, colors, Container, Typography } from "@mui/material";
import MouseOutlinedIcon from '@mui/icons-material/MouseOutlined';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { useRouter } from "next/router";
import { styled } from '@mui/material/styles';

const TypographyTheme = styled('div')(({ theme }) => ({
    ...theme.typography.h4,
    background: `-webkit-linear-gradient(top, #f0f0f0 50%, ${colors.lightBlue[100]} 50%)`,
    padding: theme.spacing(1),
    width: '20%'
}));

const TypographyMobileTheme = styled('div')(({ theme }) => ({
    ...theme.typography.h5,
    background: `-webkit-linear-gradient(top, #f0f0f0 50%, ${colors.lightBlue[100]} 50%)`,
    padding: theme.spacing(1),
    width: '45%'
}));

const AboutPage: FunctionComponent = () => {
    const router = useRouter()
    const scrollUp = () => {
        window.scrollTo(0, parseFloat('-1000vh'));
    }
    return (
        <Container sx={{ height: '107vh' }}>
            <Box 
                height='100vh'
                sx={{ padding: '10px' }}
                display={['none', 'block']}
            >
                <Box sx={{ textAlign: '-webkit-center' }}>
                    <TypographyTheme 
                        sx={{ 
                            py: '4px',
                            mt: '25%',
                        }}
                    >
                        About Me
                    </TypographyTheme>
                </Box>
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
            <Box 
                height='100vh'
                display={['block', 'none']}
            >
                <Box
                sx={{
                    position: 'relative',
                    top: '50%',
                    transform: 'translateY(-50%)'
                }}>
                    <Box sx={{ textAlign: '-webkit-center' }}>
                    <TypographyMobileTheme 
                        sx={{ 
                            py: '4px',
                            mt: '25%',
                        }}
                    >
                        About Me
                    </TypographyMobileTheme>
                </Box>
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
                            width: '75vw'
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
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Box display='flex' marginRight='20vw' onClick={() => scrollUp()}>
                    <MouseOutlinedIcon fontSize='medium' sx={{ color: '#7397af' }}/>
                    <Box display='flex'>
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
                            Scroll Up
                        </Typography>
                        <ArrowUpwardIcon fontSize='small' sx={{ color: '#7397af' }}/>
                    </Box>
                </Box>
                <Box display='flex' marginLeft='20vw' onClick={() => router.push('/Skills')}>
                    <Box display='flex'>
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
                            Skills Page
                        </Typography>
                        <NavigateNextIcon fontSize='medium' sx={{ color: '#7397af' }}/>
                    </Box>
                </Box>
            </Box>
        </Container>
    )
}

export default AboutPage
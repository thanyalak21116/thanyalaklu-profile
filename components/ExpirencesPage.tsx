import React, { FunctionComponent } from "react";
import { Box, Button, ButtonProps, Container, Grid, Link, styled, Typography } from "@mui/material";
import MouseOutlinedIcon from '@mui/icons-material/MouseOutlined';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';

const ExpirencesPage: FunctionComponent = () => {
    return (
        <Container sx={{ height: '630vh' }}>
            <Box 
                height='620vh'
                sx={{ padding: '10px' }}
            >
                <Typography 
                    variant="h4" 
                    align="center"
                    sx={{ 
                        py: '4px',
                        mt: '8%'
                    }}
                >
                    Expirences & Projects
                </Typography>
                <Typography 
                    variant="subtitle1" 
                    align="center"
                    sx={{
                        color: '#777777', 
                        py: '4px',
                        mb: 3
                    }}
                >
                    Work Expirences
                </Typography>
                <Grid container columns={4} mb={5}>
                    <Grid item xs={1}>
                        <Box sx={{ borderRight: '3px solid #c0e1f7' }}>
                            <Typography 
                                align='right' 
                                mr={4} 
                                variant='subtitle1'
                                // color='#7397af'
                            >
                                July 2021 - Present
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={3}>
                        <Box>
                            <Typography
                                ml={4} 
                                mb={1}
                                color='#7397af'
                            >
                                Junior Software Engineer - Front-end Developer (HIVE VENTURES LTD.)
                            </Typography>
                            <Typography
                                ml={4}
                                mb={1}
                            >
                                Spoonwalk Project is the platform used for searching restaurants, reviewing them, and getting delivery from them.
                            </Typography>
                            <Typography
                                ml={4}
                                mb={1}
                                color='#777777'
                            >
                                ● Web application: Develops web application by Next.js frameworks and using react-query to access data from API. I'm a part of the project in terms of developing website by the following features below:
                            </Typography>
                            <Typography
                                ml={8}
                                mb={1}
                                color='#777777'
                            >
                                ○ Register and Login/Logout feature.
                            </Typography>
                            <img
                                src='/images/Javascript.png'
                                srcSet={`/images/Javascript.png 2x`}
                                alt={'Javascript'}
                                loading='lazy'
                                style={{
                                    width: '35vw',
                                    marginTop: '20px',
                                    marginBottom: '30px'
                                }}
                            />
                            <Typography
                                ml={8}
                                mb={1}
                                color='#777777'
                            >
                                ○ Manage personal information feature by using react hook form for managing validation form.
                            </Typography>
                            <img
                                src='/images/Javascript.png'
                                srcSet={`/images/Javascript.png 2x`}
                                alt={'Javascript'}
                                loading='lazy'
                                style={{
                                    width: '35vw',
                                    marginTop: '20px',
                                    marginBottom: '30px'
                                }}
                            />
                            <Typography
                                ml={8}
                                mb={1}
                                color='#777777'
                            >
                                ○ Add address and map pin for delivery feature by using react-google-maps library.
                            </Typography>
                            <img
                                src='/images/Javascript.png'
                                srcSet={`/images/Javascript.png 2x`}
                                alt={'Javascript'}
                                loading='lazy'
                                style={{
                                    width: '35vw',
                                    marginTop: '20px',
                                    marginBottom: '30px'
                                }}
                            />
                            <Typography
                                ml={8}
                                mb={1}
                                color='#777777'
                            >
                                ○ Add credit cards payment feature.
                            </Typography>
                            <img
                                src='/images/Javascript.png'
                                srcSet={`/images/Javascript.png 2x`}
                                alt={'Javascript'}
                                loading='lazy'
                                style={{
                                    width: '35vw',
                                    marginTop: '20px',
                                    marginBottom: '30px'
                                }}
                            />
                            <Typography
                                ml={8}
                                mb={1}
                                color='#777777'
                            >
                                ○ Restaurants' review page such as write review, give rating to restaurants, view reviews, search restaurants, etc. 
                            </Typography>
                            <img
                                src='/images/Javascript.png'
                                srcSet={`/images/Javascript.png 2x`}
                                alt={'Javascript'}
                                loading='lazy'
                                style={{
                                    width: '35vw',
                                    marginTop: '20px',
                                    marginBottom: '30px'
                                }}
                            />
                            <Typography
                                ml={4}
                                mb={1}
                                color='#777777'
                            >
                                ● Application: Develops application by React Native frameworks. I'm a part of the project in terms of developing application by the following features below:
                            </Typography>
                            <Typography
                                ml={8}
                                mb={1}
                                color='#777777'
                            >
                                ○ Restaurants' review page such as write review, give rating to restaurants, view reviews, search restaurants, etc. 
                            </Typography>
                            <img
                                src='/images/Typescript.png'
                                srcSet={`/images/Typescript.png 2x`}
                                alt={'Javascript'}
                                loading='lazy'
                                style={{
                                    width: '35vw',
                                    marginTop: '20px',
                                    marginBottom: '30px'
                                }}
                            />
                            <Typography
                                ml={8}
                                mb={1}
                                color='#777777'
                            >
                                ○ Order delivery history.
                            </Typography>
                            <img
                                src='/images/Typescript.png'
                                srcSet={`/images/Typescript.png 2x`}
                                alt={'Javascript'}
                                loading='lazy'
                                style={{
                                    width: '35vw',
                                    marginTop: '20px',
                                    marginBottom: '30px'
                                }}
                            />
                        </Box>
                    </Grid>
                </Grid>
                <Grid container columns={4}>
                    <Grid item xs={1}>
                        <Box sx={{ borderRight: '3px solid #c0e1f7' }}>
                            <Typography 
                                align='right' 
                                mr={4} 
                                variant='subtitle1'
                                // color='#7397af'
                            >
                                Jun 2019 - July 2021
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={3}>
                        <Box>
                            <Typography
                                ml={4} 
                                mb={1}
                                variant='body1'
                                color='#7397af'
                            >
                                Programmer (Index Living Mall Public Co.,Ltd.)
                            </Typography>
                            <Typography
                                ml={4}
                                mb={1}
                                color='#777777'
                            >
                                ● Develops and maintains the software use for interior design.
                            </Typography>
                            <Typography
                                ml={4}
                                mb={1}
                                color='#777777'
                            >
                                ● Develops automate process for uploading files to a server by using RPA (UiPath).
                            </Typography>
                            <Typography
                                ml={4}
                                mb={1}
                                color='#777777'
                            >
                                ● Develops software for supporting finance team to generate a daily report from bank statement.
                            </Typography>
                        </Box>
                    </Grid>
                </Grid>
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


export default ExpirencesPage
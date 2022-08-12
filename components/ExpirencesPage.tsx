import React, { FunctionComponent } from "react";
import { Box, colors, Container, Grid, Typography } from "@mui/material";
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import { styled } from '@mui/material/styles';
import { useRouter } from "next/router";

const TypographyThemeTitle = styled('div')(({ theme }) => ({
    ...theme.typography.h4,
    background: `-webkit-linear-gradient(top, #f0f0f0 50%, ${colors.lightBlue[100]} 50%)`,
    padding: theme.spacing(1),
    width: '37%'
}));

const TypographyTheme = styled('div')(({ theme }) => ({
    ...theme.typography.body2,
    backgroundColor: colors.lightBlue[100],
    padding: theme.spacing(1),
}));

const ExpirencesPage: FunctionComponent = () => {
    const router = useRouter()
    return (
        <Container>
            <Box sx={{ padding: '10px' }}>
                <Box sx={{ textAlign: '-webkit-center' }}>
                    <TypographyThemeTitle
                        sx={{ 
                            py: '4px',
                            mt: '2vh'
                        }}
                    >
                        Expirences & Projects
                    </TypographyThemeTitle>
                </Box>
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
                <Grid container columns={4} mb={5} style={{ backgroundColor: 'white', padding: '36px' }}>
                    <Grid item xs={1}>
                        <Box sx={{ borderRight: '3px solid #c0e1f7' }}>
                            <Typography 
                                align='right' 
                                mr={4} 
                                variant='subtitle1'
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
                                ● Web application: Develops web application by Next.js frameworks and using react-query to access data from API. I&apos;m a part of the project in terms of developing website by the following features below:
                            </Typography>
                            <TypographyTheme style={{ paddingLeft: '50px', marginBottom: '15px' }}>
                                ○ Register and Login/Logout feature.
                            </TypographyTheme>
                            <img
                                src='/images/LoginFeature.png'
                                srcSet={`/images/LoginFeature.png 2x`}
                                alt={'LoginFeature'}
                                loading='lazy'
                                style={{
                                    width: '45vw',
                                    marginBottom: '30px',
                                    boxShadow: '0 6px 20px 0 rgba(0, 0, 0, 0.1)',
                                }}
                            />
                            <img
                                src='/images/RegisterFeature.png'
                                srcSet={`/images/RegisterFeature.png 2x`}
                                alt={'RegisterFeature'}
                                loading='lazy'
                                style={{
                                    width: '45vw',
                                    marginBottom: '30px',
                                    boxShadow: '0 6px 20px 0 rgba(0, 0, 0, 0.1)',
                                }}
                            />
                            <TypographyTheme style={{ paddingLeft: '50px', marginBottom: '15px' }}>
                                ○ Manage personal information feature by using react hook form for managing validation form.
                            </TypographyTheme>
                            <img
                                src='/images/PersonalInformationFeature_1.png'
                                srcSet={`/images/PersonalInformationFeature_1.png 2x`}
                                alt={'PersonalInformationFeature_1'}
                                loading='lazy'
                                style={{
                                    width: '45vw',
                                    marginBottom: '30px',
                                    boxShadow: '0 6px 20px 0 rgba(0, 0, 0, 0.1)',
                                }}
                            />
                            <img
                                src='/images/PersonalInformationFeature_3.png'
                                srcSet={`/images/PersonalInformationFeature_3.png 2x`}
                                alt={'PersonalInformationFeature_3'}
                                loading='lazy'
                                style={{
                                    width: '45vw',
                                    marginBottom: '30px',
                                    boxShadow: '0 6px 20px 0 rgba(0, 0, 0, 0.1)',
                                }}
                            />
                            <img
                                src='/images/PersonalInformationFeature_4.png'
                                srcSet={`/images/PersonalInformationFeature_4.png 2x`}
                                alt={'PersonalInformationFeature_4'}
                                loading='lazy'
                                style={{
                                    width: '45vw',
                                    marginBottom: '30px',
                                    boxShadow: '0 6px 20px 0 rgba(0, 0, 0, 0.1)',
                                }}
                            />
                            <TypographyTheme style={{ paddingLeft: '50px', marginBottom: '15px' }}>
                                ○ Add address and map pin for delivery feature by using react-google-maps library.
                            </TypographyTheme>
                            <img
                                src='/images/AddressFeature_1.png'
                                srcSet={`/images/AddressFeature_1.png 2x`}
                                alt={'AddressFeature_1'}
                                loading='lazy'
                                style={{
                                    width: '45vw',
                                    marginBottom: '30px',
                                    boxShadow: '0 6px 20px 0 rgba(0, 0, 0, 0.1)',
                                }}
                            />
                            <img
                                src='/images/AddressFeature_2.png'
                                srcSet={`/images/AddressFeature_2.png 2x`}
                                alt={'AddressFeature_2'}
                                loading='lazy'
                                style={{
                                    width: '45vw',
                                    marginBottom: '30px',
                                    boxShadow: '0 6px 20px 0 rgba(0, 0, 0, 0.1)',
                                }}
                            />
                            <Box display='flex'>
                                <img
                                    src='/images/AddressFeatureMobile_1.png'
                                    srcSet={`/images/AddressFeatureMobile_1.png 2x`}
                                    alt={'AddressFeatureMobile_1'}
                                    loading='lazy'
                                    style={{
                                        width: '14.35vw',
                                        marginBottom: '30px',
                                        marginRight: '1vw',
                                        boxShadow: '0 6px 20px 0 rgba(0, 0, 0, 0.1)',
                                    }}
                                />
                                <img
                                    src='/images/AddressFeatureMobile_2.png'
                                    srcSet={`/images/AddressFeatureMobile_2.png 2x`}
                                    alt={'AddressFeatureMobile_2'}
                                    loading='lazy'
                                    style={{
                                        width: '14.35vw',
                                        marginBottom: '30px',
                                        marginRight: '1vw',
                                        boxShadow: '0 6px 20px 0 rgba(0, 0, 0, 0.1)',
                                    }}
                                />
                                <img
                                    src='/images/AddressFeatureMobile_3.png'
                                    srcSet={`/images/AddressFeatureMobile_3.png 2x`}
                                    alt={'AddressFeatureMobile_3'}
                                    loading='lazy'
                                    style={{
                                        width: '14.35vw',
                                        marginBottom: '30px',
                                        boxShadow: '0 6px 20px 0 rgba(0, 0, 0, 0.1)',
                                    }}
                                />
                            </Box>
                            <TypographyTheme style={{ paddingLeft: '50px', marginBottom: '15px' }}>
                                ○ Add credit cards payment feature.
                            </TypographyTheme>
                            <img
                                src='/images/PaymentFeature.png'
                                srcSet={`/images/PaymentFeature.png 2x`}
                                alt={'PaymentFeature'}
                                loading='lazy'
                                style={{
                                    width: '45vw',
                                    marginBottom: '30px',
                                    boxShadow: '0 6px 20px 0 rgba(0, 0, 0, 0.1)',
                                }}
                            />
                            <TypographyTheme style={{ paddingLeft: '50px', marginBottom: '15px' }}>
                                ○ Restaurants&apos; review page such as write review, give rating to restaurants, view reviews, search restaurants, etc. 
                            </TypographyTheme>
                            <img
                                src='/images/ReviewContentFeature_2.png'
                                srcSet={`/images/ReviewContentFeature_2.png 2x`}
                                alt={'ReviewContentFeature_2'}
                                loading='lazy'
                                style={{
                                    width: '45vw',
                                    marginBottom: '30px',
                                    boxShadow: '0 6px 20px 0 rgba(0, 0, 0, 0.1)',
                                }}
                            />
                            <img
                                src='/images/ReviewContentFeature_3.png'
                                srcSet={`/images/ReviewContentFeature_3.png 2x`}
                                alt={'ReviewContentFeature_2'}
                                loading='lazy'
                                style={{
                                    width: '45vw',
                                    marginBottom: '30px',
                                    boxShadow: '0 6px 20px 0 rgba(0, 0, 0, 0.1)',
                                }}
                            />
                            <img
                                src='/images/ReviewContentFeature_5.png'
                                srcSet={`/images/ReviewContentFeature_5.png 2x`}
                                alt={'ReviewContentFeature_2'}
                                loading='lazy'
                                style={{
                                    width: '45vw',
                                    marginBottom: '30px',
                                    boxShadow: '0 6px 20px 0 rgba(0, 0, 0, 0.1)',
                                }}
                            />
                            <Typography
                                ml={4}
                                mb={1}
                                color='#777777'
                            >
                                ● Application: Develops application by React Native frameworks. I&apos;m a part of the project in terms of developing application by the following features below:
                            </Typography>
                            <TypographyTheme style={{ paddingLeft: '50px', marginBottom: '15px' }}>
                                ○ Restaurants&apos; review page such as write review, give rating to restaurants, view reviews, search restaurants, etc. 
                            </TypographyTheme>
                            <Box display='flex'>
                                <img
                                    src='/images/ReviewAppFeature_2.jpg'
                                    srcSet={`/images/ReviewAppFeature_2.jpg 2x`}
                                    alt={'ReviewAppFeature_2'}
                                    loading='lazy'
                                    style={{
                                        width: '17.5vw',
                                        marginBottom: '30px',
                                        marginRight: '1.25vw',
                                        boxShadow: '0 6px 20px 0 rgba(0, 0, 0, 0.1)',
                                    }}
                                />
                                <img
                                    src='/images/ReviewAppFeature_3.jpg'
                                    srcSet={`/images/ReviewAppFeature_3.jpg 2x`}
                                    alt={'ReviewAppFeature_3'}
                                    loading='lazy'
                                    style={{
                                        width: '17.5vw',
                                        marginBottom: '30px',
                                        marginRight: '1.25vw',
                                        boxShadow: '0 6px 20px 0 rgba(0, 0, 0, 0.1)',
                                    }}
                                />
                                <img
                                    src='/images/ReviewAppFeature_6.jpg'
                                    srcSet={`/images/ReviewAppFeature_6.jpg 2x`}
                                    alt={'ReviewAppFeature_6'}
                                    loading='lazy'
                                    style={{
                                        width: '17.5vw',
                                        marginBottom: '30px',
                                        boxShadow: '0 6px 20px 0 rgba(0, 0, 0, 0.1)',
                                    }}
                                />
                            </Box>
                            <TypographyTheme style={{ paddingLeft: '50px', marginBottom: '15px' }}>
                                ○ Order delivery history.
                            </TypographyTheme>
                            <Box display='flex'>
                                <img
                                    src='/images/HistoryAppFeature_1.jpg'
                                    srcSet={`/images/HistoryAppFeature_1.jpg 2x`}
                                    alt={'HistoryAppFeature_1'}
                                    loading='lazy'
                                    style={{
                                        width: '17.5vw',
                                        marginBottom: '30px',
                                        marginRight: '1.25vw',
                                        boxShadow: '0 6px 20px 0 rgba(0, 0, 0, 0.1)',
                                    }}
                                />
                                <img
                                    src='/images/HistoryAppFeature_3.jpg'
                                    srcSet={`/images/HistoryAppFeature_3.jpg 2x`}
                                    alt={'HistoryAppFeature_3'}
                                    loading='lazy'
                                    style={{
                                        width: '17.5vw',
                                        marginBottom: '30px',
                                        marginRight: '1.25vw',
                                        boxShadow: '0 6px 20px 0 rgba(0, 0, 0, 0.1)',
                                    }}
                                />
                                <img
                                    src='/images/HistoryAppFeature_5.jpg'
                                    srcSet={`/images/HistoryAppFeature_5.jpg 2x`}
                                    alt={'ReviewAppFeature_6'}
                                    loading='lazy'
                                    style={{
                                        width: '17.5vw',
                                        marginBottom: '30px',
                                        boxShadow: '0 6px 20px 0 rgba(0, 0, 0, 0.1)',
                                    }}
                                />
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
                <Grid container columns={4} style={{ backgroundColor: 'white', padding: '36px' }}>
                    <Grid item xs={1}>
                        <Box sx={{ borderRight: '3px solid #c0e1f7' }}>
                            <Typography 
                                align='right' 
                                mr={4} 
                                variant='subtitle1'
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
                            <img
                                src='/images/D3D_1.png'
                                srcSet={`/images/D3D_1.png 2x`}
                                alt={'D3D_1'}
                                loading='lazy'
                                style={{
                                    width: '45vw',
                                    marginBottom: '30px',
                                    boxShadow: '0 6px 20px 0 rgba(0, 0, 0, 0.1)',
                                }}
                            />
                            <img
                                src='/images/D3D_2.png'
                                srcSet={`/images/D3D_2.png 2x`}
                                alt={'D3D_2'}
                                loading='lazy'
                                style={{
                                    width: '45vw',
                                    marginBottom: '30px',
                                    boxShadow: '0 6px 20px 0 rgba(0, 0, 0, 0.1)',
                                }}
                            />
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
            <Box height='10vh' sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Box display='flex' marginRight='50vw' onClick={() => router.push('/Skills')}>
                    <Box display='flex'>
                        <NavigateBeforeIcon fontSize='medium' sx={{ color: '#7397af' }}/>
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
                    </Box>
                </Box>
            </Box>
        </Container>
    )
}


export default ExpirencesPage
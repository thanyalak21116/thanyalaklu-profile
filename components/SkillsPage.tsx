import React, { FunctionComponent } from 'react';
import { Box, colors, Container, Grid, styled, Typography } from '@mui/material';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import { useRouter } from 'next/router';

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
    width: '40%'
}));

const SkillPage: FunctionComponent = () => {
    const router = useRouter()
    return (
        <Container>
            <Box 
                padding='10px'
            >
                <Box 
                    sx={{
                        mt: '2vh',
                        paddingX: '30px',
                        paddingY: '50px',
                        height: '80vh',
                    }}
                    display={['none', 'block']}
                >
                    <Box sx={{ textAlign: '-webkit-center' }}>
                        <TypographyTheme
                            sx={{ 
                                py: '4px', 
                                mb: '30px' 
                            }}
                        >
                            Skills
                        </TypographyTheme>
                    </Box>
                    <Grid container columns={12}>
                        <Grid item xs={3}>
                            <Box
                                sx={{
                                    boxShadow: '0 6px 20px 0 rgba(0, 0, 0, 0.1)',
                                    mx: 1
                                }}>
                                <Box 
                                    sx={{
                                        height: '50px',
                                        backgroundColor: '#c0e1f7',
                                        textAlign: 'center',
                                        py: 1.5
                                    }}
                                >
                                    <Typography>Coding Languages</Typography>
                                </Box>
                                <Box 
                                    sx={{
                                        height: '280px',
                                        backgroundColor: '#ffffff',
                                        textAlign: 'center',
                                        pt: 2
                                    }}
                                >
                                    <Grid container columns={4}>
                                        <Grid item xs={2}>
                                            <Box sx={{ textAlign: 'center', ml: 1 }}>
                                                <img
                                                    src='/images/Javascript.png'
                                                    srcSet={`/images/Javascript.png 2x`}
                                                    alt={'Javascript'}
                                                    loading='lazy'
                                                    style={{
                                                        height: '40px',
                                                        marginTop: '10px'
                                                    }}
                                                />
                                                <Typography variant='body2' mt='4px'>Javascript</Typography>
                                            </Box>
                                        </Grid>
                                        <Grid item xs={2}>
                                            <Box sx={{ textAlign: 'center', mr: 1 }}>
                                                <img
                                                    src='/images/Typescript.png'
                                                    srcSet={`/images/Typescript.png 2x`}
                                                    alt={'Typescript'}
                                                    loading='lazy'
                                                    style={{
                                                        height: '40px',
                                                        marginTop: '10px'
                                                    }}
                                                />
                                                <Typography variant='body2' mt='4px'>Typescript</Typography>
                                            </Box>
                                        </Grid>
                                    </Grid>
                                    <Grid container columns={4}>
                                        <Grid item xs={2}>
                                            <Box sx={{ textAlign: 'center', ml: 1 }}>
                                                <img
                                                    src='/images/HTML5.png'
                                                    srcSet={`/images/HTML5.png 2x`}
                                                    alt={'HTML5'}
                                                    loading='lazy'
                                                    style={{
                                                        height: '40px',
                                                        marginTop: '10px'
                                                    }}
                                                />
                                                <Typography variant='body2' mt='4px'>HTML</Typography>
                                            </Box>
                                        </Grid>
                                        <Grid item xs={2}>
                                            <Box sx={{ textAlign: 'center', mr: 1 }}>
                                                <img
                                                    src='/images/CSS3.png'
                                                    srcSet={`/images/CSS3.png 2x`}
                                                    alt={'CSS3'}
                                                    loading='lazy'
                                                    style={{
                                                        height: '40px',
                                                        marginTop: '10px'
                                                    }}
                                                />
                                                <Typography variant='body2' mt='4px'>CSS</Typography>
                                            </Box>
                                        </Grid>
                                    </Grid>
                                    <Grid container columns={4}>
                                        <Grid item xs={2}>
                                            <Box sx={{ textAlign: 'center', ml: 1 }}>
                                                <img
                                                    src='/images/Python.png'
                                                    srcSet={`/images/Python.png 2x`}
                                                    alt={'Python'}
                                                    loading='lazy'
                                                    style={{
                                                        height: '40px',
                                                        marginTop: '10px'
                                                    }}
                                                />
                                                <Typography variant='body2' mt='4px'>Python</Typography>
                                            </Box>
                                        </Grid>
                                    </Grid>
                                </Box>
                            </Box>
                        </Grid>
                        <Grid item xs={3}>
                            <Box
                                sx={{
                                    boxShadow: '0 6px 20px 0 rgba(0, 0, 0, 0.1)',
                                    mx: 1,
                                }}>
                                <Box 
                                    sx={{
                                        height: '50px',
                                        backgroundColor: '#c0e1f7',
                                        textAlign: 'center',
                                        py: 1.5
                                    }}
                                >
                                    <Typography>Frameworks</Typography>
                                </Box>
                                <Box 
                                    sx={{
                                        height: '280px',
                                        backgroundColor: '#ffffff',
                                        textAlign: 'center',
                                        pt: 2
                                    }}
                                >
                                    <Grid container columns={4}>
                                        <Grid item xs={2}>
                                            <Box sx={{ textAlign: 'center', ml: 1 }}>
                                                <img
                                                    src='/images/React.png'
                                                    srcSet={`/images/React.png 2x`}
                                                    alt={'React'}
                                                    loading='lazy'
                                                    style={{
                                                        height: '40px',
                                                        marginTop: '10px'
                                                    }}
                                                />
                                                <Typography variant='body2' mt='4px'>React</Typography>
                                            </Box>
                                        </Grid>
                                        <Grid item xs={2}>
                                            <Box sx={{ textAlign: 'center', mr: 1 }}>
                                                <img
                                                    src='/images/NextJS.png'
                                                    srcSet={`/images/NextJS.png 2x`}
                                                    alt={'NextJS'}
                                                    loading='lazy'
                                                    style={{
                                                        height: '40px',
                                                        marginTop: '10px'
                                                    }}
                                                />
                                                <Typography variant='body2' mt='4px'>Next.js</Typography>
                                            </Box>
                                        </Grid>
                                    </Grid>
                                    <Grid container columns={4}>
                                        <Grid item xs={2}>
                                            <Box sx={{ textAlign: 'center', ml: 1 }}>
                                                <img
                                                    src='/images/ReactNative.png'
                                                    srcSet={`/images/ReactNative.png 2x`}
                                                    alt={'ReactNative'}
                                                    loading='lazy'
                                                    style={{
                                                        height: '40px',
                                                        marginTop: '10px'
                                                    }}
                                                />
                                                <Typography variant='body2' mt='4px'>React Native</Typography>
                                            </Box>
                                        </Grid>
                                        <Grid item xs={2}>
                                            <Box sx={{ textAlign: 'center', mr: 1 }}>
                                                <img
                                                    src='/images/StyledComponents.png'
                                                    srcSet={`/images/StyledComponents.png 2x`}
                                                    alt={'StyledComponents'}
                                                    loading='lazy'
                                                    style={{
                                                        height: '40px',
                                                        marginTop: '10px'
                                                    }}
                                                />
                                                <Typography variant='body2' mt='4px'>Styled-components</Typography>
                                            </Box>
                                        </Grid>
                                    </Grid>
                                    <Grid container columns={4}>
                                        <Grid item xs={2}>
                                            <Box sx={{ textAlign: 'center', ml: 1 }}>
                                                <img
                                                    src='/images/ReactQuery.png'
                                                    srcSet={`/images/ReactQuery.png 2x`}
                                                    alt={'ReactQuery'}
                                                    loading='lazy'
                                                    style={{
                                                        height: '40px',
                                                        marginTop: '-10px'
                                                    }}
                                                />
                                                <Typography variant='body2' mt='4px'>react-query</Typography>
                                            </Box>
                                        </Grid>
                                    </Grid>
                                </Box>
                            </Box>
                        </Grid>
                        <Grid item xs={3}>
                            <Box
                                sx={{
                                    boxShadow: '0 6px 20px 0 rgba(0, 0, 0, 0.1)',
                                    mx: 1
                                }}>
                                <Box 
                                    sx={{
                                        height: '50px',
                                        backgroundColor: '#c0e1f7',
                                        textAlign: 'center',
                                        py: 1.5
                                    }}
                                >
                                    <Typography>Project Management</Typography>
                                </Box>
                                <Box 
                                    sx={{
                                        height: '280px',
                                        backgroundColor: '#ffffff',
                                        textAlign: 'center',
                                        pt: 2
                                    }}
                                >
                                    <Grid container columns={4}>
                                        <Grid item xs={2}>
                                            <Box sx={{ textAlign: 'center', ml: 1 }}>
                                                <img
                                                    src='/images/GitHub.png'
                                                    srcSet={`/images/GitHub.png 2x`}
                                                    alt={'GitHub'}
                                                    loading='lazy'
                                                    style={{
                                                        height: '40px',
                                                        marginTop: '10px'
                                                    }}
                                                />
                                                <Typography variant='body2' mt='4px'>Version control (Github)</Typography>
                                            </Box>
                                        </Grid>
                                        <Grid item xs={2}>
                                            <Box sx={{ textAlign: 'center', mr: 1 }}>
                                                <img
                                                    src='/images/Agile.png'
                                                    srcSet={`/images/Agile.png 2x`}
                                                    alt={'Agile'}
                                                    loading='lazy'
                                                    style={{
                                                        height: '40px',
                                                        marginTop: '10px'
                                                    }}
                                                />
                                                <Typography variant='body2' mt='4px'>Agile frameworks</Typography>
                                            </Box>
                                        </Grid>
                                    </Grid>
                                    <Grid container columns={4}>
                                        <Grid item xs={2}>
                                            <Box sx={{ textAlign: 'center', ml: 1 }}>
                                                <img
                                                    src='/images/Jenkins.png'
                                                    srcSet={`/images/Jenkins.png 2x`}
                                                    alt={'Jenkins'}
                                                    loading='lazy'
                                                    style={{
                                                        height: '40px',
                                                        marginTop: '10px'
                                                    }}
                                                />
                                                <Typography variant='body2' mt='4px'>Jenkins</Typography>
                                            </Box>
                                        </Grid>
                                        <Grid item xs={2}>
                                            <Box sx={{ textAlign: 'center', mr: 1 }}>
                                                <img
                                                    src='/images/Azure.png'
                                                    srcSet={`/images/Azure.png 2x`}
                                                    alt={'Azure'}
                                                    loading='lazy'
                                                    style={{
                                                        height: '40px',
                                                        marginTop: '10px'
                                                    }}
                                                />
                                                <Typography variant='body2' mt='4px'>Azure DevOps</Typography>
                                            </Box>
                                        </Grid>
                                    </Grid>
                                </Box>
                            </Box>
                        </Grid>
                        <Grid item xs={3}>
                            <Box
                                sx={{
                                    boxShadow: '0 6px 20px 0 rgba(0, 0, 0, 0.1)',
                                    mx: 1
                                }}>
                                <Box 
                                    sx={{
                                        height: '50px',
                                        backgroundColor: '#c0e1f7',
                                        textAlign: 'center',
                                        py: 1.5
                                    }}
                                >
                                    <Typography>UX/UI Design</Typography>
                                </Box>
                                <Box 
                                    sx={{
                                        height: '280px',
                                        backgroundColor: '#ffffff',
                                        textAlign: 'center',
                                        pt: 2
                                    }}
                                >
                                    <Grid container columns={4}>
                                        <Grid item xs={2}>
                                            <Box sx={{ textAlign: 'center', ml: 1 }}>
                                                <img
                                                    src='/images/AdobeXD.png'
                                                    srcSet={`/images/AdobeXD.png 2x`}
                                                    alt={'AdobeXD'}
                                                    loading='lazy'
                                                    style={{
                                                        height: '40px',
                                                        marginTop: '10px'
                                                    }}
                                                />
                                                <Typography variant='body2' mt='4px'>Adobe XD</Typography>
                                            </Box>
                                        </Grid>
                                        <Grid item xs={2}>
                                            <Box sx={{ textAlign: 'center', mr: 1 }}>
                                                <img
                                                    src='/images/Figma.png'
                                                    srcSet={`/images/Figma.png 2x`}
                                                    alt={'Figma'}
                                                    loading='lazy'
                                                    style={{
                                                        height: '40px',
                                                        marginTop: '10px'
                                                    }}
                                                />
                                                <Typography variant='body2' mt='4px'>Figma</Typography>
                                            </Box>
                                        </Grid>
                                    </Grid>
                                </Box>
                            </Box>
                        </Grid>
                    </Grid>
                </Box>
                <Box 
                    display={['block', 'none']}
                    sx={{
                        paddingX: '30px',
                        paddingY: '10px',
                        height: '130%',
                    }}
                >
                    <Box sx={{ textAlign: '-webkit-center' }}>
                        <TypographyMobileTheme
                            sx={{ 
                                mb: '30px' 
                            }}
                        >
                            Skills
                        </TypographyMobileTheme>
                    </Box>
                    <Box
                        mb={3}
                        sx={{
                            boxShadow: '0 6px 20px 0 rgba(0, 0, 0, 0.1)',
                            mx: 1
                        }}
                    >
                        <Box 
                            sx={{
                                height: '50px',
                                backgroundColor: '#c0e1f7',
                                textAlign: 'center',
                                py: 1.5
                            }}
                        >
                            <Typography>Coding Languages</Typography>
                        </Box>
                        <Box 
                            sx={{
                                height: '280px',
                                backgroundColor: '#ffffff',
                                textAlign: 'center',
                                pt: 2
                            }}
                        >
                            <Grid container columns={4}>
                                <Grid item xs={2}>
                                    <Box sx={{ textAlign: 'center', ml: 1 }}>
                                        <img
                                            src='/images/Javascript.png'
                                            srcSet={`/images/Javascript.png 2x`}
                                            alt={'Javascript'}
                                            loading='lazy'
                                            style={{
                                                height: '40px',
                                                marginTop: '10px'
                                            }}
                                        />
                                        <Typography variant='body2' mt='4px'>Javascript</Typography>
                                    </Box>
                                </Grid>
                                <Grid item xs={2}>
                                    <Box sx={{ textAlign: 'center', mr: 1 }}>
                                        <img
                                            src='/images/Typescript.png'
                                            srcSet={`/images/Typescript.png 2x`}
                                            alt={'Typescript'}
                                            loading='lazy'
                                            style={{
                                                height: '40px',
                                                marginTop: '10px'
                                            }}
                                        />
                                        <Typography variant='body2' mt='4px'>Typescript</Typography>
                                    </Box>
                                </Grid>
                            </Grid>
                            <Grid container columns={4}>
                                <Grid item xs={2}>
                                    <Box sx={{ textAlign: 'center', ml: 1 }}>
                                        <img
                                            src='/images/HTML5.png'
                                            srcSet={`/images/HTML5.png 2x`}
                                            alt={'HTML5'}
                                            loading='lazy'
                                            style={{
                                                height: '40px',
                                                marginTop: '10px'
                                            }}
                                        />
                                        <Typography variant='body2' mt='4px'>HTML</Typography>
                                    </Box>
                                </Grid>
                                <Grid item xs={2}>
                                    <Box sx={{ textAlign: 'center', mr: 1 }}>
                                        <img
                                            src='/images/CSS3.png'
                                            srcSet={`/images/CSS3.png 2x`}
                                            alt={'CSS3'}
                                            loading='lazy'
                                            style={{
                                                height: '40px',
                                                marginTop: '10px'
                                            }}
                                        />
                                        <Typography variant='body2' mt='4px'>CSS</Typography>
                                    </Box>
                                </Grid>
                            </Grid>
                            <Grid container columns={4}>
                                <Grid item xs={2}>
                                    <Box sx={{ textAlign: 'center', ml: 1 }}>
                                        <img
                                            src='/images/Python.png'
                                            srcSet={`/images/Python.png 2x`}
                                            alt={'Python'}
                                            loading='lazy'
                                            style={{
                                                height: '40px',
                                                marginTop: '10px'
                                            }}
                                        />
                                        <Typography variant='body2' mt='4px'>Python</Typography>
                                    </Box>
                                </Grid>
                            </Grid>
                        </Box>
                    </Box>
                    <Box 
                        mb={3}
                        sx={{
                            boxShadow: '0 6px 20px 0 rgba(0, 0, 0, 0.1)',
                            mx: 1,
                        }}
                    >
                        <Box 
                            sx={{
                                height: '50px',
                                backgroundColor: '#c0e1f7',
                                textAlign: 'center',
                                py: 1.5
                            }}
                        >
                            <Typography>Frameworks</Typography>
                        </Box>
                        <Box 
                            sx={{
                                height: '280px',
                                backgroundColor: '#ffffff',
                                textAlign: 'center',
                                pt: 2
                            }}
                        >
                            <Grid container columns={4}>
                                <Grid item xs={2}>
                                    <Box sx={{ textAlign: 'center', ml: 1 }}>
                                        <img
                                            src='/images/React.png'
                                            srcSet={`/images/React.png 2x`}
                                            alt={'React'}
                                            loading='lazy'
                                            style={{
                                                height: '40px',
                                                marginTop: '10px'
                                            }}
                                        />
                                        <Typography variant='body2' mt='4px'>React</Typography>
                                    </Box>
                                </Grid>
                                <Grid item xs={2}>
                                    <Box sx={{ textAlign: 'center', mr: 1 }}>
                                        <img
                                            src='/images/NextJS.png'
                                            srcSet={`/images/NextJS.png 2x`}
                                            alt={'NextJS'}
                                            loading='lazy'
                                            style={{
                                                height: '40px',
                                                marginTop: '10px'
                                            }}
                                        />
                                        <Typography variant='body2' mt='4px'>Next.js</Typography>
                                    </Box>
                                </Grid>
                            </Grid>
                            <Grid container columns={4}>
                                <Grid item xs={2}>
                                    <Box sx={{ textAlign: 'center', ml: 1 }}>
                                        <img
                                            src='/images/ReactNative.png'
                                            srcSet={`/images/ReactNative.png 2x`}
                                            alt={'ReactNative'}
                                            loading='lazy'
                                            style={{
                                                height: '40px',
                                                marginTop: '10px'
                                            }}
                                        />
                                        <Typography variant='body2' mt='4px'>React Native</Typography>
                                    </Box>
                                </Grid>
                                <Grid item xs={2}>
                                    <Box sx={{ textAlign: 'center', mr: 1 }}>
                                        <img
                                            src='/images/StyledComponents.png'
                                            srcSet={`/images/StyledComponents.png 2x`}
                                            alt={'StyledComponents'}
                                            loading='lazy'
                                            style={{
                                                height: '40px',
                                                marginTop: '10px'
                                            }}
                                        />
                                        <Typography variant='body2' mt='4px'>Styled-components</Typography>
                                    </Box>
                                </Grid>
                            </Grid>
                            <Grid container columns={4}>
                                <Grid item xs={2}>
                                    <Box sx={{ textAlign: 'center', ml: 1 }}>
                                        <img
                                            src='/images/ReactQuery.png'
                                            srcSet={`/images/ReactQuery.png 2x`}
                                            alt={'ReactQuery'}
                                            loading='lazy'
                                            style={{
                                                height: '40px',
                                                marginTop: '-10px'
                                            }}
                                        />
                                        <Typography variant='body2' mt='4px'>react-query</Typography>
                                    </Box>
                                </Grid>
                            </Grid>
                        </Box>
                    </Box>
                    <Box
                        mb={3}
                        sx={{
                            boxShadow: '0 6px 20px 0 rgba(0, 0, 0, 0.1)',
                            mx: 1
                        }}
                    >
                        <Box 
                            sx={{
                                height: '50px',
                                backgroundColor: '#c0e1f7',
                                textAlign: 'center',
                                py: 1.5
                            }}
                        >
                            <Typography>Project Management</Typography>
                        </Box>
                        <Box 
                            sx={{
                                height: '280px',
                                backgroundColor: '#ffffff',
                                textAlign: 'center',
                                pt: 2
                            }}
                        >
                            <Grid container columns={4}>
                                <Grid item xs={2}>
                                    <Box sx={{ textAlign: 'center', ml: 1 }}>
                                        <img
                                            src='/images/GitHub.png'
                                            srcSet={`/images/GitHub.png 2x`}
                                            alt={'GitHub'}
                                            loading='lazy'
                                            style={{
                                                height: '40px',
                                                marginTop: '10px'
                                            }}
                                        />
                                        <Typography variant='body2' mt='4px'>Version control (Github)</Typography>
                                    </Box>
                                </Grid>
                                <Grid item xs={2}>
                                    <Box sx={{ textAlign: 'center', mr: 1 }}>
                                        <img
                                            src='/images/Agile.png'
                                            srcSet={`/images/Agile.png 2x`}
                                            alt={'Agile'}
                                            loading='lazy'
                                            style={{
                                                height: '40px',
                                                marginTop: '10px'
                                            }}
                                        />
                                        <Typography variant='body2' mt='4px'>Agile frameworks</Typography>
                                    </Box>
                                </Grid>
                            </Grid>
                            <Grid container columns={4}>
                                <Grid item xs={2}>
                                    <Box sx={{ textAlign: 'center', ml: 1 }}>
                                        <img
                                            src='/images/Jenkins.png'
                                            srcSet={`/images/Jenkins.png 2x`}
                                            alt={'Jenkins'}
                                            loading='lazy'
                                            style={{
                                                height: '40px',
                                                marginTop: '10px'
                                            }}
                                        />
                                        <Typography variant='body2' mt='4px'>Jenkins</Typography>
                                    </Box>
                                </Grid>
                                <Grid item xs={2}>
                                    <Box sx={{ textAlign: 'center', mr: 1 }}>
                                        <img
                                            src='/images/Azure.png'
                                            srcSet={`/images/Azure.png 2x`}
                                            alt={'Azure'}
                                            loading='lazy'
                                            style={{
                                                height: '40px',
                                                marginTop: '10px'
                                            }}
                                        />
                                        <Typography variant='body2' mt='4px'>Azure DevOps</Typography>
                                    </Box>
                                </Grid>
                            </Grid>
                        </Box>
                    </Box>
                    <Box
                        mb={3}
                        sx={{
                            boxShadow: '0 6px 20px 0 rgba(0, 0, 0, 0.1)',
                            mx: 1
                        }}
                    >
                        <Box 
                            sx={{
                                height: '50px',
                                backgroundColor: '#c0e1f7',
                                textAlign: 'center',
                                py: 1.5
                            }}
                        >
                            <Typography>UX/UI Design</Typography>
                        </Box>
                        <Box 
                            sx={{
                                height: '280px',
                                backgroundColor: '#ffffff',
                                textAlign: 'center',
                                pt: 2
                            }}
                        >
                            <Grid container columns={4}>
                                <Grid item xs={2}>
                                    <Box sx={{ textAlign: 'center', ml: 1 }}>
                                        <img
                                            src='/images/AdobeXD.png'
                                            srcSet={`/images/AdobeXD.png 2x`}
                                            alt={'AdobeXD'}
                                            loading='lazy'
                                            style={{
                                                height: '40px',
                                                marginTop: '10px'
                                            }}
                                        />
                                        <Typography variant='body2' mt='4px'>Adobe XD</Typography>
                                    </Box>
                                </Grid>
                                <Grid item xs={2}>
                                    <Box sx={{ textAlign: 'center', mr: 1 }}>
                                        <img
                                            src='/images/Figma.png'
                                            srcSet={`/images/Figma.png 2x`}
                                            alt={'Figma'}
                                            loading='lazy'
                                            style={{
                                                height: '40px',
                                                marginTop: '10px'
                                            }}
                                        />
                                        <Typography variant='body2' mt='4px'>Figma</Typography>
                                    </Box>
                                </Grid>
                            </Grid>
                        </Box>
                    </Box>
                </Box>
            </Box>
            <Box mb={2} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Box 
                    display='flex' 
                    marginRight='20vw' 
                    onClick={() => 
                        router.push({
                            pathname: '/Profile',
                            query: {
                                isAbout: true
                            }
                        })
                    }
                >
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
                            About Page
                        </Typography>
                    </Box>
                </Box>
                <Box display='flex' marginLeft='20vw' onClick={() => router.push('/Expirences')}>
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
                            Expirences Page
                        </Typography>
                        <NavigateNextIcon fontSize='medium' sx={{ color: '#7397af' }}/>
                    </Box>
                </Box>
            </Box>
        </Container>
    )
}

export default SkillPage
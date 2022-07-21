import React, { FunctionComponent } from 'react';
import { Box, Button, ButtonProps, Container, Grid, styled, Typography } from '@mui/material';
import MouseOutlinedIcon from '@mui/icons-material/MouseOutlined';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';

const SkillPage: FunctionComponent = () => {
    return (
        <Container sx={{ height: '100vh' }}>
            <Box 
                sx={{ 
                    padding: '10px', 
                    height: '90vh',
                }}
            >
                <Box 
                    sx={{
                        mt: '10%',
                        paddingX: '30px',
                        paddingY: '25px',
                        height: '80vh',
                    }}
                >
                    <Typography 
                        variant='h4'
                        align='center'
                        mb='30px'
                        sx={{ py: '4px' }}
                    >
                        Skills
                    </Typography>
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
                                    <Grid container columns={1}>
                                        <Grid item xs={1}>
                                            <Box sx={{ textAlign: 'center', ml: 1 }}>
                                                <img
                                                    src='/images/Jenkins.png'
                                                    srcSet={`/images/Jenkins.png 2x`}
                                                    alt={'Jenkins'}
                                                    loading='lazy'
                                                    style={{
                                                        height: '40px',
                                                        marginTop: '10px',
                                                        marginRight: '30px'
                                                    }}
                                                />
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
                                                <Typography variant='body2' mt='4px'>CI/CD (Jenkins, <br/>Azure DevOps)</Typography>
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

const ContactButton = styled(Button)<ButtonProps>(({ theme }) => ({
    color: 'white',
    backgroundColor: '#7397af',
    padding: '6px 10px',
    '&:hover': {
        backgroundColor: '#7397af',
        opacity: 0.5
    },
}));


export default SkillPage
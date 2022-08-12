import React, { FunctionComponent, useEffect } from 'react';
import { Box, Button, ButtonProps, Container, styled, Typography } from '@mui/material';
import MouseOutlinedIcon from '@mui/icons-material/MouseOutlined';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Link from '@mui/material/Link';
import { useRouter } from 'next/router';

const HomePage: FunctionComponent = () => {
    const isAbout = useRouter().query.isAbout
    const scrollDown = () => {
        window.scrollTo(0, parseFloat('1000vh'));
    }
    useEffect(() => {
        isAbout && scrollDown()
    }, [isAbout])
    return (
        <Container>
            <Box 
                sx={{ 
                    padding: '10px', 
                    display: 'flex', 
                    height: '85vh'
                }}
            >
                <Box 
                    sx={{
                        width: '100vw',
                        height: '80vh',
                        boxShadow: '0 6px 20px 0 rgba(0, 0, 0, 0.19)',
                    }}
                >
                    <Box 
                        sx={{
                            height: '68vh',
                            backgroundColor: '#c0e1f7',
                            textAlign: 'center',
                            px: '12px'
                        }}
                    >
                        <Box 
                            display={['none', 'block']} 
                            sx={{
                                position: 'relative',
                                top: '30%',
                                transform: 'translateY(-30%)'
                            }}
                        >
                            <img
                                src='/images/profile-image.jpg'
                                srcSet={`/images/profile-image.jpg 2x`}
                                alt={'Thanyalak'}
                                loading='lazy'
                                style={{
                                    borderRadius: '50%',
                                    marginTop: '20px',
                                    width: '170px'
                                }}
                            />
                            <Typography 
                                variant='h5'
                                sx={{
                                    marginTop: '10px',
                                }}
                                color='text.primary'
                            >
                                Thanyalak Luamsai
                            </Typography>
                            <Typography 
                                variant='subtitle1'
                                sx={{
                                    marginTop: '5px',
                                }}
                                color='#444444'
                            >
                                Software Engineer (Frontend Developer)
                            </Typography>
                            <Box>
                                <Link href='https://th.linkedin.com/in/thanyalak-luamsai-1b17561b3'>
                                    <LinkedInIcon 
                                        fontSize='large' 
                                        sx={{ 
                                            color: 'white', 
                                            marginRight: '6px', 
                                            '&:hover': { cursor: 'pointer' } 
                                        }}
                                    />
                                </Link>
                                <Link href='tel:+(66)949419900'>
                                    <PhoneIcon
                                        fontSize='large'
                                        sx={{ 
                                            color: 'white', 
                                            marginRight: '6px', 
                                            '&:hover': { cursor: 'pointer' } 
                                        }}
                                    />
                                </Link>
                                <Link href='mailto:thanyalak.lua@gmail.com'>
                                    <EmailIcon 
                                        fontSize='large' 
                                        sx={{ 
                                            color: 'white', 
                                            marginRight: '6px', 
                                            '&:hover': { cursor: 'pointer' } 
                                        }}
                                    />
                                </Link>
                            </Box>
                            <Box mt={2}>
                                <Box display='flex' alignItems='center' justifyContent='center' mb='3px'>
                                    <Typography variant='button' color='#000000'>Date of Birth :</Typography>
                                    <Typography ml={1} variant='body2'>06 Jan 1997</Typography>
                                </Box>
                                <Box display='flex' alignItems='center' justifyContent='center' mb='3px'>
                                    <Typography variant='button' color='#000000' alignSelf='flex-start'>Address :</Typography>
                                    <Typography ml={1} variant='body2'>336/55 Kheha Rom Klao Rd, Khlong Song Ton Noon, Lat Krabang, Bangkok 10520</Typography>
                                </Box>
                                <Box display='flex' alignItems='center' justifyContent='center' mb='3px'>
                                    <Typography variant='button' color='#000000'>Phone :</Typography>
                                    <Typography ml={1} variant='body2'>094 941 9900</Typography>
                                </Box>
                                <Box display='flex' alignItems='center' justifyContent='center' mb='3px'>
                                    <Typography variant='button' color='#000000'>Email :</Typography>
                                    <Typography ml={1} variant='body2'>thanyalak.lua@gmail.com</Typography>
                                </Box>
                                <Box display='flex' alignItems='center' justifyContent='center' mb='3px'>
                                    <Typography variant='button' color='#000000'>Education :</Typography>
                                    <Typography ml={1} variant='body2'>King Mongkut&apos;s Institute of Technology Ladkrabang</Typography>
                                </Box>
                                <Typography ml={1} variant='body2'>Manufacturing System Engineering, Bachelor of Engineering (GPA 3.19)</Typography>
                            </Box>
                        </Box>
                        <Box 
                            display={['block', 'none']} 
                            sx={{
                                position: 'relative',
                                top: '30%',
                                transform: 'translateY(-30%)'
                            }}
                        >
                            <img
                                src='/images/profile-image.jpg'
                                srcSet={`/images/profile-image.jpg 2x`}
                                alt={'Thanyalak'}
                                loading='lazy'
                                style={{
                                    borderRadius: '50%',
                                    marginTop: '20px',
                                    width: '150px'
                                }}
                            />
                            <Typography 
                                variant='h6'
                                sx={{
                                    marginTop: '10px',
                                }}
                                color='text.primary'
                            >
                                Thanyalak Luamsai
                            </Typography>
                            <Typography 
                                variant='subtitle2'
                                sx={{
                                    marginTop: '5px',
                                }}
                                color='#444444'
                            >
                                Software Engineer (Frontend Developer)
                            </Typography>
                            <Box>
                                <Link href='https://th.linkedin.com/in/thanyalak-luamsai-1b17561b3'>
                                    <LinkedInIcon 
                                        fontSize='medium'
                                        sx={{ 
                                            color: 'white', 
                                            marginRight: '6px', 
                                            '&:hover': { cursor: 'pointer' } 
                                        }}
                                    />
                                </Link>
                                <Link href='tel:+(66)949419900'>
                                    <PhoneIcon
                                        fontSize='medium'
                                        sx={{ 
                                            color: 'white', 
                                            marginRight: '6px', 
                                            '&:hover': { cursor: 'pointer' } 
                                        }}
                                    />
                                </Link>
                                <Link href='mailto:thanyalak.lua@gmail.com'>
                                    <EmailIcon 
                                        fontSize='medium'
                                        sx={{ 
                                            color: 'white', 
                                            marginRight: '6px', 
                                            '&:hover': { cursor: 'pointer' } 
                                        }}
                                    />
                                </Link>
                            </Box>
                            <Box mt={1}>
                                <Box display='flex' alignItems='center' justifyContent='center' mb={1}>
                                    <Typography ml={1} variant='body2'>DATE OF BIRTH : 06 Jan 1997</Typography>
                                </Box>
                                <Box display='flex' alignItems='center' justifyContent='center' mb={1}>
                                    <Typography ml={1} variant='body2'>PHONE : 094 941 9900</Typography>
                                </Box>
                                <Box display='flex' alignItems='center' justifyContent='center' mb={1}>
                                    <Typography ml={1} variant='body2'>EMAIL : thanyalak.lua@gmail.com</Typography>
                                </Box>
                                <Box display='flex' alignItems='center' justifyContent='center' mb={1}>
                                    <Typography ml={1} variant='body2'>EDUCATION : King Mongkut&apos;s Institute of Technology Ladkrabang, Manufacturing System Engineering, Bachelor of Engineering (GPA 3.19)</Typography>
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                    <Box
                        sx={{
                            height: '12vh',
                            backgroundColor: '#ffffff',
                            textAlign: 'center',
                        }}
                    >
                        <Link underline='none' href='/pdf/Thanyalak_Luamsai_Frontend_Developer.pdf' download>
                            <Button 
                                variant='text' 
                                sx={{
                                    width: '150px',
                                    marginTop: '30px',
                                    marginBottom: 'auto',
                                    color: '#c0e1f7',
                                    borderTopLeftRadius: '50px',
                                    borderTopRightRadius: '50px',
                                    borderBottomLeftRadius: '50px',
                                    borderBottomRightRadius: '50px',
                                    backgroundColor: 'text.primary',
                                    '&:hover': {
                                        backgroundColor: '#555555',
                                        color: '#c7deee',
                                    } 
                                }}
                            >
                                Download CV
                            </Button>
                        </Link>
                    </Box>
                </Box>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }} onClick={() => scrollDown()}>
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

export default HomePage
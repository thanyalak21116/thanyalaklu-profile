import React from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { useRouter } from 'next/router';
import { ActiveTab } from '../pages/_app';
import { colors, Container } from '@mui/material';

interface IHeader {
    activeTab: ActiveTab
}

const pages = [
    {
        title: 'About',
        navigate: '/Profile'
    }, 
    {
        title: 'Skills',
        navigate: '/Skills'
    }, 
    {
        title: 'Expirences',
        navigate: '/Expirences'
    }
]

const Header = (props: IHeader) => {
    const { activeTab } = props
    const router = useRouter()
    return (
        <AppBar 
            position="sticky"
            style={{
                backgroundColor: '#e6ddde',
                border: 0,
                boxShadow: '0px 1px 0px 0px #e6ddde',
                padding: '0 30px',
            }}
        >
        <Container>
            <Toolbar 
                disableGutters 
                sx={{ justifyContent: 'space-between' }}
            >
                <Box>
                    <Typography
                        variant="body1"
                        gutterBottom
                        noWrap
                        sx={{ 
                            my: 2, 
                            display: { 
                                xs: 'flex', 
                                md: 'flex' 
                            }, 
                            color: '#a89899'
                        }}
                    >
                        Thanyalak Luamsai
                    </Typography>
                </Box>
                <Box 
                    sx={{ 
                        display: { 
                            xs: 'flex', 
                            md: 'flex' 
                        } 
                    }}
                >
                    {pages.map((page) => (
                        <Box
                            key={page.title}
                            sx={{ marginLeft: '32px' }}
                            onClick={() => router.push(page.navigate)}
                        >
                            {activeTab !== page.title 
                                ? <Typography
                                    key={page.title}
                                    variant="button"
                                    noWrap
                                    sx={{ 
                                        my: 2, 
                                        color: 'text.primary', 
                                        display: 'block', 
                                        "&:hover": {
                                            cursor: 'pointer', 
                                            color: '#a89899',
                                        } 
                                    }}
                                >
                                    {page.title}
                                </Typography>
                                : <Typography
                                    key={page.title}
                                    variant="button"
                                    noWrap
                                    sx={{ 
                                        my: 2, 
                                        color: '#a89899',
                                        display: 'block', 
                                        "&:hover": {
                                            cursor: 'pointer',
                                        } 
                                    }}
                                >
                                    {page.title}
                                </Typography>
                            }
                        </Box>
                    ))}
                </Box>
            </Toolbar>
        </Container>
        </AppBar>
    );
};
export default Header;

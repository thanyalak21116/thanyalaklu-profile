import React from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { useRouter } from 'next/router';
import { ActiveTab } from '../pages/_app';

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
                backgroundColor: '#f6f6f7',
                border: 0,
                boxShadow: '0px 1px 0px 0px #f0f0f0',
                padding: '0 30px',
            }} 
        >
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
                            color: '#7397af' 
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
                                            color: '#7397af',
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
                                        color: '#7397af', 
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
        </AppBar>
    );
};
export default Header;

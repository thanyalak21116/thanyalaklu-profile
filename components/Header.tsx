import React, { Dispatch, MouseEvent, SetStateAction, useState } from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { useRouter } from 'next/router';
import { ActiveTab } from '../pages/_app';
import { Button, Container } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

interface IHeader {
    activeTab: ActiveTab
}

const pages = [
    {
        title: 'About',
        navigate: {
            pathname: '/Profile',
            query: {
                isAbout: true
            }
        }
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
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };
    return (
            <AppBar 
                position="sticky"
                style={{
                    backgroundColor: '#e2d3d4',
                    border: 0,
                    boxShadow: '0px 1px 0px 0px #e2d3d4',
                    padding: '0 30px',
                }}
            >
                <Container>
                    <Toolbar 
                        disableGutters 
                        sx={{ justifyContent: 'space-between' }}
                    >
                        <Box onClick={() => router.push('/Profile')}>
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
                                    color: '#a38e90',
                                    '&:hover': {
                                        cursor: 'pointer'
                                    }
                                }}
                            >
                                Thanyalak Luamsai
                            </Typography>
                        </Box>
                        <MenuIcon
                            sx={{
                                display: {
                                    xs: 'flex',
                                    sm: 'none'
                                },
                                color: 'text.primary',
                                "&:hover": {
                                    cursor: 'pointer', 
                                    color: '#a38e90',
                                } 
                            }}
                            id="basic-button"
                            aria-controls={open ? 'basic-menu' : undefined}
                            aria-haspopup="true"
                            aria-expanded={open ? 'true' : undefined}
                            onClick={(e: any) => handleClick(e)}
                        />
                        <Menu
                            id="basic-menu"
                            anchorEl={anchorEl}
                            open={open}
                            onClose={handleClose}
                            MenuListProps={{
                            'aria-labelledby': 'basic-button',
                            }}
                        >
                            <MenuItem 
                                onClick={() => {
                                    router.push({
                                        pathname: '/Profile',
                                        query: {
                                            isAbout: true
                                        }
                                    })
                                    handleClose
                                }}
                            >
                                <Typography
                                    key={'About'}
                                    variant="button"
                                    noWrap
                                    sx={{ 
                                        color: 'text.primary', 
                                        display: 'block', 
                                        "&:hover": {
                                            cursor: 'pointer', 
                                            color: '#a38e90',
                                        } 
                                    }}
                                >
                                    About
                                </Typography>
                            </MenuItem>
                            <MenuItem 
                                onClick={() => {
                                    router.push('/Skills')
                                    handleClose
                                }}
                            >
                                <Typography
                                    key={'Skills'}
                                    variant="button"
                                    noWrap
                                    sx={{ 
                                        color: 'text.primary', 
                                        display: 'block', 
                                        "&:hover": {
                                            cursor: 'pointer', 
                                            color: '#a38e90',
                                        } 
                                    }}
                                >
                                    Skills
                                </Typography>
                            </MenuItem>
                            <MenuItem 
                                onClick={() => {
                                    router.push('/Expirences')
                                    handleClose
                                }}
                            >
                                <Typography
                                    key={'Expirences'}
                                    variant="button"
                                    noWrap
                                    sx={{ 
                                        color: 'text.primary', 
                                        display: 'block', 
                                        "&:hover": {
                                            cursor: 'pointer', 
                                            color: '#a38e90',
                                        } 
                                    }}
                                >
                                    Expirences
                                </Typography>
                            </MenuItem>
                        </Menu>
                        <Box display={['none', 'flex']}>
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
                                                    color: '#a38e90',
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
                                                color: '#a38e90',
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

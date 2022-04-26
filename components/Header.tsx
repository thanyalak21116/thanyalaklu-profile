import React, { FunctionComponent } from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

const pages = ['Home', 'About', 'Skills', 'Portfolio', 'Contact']

const Header: FunctionComponent = () => {
    return (
        <AppBar 
            position="sticky"
            style={{
                backgroundColor: 'white',
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
                        variant="button"
                        gutterBottom
                        noWrap
                        sx={{ 
                            my: 2, 
                            display: { 
                                xs: 'flex', 
                                md: 'flex' 
                            }, 
                            color: '#581FF3' 
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
                        <Box sx={{ marginLeft: '32px' }}>
                            <Typography
                                key={page}
                                variant="button"
                                noWrap
                                sx={{ 
                                    my: 2, 
                                    color: 'text.primary', 
                                    display: 'block', 
                                    "&:hover": {
                                        cursor: 'pointer', 
                                        color: '#581FF3',
                                    } 
                                }}
                            >
                                {page}
                            </Typography>
                        </Box>
                    ))}
                </Box>
            </Toolbar>
        </AppBar>
    );
};
export default Header;

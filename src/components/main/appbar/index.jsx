import * as React from 'react';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { clearLocalStorage, getAuthUser } from '../../../utils';
import { useNavigate } from 'react-router-dom';

const settings = ['Profile', 'Account', 'Logout'];

function MyAppBar() {
    const [anchorElUser, setAnchorElUser] = React.useState(null);
    let loggedInUser = getAuthUser();
    if(loggedInUser) {
        loggedInUser = JSON.parse(loggedInUser) || null;
    }
    
    const navigate = useNavigate();

    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    return (
        <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
                <Box className="d-f fd-r">
                    <Box sx={{fontSize: '12px', marginRight: '4px'}}>
                        Hello, <b>{(loggedInUser && loggedInUser.name?.split(" ")[0]) || 'unknown'}</b><br/>
                        <span>{}</span>
                    </Box>
                    <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                        <AccountCircleIcon fontSize='large' />
                    </IconButton>
                </Box>
            </Tooltip>
            <Menu
                sx={{ mt: '45px' }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
            >
                {settings.map((setting) => (
                    <MenuItem key={setting} onClick={handleCloseUserMenu}>
                        <Typography sx={{ textAlign: 'center' }}
                            onClick={() => {
                                if(setting === 'Logout') {
                                    clearLocalStorage();
                                    navigate('/signin')
                                }
                            }}>{setting}</Typography>
                    </MenuItem>
                ))}
            </Menu>
        </Box>
    );
}
export default MyAppBar;
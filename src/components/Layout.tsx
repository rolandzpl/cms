import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    title: {
        flexGrow: 1,
    },
}));

const Layout: React.FC = () => {
    const classes = useStyles();
    const [isLoggedIn, setIsLoggedIn] = React.useState(false);

    const handleLoginLogout = () => {
        setIsLoggedIn(!isLoggedIn);
    };

    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" className={classes.title}>
                        My App
                    </Typography>
                    <Button color="inherit" onClick={handleLoginLogout}>
                        {isLoggedIn ? 'Logout' : 'Login'}
                    </Button>
                </Toolbar>
            </AppBar>
        </div>
    );
};

export default Layout;
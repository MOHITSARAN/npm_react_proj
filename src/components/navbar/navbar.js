import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import './navbar.css';

export default function DenseAppBar() {
  return (
    <div className="rootnav">
      <AppBar position="static">
        <Toolbar variant="dense">
          <IconButton edge="start" className="menuButton" color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" color="inherit">
            
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}

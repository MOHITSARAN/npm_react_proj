import React from 'react';
import {Button} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';
import './navbar.css';
import { Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function NavBar() {
  return (
    <div className="rootnav">
      <Navbar sticky="top" className="navcolor" variant="dark">
        <IconButton edge="start" className="menuButton" color="inherit" aria-label="menu">
          <MenuIcon />
        </IconButton>
        <div className="links">
           <Link to="/"><Button color="inherit">CVE</Button></Link>
           <Link to="/covid_info"><Button color="inherit">Covid-19</Button></Link>
        </div>
        </Navbar>
    </div>
  );
}

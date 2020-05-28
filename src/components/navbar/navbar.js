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
      <Navbar sticky="top" className="navstyle navbar-expand" variant="dark">
         <Navbar.Brand>
          <IconButton edge="start" className="menuButton" color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
         </Navbar.Brand>
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            <div className="links">
               <Link to="/covid_info" style={{'paddingRight':'25px'}}><Button color="inherit"><i className="fas fa-virus" style={{'fontSize':'16px'}}></i> Covid-19</Button></Link>
               <Link to="/" style={{'paddingRight':'15px'}}><Button color="inherit"><i className="fas fa-search"></i> CVE Search</Button></Link>
               <Link to="/owaps_top" style={{'paddingRight':'16px'}}><Button color="inherit"><i className="fas fa-user-shield"></i>OWAPS Top 10</Button></Link>
            </div>
          </Navbar.Text>
        </Navbar.Collapse>
        </Navbar>
    </div>
  );
}

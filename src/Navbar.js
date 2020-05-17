import React from 'react';
import './App.css';

import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    NavbarText
  } from 'reactstrap';



const Navbaar = () => (
    
    <Navbar color="light" >
    <NavbarBrand className={'navbar'} href="/">Esaal e Sawaab Report</NavbarBrand>
    <NavbarBrand className={'navbart'} href='/form'>Click for Submit Esaal e Saawaab</NavbarBrand>
    </Navbar>

)

export default Navbaar;
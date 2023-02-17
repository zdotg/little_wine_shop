import { useState } from "react";
import { Navbar, NavbarBrand, Collapse, NavbarToggler, Nav, NavItem } from "reactstrap";
import { NavLink} from "react-router-dom";
import {Dropdown, DropdownToggle, DropdownMenu, DropdownItem} from "reactstrap";
import WineShopLogo from '../app/assets/img/shop.png';



const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [dropDownOpen, setDropDownOpen] = useState(false);

    const toggleDropDown = () => setDropDownOpen(!dropDownOpen);

    return(
        <Navbar className='my-navbar' dark color='primary' sticky='top' expand='md'>
            <NavbarBrand className='ms-5' href='/'>
                <img src={WineShopLogo} alt='Little Wine Shop logo' className='float-start' />
                <h1 className='mt-1'>Little Wine Shop</h1>
            </NavbarBrand>
            <NavbarToggler onClick={() => setMenuOpen(!menuOpen)}/>
            <Collapse navbar isOpen={menuOpen}>
                <Nav className='ms-auto' navbar>
                    <NavItem>
                        <NavLink className='nav-link nav-item' to='/'>
                            <i className='fa  fa-sm ' /> 
                            Home
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <Dropdown nav isOpen={dropDownOpen} toggle={toggleDropDown}>
                            <DropdownToggle nav caret>
                            Categories
                            </DropdownToggle>
                            <DropdownMenu>
                            <DropdownItem href="/red">Red Wines</DropdownItem>
                            <DropdownItem href="/white">White Wines</DropdownItem>
                            <DropdownItem href="/rose">Rosé Wines</DropdownItem>
                            <DropdownItem href="/skincontact">Skincontact Wines</DropdownItem>
                            <DropdownItem href="/petnat">PetNats</DropdownItem>
                            <DropdownItem href="/sparkling">Sparkling Wines</DropdownItem>
                            <DropdownItem href="/piquette">Piquette Wines</DropdownItem>
                            </DropdownMenu>
                        </Dropdown>
                    </NavItem>
                    <NavItem>
                        <NavLink className='nav-link' to='/shopall'>
                            <i className='fa  fa-sm' /> 
                            Shop All
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className='nav-link' to='/about'>
                            <i className='fa  fa-sm' /> About
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className='nav-link' to='/contact'>
                            <i className='fa  fa-sm' /> 
                            Contact
                        </NavLink>
                    </NavItem>
                </Nav>
            </Collapse>
        </Navbar>
    );
}

export default Header;
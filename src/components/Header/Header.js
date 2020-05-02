import React, { useState } from "react";
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
    NavbarText} from "reactstrap";

function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);
    return (
        <>
        <Navbar color="light" light expand="md">
            <NavbarBrand href="/">Koine Greek Vocabulary</NavbarBrand>
            <NavbarToggler onClick={toggle} />
            <Collapse isOpen={isOpen} navbar>
            <Nav className="mr-auto" navbar>
                <NavItem>
                <NavLink href="/">Vocabulary</NavLink>
                </NavItem>
                <NavItem>
                <NavLink href="https://github.com/greekenour/KoineGreekCoreWebApi" target="_blank">GitHub</NavLink>
                </NavItem>
                <UncontrolledDropdown nav inNavbar>
                    <DropdownToggle nav caret>
                        Lists
                    </DropdownToggle>
                    <DropdownMenu right>
                        <DropdownItem>
                            Words by Frequency
                        </DropdownItem>
                        <DropdownItem>
                            Words by Book
                        </DropdownItem>
                        <DropdownItem divider />
                    </DropdownMenu>
                </UncontrolledDropdown>
            </Nav>
            <NavbarText>2 Timothy 2.15</NavbarText>
            </Collapse>
        </Navbar>
        </>
    );
};

export default Header;
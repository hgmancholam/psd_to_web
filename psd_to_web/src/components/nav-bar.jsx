import React, { useState } from "react";
import {
  Container,
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
} from "reactstrap";

export default function Navcomponent() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <Container className="po-absolute">
      <Navbar className="navbar-expand-lg h6-nav-bar fixed top-0 left-0 w-full z-50 bg-transparent">
        <NavbarBrand href="/">
          <img alt="Logo website" src="./images/Logo.png" />
        </NavbarBrand>
        <NavbarToggler onClick={toggle}>
          <span className="ti-menu"></span>
        </NavbarToggler>
        <Collapse
          isOpen={isOpen}
          navbar
          className="hover-dropdown ml-auto"
          id="h6-info"
        >
          <Nav navbar className="ml-auto bg-red">
            <NavItem className="text-red">
              <a href="/">1. HISTORY</a>
            </NavItem>
            <NavItem>
              <a href="/">2. TEAM</a>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </Container>
  );
}

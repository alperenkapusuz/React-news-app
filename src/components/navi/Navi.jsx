import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';

const Navi = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">NEWS</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="/business/">Business</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/entertainment/">Entertainment</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/health/">Health</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/science/">Science</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/sports/">Sports</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/technology/">Technology</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Navi;
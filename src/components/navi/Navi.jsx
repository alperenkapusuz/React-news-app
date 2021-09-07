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

const color = {
  color:"white"
}

const Navi = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar style={{backgroundColor:"#f71515", paddingLeft:"60px"}} light expand="md">
        <NavbarBrand href="/" style={color}>NEWS</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="/business/" style={color}>Business</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/entertainment/" style={color}>Entertainment</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/health/" style={color}>Health</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/science/" style={color}>Science</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/sports/" style={color}>Sports</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/technology/" style={color}>Technology</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Navi;
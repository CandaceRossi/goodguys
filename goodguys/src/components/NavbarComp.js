import React, { useState } from "react";
import { Nav, Navbar, NavDropdown  } from "react-bootstrap";

const NavbarComp = () => {
   const [show, setShow] = useState(false);
    const showDropdown = (e) => {
        setShow(!show);
    }
    const hideDropdown = e => {
        setShow(false);
    }

  return (
    <div className="nav">
      <Navbar>
        <Nav.Link href="/">Home</Nav.Link>
        <Nav.Link href="/Contact">Contact</Nav.Link>
         {/* <NavDropdown title="Cleaning Specialties" className="basic-nav-dropdown"
                    show={show}
                    onMouseEnter={showDropdown}
                    onMouseLeave={hideDropdown}>
                    <NavDropdown.Item className="droptop" href="/Thing1">Thing1</NavDropdown.Item>
                    <NavDropdown.Item className="droptop" href="/Thing2">Thing2</NavDropdown.Item>
                    <NavDropdown.Item className="droptop" href="/Thing3">Thing3</NavDropdown.Item>
                </NavDropdown> */}
        <NavDropdown title="Carpet Cleaning Services" className="basic-nav-dropdown"
                    show={show}
                    onMouseEnter={showDropdown}
                    onMouseLeave={hideDropdown}>
                    <NavDropdown.Item className="droptop" href="/Thing1">Thing1</NavDropdown.Item>
                    <NavDropdown.Item className="droptop" href="/Thing2">Thing2</NavDropdown.Item>
                    <NavDropdown.Item className="droptop" href="/Thing3">Thing3</NavDropdown.Item>
                </NavDropdown>
        <Nav.Link href="/WhyGoodGuys">Why Good Guys</Nav.Link>
        <Nav.Link href="/Savings">Savings</Nav.Link>
        <Nav.Link href="/Reviews">Reviews</Nav.Link>
      </Navbar>
    </div>
  );
};

export default NavbarComp;
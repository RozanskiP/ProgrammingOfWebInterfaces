import React from "react";
import { NavLink } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";

const Header = () => {
  return (
    <div>
      <Navbar bg="primary" variant="dark">
        <Container>
          <NavLink className="btn btn-secondary" to="/">Menu</NavLink>
          <Nav>
            <NavLink className="btn btn-success" to="/listofstudents">
              Grupa szuka studenta
            </NavLink>
            <NavLink className="btn btn-success" to="/listofgroups">
              Student szuka grupy
            </NavLink>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;

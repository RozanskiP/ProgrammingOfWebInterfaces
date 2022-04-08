import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import { LoggedUser } from "../state/Contex";
import UnloggedApp from "./UnloggedApp";
import LoggedApp from "./LoggedApp";

const Header = () => {
  const { loggedUser } = useContext(LoggedUser);

  return (
    <div>
      <Navbar bg="primary" variant="dark">
        <Container>
          <NavLink className="btn btn-dark btn-lg" to="/">
            Menu
          </NavLink>
          <Nav>
            <NavLink
              className="btn btn-secondary mx-3 btn-lg"
              to="/listofstudents"
            >
              Grupa szuka studenta
            </NavLink>
            <NavLink
              className="btn btn-secondary mx-3 btn-lg"
              to="/listofgroups"
            >
              Student szuka grupy
            </NavLink>
          </Nav>
          <Nav>
            {loggedUser.uuid === 0 ? (
              <UnloggedApp />
            ) : (
              <LoggedApp loggedUser={loggedUser} />
            )}
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;

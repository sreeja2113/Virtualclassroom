import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";

const Headers = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <NavLink to="/" className=" text-light text-decoration-none">
            Login
          </NavLink>
          <Nav className="">
            <NavLink
              to="/register"
              className="mt-3 mx-2 text-light text-decoration-none"
            >
              Register
            </NavLink>
            <NavLink
              to="/regnum"
              className="mt-3 mx-2 text-light text-decoration-none"
            >
              Register with number
            </NavLink>
            <NavLink
              to="/Predict"
              className="mt-3 mx-2 text-light text-decoration-none"
            >
             predictions
            </NavLink> 
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default Headers;

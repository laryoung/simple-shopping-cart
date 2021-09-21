import React from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "./styles/nav.css";
function TitleBar() {
  return (
    <Container style={{ display: "flex", justifyContent: "center" }}>
      <Navbar>
        <Nav className="mr-auto justify-content-center main-nav">
          <NavLink to="#"> NEW </NavLink>
          <NavLink to="#"> MEN </NavLink>
          <NavLink to="#"> WOMEN </NavLink>
          <NavLink to="#"> BOYS </NavLink>
          <NavLink to="#"> GIRLS </NavLink>
          <NavLink to="#"> MORE SIZES </NavLink>
          <NavLink to="#"> TIES </NavLink>
          <NavLink to="#"> SALE </NavLink>
          <NavLink to="#"> OUR STORY </NavLink>
        </Nav>
      </Navbar>
    </Container>
  );
}

export default TitleBar;

import React, { useState } from "react";

import { Container, Row, Col, Image } from "react-bootstrap";
import MainMenu from "./MainMenu";
import CartBag from "../components/CartBag";
import { Divider } from "@material-ui/core";
import { Link } from "react-router-dom";

function Header(props) {
  const [email, setEmail] = useState("");
  return (
    <div>
      <div>
        <nav className="navbar navbar-dark bg-primary">
          <marquee style={{ color: "white" }}>GET UP GOOD DEALS</marquee>
        </nav>
      </div>

      <Container
        className="mt-3 p-6"
        fluid
        style={{ paddingLeft: "5rem", paddingRight: "5rem" }}
      >
        <Row>
          <Col xs={5}>
            <Container>
              <Row>
                <small> Find a Store </small> | <small> Contact </small>|{" "}
                <span>
                  <form className="form-inline">
                    <input
                      className="form-control form-control-sm"
                      type="email"
                      placeholder="Email Address"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                    <input
                      className="btn btn-sm btn-primary"
                      type="submit"
                      value="JOIN"
                    />
                  </form>
                </span>
              </Row>
            </Container>
          </Col>
          <Col lg={3}>
            <Link to="/">
              {" "}
              <Image
                src="https://www.vineyardvines.com/on/demandware.static/-/Sites-Vineyard-Vines-Library/default/dw9f11cce3/images/logos/logo@2.6x.png"
                fluid
              />
            </Link>
          </Col>
          <Col lg={4} style={{ paddingLeft: "4rem" }}>
            <small> Welcome, Sign In</small> |
            <small>
              {" "}
              Ship To
              <Image src="https://bfx-objects.prd.borderfree.com/v1/dist/images/context-chooser/flags/US.gif" />
            </small>
            |{" "}
            <span>
              <Link to="/cart">
                {" "}
                <CartBag props={props} />
              </Link>
            </span>
          </Col>
        </Row>
      </Container>

      <MainMenu />
      <Divider />
    </div>
  );
}

export default Header;

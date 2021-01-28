import React from 'react';
import { Container ,Navbar, Nav } from 'react-bootstrap';



function TitleBar(){
    return(
        <Container  style={{display:"flex", justifyContent:'center'}}>
            <Navbar>
                <Nav className="mr-auto justify-content-center">
                    <Nav.Link href="#"> NEW </Nav.Link>
                    <Nav.Link href="#"> MEN </Nav.Link>
                    <Nav.Link href="#"> WOMEN </Nav.Link>
                    <Nav.Link href="#"> BOYS </Nav.Link>
                    <Nav.Link href="#"> GIRLS </Nav.Link>
                    <Nav.Link href="#"> MORE SIZES </Nav.Link>
                    <Nav.Link href="#"> TIES </Nav.Link>
                    <Nav.Link href="#"> SALE </Nav.Link>
                    <Nav.Link href="#"> OUR STORY </Nav.Link>
                </Nav>
            </Navbar>
        </Container>
    )
}

export default TitleBar
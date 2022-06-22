import React from "react";
import "../Navbar/Navs.css"
import { Navbar, Container, Nav, Form, Button } from "react-bootstrap";

const Navs = () => {
    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="#home">d<span>o</span>rsi<span>n</span></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#action1">Home</Nav.Link>
                        <Nav.Link href="#action2">Services</Nav.Link>
                        <Nav.Link href="#action2">Featuers</Nav.Link>
                        <Nav.Link href="#action2">Pricing</Nav.Link>
                        <Nav.Link href="#action2">Team</Nav.Link>
                        <Nav.Link href="#action2">Blog</Nav.Link>
                        <Nav.Link href="#action2">Contact</Nav.Link>
                    </Nav>
                    <Form className="d-flex">
                        <Button variant="outline-success">Try it Free</Button>
                    </Form>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
};
export default Navs;
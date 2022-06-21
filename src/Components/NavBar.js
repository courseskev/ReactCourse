import React from "react";
import logo from "../Assets/logo2.png";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import ShoppingCart from "@mui/icons-material/ShoppingCart";

const NavBar = () => {
    return(
        <>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">Mi Empresa</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#features">Features</Nav.Link>
                    <Nav.Link href="#pricing">Pricing</Nav.Link>
                </Nav>
                <ShoppingCart color="primary"  fontSize="large"></ShoppingCart>
                </Container>
            </Navbar>
        </>
    );
}

export default NavBar;
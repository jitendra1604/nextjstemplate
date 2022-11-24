import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Image from 'next/image'
import Logo from '../../../images/accreda-logo.png'
// import '../Header/header.scss'
import styles from './header.module.scss'

function Header() {
  return (
    <Navbar className={styles.header} expand="lg">
        <Container>
            <Navbar.Brand href="#home">
                <Image src={Logo} alt="Logo"/>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className= {`${styles.sectionlist} mx-auto`}>
                <Nav.Link href="#home">FLY</Nav.Link>
                <Nav.Link href="#link">Discover Programs</Nav.Link>
                <Nav.Link href="#link">Enterprise Solutions</Nav.Link>
                <Nav.Link href="#link">About</Nav.Link>
            </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
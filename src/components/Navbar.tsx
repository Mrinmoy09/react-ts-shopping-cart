import React from 'react';
import {NavLink} from 'react-router-dom'
import {Container ,Nav,Navbar as NavbarBs} from 'react-bootstrap'

const Navbar = () => {
    return (
        <div>
        <NavbarBs className='bg-white shadow-sm mb-3'>
            <Container>
                <Nav.Link to="/" as={NavLink}>Home</Nav.Link>
                <Nav.Link to="/store" as={NavLink}>Store</Nav.Link>
                <Nav.Link to="/about" as={NavLink}>About</Nav.Link>
            </Container>
        </NavbarBs>
        </div>
    );
};

export default Navbar;
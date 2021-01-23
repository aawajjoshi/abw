import React from 'react'

import { Navbar, Nav, Button } from 'react-bootstrap'
import smoothscroll from 'smoothscroll-polyfill'

smoothscroll.polyfill()

const scrollTo = (ele) => {
    let offsetTop  = document.getElementById(ele).offsetTop;
    window.scrollTo({
      top: offsetTop-100, 
      behavior: "smooth"
    });
}

export default function NavBar() {
    return(
        <Navbar className="navbar" collapseOnSelect expand="lg">
            <img src='https://res.cloudinary.com/dw8damfxa/image/upload/v1611387760/ABW/LOGOS/ABW_logo_e2szkq.svg' alt='abw-logo' style={{ width: '182px', height: '70px' }} />
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ml-auto navbar-nav">
                <button onClick={() => scrollTo('menu')} className='nav-link' style={{ background: 'none', border: 'none' }}>MENU</button>
                <button onClick={() => scrollTo('contact')} className='nav-link nav-margin' style={{ background: 'none', border: 'none' }}>CONTACT</button>
                <Button onClick={() => scrollTo('order')} className='nav-link nav-margin btn-login'>ORDER</Button>
            </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}
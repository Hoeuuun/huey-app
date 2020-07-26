import React from 'react';
import { Navbar, Nav } from "react-bootstrap";
import styled from 'styled-components';
import {InnerText} from "./Header";


// export const LinkText = styled.li`
//       font-size: 1em;
//       font-weight: bolder;
//       letter-spacing: .3em;
//       text-transform: lowercase;
//       margin: .5em .5em .5em .5em;
//       padding: .5em;
//       border: solid whitesmoke .1em;
// `;

export const BrandText = styled.h1`
      font-size: 2em;
      letter-spacing: .5em;
      font-weight: bold;
`;

export function NavBar() {
    return (
        <Navbar collapseOnSelect expand="md" bg="secondary" variant="dark">
        <Navbar.Brand href="#home"><BrandText>huey</BrandText>
        </Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
        <Navbar.Collapse className="responsive-navbar-nav">
        <Nav className="ml-auto">
        <Nav.Link href="#home"><InnerText>Control Hue lights</InnerText></Nav.Link>
        <Nav.Link href="#rooms"><InnerText>Create mood lighting for every room</InnerText></Nav.Link>
    </Nav>
    </Navbar.Collapse>
    </Navbar>
);
}

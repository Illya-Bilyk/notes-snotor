import Settings from 'utils/Settings/Settings';

import { Button, Container, Navbar, Offcanvas } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { useState } from 'react';

const navItems = [
  { href: '/', text: 'Add/Edit Note' },
  { href: 'notes', text: 'Notes' },
  { href: 'about', text: 'About us' },
];
export const AppBar = () => {
  const [menu, setMenu] = useState(false);

  const closeMenu = () => {
    setMenu(false);
  };

  return (
    <>
      <Navbar
        key="lg"
        expand="lg"
        className="d-flex px-5 bg-dark justify-content-lg-between"
      >
        <div>
          <Navbar.Brand className="d-block">
            <LinkContainer to="/">
              <h2 role="button" className="text-primary m-0 ">
                Notes
              </h2>
            </LinkContainer>
          </Navbar.Brand>
        </div>
        <div className="d-flex justify-content-end">
          <Navbar.Toggle
            aria-controls="offcanvasNavbar-expand-lg"
            className="bg-primary"
            onClick={() => {
              setMenu(!menu);
            }}
          />
          <Navbar.Offcanvas
            id="offcanvasNavbar-expand-lg"
            aria-labelledby="offcanvasNavbarLabel-expand-lg"
            placement="end"
            className="bg-dark d-flex"
            show={menu}
            onHide={closeMenu}
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title
                id="offcanvasNavbarLabel-expand-lg"
                className="text-primary"
              >
                Notes
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Container className="d-flex justify-content-center flex-column flex-lg-row">
                {navItems.map(({ href, text }) => (
                  <LinkContainer
                    to={href}
                    key={href}
                    className="mx-1 mb-3 mb-lg-0"
                    fluid="true"
                    onClick={closeMenu}
                  >
                    <Button variant="outline-primary">{text}</Button>
                  </LinkContainer>
                ))}
              </Container>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
          <Settings />
        </div>
      </Navbar>
    </>
  );
};

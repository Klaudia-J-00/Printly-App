import React from 'react';
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const MyNavbar = () => {
    return (
        <Container className="text-center nav-container">
            <div className="row mt-5" id="navbar-grid">
                <div className="col-md-4 col-lg-3">
                    <Link to="/"><img src="img/logo.png" className="img-fluid mt-3" alt="Logo" /></Link>
                </div>
                <div className="col-8">
                    <Navbar expand="sm">
                        <Container fluid>
                            <Navbar.Toggle aria-controls="navbarNav" />
                            <Navbar.Collapse id="navbarNav">
                                <Nav>
                                    <NavDropdown title="USŁUGI" id="hover-dropdown">
                                        <NavDropdown.Item as={Link} to="/services">WSZYSTKIE USŁUGI</NavDropdown.Item>
                                        <NavDropdown.Divider />
                                        <NavDropdown.Item as={Link} to="/baners">BANERY</NavDropdown.Item>
                                        <NavDropdown.Divider />
                                        <NavDropdown.Item as={Link} to="/posters">PLAKATY</NavDropdown.Item>
                                        <NavDropdown.Divider />
                                        <NavDropdown.Item as={Link} to="/stickers">NAKLEJKI</NavDropdown.Item>
                                        <NavDropdown.Divider />
                                        <NavDropdown.Item as={Link} to="/aboards">POTYKACZE</NavDropdown.Item>
                                        <NavDropdown.Divider />
                                        <NavDropdown.Item as={Link} to="/rollups">ROLL-UPY</NavDropdown.Item>
                                        <NavDropdown.Divider />
                                        <NavDropdown.Item as={Link} to="/magnets">MAGNESY</NavDropdown.Item>
                                    </NavDropdown>
                                    <Nav.Link as={Link} to="/price-list">CENNIK</Nav.Link>
                                    <Nav.Link as={Link} to="/contact">KONTAKT</Nav.Link>
                                </Nav>
                            </Navbar.Collapse>
                        </Container>
                    </Navbar>
                </div>
            </div>
        </Container>
    );
};

export default MyNavbar;

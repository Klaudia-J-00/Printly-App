import React from 'react';
import { Navbar, Nav, NavDropdown, Container, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const MyNavbar = () => {
    return (
        <Container className="text-center nav-container">
            <Row className="mt-5">
                <Col md={4} lg={3} sm={12}>
                    <Link to="/"><img src="img/logo.png" className="img-fluid mt-3" alt="Logo" /></Link>
                </Col>
                <Col xs={8}>
                    <Navbar expand="sm">
                        <Container> 
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
                        </Container>
                    </Navbar>
                </Col>
            </Row>
        </Container>
    );
};

export default MyNavbar;

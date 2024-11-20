import React, { useState, useEffect } from 'react';
import { Navbar, Nav, NavDropdown, Container, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const MyNavbar = () => {
    const [isMobile, setIsMobile] = useState(window.innerWidth > 768);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth > 768);
        };

        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []); // Only run on mount and unmount

    return (
        <>{isMobile ? (
            <Container className="text-center nav-container">
                <Row className="mt-5">
                    <Col md={4} lg={3} sm={12}>
                        <Link to="/"><img src="img/logo.png" className="img-fluid mt-3" alt="Logo" /></Link>
                    </Col>
                    <Col lg={9}>
                        <Navbar expand="sm">
                            <Container>
                                <Nav>
                                    <Nav.Link as={Link} to="/about">O NAS</Nav.Link>
                                    <Nav.Link as={Link} to="/contact">KONTAKT</Nav.Link>
                                    <NavDropdown title="PRODUKTY" id="hover-dropdown">
                                        <NavDropdown.Item as={Link} to="/services">WSZYSTKIE PRODUKTY</NavDropdown.Item>
                                        <NavDropdown.Divider />
                                        <NavDropdown.Item as={Link} to="/baners">BANERY</NavDropdown.Item>
                                        <NavDropdown.Divider />
                                        <NavDropdown.Item as={Link} to="/foil">FOLIE REKLAMOWE</NavDropdown.Item>
                                        <NavDropdown.Divider />
                                        <NavDropdown.Item as={Link} to="/stickers">NAKLEJKI</NavDropdown.Item>
                                        <NavDropdown.Divider />
                                        <NavDropdown.Item as={Link} to="/aboards">POTYKACZE</NavDropdown.Item>
                                        <NavDropdown.Divider />
                                        <NavDropdown.Item as={Link} to="/rollups">ROLL-UPY</NavDropdown.Item>
                                        <NavDropdown.Divider />
                                        <NavDropdown.Item as={Link} to="/magnets">MAGNESY</NavDropdown.Item>
                                        <NavDropdown.Divider />
                                        <NavDropdown.Item as={Link} to="/posters">PLAKATY</NavDropdown.Item>
                                    </NavDropdown>
                                </Nav>
                            </Container>
                        </Navbar>
                    </Col>
                </Row>
            </Container>
        ) : (
            <div>
                <div style={{ display: "flex", justifyContent: "center", alignItems: "center", textAlign: "center" }}>
                    <Link to="/">
                        <img 
                            src="img/logo.png" 
                            className="img-fluid mt-3 img-navbar" 
                            alt="Logo" 
                            style={{ width: "60%" }} 
                        />
                    </Link>
                </div>


                <div className='nav-mobile'>
                    <Link to="/about" className='nav-mobile-link'>O NAS</Link>
                    <Link to="/contact" className='nav-mobile-link'>KONTAKT</Link>
                    <Link to="/services" className='nav-mobile-link'>WSZYSTKIE PRODUKTY</Link>
                </div>
            </div>
        )}
        </>
    );
};

export default MyNavbar;

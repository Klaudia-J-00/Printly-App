import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const Cookies = () => {
  return (
    <Container className="card-container">
      <Row className="m-5">
        <Col sm={2}>
          <img src="img/cookie.png" className="img-fluid" alt="cookie" />
        </Col>
        <Col sm={10} className="d-flex justify-content-center text-center align-items-center">
          <p className="cookies-text">
            Nasza strona internetowa korzysta z plików cookies, aby zapewnić Ci
            najlepsze możliwe doświadczenie podczas korzystania z naszej strony.
            Korzystając z naszej strony, wyrażasz zgodę na stosowanie plików
            cookies zgodnie z naszą{" "}
            <Link to="/policy" className="cookies-link">polityką prywatności.</Link> oraz{" "}
            <Link to="/terms" className="cookies-link">warunkami korzystania</Link> z tej strony
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default Cookies;

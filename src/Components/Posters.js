import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleArrowDown } from "@fortawesome/free-solid-svg-icons";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

const Posters = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth > 990);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth > 990);
    };

    window.addEventListener("resize", handleResize);

    // Cleanup
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      {isMobile ? (
        <div className="about">
          <Container className="card-container">
            <Row className="m-5 card-one">
              <Col md={6}>
                <img
                  src="/img/poster2.png"
                  className="img-fluid rounded-left-top"
                  alt="..."
                />
                <h5 className="card-title mt-4">PLAKATY</h5>
                <p className="card-text-2">
                Plakaty to jedna z najstarszych, ale wciąż bardzo skutecznych form 
                reklamy wizualnej. Dzięki ich dużym formatom i atrakcyjnej grafice, 
                przyciągają uwagę odbiorców w każdym miejscu – od ścian w biurach, 
                przez przestrzenie publiczne, aż po ogłoszenia na wydarzeniach czy 
                wystawach. Nasza drukarnia oferuje plakaty, które wyróżniają się doskonałą 
                jakością druku i trwałością, dostosowane do różnych potrzeb. 
                </p>
                
                <p className="card-text-2">
                  <b>
                    W przypadku pytań lub potrzeby indywidualnej pomocy prosimy
                    o{" "}
                    <Link to="/contact" className="link">
                      kontakt
                    </Link>
                    . Dziękujemy za zainteresowanie naszą ofertą i mamy
                    nadzieję, że wspólnie znajdziemy idealne rozwiązanie dla
                    Twoich potrzeb!
                  </b>
                </p>
              </Col>

              <Col md={6}>
              <div>
                    <br></br>
                    <b>Naklejki tego typu wyceniamy indywidualnie 
                      po skontaktowaniu się z nami. </b>
                      <p className="baners-list pt-4">
                            W celu
                            uzyskania dokładnej oferty prosimy o{" "}
                            <Link to="/contact" className="link">
                              kontakt
                            </Link>
                            .
                          </p>
                   </div>
              </Col>
            </Row>
          </Container>
        </div>
      ) : (
        <>
          <Container className="price-list-mobile">
            <Row>
              <Col className="price-list-col-mobile">
                <img
                  src="/img/poster2.png"
                  className="img-fluid rounded"
                  alt="..."
                />
                <h3 className="header-center-big mb-5">PLAKATY</h3>
                <span className="scroll-down">
                  <b>
                    Zjedź na dół by skorzystać z kalkulatora
                    cen.&nbsp;&nbsp;&nbsp;&nbsp;
                  </b>
                  <a className="arrow-to" href="#here">
                    <FontAwesomeIcon icon={faCircleArrowDown} />
                  </a>
                </span>
                <p className="card-text-2">
                Plakaty to jedna z najstarszych, ale wciąż bardzo skutecznych form 
                reklamy wizualnej. Dzięki ich dużym formatom i atrakcyjnej grafice, 
                przyciągają uwagę odbiorców w każdym miejscu – od ścian w biurach, 
                przez przestrzenie publiczne, aż po ogłoszenia na wydarzeniach czy 
                wystawach. Nasza drukarnia oferuje plakaty, które wyróżniają się doskonałą 
                jakością druku i trwałością, dostosowane do różnych potrzeb. 
                </p>
                <p className="card-text-2">
                  <b>
                    W przypadku pytań lub potrzeby indywidualnej pomocy prosimy
                    o{" "}
                    <Link to="/contact" className="link">
                      kontakt
                    </Link>
                    . Dziękujemy za zainteresowanie naszą ofertą i mamy
                    nadzieję, że wspólnie znajdziemy idealne rozwiązanie dla
                    Twoich potrzeb!
                  </b>
                </p>
                <hr className="my-4" />
                <div>
                    <br></br>
                    <b>Naklejki tego typu wyceniamy indywidualnie 
                      po skontaktowaniu się z nami. </b>
                      <p className="baners-list pt-4">
                            W celu
                            uzyskania dokładnej oferty prosimy o{" "}
                            <Link to="/contact" className="link">
                              kontakt
                            </Link>
                            .
                          </p>
                   </div>
              </Col>
            </Row>
          </Container>
        </>
      )}{" "}
    </>
  );
};

export default Posters;

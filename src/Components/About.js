import React, { useState, useEffect } from "react";
import { Container, Row, Modal, Button, Col } from "react-bootstrap";
import Masonry from "react-masonry-css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight, faFaceGrinStars } from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";

const About = () => {
  const windowHeight = window.innerHeight;
  const [showModal, setShowModal] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const imageNames = [
    "23", "1",  "3", "4", "5", "6", "7", "8", "9", "10",
    "11", "12", "13", "14", "15", "16", "17", "18", "19", "20",
    "21", "22", "24", "25", "2"
  ];
  const images = imageNames.map(name => `/img/gallery/${name}.png`);

  useEffect(() => {
    const reveal = (className) => {
      var reveals = document.querySelectorAll(className);

      for (var i = 0; i < reveals.length; i++) {
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 150;

        if (elementTop < windowHeight - elementVisible) {
          reveals[i].classList.add("active");
        } else {
          reveals[i].classList.remove("active");
        }
      }
    };

    window.addEventListener("scroll", () => {
      reveal(".reveal");
      reveal(".reveal2");
    });

    // Initial reveal
    reveal(".reveal");
    reveal(".reveal2");

    // Cleanup
    return () => {
      window.removeEventListener("scroll", () => {
        reveal(".reveal");
        reveal(".reveal2");
      });
    };
  }, [windowHeight]);

  const openModal = (index) => {
    setCurrentImageIndex(index);
    setShowModal(true);
  };

  const closeModal = () => setShowModal(false);

  const handlePrevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  // Breakpoint configuration for react-masonry-css
  const breakpointColumnsObj = {
    default: 4,
    1100: 3,
    700: 2,
    500: 1
  };

  return (
    <>
      <div className="about">
        <Container className="card-container p-5">
          <h3 className="header-center-big mb-5 services-h3">O NAS</h3>
          <Row className="card-one mb-5 about-bg">
            <p className="card-text-2">
            <b>Witamy Was w naszym studio</b>, gdzie druk i reklama spotykają się w harmonii! Jako drukarnia wielkoformatowa i studio reklamy, jesteśmy gotowi dostarczyć Wam unikalne i efektywne rozwiązania reklamowe!
            Nasze produkty, to narzędzia marketingowe, które pomogą wypromować Twój biznes! Oferujemy między innymi:
              <ul>
                <li>Banery,</li>
                <li>Naklejki jednokolorowe,</li>
                <li>Naklejki z nadrukiem,</li>
                <li>Naklejki OWV,</li>
                <li>Tabliczki,</li>
                <li>Magnesy,</li>
                <li>Roll-up'y,</li>
                <li>Potykacze,</li>
                <li>Oraz wiele innych!</li>
              </ul>
            Zapraszamy Was do współpracy i odkrywania świata druku! <FontAwesomeIcon icon={faFaceGrinStars} />
            <br></br>
            <br></br>
            <Row className="social-links">
              <Col xs={12} className="d-flex justify-content-center align-items-center">
              <b>Odwiedź nasze social-media: </b><br></br><br></br></Col>
              <Col xs={6} className="d-flex justify-content-end align-items-center">
                  <Link className="icon-link" to="https://www.facebook.com/Printlypl/">
                      <FontAwesomeIcon icon={faFacebook} />
                  </Link>
              </Col>
              <Col xs={6} className="d-flex justify-content-start align-items-center">
                  <Link className="icon-link" to="https://www.instagram.com/printlypl/">
                      <FontAwesomeIcon icon={faInstagram} />
                  </Link>
              </Col>
            </Row>

            </p>
          </Row>
          <h3 className="header-center-big mb-5 services-h3">GALERIA</h3>
          <Masonry
            breakpointCols={breakpointColumnsObj}
            className="gallery-masonry-grid"
            columnClassName="gallery-masonry-column"
          >
            {images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Gallery item ${index + 1}`}
                className="gallery-image"
                onClick={() => openModal(index)}
              />
            ))}
          </Masonry>
        </Container>

        {/* Modal for image preview */}
        <Modal show={showModal} onHide={closeModal} centered>
          <Modal.Body className="text-center">
            <Button variant="light" onClick={handlePrevImage}>
              <FontAwesomeIcon icon={faArrowLeft} />
            </Button>
            <img src={images[currentImageIndex]} alt={`Gallery item ${currentImageIndex + 1}`} className="img-fluid" />
            <Button variant="light" onClick={handleNextImage}>
              <FontAwesomeIcon icon={faArrowRight} />
            </Button>
          </Modal.Body>
        </Modal>
      </div>
    </>
  );
};

export default About;

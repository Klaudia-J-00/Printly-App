import React, { useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import ReCAPTCHA from "react-google-recaptcha";
import { faFacebookMessenger } from "@fortawesome/free-brands-svg-icons";
import {
  faEnvelope,
  faLocationDot,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Container, Row, Col, Form, Modal, Button } from "react-bootstrap";

const Contact = () => {
  const form = useRef();
  const [phoneNumber, setPhoneNumber] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [showModalCaptcha, setShowModalCaptcha] = useState(false);
  const [isVerified, setIsVerified] = useState(false);
  const [activeDiv, setActiveDiv] = useState("phone");
  const divs = ["phone", "email", "messanger", "location"];
  const [userClicked, setUserClicked] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth > 990);

  const handlePhoneNumberChange = (event) => {
    let input = event.target.value.replace(/\D/g, "");
    let formatted = "";
    for (let i = 0; i < input.length; i++) {
      if (i === 3 || i === 6) {
        formatted += "-";
      }
      formatted += input[i];
    }
    setPhoneNumber(formatted);
  };

  const sendEmail = (e) => {
    e.preventDefault();

    if (isVerified) {
      emailjs
        .sendForm(
          "service_s8rxydh",
          "template_gam1c6s",
          form.current,
          "XakLbWZ6TL4Nlcunh"
        )
        .then(
          (result) => {
            console.log(result.text);
            setShowModal(true);
            form.current.reset();
            setPhoneNumber("");
          },
          (error) => {
            console.log(error.text);
          }
        );
    } else {
      setShowModalCaptcha(true);
    }
  };

  const onRecaptchaChange = (value) => {
    setIsVerified(true);
  };

  const handleClose = () => setShowModal(false);
  const handleCloseCaptcha = () => setShowModalCaptcha(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth > 990);
    };

    let interval = null;
    if (!userClicked) {
      interval = setInterval(() => {
        setActiveDiv((prevDiv) => {
          const currentIndex = divs.indexOf(prevDiv);
          if (currentIndex === divs.length - 1) {
            return divs[0];
          } else {
            return divs[currentIndex + 1];
          }
        });
      }, 2000);
    }

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      clearInterval(interval);
    };
  }, [userClicked]);

  const handleClick = (div) => {
    setUserClicked(true);
    setActiveDiv(div);
  };

  return (
    <>
      {isMobile ? (
        <div className="about">
          <Container className="mt-5 card-container">
            <Row className="text-center card-one">
              <Col md={5} className="left-contact">
                <div className="info-contact">
                  {activeDiv === "phone" && (
                    <div className="phone">
                      <h5 className="h5-contact">
                        Zadzwoń pod podany numer telefonu:
                      </h5>
                      <p>+48 575-254-057</p>
                      <a href="tel:575-254-057">Zadzwoń</a>
                    </div>
                  )}
                  {activeDiv === "email" && (
                    <div className="email">
                      <h5 className="h5-contact">
                        Napisz wiadomość na e-mail:
                      </h5>
                      <p>printlypl@gmail.com</p>
                      <a href="mailto:printlypl@gmail.com">Napisz</a>
                    </div>
                  )}
                  {activeDiv === "messanger" && (
                    <div className="messanger">
                      <h5 className="h5-contact">
                        Napisz wiadomość na facebooku poprzez messanger:
                      </h5>
                      <p>https://www.facebook.com/Printlypl</p>
                      <a href="https://m.me/Printlypl" className="messenger">
                        Napisz
                      </a>
                    </div>
                  )}
                  {activeDiv === "location" && (
                    <div className="email">
                      <h5 className="h5-contact">Odwiedź nas tutaj:</h5>
                      <p>
                        ul. Stawowa 5<br />
                        42-274 Konopiska
                      </p>
                    </div>
                  )}
                </div>
                <div className="contact-buttons">
                  <div
                    className={
                      "contact-button" +
                      (activeDiv === "phone" ? " active" : "")
                    }
                    onClick={() => handleClick("phone")}
                  >
                    <FontAwesomeIcon icon={faPhone} />
                  </div>
                  <div
                    className={
                      "contact-button" +
                      (activeDiv === "email" ? " active" : "")
                    }
                    onClick={() => handleClick("email")}
                  >
                    <FontAwesomeIcon icon={faEnvelope} />
                  </div>
                  <div
                    className={
                      "contact-button" +
                      (activeDiv === "messanger" ? " active" : "")
                    }
                    onClick={() => handleClick("messanger")}
                  >
                    <FontAwesomeIcon icon={faFacebookMessenger} />
                  </div>
                  <div
                    className={
                      "contact-button" +
                      (activeDiv === "location" ? " active" : "")
                    }
                    onClick={() => handleClick("location")}
                  >
                    <FontAwesomeIcon icon={faLocationDot} />
                  </div>
                </div>
              </Col>
              <Col md={7} className="">
                <h3 className="header-center-big my-5">
                  SKONTAKTUJ SIĘ Z NAMI
                </h3>
                <h6 className="contact-text">
                  W razie jakichkolwiek pytań skorzystaj z naszego formularza by
                  się z nami skontaktować.
                </h6>
                <Modal show={showModal} onHide={handleClose}>
                  <Modal.Header closeButton>
                    <Modal.Title>Wiadomość została wysłana</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    Twoja wiadomość została pomyślnie wysłana!
                  </Modal.Body>
                  <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                      Zamknij
                    </Button>
                  </Modal.Footer>
                </Modal>
                <Modal show={showModalCaptcha} onHide={handleCloseCaptcha}>
                  <Modal.Header closeButton>
                    <Modal.Title>Potwierdź, że nie jesteś robotem</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    Aby poprawnie wysłać wiadomość musisz potwierdzić, że nie
                    jesteś robotem na dole formularza.{" "}
                  </Modal.Body>
                  <Modal.Footer>
                    <Button variant="secondary" onClick={handleCloseCaptcha}>
                      Zamknij
                    </Button>
                  </Modal.Footer>
                </Modal>
                <Form ref={form} onSubmit={sendEmail}>
                  <Row>
                    <Col md={12}>
                      <Form.Group className="mb-4 form-input">
                        <Form.Label>Imię</Form.Label>
                        <Form.Control
                          type="text"
                          name="first_name"
                          required
                          pattern="[a-zA-ZżźćńółęąśŻŹĆĄŚĘŁÓŃ]{3,15}"
                        />
                      </Form.Group>
                      <Form.Group className="mb-4 form-input">
                        <Form.Label>Nazwisko</Form.Label>
                        <Form.Control
                          type="text"
                          name="last_name"
                          required
                          pattern="[a-zA-ZżźćńółęąśŻŹĆĄŚĘŁÓŃ]{3,15}"
                        />
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row>
                    <Col md={12}>
                      <Form.Group className="mb-4 form-input">
                        <Form.Label>Adres e-mail</Form.Label>
                        <Form.Control type="email" name="email" required />
                      </Form.Group>
                      <Form.Group className="mb-4 form-input">
                        <Form.Label>Numer telefonu (opcjonalnie)</Form.Label>
                        <Form.Control
                          type="tel"
                          name="phone_number"
                          pattern="[0-9]{3}-[0-9]{3}-[0-9]{3}"
                          maxlength="11"
                          value={phoneNumber}
                          onChange={handlePhoneNumberChange}
                        />
                      </Form.Group>
                    </Col>
                  </Row>

                  <Form.Group className="mb-4 form-input">
                    <Form.Label>Wiadomość</Form.Label>
                    <Form.Control
                      as="textarea"
                      name="message"
                      rows={6}
                      required
                      minLength="20"
                    ></Form.Control>
                  </Form.Group>

                  <div className="form-check d-flex justify-content-center mb-4">
                    <Form.Check type="switch" id="custom-switch" required />
                    <Form.Check.Label>
                      Wypełnienie formularza oznacza, że podane w nim dane
                      osobowe <br /> będą przetwarzane w celu przesłania oferty
                      oraz kontaktu w jej sprawie.
                      <br />
                      <a href="policy.html">
                        Dowiedz się kto i jak przetwarza Twoje dane.
                      </a>
                    </Form.Check.Label>
                  </div>
                  <Col className="col captcha m-4">
                    <ReCAPTCHA
                      sitekey="6Lc6tTwnAAAAAC20qH3-rfZc3-byGcJnPflilBBX"
                      onChange={onRecaptchaChange}
                    />
                  </Col>

                  <button
                    type="submit"
                    className="btn btn-primary btn-block mb-5"
                  >
                    Wyślij
                  </button>
                </Form>
              </Col>
            </Row>
          </Container>
        </div>
      ) : (
        <>
        <div className="about">
          <Container className="mt-5 price-list-mobile-contact">
            <Row className="text-center card-one">
              <Col className="left-contact-mobile">
                <div className="info-contact-mobile">
                  {activeDiv === "phone" && (
                    <div className="phone">
                      <h5 className="h5-contact">
                        Zadzwoń pod podany numer telefonu:
                      </h5>
                      <p>+48 575-254-057</p>
                      <a href="tel:575-254-057" className="mob-link">Zadzwoń</a>
                    </div>
                  )}
                  {activeDiv === "email" && (
                    <div className="email">
                      <h5 className="h5-contact">
                        Napisz wiadomość na e-mail:
                      </h5>
                      <p>printlypl@gmail.com</p>
                      <a href="mailto:printlypl@gmail.com" className="mob-link">Napisz</a>
                    </div>
                  )}
                  {activeDiv === "messanger" && (
                    <div className="messanger">
                      <h5 className="h5-contact">
                        Napisz wiadomość poprzez messanger:
                      </h5>
                      <a href="https://m.me/Printlypl" className="mob-link">
                        Napisz
                      </a>
                    </div>
                  )}
                  {activeDiv === "location" && (
                    <div className="email">
                      <h5 className="h5-contact">Odwiedź nas tutaj:</h5>
                      <p>
                        ul. Stawowa 5<br />
                        42-274 Konopiska
                      </p>
                    </div>
                  )}
                </div>
                <div className="contact-buttons mb-3">
                  <div
                    className={
                      "contact-button" +
                      (activeDiv === "phone" ? " active" : "")
                    }
                    onClick={() => handleClick("phone")}
                  >
                    <FontAwesomeIcon icon={faPhone} />
                  </div>
                  <div
                    className={
                      "contact-button" +
                      (activeDiv === "email" ? " active" : "")
                    }
                    onClick={() => handleClick("email")}
                  >
                    <FontAwesomeIcon icon={faEnvelope} />
                  </div>
                  <div
                    className={
                      "contact-button" +
                      (activeDiv === "messanger" ? " active" : "")
                    }
                    onClick={() => handleClick("messanger")}
                  >
                    <FontAwesomeIcon icon={faFacebookMessenger} />
                  </div>
                  <div
                    className={
                      "contact-button" +
                      (activeDiv === "location" ? " active" : "")
                    }
                    onClick={() => handleClick("location")}
                  >
                    <FontAwesomeIcon icon={faLocationDot} />
                  </div>
                </div>
              </Col>
              <Col>
                <h3 className="header-center-big my-5">
                  SKONTAKTUJ SIĘ Z NAMI
                </h3>
                <h6 className="contact-text">
                  W razie jakichkolwiek pytań skorzystaj z naszego formularza by
                  się z nami skontaktować.
                </h6>
                <Modal show={showModal} onHide={handleClose}>
                  <Modal.Header closeButton>
                    <Modal.Title>Wiadomość została wysłana</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    Twoja wiadomość została pomyślnie wysłana!
                  </Modal.Body>
                  <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                      Zamknij
                    </Button>
                  </Modal.Footer>
                </Modal>
                <Modal show={showModalCaptcha} onHide={handleCloseCaptcha}>
                  <Modal.Header closeButton>
                    <Modal.Title>Potwierdź, że nie jesteś robotem</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    Aby poprawnie wysłać wiadomość musisz potwierdzić, że nie
                    jesteś robotem na dole formularza.{" "}
                  </Modal.Body>
                  <Modal.Footer>
                    <Button variant="secondary" onClick={handleCloseCaptcha}>
                      Zamknij
                    </Button>
                  </Modal.Footer>
                </Modal>
                <Form ref={form} onSubmit={sendEmail}>
                  <Row>
                    <Col md={12}>
                      <Form.Group className="mb-4 form-input-mob">
                        <Form.Label>Imię</Form.Label>
                        <Form.Control
                          type="text"
                          name="first_name"
                          required
                          pattern="[a-zA-ZżźćńółęąśŻŹĆĄŚĘŁÓŃ]{3,15}"
                        />
                      </Form.Group>
                      <Form.Group className="mb-4 form-input-mob">
                        <Form.Label>Nazwisko</Form.Label>
                        <Form.Control
                          type="text"
                          name="last_name"
                          required
                          pattern="[a-zA-ZżźćńółęąśŻŹĆĄŚĘŁÓŃ]{3,15}"
                        />
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row>
                    <Col md={12}>
                      <Form.Group className="mb-4 form-input-mob">
                        <Form.Label>Adres e-mail</Form.Label>
                        <Form.Control type="email" name="email" required />
                      </Form.Group>
                      <Form.Group className="mb-4 form-input-mob">
                        <Form.Label>Numer telefonu (opcjonalnie)</Form.Label>
                        <Form.Control
                          type="tel"
                          name="phone_number"
                          pattern="[0-9]{3}-[0-9]{3}-[0-9]{3}"
                          maxLength="11"
                          value={phoneNumber}
                          onChange={handlePhoneNumberChange}
                        />
                      </Form.Group>
                    </Col>
                  </Row>

                  <Form.Group className="mb-4 form-input-mob">
                    <Form.Label>Wiadomość</Form.Label>
                    <Form.Control
                      as="textarea"
                      name="message"
                      rows={6}
                      required
                      minLength="20"
                    ></Form.Control>
                  </Form.Group>

                  <div className="form-check d-flex justify-content-center mb-4">
                    <Form.Check type="switch" id="custom-switch" required />
                    <Form.Check.Label>
                      Wypełnienie formularza oznacza, że podane w nim dane
                      osobowe <br /> będą przetwarzane w celu przesłania oferty
                      oraz kontaktu w jej sprawie.
                      <br />
                      <a href="policy.html">
                        Dowiedz się kto i jak przetwarza Twoje dane.
                      </a>
                    </Form.Check.Label>
                  </div>
                  <Col className="col captcha m-4">
                    <ReCAPTCHA
                      sitekey="6Lc6tTwnAAAAAC20qH3-rfZc3-byGcJnPflilBBX"
                      onChange={onRecaptchaChange}
                    />
                  </Col>

                  <button
                    type="submit"
                    className="btn btn-primary btn-block mb-5 mobile-button"
                  >
                    Wyślij
                  </button>
                </Form>
              </Col>
            </Row>
          </Container>
        </div>
        </>
      )}
    </>
  );
};

export default Contact;

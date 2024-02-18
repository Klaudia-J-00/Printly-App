import React, { useRef, useState } from "react";
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

  return (
    <div className="about">
    <Container className="mt-5 contact-form">
      <Row>
        <Col className="text-center mt-5 contact-form p-5">
          <h1>Skontaktuj się z nami</h1>
          <h3>
            W razie jakichkolwiek pytań skorzystaj z naszego formularza by się z
            nami skontaktować.
          </h3>
          <Modal show={showModal} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Wiadomość została wysłana</Modal.Title>
            </Modal.Header>
            <Modal.Body>Twoja wiadomość została pomyślnie wysłana!</Modal.Body>
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
              Aby poprawnie wysłać wiadomość musisz potwierdzić, że nie jesteś
              robotem na dole formularza.{" "}
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleCloseCaptcha}>
                Zamknij
              </Button>
            </Modal.Footer>
          </Modal>
          <Form ref={form} onSubmit={sendEmail}>
            <Row>
              <Col md={6}>
                <Form.Group className="mb-4 form-input">
                  <Form.Control
                    type="text"
                    name="first_name"
                    required
                    pattern="[a-zA-ZżźćńółęąśŻŹĆĄŚĘŁÓŃ]{3,15}"
                  />
                  <Form.Label>Imię</Form.Label>
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group className="mb-4 form-input">
                  <Form.Control
                    type="text"
                    name="last_name"
                    required
                    pattern="[a-zA-ZżźćńółęąśŻŹĆĄŚĘŁÓŃ]{3,15}"
                  />
                  <Form.Label>Nazwisko</Form.Label>
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col md={6}>
                <Form.Group className="mb-4 form-input">
                  <Form.Control type="email" name="email" required />
                  <Form.Label>Adres e-mail</Form.Label>
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group className="mb-4 form-input">
                  <Form.Control
                    type="tel"
                    name="phone_number"
                    pattern="[0-9]{3}-[0-9]{3}-[0-9]{3}"
                    maxlength="11"
                    value={phoneNumber}
                    onChange={handlePhoneNumberChange}
                  />
                  <Form.Label>Numer telefonu (opcjonalnie)</Form.Label>
                </Form.Group>
              </Col>
            </Row>

            <Form.Group className="mb-4 form-input">
              <Form.Control
                as="textarea"
                name="message"
                rows={6}
                required
                minLength="20"
              ></Form.Control>
              <Form.Label>Wiadomość</Form.Label>
            </Form.Group>

            <div className="form-check d-flex justify-content-center mb-4 form-input">
              <Form.Check type="switch" id="custom-switch" required />
              <Form.Check.Label>
                Wypełnienie formularza oznacza, że podane w nim dane osobowe{" "}
                <br /> będą przetwarzane w celu przesłania oferty oraz kontaktu
                w jej sprawie.
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

            <button type="submit" className="btn btn-primary btn-block mb-5">
              Wyślij
            </button>
            <hr />
          </Form>
          <h3 className="contact-header">
            Lub skontaktuj się z nami bezpośrednio:
          </h3>
        </Col>
      </Row>
      <Row className="text-center contact-cont">
        <Col lg={2} md={5} xs={8} className="contact-info p-3 bounce-div">
          <FontAwesomeIcon icon={faLocationDot} className="contact-icon" />
          <h5>Odwiedź nas tutaj:</h5>
          <p className="p-text">
            ul. Stawowa 5<br />
            42-274 Konopiska
          </p>
        </Col>
        <Col lg={2} md={5} xs={8} className="contact-info p-3 bounce-div info2">
          <FontAwesomeIcon icon={faEnvelope} className="contact-icon" />
          <h5>
            Napisz wiadomość <br /> e-mail:
          </h5>
          <p className="p-text">kontakt@printly.net.pl</p>
        </Col>
        <Col lg={2} md={5} xs={8} className="contact-info p-3 bounce-div info2">
          <FontAwesomeIcon icon={faPhone} className="contact-icon" />
          <h5>Zadzwoń pod podany numer telefonu:</h5>
          <p>+48 575-254-057</p>
          <button className="call-me">
            <a href="tel:575-254-057" className="messenger">
              Kliknij
            </a>
          </button>
        </Col>
        <Col lg={2} md={5} xs={8} className="contact-info p-3 bounce-div info2">
          <FontAwesomeIcon
            icon={faFacebookMessenger}
            className="contact-icon"
          />
          <h5>Napisz na facebooku:</h5>
          <button className="message-me">
            <a href="https://m.me/Printlypl" className="messenger">
              Kliknij
            </a>
          </button>
        </Col>
      </Row>
    </Container>
    </div>
  );
};

export default Contact;

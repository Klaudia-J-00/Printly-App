import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  const windowHeight = window.innerHeight;
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

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

    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("scroll", () => {
      reveal(".reveal");
      reveal(".reveal2");
    });

    // Initial reveal
    reveal(".reveal");
    reveal(".reveal2");

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", () => {
        reveal(".reveal");
        reveal(".reveal2");
      });
    };
  }, [windowHeight]);

  return (
    <>
      {/*ABOUT*/}
      <div className="about">
        <Container className="mt-5">
          <Row className="mx-2">
            <Col md={4} lg={3}>
              <img
                src="img/poster.png"
                className="img-fluid poster"
                alt="poster"
              />
              <span className="smol d-flex justify-content-center text-center">
                Powyższa grafika została stworzona w celach prezentacyjnych, nie
                dotyczy wyprzedaży.
              </span>
            </Col>
            <Col className="about" md={8}>
              <h3>
                Witamy w Printly - Twoim zaufanym partnerze w dziedzinie druku
                reklamowego i personalizowanych rozwiązań wizualnych!{" "}
              </h3>
              <Row className="mt-4">
                <Col className="about-col">
                  <h5>Unikalność</h5>
                  <p className="mt-3">
                    Nasza pasja do tworzenia unikalnych rozwiązań graficznych
                    oznacza, że Twoje projekty będą odzwierciedlać charakter
                    Twojej marki i przyciągać uwagę klientów.{" "}
                  </p>
                  <hr className="mt-4" />
                </Col>
                <Col className="about-col">
                  <h5>Jakość</h5>
                  <p className="mt-3">
                    Nasze zaangażowanie w wykorzystanie najnowszych technologii
                    i wysokiej jakości materiałów zapewnia, że nasze produkty są
                    trwałe, estetyczne i skuteczne.
                  </p>
                  <hr className="mt-4" />
                </Col>
              </Row>
              <Row className="mt-4">
                <Col className="about-col">
                  <h5>Szybka realizacja</h5>
                  <p className="mt-3">
                    W dzisiejszym dynamicznym świecie czas jest kluczowy.
                    Rozumiemy, jak ważne jest dla Ciebie szybkie wprowadzenie
                    projektów do działania.{" "}
                  </p>
                </Col>
                <Col className="about-col">
                  <h5>Klient w centrum</h5>
                  <p className="mt-3">
                    {" "}
                    Dla nas liczy się Twój sukces, dlatego dostosowujemy nasze
                    usługi, by zaoferować Ci rozwiązania, które efektywnie
                    podniosą wizerunek Twojej firmy i przyciągną uwagę klientów.
                  </p>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>

      {/*CONTACT AND MAP*/}
      <div className="mt-5 reveal">
        <Row>
          <Col lg={4} className="pink p-5">
            <h2 style={{ marginBottom: "260px" }}>
              Skontaktuj <br /> się z nami
            </h2>
            <h5>
              Skorzystaj z formularza by
              <br /> napisać wiadomość
            </h5>
            <Button className="see-there">
              <Link to="/contact">Zobacz Tutaj</Link>
            </Button>
          </Col>
          <Col lg={4} className="photo p-5"></Col>
          <Col lg={4} className="map p-0">
            <iframe
              title="Google Maps location of Printly"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d20203.8640338791!2d18.9717236743164!3d50.729529899999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4710c9691363726d%3A0x961aeffe0193b262!2sPrintly%20-%20Drukarnia%20Wielkoformatowa!5e0!3m2!1spl!2spl!4v1691070621825!5m2!1spl!2spl"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            <h3>Znajdź nas tutaj</h3>
            <p>
              ul. Stawowa 5, Konopiska, 42-274
              <br />
              obok Częstochowy
              <br />
              +48 575-254-057
            </p>
          </Col>
        </Row>
      </div>

      {/*LARGE PRINT FORMAT AND STICKERS*/}
      <Container className="mt-5 reveal2">
        <div className="cont">
          <a href="/services">
          <div className="card">
            <h2>Druk wielkoformatowy</h2>
            <p>
              Wyjątkowe rozwiązania reklamowe dla Twojego sukcesu! Drukujemy
              banery, plakaty, roll-upy, potykacze i wiele innych materiałów w
              najwyższej jakości, aby Twój przekaz wyróżnił się na tle
              konkurencji.
            </p>
            <span className="change">{isMobile ? 'DOTKNIJ' : 'NAJEDŹ'}</span>
            <div className="pic"></div>
            <button></button>
          </div>
          </a>
          <a href="/stickers">
          <div className="card card2 ">
            <h2>Naklejki</h2>
            <p>
              Oferujemy naklejki wycinane z folii, jak i naklejki nadrukowane (np. etykiety, 
              naklejki na witryny, czy samochody).
            </p>
            <span className="change">{isMobile ? 'DOTKNIJ' : 'NAJEDŹ'}</span>
            <div className="pic"></div>
            <button></button>
          </div></a>
        </div>
      </Container>
    </>
  );
};

export default Hero;

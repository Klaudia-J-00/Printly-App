import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useEffect } from "react";

const Services = () => {
    const windowHeight = window.innerHeight;

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

  return (
    <div className="about">
      <Container className="card-container">
        <Row className="m-5 card-one">
          <Col sm={4}>
            <img
              src="img/baner2.png"
              className="img-fluid rounded-start"
              alt="baner"
            />
          </Col>
          <Col sm={8}>
            <div className="card-body d-flex flex-column justify-content-between h-100">
              <h5 className="card-title">BANERY</h5>
              <p className="card-text">
                Banery są idealnym nośnikiem reklamowym na imprezy plenerowe,
                wystawy, czy jako element dekoracyjny. Możesz także umieścić je
                na ścianach budynków lub płotach by przyciągnąć uwagę większej
                liczby klientów.
              </p>
              <button className="mt-auto">
                <Link to="/baners">Kliknij by dowiedzieć się więcej</Link>
              </button>
            </div>
          </Col>
        </Row>

        <Row className="m-5 card-one reveal2">
          <Col sm={8}>
            <div className="card-body d-flex flex-column justify-content-between h-100">
              <h5 className="card-title">PLAKATY</h5>
              <p className="card-text">
                Z naszym drukiem plakatów możesz przyciągnąć uwagę klientów.
                Dostępne w różnych formatach, plakaty są skutecznym narzędziem
                marketingowym zarówno dla małych biznesów, jak i dużych firm.
              </p>
              <button className="mt-auto">
                <Link to="/posters">Kliknij by dowiedzieć się więcej</Link>
              </button>
            </div>
          </Col>
          <Col sm={4}>
            <img
              src="img/poster2.png"
              className="img-fluid rounded-start"
              alt="poster"
            />
          </Col>
        </Row>

        <Row className="m-5 card-one reveal">
          <Col sm={4}>
            <img
              src="img/car.jpg"
              className="img-fluid rounded-start"
              alt="sticker"
            />
          </Col>
          <Col sm={8}>
            <div className="card-body d-flex flex-column justify-content-between h-100">
              <h5 className="card-title">NAKLEJKI</h5>
              <p className="card-text">
                Personalizowane naklejki to doskonały sposób na promocję marki
                lub produktu. Wykonane z trwałego materiału, mogą być stosowane
                na różnorodnych powierzchniach, od samochodów po opakowania,
                dodając profesjonalizmu i charakteru Twojemu biznesowi.
              </p>
              <button className="mt-auto">
                <Link to="/stickers">Kliknij by dowiedzieć się więcej</Link>
              </button>
            </div>
          </Col>
        </Row>

        <Row className="m-5 card-one reveal2">
          <Col sm={8}>
            <div className="card-body d-flex flex-column justify-content-between h-100">
              <h5 className="card-title">POTYKACZE</h5>
              <p className="card-text">
                Drukowane potykacze to mobilne tablice reklamowe, które z
                łatwością przyciągają uwagę przechodniów i klientów. Idealne do
                ustawienia przed sklepem lub na targach, potykacze pozwalają
                wyróżnić Twoją ofertę w tłumie konkurencyjnych firm.
              </p>
              <button className="mt-auto">
                <Link to="/aboards">Kliknij by dowiedzieć się więcej</Link>
              </button>
            </div>
          </Col>
          <Col sm={4}>
            <img
              src="img/a-board.jpg"
              className="img-fluid rounded-start"
              alt="a-board"
            />
          </Col>
        </Row>

        <Row className="m-5 card-one reveal">
          <Col sm={4}>
            <img
              src="img/roll-up.png"
              className="img-fluid rounded-start"
              alt="roll-up"
            />
          </Col>
          <Col sm={8}>
            <div className="card-body d-flex flex-column justify-content-between h-100">
              <h5 className="card-title">ROLL-UPY</h5>
              <p className="card-text">
                Nasze roll-upy to praktyczne i eleganckie systemy ekspozycji,
                które można łatwo złożyć i przenosić. Drukowane z najwyższą
                jakością, roll-upy są idealnym dodatkiem na prezentacje,
                konferencje, czy eventy firmowe, skutecznie prezentując Twoje
                produkty lub usługi.
              </p>
              <button className="mt-auto">
                <Link to="/rollups">Kliknij by dowiedzieć się więcej</Link>
              </button>
            </div>
          </Col>
        </Row>

        <Row className="m-5 card-one reveal2">
          <Col sm={8}>
            <div className="card-body d-flex flex-column justify-content-between h-100">
              <h5 className="card-title">MAGNESY</h5>
              <p className="card-text">
                Magnesy świetnie nadadzą się do personalizacji Twojego samochodu
                bez konieczności trwałych zmian. Łatwo przymocuj i zdejmij
                magnesy w dowolnej chwili, bez ryzyka uszkodzeń czy
                pozostawiania śladów.
              </p>
              <button className="mt-auto">
                <Link to="/magnets">Kliknij by dowiedzieć się więcej</Link>
              </button>
            </div>
          </Col>
          <Col sm={4}>
            <img
              src="img/komura.png"
              className="img-fluid rounded-start"
              alt="magnets"
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};
export default Services;

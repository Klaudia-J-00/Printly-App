import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const Services = () => {
  const windowHeight = window.innerHeight;
  const [isMobile, setIsMobile] = useState(window.innerWidth > 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth > 768);
    };

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

    window.addEventListener("resize", handleResize);

    window.addEventListener("scroll", () => {
      reveal(".reveal");
      reveal(".reveal2");
    });

    // Initial reveal
    reveal(".reveal");
    reveal(".reveal2");
    // Cleanup
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
      {isMobile ? (
        <div className="about">
          <Container className="card-container">
          <h3 className="header-center-big mb-5 services-h3"> PRODUKTY </h3>
            <Row className="m-5 card-one">
              <Col sm={4}>
                <img
                  src="img/baner2.png"
                  className="img-fluid rounded-left"
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
                    <Link to="/baners">Kalkulator cen</Link>
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
                    <Link to="/posters">Kalkulator cen</Link>
                  </button>
                </div>
              </Col>
              <Col sm={4}>
                <img
                  src="img/poster2.png"
                  className="img-fluid rounded-right"
                  alt="poster"
                />
              </Col>
            </Row>

            <Row className="m-5 card-one reveal">
              <Col sm={4}>
                <img
                  src="img/car.jpg"
                  className="img-fluid rounded-left"
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
                    <Link to="/stickers">Kalkulator cen</Link>
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
                    <Link to="/aboards">Kalkulator cen</Link>
                  </button>
                </div>
              </Col>
              <Col sm={4}>
                <img
                  src="img/a-board.jpg"
                  className="img-fluid rounded-right"
                  alt="a-board"
                />
              </Col>
            </Row>

            <Row className="m-5 card-one reveal">
              <Col sm={4}>
                <img
                  src="img/roll-up.png"
                  className="img-fluid rounded-left"
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
                    <Link to="/rollups">Kalkulator cen</Link>
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
                    <Link to="/magnets">Kalkulator cen</Link>
                  </button>
                </div>
              </Col>
              <Col sm={4}>
                <img
                  src="img/komura.png"
                  className="img-fluid rounded-right"
                  alt="magnets"
                />
              </Col>
            </Row>

            <Row className="m-5 card-one reveal">
              <Col sm={4}>
                <img
                  src="img/sticker-window.png"
                  className="img-fluid rounded-left"
                  alt="roll-up"
                />
              </Col>
              <Col sm={8}>
                <div className="card-body d-flex flex-column justify-content-between h-100">
                  <h5 className="card-title">FOLIE REKLAMOWE</h5>
                  <p className="card-text">
                    Monomeryczne lub polimeryczne folie wykorzystywane do reklamy wewnętrznej lub zewnętrznej, idealne do oklejania witryn sklepowych, samochodów, szyb, ścian, podłóg, mebli, drzwi, a także do 
                    oznakowania tablic.
                  </p>
                  <button className="mt-auto">
                    <Link to="/foil">Kalkulator cen</Link>
                  </button>
                </div>
              </Col>
            </Row>

          </Container>
        </div>) : (
        <>
          <Container className="price-list-mobile">
            <Row>
              <h3 className="header-center-big my-5"> PRODUKTY </h3>

              <Col className="price-list-col-mobile mb-4">
              <img
                  src="img/baner2.png"
                  className="img-fluid rounded"
                  alt="baner"
                />
                <div className="card-body d-flex flex-column justify-content-between h-100">
                  <h5 className="card-title text-center">BANERY</h5>
                  <p className="card-text">
                    Banery są idealnym nośnikiem reklamowym na imprezy plenerowe,
                    wystawy, czy jako element dekoracyjny. Możesz także umieścić je
                    na ścianach budynków lub płotach by przyciągnąć uwagę większej
                    liczby klientów.
                  </p>
                  <button className="mt-auto">
                    <Link to="/baners">Kalkulator cen</Link>
                  </button>
                </div>
              </Col>

              <Col className="price-list-col-mobile mb-4 reveal2">
              <img
                  src="img/poster2.png"
                  className="img-fluid rounded"
                  alt="poster"
                />
                <div className="card-body d-flex flex-column justify-content-between h-100">
                  <h5 className="card-title text-center">PLAKATY</h5>
                  <p className="card-text">
                    Z naszym drukiem plakatów możesz przyciągnąć uwagę klientów.
                    Dostępne w różnych formatach, plakaty są skutecznym narzędziem
                    marketingowym zarówno dla małych biznesów, jak i dużych firm.
                  </p>
                  <button className="mt-auto">
                    <Link to="/posters">Kalkulator cen</Link>
                  </button>
                </div>
              </Col>

              <Col className="price-list-col-mobile mb-4 reveal">
              <img
                  src="img/car.jpg"
                  className="img-fluid rounded"
                  alt="sticker"
                />
                <div className="card-body d-flex flex-column justify-content-between h-100">
                  <h5 className="card-title text-center">NAKLEJKI</h5>
                  <p className="card-text">
                    Personalizowane naklejki to doskonały sposób na promocję marki
                    lub produktu. Wykonane z trwałego materiału, mogą być stosowane
                    na różnorodnych powierzchniach, od samochodów po opakowania,
                    dodając profesjonalizmu i charakteru Twojemu biznesowi.
                  </p>
                  <button className="mt-auto">
                    <Link to="/stickers">Kalkulator cen</Link>
                  </button>
                </div>
              </Col>

              <Col className="price-list-col-mobile mb-4 reveal2">
              <img
                  src="img/a-board.jpg"
                  className="img-fluid rounded"
                  alt="a-board"
                />
                <div className="card-body d-flex flex-column justify-content-between h-100">
                  <h5 className="card-title text-center">POTYKACZE</h5>
                  <p className="card-text">
                    Drukowane potykacze to mobilne tablice reklamowe, które z
                    łatwością przyciągają uwagę przechodniów i klientów. Idealne do
                    ustawienia przed sklepem lub na targach, potykacze pozwalają
                    wyróżnić Twoją ofertę w tłumie konkurencyjnych firm.
                  </p>
                  <button className="mt-auto">
                    <Link to="/aboards">Kalkulator cen</Link>
                  </button>
                </div>
              </Col>

              <Col className="price-list-col-mobile mb-4 reveal">
              <img
                  src="img/roll-up.png"
                  className="img-fluid rounded"
                  alt="roll-up"
                />
                <div className="card-body d-flex flex-column justify-content-between h-100">
                  <h5 className="card-title text-center">ROLL-UPY</h5>
                  <p className="card-text">
                    Nasze roll-upy to praktyczne i eleganckie systemy ekspozycji,
                    które można łatwo złożyć i przenosić. Drukowane z najwyższą
                    jakością, roll-upy są idealnym dodatkiem na prezentacje,
                    konferencje, czy eventy firmowe, skutecznie prezentując Twoje
                    produkty lub usługi.
                  </p>
                  <button className="mt-auto">
                    <Link to="/rollups">Kalkulator cen</Link>
                  </button>
                </div>
              </Col>

              <Col className="price-list-col-mobile mb-4 reveal2">
              <img
                  src="img/komura.png"
                  className="img-fluid rounded"
                  alt="magnets"
                />
                <div className="card-body d-flex flex-column justify-content-between h-100">
                  <h5 className="card-title text-center">MAGNESY</h5>
                  <p className="card-text">
                    Magnesy świetnie nadadzą się do personalizacji Twojego samochodu
                    bez konieczności trwałych zmian. Łatwo przymocuj i zdejmij
                    magnesy w dowolnej chwili, bez ryzyka uszkodzeń czy
                    pozostawiania śladów.
                  </p>
                  <button className="mt-auto">
                    <Link to="/magnets">Kalkulator cen</Link>
                  </button>
                </div>
              </Col>

            </Row>
          </Container>
         </>)}
    </>
  );
};
export default Services;

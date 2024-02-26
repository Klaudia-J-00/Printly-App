import { faCalculator, faDollarSign } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useEffect } from "react";

const PriceList = () => {
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
          <Container className="card-container p-5">
            <Row className="price-list-row card-one">
              <h3 className="header-center-big mb-5">CENNIK</h3>
              <Col lg={4} className="price-list-col p-3">
                <h3 className="header-center">BANERY</h3>
                <p>
                  <b>Na cenę banera składają się: </b>
                  <ul>
                    <li>Wymiary</li>
                    <li>Laminacja</li>
                    <li>Zagęszczenie oczek</li>
                    <li>Wykończenie</li>
                    <li>Projekt</li>
                    <li>
                      <b>
                        W przypadku zamówienia większej <br /> ilości banerów
                        niż 5, stosowany jest
                        <br /> rabat -5%. Ilość powyżej 10 banerów skutkuje
                        rabatem -10%.
                      </b>
                    </li>
                  </ul>
                </p>
              </Col>
              <Col lg={4} className="price-list-col p-3 px-5">
                <h3 className="header-center-white">
                  <FontAwesomeIcon icon={faDollarSign} />
                </h3>
                <p className="white-list">
                  <b>Przykładowa cena:</b>
                  <br />
                  Za baner o wymiarach 100x200cm,
                  z laminacją, oczkami rozmieszczonymi co 50 cm, zgrzanymi
                  brzegami bez potrzeby tworzenia projektu cena wynosi <b>188 zł</b>.
                  <br />
                  <br />W przypadku zamówienia 6 sztuk takiego samego baneru,
                  cena za sztukę zmniejszy się do: <b>178 zł</b>.
                </p>
              </Col>
              <Col lg={4} className="p-3 middle-list">
                W celu obliczenia ceny banera, z wybranymi przez Ciebie
                parametrami skorzystaj z kalkulatora:
                <button className="mt-auto">
                  <Link to="/baners">Kalkulator</Link>
                </button>
              </Col>
            </Row>

            <Row className="price-list-row reveal2">
              <Col lg={4} className="price-list-col p-3">
                <h3 className="header-center">PLAKATY</h3>
                <p>
                  <b>Na cenę plakatu składa się: </b>
                  <ul>
                    <li>Wymiary</li>
                    <li>Rodzaj powierzchni</li>
                    <li>Projekt</li>
                    <li>
                      <b>
                        W przypadku zamówienia większej <br /> ilości plakatów
                        niż 5 stosowany <br />
                        jest rabat -5%. Ilość powyżej 10
                        <br /> plakatów skutkuje rabatem -10%.
                      </b>
                    </li>
                  </ul>
                </p>
              </Col>
              <Col lg={4} className="price-list-col p-3 px-5">
                <h3 className="header-center-blue">
                  <FontAwesomeIcon icon={faDollarSign} />
                </h3>
                <p className="white-list">
                  <b>Przykładowa cena:</b>
                  <br />
                  Za plakat o wymiarach
                  100x100cm, bez potrzeby tworzenia projektu cena wynosi{" "}
                  <b>47.50 zł</b>
                  <br />
                  <br />W przypadku zamówienia 6 sztuk takiego samego baneru,
                  cena za sztukę zmniejszy się do: <b>45 zł</b>
                </p>
              </Col>
              <Col lg={4} className="p-3 middle-list">
                W celu obliczenia ceny plakatu, z wybranymi przez Ciebie
                parametrami skorzystaj z kalkulatora:
                <button className="mt-auto blue-button">
                  <Link to="/posters">Kalkulator</Link>
                </button>
              </Col>
            </Row>

            <Row className="price-list-row reveal">
              <Col lg={4} className="price-list-col p-3">
                <h3 className="header-center">NAKLEJKI</h3>
                <p>
                  <b>Na cenę naklejek składają się: </b>
                  <ul>
                    <li>Wymiary</li>
                    <li>Rodzaj folii</li>
                    <li>Nadruk</li>
                    <li>Laminacja</li>
                    <li>Projekt</li>
                    <li>
                      <b>
                        W przypadku zamówienia większej <br /> ilości małych naklejek
                        niż 100 stosowany <br />
                        jest rabat -5%. Ilość powyżej 1000
                        <br /> naklejek skutkuje rabatem -10%. W przypadku dużych naklejek
                        rabat wynosi -10% dla ilości powyżej 10 i -20% dla ilości powyżej 100.
                      </b>
                    </li>
                  </ul>
                </p>
              </Col>
              <Col lg={4} className="price-list-col p-3 px-5">
                <h3 className="header-center-white">
                  <FontAwesomeIcon icon={faDollarSign} />
                </h3>
                <p className="white-list">
                  <b>Przykładowa cena:</b>
                  <br />
                  Za naklejkę nadrukowaną na białej folii monomerycznej o
                  wymiarach 100x100cm zapłacisz{" "}
                  <b>145 zł</b>
                  <br />
                  <br />W przypadku zamówienia 11 sztuk takiej samej naklejki,
                  cena zmniejszy się do: <b>130 zł</b>. 
                </p>
              </Col>
              <Col lg={4} className="col-lg-4 p-3 middle-list">
                W celu obliczenia ceny naklejek, z wybranymi przez Ciebie
                parametrami skorzystaj z kalkulatora:
                <button className="mt-auto">
                  <Link to="/stickers">Kalkulator</Link>
                </button>
              </Col>
            </Row>

            <Row className="price-list-row reveal2">
              <Col lg={4} className="price-list-col p-3">
                <h3 className="header-center">POTYKACZE</h3>
                <p>
                  <b>Na cenę potykacza składają się: </b>
                  <ul>
                    <li>Wymiary</li>
                    <li>Rama potykacza</li>
                    <li>Projekt</li>
                    <li>
                      <b>
                        W przypadku zamówienia większej <br /> ilości potykaczy
                        niż 5 stosowany <br />
                        jest rabat -5%. Ilość powyżej 10
                        <br /> potykaczy skutkuje rabatem -10%.
                      </b>
                    </li>
                  </ul>
                </p>
              </Col>
              <Col lg={4} className="price-list-col p-3 px-5">
                <h3 className="header-center-blue">
                  <FontAwesomeIcon icon={faDollarSign} />
                </h3>
                <p className="white-list">
                  <b>Przykładowa cena:</b>
                  <br />
                  Za potykacz ze srebrną ramą o wymiarach A2(42x59.4cm) z tą
                  samą grafiką z obu stron zapłacisz <b>227 zł</b>
                  <br />
                  <br />W przypadku zamówienia 6 sztuk takiego samego potykacza,
                  cena za jeden potykacz zmniejszy się do: <b>215 zł</b>.
                </p>
              </Col>
              <Col lg={4} className="p-3 middle-list">
                W celu obliczenia ceny potykaczy, z wybranymi przez Ciebie
                parametrami skorzystaj z kalkulatora:
                <button className="mt-auto blue-button">
                  <Link to="/aboards">Kalkulator</Link>
                </button>
              </Col>
            </Row>

            <Row className="price-list-row reveal">
              <Col lg={4} className="price-list-col p-3">
                <h3 className="header-center">ROLL-UPY</h3>
                <p>
                  <b>Na cenę roll-upu składają się: </b>
                  <ul>
                    <li>Wymiary</li>
                    <li>Stelaż roll-upu</li>
                    <li>Projekt</li>
                    <li>
                      <b>
                        W przypadku zamówienia większej <br /> ilości potykaczy
                        niż 5 stosowany <br />
                        jest rabat -5%. Ilość powyżej 10
                        <br /> naklejek skutkuje rabatem -10%.
                      </b>
                    </li>
                  </ul>
                </p>
              </Col>
              <Col lg={4} className="price-list-col p-3 px-5">
                <h3 className="header-center-white">
                  <FontAwesomeIcon icon={faDollarSign} />
                </h3>
                <p className="white-list">
                  <b>Przykładowa cena:</b>
                  <br />
                  Za roll-up o wymiarach 85x200cm zapłacisz <b>180 zł</b>
                  <br />
                  <br />W przypadku zamówienia 6 sztuk takiego samego potykacza,
                  cena zmniejszy się do: <b>170 zł</b>.
                </p>
              </Col>
              <Col lg={4} className="p-3 middle-list">
                W celu obliczenia ceny roll-upu, z wybranymi przez Ciebie
                parametrami skorzystaj z kalkulatora:
                <button className="mt-auto">
                  <Link to="/rollups">Kalkulator</Link>
                </button>
              </Col>
            </Row>

            <Row className="price-list-row reveal2">
              <Col lg={4} className="price-list-col p-3">
                <h3 className="header-center">MAGNESY</h3>
                <p>
                  <b>Na cenę magnesów składają się: </b>
                  <ul>
                    <li>Wymiary</li>
                    <li>Laminacja</li>
                    <li>Projekt</li>
                    <li>
                      <b>
                        W przypadku zamówienia większej <br /> ilości magnesów
                        niż 5 stosowany <br />
                        jest rabat -5%. Ilość powyżej 10
                        <br /> magnesów skutkuje rabatem -10%.
                      </b>
                    </li>
                  </ul>
                </p>
              </Col>
              <Col lg={4} className="price-list-col p-3 px-5">
                <h3 className="header-center-blue">
                  <FontAwesomeIcon icon={faDollarSign} />
                </h3>
                <p className="white-list">
                  <b>Przykładowa cena:</b>
                  <br />
                  Za magnes o wymiarach 100x50cm z
                  laminacją, zapłacisz <b>134 zł</b>
                  <br />
                  <br />W przypadku zamówienia 6 sztuk takiego samego magnesu,
                  cena zmniejszy się do: <b>127 zł</b>.
                </p>
              </Col>
              <Col lg={4} className="p-3 middle-list">
                W celu obliczenia ceny magnesu, z wybranymi przez Ciebie
                parametrami skorzystaj z kalkulatora:
                <button className="mt-auto blue-button">
                  <Link to="/magnets">Kalkulator</Link>
                </button>
              </Col>
            </Row>
          </Container>
        </div>
      ) : (
        <>
          <Container className="price-list-mobile">
            <Row>
              <h3 className="header-center-big mb-5">CENNIK</h3>

              <Col className="price-list-col-mobile mb-4">
                <h3 className="header-center">BANERY</h3>
                <p>
                  <b>Na cenę banera składają się: </b>
                  <ul>
                    <li>Wymiary</li>
                    <li>Laminacja</li>
                    <li>Zagęszczenie oczek</li>
                    <li>Wykończenie</li>
                    <li>Projekt</li>
                    <li>
                      <b>
                        W przypadku zamówienia większej <br /> ilości banerów
                        niż 5, stosowany jest
                        <br /> rabat -5%. Ilość powyżej 10 banerów skutkuje
                        rabatem -10%.
                      </b>
                    </li>
                  </ul>
                </p>
                <hr />
                <h3 className="header-center-white pt-3">
                  <FontAwesomeIcon icon={faDollarSign} />
                </h3>
                <p className="white-list">
                  <b>Przykładowa cena:</b>
                  <br />
                  Za baner o wymiarach 100x200cm,
                  z laminacją, oczkami rozmieszczonymi co 50 cm, zgrzanymi
                  brzegami bez potrzeby tworzenia projektu cena wynosi <b>188 zł</b>.
                  <br />
                  <br />W przypadku zamówienia 6 sztuk takiego samego baneru,
                  cena za sztukę zmniejszy się do: <b>178 zł</b>.
                </p>
                <hr />
                <h3 className="header-center-white pt-3">
                  <FontAwesomeIcon icon={faCalculator} />
                </h3>
                W celu obliczenia ceny banera, z wybranymi przez Ciebie
                parametrami skorzystaj z kalkulatora:
                <button className="mt-auto d-flex">
                  <Link to="/baners">Kalkulator</Link>
                </button>
              </Col>

              <Col className="price-list-col-mobile reveal2 mb-4">
                <h3 className="header-center">PLAKATY</h3>
                <p>
                  <b>Na cenę plakatu składa się: </b>
                  <ul>
                    <li>Wymiary</li>
                    <li>Rodzaj powierzchni</li>
                    <li>Projekt</li>
                    <li>
                      <b>
                        W przypadku zamówienia większej <br /> ilości plakatów
                        niż 5 stosowany <br />
                        jest rabat -5%. Ilość powyżej 10
                        <br /> plakatów skutkuje rabatem -10%.
                      </b>
                    </li>
                  </ul>
                </p>
                <hr />
                <h3 className="header-center-blue pt-3">
                  <FontAwesomeIcon icon={faDollarSign} />
                </h3>
                <p className="white-list">
                  <b>Przykładowa cena:</b>
                  <br />
                  Za plakat o wymiarach
                  100x100cm, bez potrzeby tworzenia projektu cena wynosi{" "}
                  <b>47.50 zł</b>
                  <br />
                  <br />W przypadku zamówienia 6 sztuk takiego samego baneru,
                  cena za sztukę zmniejszy się do: <b>45 zł</b>
                </p>
                <hr />
                <h3 className="header-center-blue pt-3">
                  <FontAwesomeIcon icon={faCalculator} />
                </h3>
                W celu obliczenia ceny plakatu, z wybranymi przez Ciebie
                parametrami skorzystaj z kalkulatora:
                <button className="mt-auto blue-button">
                  <Link to="/posters">Kalkulator</Link>
                </button>
              </Col>

              <Col className="price-list-col-mobile reveal mb-4">
                <h3 className="header-center">NAKLEJKI</h3>
                <p>
                  <b>Na cenę naklejek składają się: </b>
                  <ul>
                    <li>Wymiary</li>
                    <li>Rodzaj folii</li>
                    <li>Nadruk</li>
                    <li>Laminacja</li>
                    <li>Projekt</li>
                    <li>
                      <b>
                        W przypadku zamówienia większej <br /> ilości małych naklejek
                        niż 100 stosowany <br />
                        jest rabat -5%. Ilość powyżej 1000
                        <br /> naklejek skutkuje rabatem -10%. W przypadku dużych naklejek
                        rabat wynosi -10% dla ilości powyżej 10 i -20% dla ilości powyżej 100.
                      </b>
                    </li>
                  </ul>
                </p>
                <hr />
                <h3 className="header-center-white pt-3">
                  <FontAwesomeIcon icon={faDollarSign} />
                </h3>
                <p className="white-list">
                  <b>Przykładowa cena:</b>
                  <br />
                  Za naklejkę nadrukowaną na białej folii monomerycznej o
                  wymiarach 100x100cm zapłacisz{" "}
                  <b>145 zł</b>
                  <br />
                  <br />W przypadku zamówienia 11 sztuk takiej samej naklejki,
                  cena zmniejszy się do: <b>130 zł</b>. 
                </p>
                <hr />
                <h3 className="header-center-white pt-3">
                  <FontAwesomeIcon icon={faCalculator} />
                </h3>
                W celu obliczenia ceny naklejek, z wybranymi przez Ciebie
                parametrami skorzystaj z kalkulatora:
                <button className="mt-auto">
                  <Link to="/stickers">Kalkulator</Link>
                </button>
              </Col>

              <Col className="price-list-col-mobile reveal2 mb-4">
                <h3 className="header-center">POTYKACZE</h3>
                <p>
                  <b>Na cenę potykacza składają się: </b>
                  <ul>
                    <li>Wymiary</li>
                    <li>Rama potykacza</li>
                    <li>Projekt</li>
                    <li>
                      <b>
                        W przypadku zamówienia większej <br /> ilości potykaczy
                        niż 5 stosowany <br />
                        jest rabat -5%. Ilość powyżej 10
                        <br /> potykaczy skutkuje rabatem -10%.
                      </b>
                    </li>
                  </ul>
                </p>
                <hr />
                <h3 className="header-center-blue pt-3">
                  <FontAwesomeIcon icon={faDollarSign} />
                </h3>
                <p className="white-list">
                  <b>Przykładowa cena:</b>
                  <br />
                  Za potykacz ze srebrną ramą o wymiarach A2(42x59.4cm) z tą
                  samą grafiką z obu stron zapłacisz <b>227 zł</b>
                  <br />
                  <br />W przypadku zamówienia 6 sztuk takiego samego potykacza,
                  cena za jeden potykacz zmniejszy się do: <b>215 zł</b>.
                </p>
                <hr />
                <h3 className="header-center-blue pt-3">
                  <FontAwesomeIcon icon={faCalculator} />
                </h3>
                W celu obliczenia ceny potykaczy, z wybranymi przez Ciebie
                parametrami skorzystaj z kalkulatora:
                <button className="mt-auto blue-button">
                  <Link to="/aboards">Kalkulator</Link>
                </button>
              </Col>

              <Col className="price-list-col-mobile reveal mb-4">
                <h3 className="header-center">ROLL-UPY</h3>
                <p>
                  <b>Na cenę roll-upu składają się: </b>
                  <ul>
                    <li>Wymiary</li>
                    <li>Stelaż roll-upu</li>
                    <li>Projekt</li>
                    <li>
                      <b>
                        W przypadku zamówienia większej <br /> ilości potykaczy
                        niż 5 stosowany <br />
                        jest rabat -5%. Ilość powyżej 10
                        <br /> naklejek skutkuje rabatem -10%.
                      </b>
                    </li>
                  </ul>
                </p>
                <hr />
                <h3 className="header-center-white pt-3">
                  <FontAwesomeIcon icon={faDollarSign} />
                </h3>
                <p className="white-list">
                  <b>Przykładowa cena:</b>
                  <br />
                  Za roll-up o wymiarach 85x200cm zapłacisz <b>180 zł</b>
                  <br />
                  <br />W przypadku zamówienia 6 sztuk takiego samego potykacza,
                  cena zmniejszy się do: <b>170 zł</b>.
                </p>
                <hr />
                <h3 className="header-center-white pt-3">
                  <FontAwesomeIcon icon={faCalculator} />
                </h3>
                W celu obliczenia ceny roll-upu, z wybranymi przez Ciebie
                parametrami skorzystaj z kalkulatora:
                <button className="mt-auto">
                  <Link to="/rollups">Kalkulator</Link>
                </button>
              </Col>

              <Col className="price-list-col-mobile reveal2 mb-4">
                <h3 className="header-center">MAGNESY</h3>
                <p>
                  <b>Na cenę magnesów składają się: </b>
                  <ul>
                    <li>Wymiary</li>
                    <li>Laminacja</li>
                    <li>Projekt</li>
                    <li>
                      <b>
                        W przypadku zamówienia większej <br /> ilości magnesów
                        niż 5 stosowany <br />
                        jest rabat -5%. Ilość powyżej 10
                        <br /> magnesów skutkuje rabatem -10%.
                      </b>
                    </li>
                  </ul>
                </p>
                <hr />
                <h3 className="header-center-blue pt-3">
                  <FontAwesomeIcon icon={faDollarSign} />
                </h3>
                <p className="white-list">
                  <b>Przykładowa cena:</b>
                  <br />
                  Za magnes o wymiarach 100x50cm z
                  laminacją, zapłacisz <b>134 zł</b>
                  <br />
                  <br />W przypadku zamówienia 6 sztuk takiego samego magnesu,
                  cena zmniejszy się do: <b>127 zł</b>.
                </p>
                <hr />
                <h3 className="header-center-blue pt-3">
                  <FontAwesomeIcon icon={faCalculator} />
                </h3>
                W celu obliczenia ceny magnesu, z wybranymi przez Ciebie
                parametrami skorzystaj z kalkulatora:
                <button className="mt-auto blue-button">
                  <Link to="/magnets">Kalkulator</Link>
                </button>
              </Col>

            </Row>
          </Container>
        </>
      )}
    </>
  );
};

export default PriceList;

import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleArrowDown } from "@fortawesome/free-solid-svg-icons";

const Rollups = () => {
  const [quantity, setQuantity] = useState(1);
  const [dimensions, setDimensions] = useState("mid");
  const [project, setProject] = useState(false);
  const [discount, setDiscount] = useState("");
  const [total, setTotal] = useState(0);
  const [pricePerItem, setPricePerItem] = useState(0);
  const [isCalculated, setIsCalculated] = useState(false);
  const [withProject, setWithProject] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth > 990);

  const calculatePrice = () => {
    const discount_5 = 0.05; // 10% rabatu od 5 sztuk
    const discount_10 = 0.1; // 20% rabatu od 10 sztuk
    let pricePerSquareMeter = 250;
    const projectPrice = 100;
    let area = 0;
    let priceRollUp = 0;

    if (dimensions === "small") {
      area = (80 * 200) / 10000;
      priceRollUp = 100;
    } else if (dimensions === "mid") {
      area = (85 * 200) / 10000;
      priceRollUp = 150;
    } else {
      area = (100 * 200) / 10000;
      priceRollUp = 150;
    }

    let price = pricePerSquareMeter;
    
    if (quantity > 10) {
      price -= price * discount_10; //rabat powyzej 10 sztuk
      setDiscount(" (zastosowano -10% przy wyborze powyżej 10 sztuk)");
    } else if (quantity > 5) {
      price -= price * discount_5; //rabat powyzej 5 sztuk
      setDiscount(" (zastosowano -5% przy wyborze powyżej 5 sztuk)");
    } else {
      setDiscount("");
    }

    let total = price * quantity;
    if (project) {
      setWithProject(true);
      total += projectPrice; //cena z wliczonym projektem graficznym
      price += projectPrice / quantity; //cena z wliczonym projektem graficznym podzielonym na sztuki
    } else {
      setWithProject(false);
    }

    setTotal(total);
    setPricePerItem(price);
    setIsCalculated(true);
  };

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
                  src="/img/roll-up.png"
                  className="img-fluid rounded-left-top"
                  alt="..."
                />
                <h5 className="card-title mt-4">ROLL-UPY</h5>
                <p className="card-text-2">
                  <b>Czym są roll-upy?</b>
                  <br />
                  Roll-upy to popularne i efektywne narzędzie marketingowe,
                  wykorzystywane w wielu dziedzinach działalności. Są to
                  przenośne banery, które charakteryzują się łatwym montażem i
                  demontażem. Podstawowym elementem roll-upu jest elastyczny
                  materiał drukowany, który można zwijać i rozkładać w
                  specjalnym mechanizmie. Dzięki temu są niezwykle wygodne w
                  transporcie i przechowywaniu, a także pozwalają na wielokrotne
                  wykorzystanie.
                  <br />
                  <br />
                  <b>Dlaczego warto skorzystać z naszych roll-upów?</b>
                </p>
                <ul className="baners-list">
                  <li>
                    <b>Wysoka jakość druku: </b>
                    <br />
                    Nasza drukarnia wykorzystuje najnowocześniejsze technologie
                    drukarskie, zapewniając doskonałą jakość wydruku. Oferujemy
                    żywe kolory, ostre detale i wysoką rozdzielczość, co
                    sprawia, że Twoje grafiki przyciągają wzrok klientów.
                  </li>
                  <li>
                    <b>Solidna konstrukcja:</b>
                    <br />
                    Nasze roll-upy charakteryzują się trwałą i stabilną
                    konstrukcją. Mechanizm zwijania i materiały, z których są
                    wykonane, gwarantują długą żywotność produktu, co pozwoli Ci
                    wielokrotnie wykorzystać baner na różnych wydarzeniach i
                    promocjach.
                  </li>
                </ul>
                <p>
                  <b>Zastosowania roll-upów:</b>
                  <ul className="baners-list">
                    <li>Stoiska targowe i wystawy branżowe</li>
                    <li>Prezentacje produktów i usług</li>
                    <li>Konferencje i seminaria</li>
                    <li>Szkolenia i warsztaty</li>
                    <li>Imprezy firmowe i eventy</li>
                    <li>Sklepy i punkty sprzedaży</li>
                  </ul>
                  Zapraszamy do zamówienia profesjonalnych roll-upów, które
                  stanowią efektywne narzędzie reklamowe, pozwalające w
                  atrakcyjny sposób prezentować Twoją markę i przekazywać
                  kluczowe informacje.
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
                <div className="card-body flex-column justify-content-between text-center h-100">
                  <h5 className="card-title">Sprawdź cenę</h5>
                  <p className="card-text-3">
                    W przypadku większych zamówień cena jest niższa!
                  </p>

                  <form className="p-5">
                    <br id="here" />
                    <label for="quantity">Ilość roll-upów: </label>
                    <input
                      type="number"
                      name="quantity"
                      min="1"
                      max="1000000"
                      value={quantity}
                      onChange={(e) => setQuantity(e.target.value)}
                      className="w-100"
                    />
                    <br />
                    <br />
                    <label for="dimensions">Wymiary: </label>
                    <select
                      name="dimensions"
                      className="form-select"
                      aria-label=""
                      value={dimensions}
                      onChange={(e) => setDimensions(e.target.value)}
                    >
                      <option value="small" disabled>
                        80 x 200 cm - chwilowo niedostępne
                      </option>
                      <option value="mid">85 x 200 cm</option>
                      <option value="big" disabled>
                        100 x 200 cm - chwilowo niedostępne
                      </option>
                    </select>
                    <br />

                    <label htmlFor="project">Projekt graficzny:&nbsp;</label>
                    <div onChange={(e) => setProject(e.target.value === "Tak")}>
                      <input
                        type="radio"
                        name="project"
                        value="Tak"
                        id="projectYes"
                        checked={project === true}
                      />
                      <label htmlFor="projectYes">Tak</label>
                      &nbsp;&nbsp;
                      <input
                        type="radio"
                        name="project"
                        value="Nie"
                        id="projectNo"
                        checked={project === false}
                      />
                      <label htmlFor="projectNo">Nie</label>
                    </div>

                    <br />
                    <br />
                    <button
                      type="button"
                      className="button-banner"
                      onClick={calculatePrice}
                    >
                      OBLICZ
                    </button>
                    <br />
                    <br />
                    {!isCalculated ? (
                      <span id="price">
                        Cena: Wprowadź dane i kliknij{" "}
                        <a href="#here" className="link">
                          oblicz
                        </a>{" "}
                        by poznać cenę
                      </span>
                    ) : (
                      <>
                        <p id="price">
                          Cena: {total.toFixed(2)} zł{" "}
                          {discount && (
                            <span style={{ color: "red" }}>{discount}</span>
                          )}
                        </p>
                        {quantity > 1 && (
                          <p id="pricePerItem">
                            Cena za jedną sztukę: {pricePerItem.toFixed(2)} zł
                          </p>
                        )}
                        {withProject && (
                          <p id="pricePerItem">
                            Cena za projekt graficzny: 100 zł
                            <span className="info-project">
                                  &nbsp;(może się różnić w zależności od
                                  złożoności projektu)
                                </span>
                          </p>
                        )}
                      </>
                    )}
                    <p className="baners-list pt-4">
                      Proszę mieć na uwadze, że przedstawiona cena jest
                      szacunkowa i podlega drobnym zmianom. W celu uzyskania
                      dokładnej oferty prosimy o{" "}
                      <Link to="/contact" className="link">
                        kontakt
                      </Link>
                      .
                    </p>
                  </form>
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
                  src="/img/roll-up.png"
                  className="img-fluid rounded"
                  alt="..."
                />
                <h3 className="header-center-big mb-5">ROLL-UPY</h3>
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
                  <b>Czym są roll-upy?</b>
                  <br />
                  Roll-upy to popularne i efektywne narzędzie marketingowe,
                  wykorzystywane w wielu dziedzinach działalności. Są to
                  przenośne banery, które charakteryzują się łatwym montażem i
                  demontażem. Podstawowym elementem roll-upu jest elastyczny
                  materiał drukowany, który można zwijać i rozkładać w
                  specjalnym mechanizmie. Dzięki temu są niezwykle wygodne w
                  transporcie i przechowywaniu, a także pozwalają na wielokrotne
                  wykorzystanie.
                  <br />
                  <br />
                  <b>Dlaczego warto skorzystać z naszych roll-upów?</b>
                </p>
                <ul className="baners-list">
                  <li>
                    <b>Wysoka jakość druku: </b>
                    <br />
                    Nasza drukarnia wykorzystuje najnowocześniejsze technologie
                    drukarskie, zapewniając doskonałą jakość wydruku. Oferujemy
                    żywe kolory, ostre detale i wysoką rozdzielczość, co
                    sprawia, że Twoje grafiki przyciągają wzrok klientów.
                  </li>
                  <li>
                    <b>Solidna konstrukcja:</b>
                    <br />
                    Nasze roll-upy charakteryzują się trwałą i stabilną
                    konstrukcją. Mechanizm zwijania i materiały, z których są
                    wykonane, gwarantują długą żywotność produktu, co pozwoli Ci
                    wielokrotnie wykorzystać baner na różnych wydarzeniach i
                    promocjach.
                  </li>
                </ul>
                <p>
                  <b>Zastosowania roll-upów:</b>
                  <ul className="baners-list">
                    <li>Stoiska targowe i wystawy branżowe</li>
                    <li>Prezentacje produktów i usług</li>
                    <li>Konferencje i seminaria</li>
                    <li>Szkolenia i warsztaty</li>
                    <li>Imprezy firmowe i eventy</li>
                    <li>Sklepy i punkty sprzedaży</li>
                  </ul>
                  Zapraszamy do zamówienia profesjonalnych roll-upów, które
                  stanowią efektywne narzędzie reklamowe, pozwalające w
                  atrakcyjny sposób prezentować Twoją markę i przekazywać
                  kluczowe informacje.
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
                <div
                  className="card-body flex-column justify-content-between text-center h-100"
                  id="here"
                >
                  <h5 className="card-title">Sprawdź cenę</h5>
                  <p className="card-text-3">
                    W przypadku większych zamówień cena jest niższa!
                  </p>

                  <form className="p-5">
                    <br id="here" />
                    <label for="quantity">Ilość roll-upów: </label>
                    <input
                      type="number"
                      name="quantity"
                      min="1"
                      max="1000000"
                      value={quantity}
                      onChange={(e) => setQuantity(e.target.value)}
                      className="w-100"
                    />
                    <br />
                    <br />
                    <label for="dimensions">Wymiary: </label>
                    <select
                      name="dimensions"
                      className="form-select"
                      aria-label=""
                      value={dimensions}
                      onChange={(e) => setDimensions(e.target.value)}
                    >
                      <option value="small" disabled>
                        80 x 200 cm - chwilowo niedostępne
                      </option>
                      <option value="mid">85 x 200 cm</option>
                      <option value="big" disabled>
                        100 x 200 cm - chwilowo niedostępne
                      </option>
                    </select>
                    <br />

                    <label htmlFor="project">Projekt graficzny:&nbsp;</label>
                    <div onChange={(e) => setProject(e.target.value === "Tak")}>
                      <input
                        type="radio"
                        name="project"
                        value="Tak"
                        id="projectYes"
                        checked={project === true}
                      />
                      <label htmlFor="projectYes">Tak</label>
                      &nbsp;&nbsp;
                      <input
                        type="radio"
                        name="project"
                        value="Nie"
                        id="projectNo"
                        checked={project === false}
                      />
                      <label htmlFor="projectNo">Nie</label>
                    </div>

                    <br />
                    <br />
                    <button
                      type="button"
                      className="button-banner"
                      onClick={calculatePrice}
                    >
                      OBLICZ
                    </button>
                    <br />
                    <br />
                    {!isCalculated ? (
                      <span id="price">
                        Cena: Wprowadź dane i kliknij{" "}
                        <a href="#here" className="link">
                          oblicz
                        </a>{" "}
                        by poznać cenę
                      </span>
                    ) : (
                      <>
                        <p id="price">
                          Cena: {total.toFixed(2)} zł{" "}
                          {discount && (
                            <span style={{ color: "red" }}>{discount}</span>
                          )}
                        </p>
                        {quantity > 1 && (
                          <p id="pricePerItem">
                            Cena za jedną sztukę: {pricePerItem.toFixed(2)} zł
                          </p>
                        )}
                        {withProject && (
                          <p id="pricePerItem">
                            Cena za projekt graficzny: 100 zł
                            <span className="info-project">
                                  &nbsp;(może się różnić w zależności od
                                  złożoności projektu)
                                </span>
                          </p>
                        )}
                      </>
                    )}
                    <p className="baners-list pt-4">
                      Proszę mieć na uwadze, że przedstawiona cena jest
                      szacunkowa i podlega drobnym zmianom. W celu uzyskania
                      dokładnej oferty prosimy o{" "}
                      <Link to="/contact" className="link">
                        kontakt
                      </Link>
                      .
                    </p>
                  </form>
                </div>
              </Col>
            </Row>
          </Container>
        </>
      )}{" "}
    </>
  );
};

export default Rollups;

import React, { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleArrowDown } from "@fortawesome/free-solid-svg-icons";

const Aboards = () => {
  const [quantity, setQuantity] = useState(1);
  const [dimensions, setDimensions] = useState("A2");
  const [print, setPrint] = useState("same");
  const [project, setProject] = useState(false);
  const [discount, setDiscount] = useState("");
  const [total, setTotal] = useState(0);
  const [pricePerItem, setPricePerItem] = useState(0);
  const [isCalculated, setIsCalculated] = useState(false);
  const [withProject, setWithProject] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth > 990);

  const calculatePrice = () => {
    const discount_5 = 0.05; // 5% rabatu od 5 sztuk
    const discount_10 = 0.1; // 10% rabatu od 10 sztuk
    let pricePerSquareMeter = 200;
    const projectPrice = 100;
    let area = 0;
    let priceAboard = 0;

    if (dimensions === "A1") {
      area = (59.4 * 84.1) / 10000;
      priceAboard = 250;
    } else if (dimensions === "A2") {
      area = (42 * 59.4) / 10000;
      priceAboard = 300;
    } else if (dimensions === "B1") {
      area = (70.7 * 100) / 10000;
      priceAboard = 350;
    } else if (dimensions === "B2") {
      area = (50 * 70.7) / 10000;
      priceAboard = 300;
    }

    if (print === "diff") {
      pricePerSquareMeter *= 1.5;
    }

    let price = area * pricePerSquareMeter; //cena za 1 sztukę
    price += priceAboard; 

    if (quantity > 10) {
      price -= price * discount_10; //rabat powyzej 10 sztuk
      setDiscount(" (zastosowano -10% przy wyborze powyżej 10 sztuk)");
    } else if (quantity > 5) {
      price -= price * discount_5; //rabat powyzej 5 sztuk
      setDiscount(" (zastosowano -5% przy wyborze powyżej 5 sztuk)");
    } else {
      setDiscount("");
    }

    let total = price * quantity; //cena koncowa

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
                  src="/img/a-board.jpg"
                  className="img-fluid rounded-left-top"
                  alt="..."
                />
                <h5 className="card-title mt-4">POTYKACZE</h5>
                <p className="card-text-2">
                  Potykacze to popularne narzędzie promocyjne, które znakomicie
                  sprawdza się zarówno wewnątrz jak i na zewnątrz lokali oraz na
                  różnego rodzaju eventach i targach. W naszej ofercie
                  znajdziesz potykacze wykonane z najwyższej jakości materiałów,
                  które gwarantują trwałość i odporność na warunki
                  atmosferyczne.
                  <br />
                  <br />
                  <b>Główne zalety naszych potykaczy:</b>
                </p>
                <ul className="baners-list">
                  <li>
                    <b>Wielofunkcyjność:</b>
                    <br />
                    Nasze potykacze są wszechstronnym rozwiązaniem do
                    prezentacji różnego rodzaju informacji, ofert, promocji czy
                    menu. Dzięki możliwości druku na folii przypominającej
                    tablicę, można używać ich jak tradycyjnych tablic menu, ale
                    z większymi możliwościami personalizacji.
                  </li>
                  <li>
                    <b>Wytrzymała konstrukcja:</b>
                    <br />
                    Nasze potykacze są wykonane z wytrzymałych materiałów, które
                    zapewniają im długą żywotność i odporność na warunki
                    atmosferyczne. Można je bezpiecznie wystawiać na zewnątrz,
                    nawet w trudnych warunkach pogodowych.
                  </li>
                  <li>
                    <b>Skuteczna reklama:</b>
                    <br />
                    Dzięki wyrazistej grafice i odpowiednio dobranym treściom,
                    potykacze są doskonałym narzędziem do przyciągania uwagi
                    klientów i zwiększania ruchu w Twoim lokalu.
                  </li>
                </ul>
                <p>
                  Nie czekaj dłużej i skorzystaj z naszej bogatej oferty
                  drukowanych potykaczy, które idealnie wkomponują się w Twoją
                  strategię marketingową. Z naszymi potykaczami zawsze dotrzesz
                  do swoich klientów w atrakcyjny i innowacyjny sposób!
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
                    <label for="quantity">Ilość potykaczy: </label>
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
                      <option value="A2">A2 (42cm x 59.4cm)</option>
                      <option value="B2" disabled>
                        B2 (50cm x 70cm) - niedostępne
                      </option>
                      <option value="A1" disabled>
                        A1 (59.4cm x 84.1cm) - niedostępne
                      </option>
                      <option value="B1" disabled>
                        B1 (70cm x 100cm) - niedostępne
                      </option>
                    </select>
                    <br />
                    <label for="print">Nadruk: </label>
                    <select
                      name="print"
                      className="form-select"
                      aria-label=""
                      value={print}
                      onChange={(e) => setPrint(e.target.value)}
                    >
                      <option selected value="same">
                        Taki sam na obu stronach
                      </option>
                      <option value="diff">Różny</option>
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
                  src="/img/a-board.jpg"
                  className="img-fluid rounded"
                  alt="..."
                />
                <h3 className="header-center-big mb-5">POTYKACZE</h3>
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
                  Potykacze to popularne narzędzie promocyjne, które znakomicie
                  sprawdza się zarówno wewnątrz jak i na zewnątrz lokali oraz na
                  różnego rodzaju eventach i targach. W naszej ofercie
                  znajdziesz potykacze wykonane z najwyższej jakości materiałów,
                  które gwarantują trwałość i odporność na warunki
                  atmosferyczne.
                  <br />
                  <br />
                  <b>Główne zalety naszych potykaczy:</b>
                </p>
                <ul className="baners-list">
                  <li>
                    <b>Wielofunkcyjność:</b>
                    <br />
                    Nasze potykacze są wszechstronnym rozwiązaniem do
                    prezentacji różnego rodzaju informacji, ofert, promocji czy
                    menu. Dzięki możliwości druku na folii przypominającej
                    tablicę, można używać ich jak tradycyjnych tablic menu, ale
                    z większymi możliwościami personalizacji.
                  </li>
                  <li>
                    <b>Wytrzymała konstrukcja:</b>
                    <br />
                    Nasze potykacze są wykonane z wytrzymałych materiałów, które
                    zapewniają im długą żywotność i odporność na warunki
                    atmosferyczne. Można je bezpiecznie wystawiać na zewnątrz,
                    nawet w trudnych warunkach pogodowych.
                  </li>
                  <li>
                    <b>Skuteczna reklama:</b>
                    <br />
                    Dzięki wyrazistej grafice i odpowiednio dobranym treściom,
                    potykacze są doskonałym narzędziem do przyciągania uwagi
                    klientów i zwiększania ruchu w Twoim lokalu.
                  </li>
                </ul>
                <p>
                  Nie czekaj dłużej i skorzystaj z naszej bogatej oferty
                  drukowanych potykaczy, które idealnie wkomponują się w Twoją
                  strategię marketingową. Z naszymi potykaczami zawsze dotrzesz
                  do swoich klientów w atrakcyjny i innowacyjny sposób!
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
                    <label for="quantity">Ilość potykaczy: </label>
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
                      <option value="A2">A2 (42cm x 59.4cm)</option>
                      <option value="B2" disabled>
                        B2 (50cm x 70cm) - niedostępne
                      </option>
                      <option value="A1" disabled>
                        A1 (59.4cm x 84.1cm) - niedostępne
                      </option>
                      <option value="B1" disabled>
                        B1 (70cm x 100cm) - niedostępne
                      </option>
                    </select>
                    <br />
                    <label for="print">Nadruk: </label>
                    <select
                      name="print"
                      className="form-select"
                      aria-label=""
                      value={print}
                      onChange={(e) => setPrint(e.target.value)}
                    >
                      <option selected value="same">
                        Taki sam na obu stronach
                      </option>
                      <option value="diff">Różny</option>
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

export default Aboards;

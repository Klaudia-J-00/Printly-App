import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useState } from "react";

const Rollups = () => {
  const [quantity, setQuantity] = useState(1);
  const [dimensions, setDimensions] = useState("small");
  const [project, setProject] = useState(false);
  const [discount, setDiscount] = useState("");
  const [total, setTotal] = useState(0);
  const [pricePerItem, setPricePerItem] = useState(0);
  const [isCalculated, setIsCalculated] = useState(false);
  const [withProject, setWithProject] = useState(false);

  const calculatePrice = () => {
    const discount_5 = 0.1; // 10% rabatu od 5 sztuk
    const discount_10 = 0.2; // 20% rabatu od 10 sztuk
    let pricePerSquareMeter = 10;
    const projectPrice = 200;
    let area = 0;
    let priceRollUp = 0;

    if (dimensions === "small") {
      area = (80 * 200) / 10000;
      priceRollUp = 100;
    } else if (dimensions === "mid") {
      area = (85 * 200) / 10000;
      priceRollUp = 120;
    } else {
      area = (100 * 200) / 10000;
      priceRollUp = 150;
    }

    let price = area * pricePerSquareMeter;
    price += priceRollUp; //cena za roll-up
    // Dodatkowe koszty (tusz, prąd, praca)
    const priceInk = 2 * area; //cena za tusz -> 2zl za metr kwadratowy
    const priceElectricity = 0.5 * area; //cena za prad -> 50 gr za metr kwadratowy
    const priceWork = 5 * area; //cena za prace -> 5zl za metr kwadratowy
    price += priceInk + priceElectricity + priceWork; //cena za tusz, prad i prace wliczona do ceny koncowej

    if (quantity > 10) {
      price -= price * discount_10; //rabat powyzej 10 sztuk
      setDiscount(" (zastosowano -20% przy wyborze powyżej 10 sztuk)");
    } else if (quantity > 5) {
      price -= price * discount_5; //rabat powyzej 5 sztuk
      setDiscount(" (zastosowano -10% przy wyborze powyżej 5 sztuk)");
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

  return (
    <div className="about">
      <Container className="card-container">
        <Row className="m-5 card-one">
          <Col md={6}>
            <img
              src="/img/roll-up.png"
              className="img-fluid rounded-start"
              alt="..."
            />
            <h5 className="card-title">ROLL-UPY</h5>
            <span className="scroll-down">
              <b>Zjedź na dół by skorzystać z kalkulatora cen.</b>
            </span>
            <p className="card-text-2">
              <b>Czym są roll-upy?</b>
              <br />
              Roll-upy to popularne i efektywne narzędzie marketingowe,
              wykorzystywane w wielu dziedzinach działalności. Są to przenośne
              banery, które charakteryzują się łatwym montażem i demontażem.
              Podstawowym elementem roll-upu jest elastyczny materiał drukowany,
              który można zwijać i rozkładać w specjalnym mechanizmie. Dzięki
              temu są niezwykle wygodne w transporcie i przechowywaniu, a także
              pozwalają na wielokrotne wykorzystanie.
              <br />
              <br />
              <b>Dlaczego warto skorzystać z naszych roll-upów?</b>
            </p>
            <ul className="baners-list">
              <li>
                <b>Wysoka jakość druku: </b>
                <br />
                Nasza drukarnia wykorzystuje najnowocześniejsze technologie
                drukarskie, zapewniając doskonałą jakość wydruku. Oferujemy żywe
                kolory, ostre detale i wysoką rozdzielczość, co sprawia, że
                Twoje grafiki przyciągają wzrok klientów.
              </li>
              <li>
                <b>Solidna konstrukcja:</b>
                <br />
                Nasze roll-upy charakteryzują się trwałą i stabilną konstrukcją.
                Mechanizm zwijania i materiały, z których są wykonane,
                gwarantują długą żywotność produktu, co pozwoli Ci wielokrotnie
                wykorzystać baner na różnych wydarzeniach i promocjach.
              </li>
              <li>
                <b>Różnorodność: </b>
                <br />W naszej ofercie znajdziesz roll-upy w różnych rozmiarach
                i wersjach, aby dopasować je do Twoich indywidualnych potrzeb.
                Oferujemy także możliwość druku zarówno jednostronnego, jak i
                dwustronnego, co pozwala na maksymalne wykorzystanie przestrzeni
                reklamowej.
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
              Zapraszamy do zamówienia profesjonalnych roll-upów, które stanowią
              efektywne narzędzie reklamowe, pozwalające w atrakcyjny sposób
              prezentować Twoją markę i przekazywać kluczowe informacje.
            </p>
            <p className="card-text-2">
              <b>
                W przypadku pytań lub potrzeby indywidualnej pomocy prosimy o{" "}
                <Link to="/contact" className="link">
                  kontakt
                </Link>
                . Dziękujemy za zainteresowanie naszą ofertą i mamy nadzieję, że
                wspólnie znajdziemy idealne rozwiązanie dla Twoich potrzeb!
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
                  <option selected value="small">
                    80 x 200 cm
                  </option>
                  <option value="mid">85 x 200 cm</option>
                  <option value="big">100 x 200 cm</option>
                </select>
                <br />
                <label htmlFor="project">Projekt graficzny:&nbsp;</label>
                <input
                  type="checkbox"
                  name="project"
                  value="project"
                  id="project"
                  checked={project}
                  onChange={(e) => setProject(e.target.checked)}
                />
                <span id="projectStatus">{project ? " Tak" : " Nie"}</span>
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
                      <p id="pricePerItem">Cena za projekt graficzny: 200 zł</p>
                    )}
                  </>
                )}
                <p className="baners-list pt-4">
                  Proszę mieć na uwadze, że przedstawiona cena jest szacunkowa i
                  podlega drobnym zmianom. W celu uzyskania dokładnej oferty
                  prosimy o{" "}
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
  );
};

export default Rollups;

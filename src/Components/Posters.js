import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleArrowDown } from "@fortawesome/free-solid-svg-icons";

const Posters = () => {
  const [grams, setGrams] = useState("150");
  const [quantity, setQuantity] = useState(1);
  const [width, setWidth] = useState("100");
  const [height, setHeight] = useState("100");
  const [type, setType] = useState("gloss");
  const [project, setProject] = useState(false);
  const [discount, setDiscount] = useState("");
  const [total, setTotal] = useState(0);
  const [pricePerItem, setPricePerItem] = useState(0);
  const [isCalculated, setIsCalculated] = useState(false);
  const [withProject, setWithProject] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth >= 768);

  const calculatePrice = () => {
    //Stale
    const price_150g = 10; // Cena za 1m^2 przy gramaturze 150g
    const price_200g = 12; // Cena za 1m^2 przy gramaturze 200g
    const price_250g = 15; // Cena za 1m^2 przy gramaturze 250g
    const discount_5 = 0.1; // Rabat 10% od ceny końcowej powyżej 5 plakatów
    const discount_10 = 0.2; // Rabat 20% od ceny końcowej powyżej 10 plakatów
    const projectPrice = 200; // Cena za projekt graficzny

    //Obliczenia
    let priceForSquareMeter = 0;
    if (grams === "150") {
      priceForSquareMeter = price_150g;
    } else if (grams === "200") {
      priceForSquareMeter = price_200g;
    } else if (grams === "250") {
      priceForSquareMeter = price_250g;
    }

    let widthM = (width / 100).toFixed(2); //wysokosc w metrach
    let heightM = (height / 100).toFixed(2); //szerokosc w metrach
    let area = widthM * heightM; //pole powierzchni banera

    if (type === "mat") {
      priceForSquareMeter += 2; //dodatkowa opłata za mat, który jest disabled ale gdyby kiedyś to zmienić
    }

    let price = area * priceForSquareMeter; //cena za 1 plakat

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

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
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
              src="/img/poster2.png"
              className="img-fluid rounded-left-top"
              alt="..."
            />
            <h5 className="card-title mt-4">PLAKATY</h5>
            <p className="card-text-2">
              Nasza firma oferuje niepowtarzalne plakaty reklamowe, które
              pozwolą Ci w pełni wyrazić swoje idee i przyciągnąć uwagę Twojej
              docelowej publiczności.
              <br />
              <br />
              <b>Wybierz odpowiedni papier:</b> <br />
              <br />
              Gramatura i zastosowanie:
            </p>
            <ul className="baners-list">
              <li>
                <b>
                  150 g/m<sup>2</sup>
                </b>
                <br />
                <ul>
                  <li>
                    Lekki papier o wysokiej jakości, idealny do wewnętrznych
                    plakatów reklamowych, ogłoszeń w biurach czy sklepach.
                    Doskonale nadaje się do promocji wydarzeń, wyprzedaży lub
                    kampanii marketingowych.
                  </li>
                </ul>
              </li>
              <li>
                <b>
                  200 g/m<sup>2</sup>
                </b>
                <br />
                <ul>
                  <li>
                    Średnio-gruba gramatura, polecana do plakatów wywieszanych
                    na zewnątrz, np. przy okazji eventów plenerowych, koncertów,
                    festiwali. Druk na tym papierze jest trwalszy i bardziej
                    odporny na warunki atmosferyczne.
                  </li>
                </ul>
              </li>
              <li>
                <b>
                  250 g/m<sup>2</sup>
                </b>
                <br />
                <ul>
                  <li>
                    Gruby, wytrzymały papier, który doskonale sprawdza się jako
                    podstawa dla grafik, zdjęć lub ilustracji. Idealny do
                    eksponowania na targach, wystawach lub w punktach sprzedaży,
                    gdzie trwałość plakatu ma kluczowe znaczenie.
                  </li>
                </ul>
              </li>
            </ul>
            <p>Rodzaje powierzchni:</p>
            <ul className="baners-list">
              <li>Błysk</li>
              <ul>
                <li>
                  Plakaty na błyszczącym papierze wyróżniają się intensywnością
                  kolorów i głębią kontrastów. Ta opcja świetnie podkreśla
                  zdjęcia, grafiki i efekty wizualne, co sprawia, że plakaty
                  nabierają profesjonalnego charakteru. Idealny wybór, jeśli
                  zamierzasz prezentować zdjęcia produktów, portrety lub grafiki
                  artystyczne.
                </li>
              </ul>
              <li>Mat</li>
              <ul>
                <li>
                  Papier matowy nadaje plakatom bardziej subtelny wygląd,
                  eliminując refleksy światła. Daje on wyrazistość grafikom, a
                  także działa dobrze przy prezentacji ilustracji artystycznych,
                  grafik komputerowych i szkiców.
                </li>
              </ul>
            </ul>
            <p className="card-text-2">
              Wykorzystujemy najnowocześniejsze drukarki i technologie, aby
              zapewnić najwyższą jakość naszych plakatów. Dbamy o szczegóły i
              kolory, aby Twoje plakaty były perfekcyjne w każdym detalu.
              <br />
              <br />
              Dodatkowo oferujemy usługę docinania plakatów do dowolnie
              wybranych kształtów, aby spełnić wszystkie indywidualne życzenia
              naszych klientów.
            </p>
            <p className="card-text-2">
              Niezależnie od tego, czy chcesz promować swoją markę, ogłosić
              wydarzenie, czy zwiększyć ruch w swoim sklepie, nasze plakaty
              wielkoformatowe są odpowiednie dla różnych celów. Drukujemy
              plakaty, które zachwycą i przyciągną wzrok zarówno wewnątrz, jak i
              na zewnątrz.
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
                <label for="grams">Gramatura: </label>
                <select
                  name="grams"
                  className="form-select"
                  aria-label=""
                  value={grams}
                  onChange={(e) => setGrams(e.target.value)}
                >
                  <option selected value="150">
                    150 g/m<sup>2</sup>
                  </option>
                  <option value="200">
                    200g/m<sup>2</sup>
                  </option>
                  <option value="250">
                    250g/m<sup>2</sup>
                  </option>
                </select>
                <br id="here" />
                <label for="quantity">Ilość plakatów: </label>
                <input
                  type="number"
                  name="quantity"
                  min="1"
                  max="1000000"
                  className="w-100"
                  value={quantity}
                  onChange={(e) => setQuantity(e.target.value)}
                />
                <br />
                <br />
                <label for="width">Wysokość (w centymetrach): </label>
                <input
                  type="number"
                  name="width"
                  min="60"
                  step="10"
                  max="1000"
                  value={width}
                  className="w-100"
                  onChange={(e) => setWidth(e.target.value)}
                />
                <br />
                <br />
                <label for="height">Szerokość (w centymetrach): </label>
                <input
                  type="number"
                  name="height"
                  min="60"
                  step="10"
                  max="200"
                  value={height}
                  className="w-100"
                  onChange={(e) => setHeight(e.target.value)}
                />
                <br />
                <br />
                <label for="type">Rodzaj powierzchni: </label>
                <select name="type" className="form-select" aria-label="" value={type} onChange={setType}>
                  <option value="mat" disabled>
                    Mat
                  </option>
                  <option selected value="gloss">
                    Błysk
                  </option>
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
                      <p id="pricePerItem">
                        Cena za projekt graficzny: 200 zł
                      </p>
                    )}
                  </>
                )}
              </form>
              <p className="baners-list">
                Proszę mieć na uwadze, że przedstawiona cena jest szacunkowa i
                podlega drobnym zmianom. W celu uzyskania dokładnej oferty
                prosimy o{" "}
                <Link to="/contact" className="link">
                  kontakt
                </Link>
                .
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </div> ) : ( 
    <>
      <Container className="price-list-mobile">
        <Row> 
          <Col className="price-list-col-mobile">
          <img
              src="/img/poster2.png"
              className="img-fluid rounded"
              alt="..."
            />
            <h3 className="header-center-big mb-5">PLAKATY</h3>
            <span className="scroll-down">
                  <b>Zjedź na dół by skorzystać z kalkulatora cen.&nbsp;&nbsp;&nbsp;&nbsp;</b> 
                  <a className="arrow-to" href="#here"><FontAwesomeIcon icon={faCircleArrowDown}/></a>
            </span>
            <p className="card-text-2">
              Nasza firma oferuje niepowtarzalne plakaty reklamowe, które
              pozwolą Ci w pełni wyrazić swoje idee i przyciągnąć uwagę Twojej
              docelowej publiczności.
              <br />
              <br />
              <b>Wybierz odpowiedni papier:</b> <br />
              <br />
              Gramatura i zastosowanie:
            </p>
            <ul className="baners-list">
              <li>
                <b>
                  150 g/m<sup>2</sup>
                </b>
                <br />
                <ul>
                  <li>
                    Lekki papier o wysokiej jakości, idealny do wewnętrznych
                    plakatów reklamowych, ogłoszeń w biurach czy sklepach.
                    Doskonale nadaje się do promocji wydarzeń, wyprzedaży lub
                    kampanii marketingowych.
                  </li>
                </ul>
              </li>
              <li>
                <b>
                  200 g/m<sup>2</sup>
                </b>
                <br />
                <ul>
                  <li>
                    Średnio-gruba gramatura, polecana do plakatów wywieszanych
                    na zewnątrz, np. przy okazji eventów plenerowych, koncertów,
                    festiwali. Druk na tym papierze jest trwalszy i bardziej
                    odporny na warunki atmosferyczne.
                  </li>
                </ul>
              </li>
              <li>
                <b>
                  250 g/m<sup>2</sup>
                </b>
                <br />
                <ul>
                  <li>
                    Gruby, wytrzymały papier, który doskonale sprawdza się jako
                    podstawa dla grafik, zdjęć lub ilustracji. Idealny do
                    eksponowania na targach, wystawach lub w punktach sprzedaży,
                    gdzie trwałość plakatu ma kluczowe znaczenie.
                  </li>
                </ul>
              </li>
            </ul>
            <p>Rodzaje powierzchni:</p>
            <ul className="baners-list">
              <li>Błysk</li>
              <ul>
                <li>
                  Plakaty na błyszczącym papierze wyróżniają się intensywnością
                  kolorów i głębią kontrastów. Ta opcja świetnie podkreśla
                  zdjęcia, grafiki i efekty wizualne, co sprawia, że plakaty
                  nabierają profesjonalnego charakteru. Idealny wybór, jeśli
                  zamierzasz prezentować zdjęcia produktów, portrety lub grafiki
                  artystyczne.
                </li>
              </ul>
              <li>Mat</li>
              <ul>
                <li>
                  Papier matowy nadaje plakatom bardziej subtelny wygląd,
                  eliminując refleksy światła. Daje on wyrazistość grafikom, a
                  także działa dobrze przy prezentacji ilustracji artystycznych,
                  grafik komputerowych i szkiców.
                </li>
              </ul>
            </ul>
            <p className="card-text-2">
              Wykorzystujemy najnowocześniejsze drukarki i technologie, aby
              zapewnić najwyższą jakość naszych plakatów. Dbamy o szczegóły i
              kolory, aby Twoje plakaty były perfekcyjne w każdym detalu.
              <br />
              <br />
              Dodatkowo oferujemy usługę docinania plakatów do dowolnie
              wybranych kształtów, aby spełnić wszystkie indywidualne życzenia
              naszych klientów.
            </p>
            <p className="card-text-2">
              Niezależnie od tego, czy chcesz promować swoją markę, ogłosić
              wydarzenie, czy zwiększyć ruch w swoim sklepie, nasze plakaty
              wielkoformatowe są odpowiednie dla różnych celów. Drukujemy
              plakaty, które zachwycą i przyciągną wzrok zarówno wewnątrz, jak i
              na zewnątrz.
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
            <hr className="my-4" />
            <div className="card-body flex-column justify-content-between text-center h-100" id="here">
              <h5 className="card-title">Sprawdź cenę</h5>
              <p className="card-text-3">
                W przypadku większych zamówień cena jest niższa!
              </p>
              <form className="p-5">
                <label for="grams">Gramatura: </label>
                <select
                  name="grams"
                  className="form-select"
                  aria-label=""
                  value={grams}
                  onChange={(e) => setGrams(e.target.value)}
                >
                  <option selected value="150">
                    150 g/m<sup>2</sup>
                  </option>
                  <option value="200">
                    200g/m<sup>2</sup>
                  </option>
                  <option value="250">
                    250g/m<sup>2</sup>
                  </option>
                </select>
                <br id="here" />
                <label for="quantity">Ilość plakatów: </label>
                <input
                  type="number"
                  name="quantity"
                  min="1"
                  max="1000000"
                  className="w-100"
                  value={quantity}
                  onChange={(e) => setQuantity(e.target.value)}
                />
                <br />
                <br />
                <label for="width">Wysokość (w centymetrach): </label>
                <input
                  type="number"
                  name="width"
                  min="60"
                  step="10"
                  max="1000"
                  value={width}
                  className="w-100"
                  onChange={(e) => setWidth(e.target.value)}
                />
                <br />
                <br />
                <label for="height">Szerokość (w centymetrach): </label>
                <input
                  type="number"
                  name="height"
                  min="60"
                  step="10"
                  max="200"
                  value={height}
                  className="w-100"
                  onChange={(e) => setHeight(e.target.value)}
                />
                <br />
                <br />
                <label for="type">Rodzaj powierzchni: </label>
                <select name="type" className="form-select" aria-label="" value={type} onChange={setType}>
                  <option value="mat" disabled>
                    Mat
                  </option>
                  <option selected value="gloss">
                    Błysk
                  </option>
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
                      <p id="pricePerItem">
                        Cena za projekt graficzny: 200 zł
                      </p>
                    )}
                  </>
                )}
              </form>
              <p className="baners-list">
                Proszę mieć na uwadze, że przedstawiona cena jest szacunkowa i
                podlega drobnym zmianom. W celu uzyskania dokładnej oferty
                prosimy o{" "}
                <Link to="/contact" className="link">
                  kontakt
                </Link>
                .
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </> 
    ) } </>
  );
};

export default Posters;

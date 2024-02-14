import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useState } from "react";

const Stickers = () => {
  const [stickerType, setStickerType] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [width, setWidth] = useState("3");
  const [height, setHeight] = useState("3");
  const [cut, setCut] = useState("none");
  const [cutS, setCutS] = useState(false);
  const [color, setColor] = useState("white");
  const [project, setProject] = useState(false);
  const [lamination, setLamination] = useState(false);
  const [withProject, setWithProject] = useState(false);
  const [isCalculated, setIsCalculated] = useState(false);
  const [total, setTotal] = useState(0);
  const [pricePerItem, setPricePerItem] = useState(0);
  const [discount, setDiscount] = useState("");

  const calculatePriceOneColor = () => {
    //stale
    const discount_100 = 0.1; //10% za wiecej niz 100
    const discount_1000 = 0.2; //20% za wiecej niz 1000
    let priceForSquareMeter = 100; //cena za metr kwadratowy folii białej
    const projectPrice = 200; //cena za projekt graficzny

    if (color === "normal") {
      priceForSquareMeter = 110; //cena za metr kwadratowy folii kolorowej
    } else if (color === "gold") {
      priceForSquareMeter = 120; //cena za metr kwadratowy folii złotej
    } else if (color === "holo") {
      priceForSquareMeter = 150; //cena za metr kwadratowy folii holograficznej
    }

    let widthM = (width / 100).toFixed(2);
    let heightM = (height / 100).toFixed(2);
    let area = widthM * heightM;

    if (cut === "simple") {
      priceForSquareMeter += 200; //dodatkowa opłata za wycinanie prostego kształtu
    } else if (cut === "complex") {
      priceForSquareMeter += 500; //dodatkowa opłata za wycinanie skomplikowanego kształtu
    }

    let price = priceForSquareMeter * area;

    const priceElectricity = 0.5 * area; //cena za prad -> 50 gr za metr kwadratowy
    const priceWork = 5 * area; //cena za prace -> 5zl za metr kwadratowy
    price += priceElectricity + priceWork; //cena za tusz, prad i prace wliczona do ceny koncowej

    if (quantity > 1000) {
      price -= price * discount_1000; //rabat powyzej 1000 sztuk
      setDiscount(" (zastosowano -20% przy wyborze powyżej 1000 sztuk)");
    } else if (quantity > 100) {
      price -= price * discount_100; //rabat powyzej 100 sztuk
      setDiscount(" (zastosowano -10% przy wyborze powyżej 100 sztuk)");
    } else {
      setDiscount("");
    }

    let total = price * quantity; //cena za wszystkie naklejki
    if (cutS) {
        if (quantity === 1) {
           //bez zmian
        } else if (quantity <= 10 && quantity > 1) {
          total += 1; // + 1 zł za wycięcie 2-10 arkuszy
        } else if (quantity <= 100) {
          total += 10; // + 10 zł za wycięcie 11-100 arkuszy
        } else if (quantity <= 1000) {
          total += 100; // + 100 zł za wycięcie 101-1000 arkuszy
        } else {
          total += 200; // + 200 zł za wycięcie powzyej 1000 arkuszy
        }
      }
    
    price = total / quantity; //cena z wliczonym wycinaniem arkuszy podzielona na sztuki

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

  const calculatePricePrinted = () => {
    //stale
    const discount_100 = 0.1; //10% za wiecej niz 100
    const discount_1000 = 0.2; //20% za wiecej niz 1000
    let priceForSquareMeter = 100; //cena za metr kwadratowy folii białej
    const projectPrice = 200; //cena za projekt graficzny

    if (color === "white-poli") {
      priceForSquareMeter = 150; //cena za metr kwadratowy folii białej polimerowej
    } else if (color === "normal") {
      priceForSquareMeter = 110; //cena za metr kwadratowy folii kolorowej
    } else if (color === "gold") {
      priceForSquareMeter = 120; //cena za metr kwadratowy folii złotej
    } else if (color === "holo") {
      priceForSquareMeter = 150; //cena za metr kwadratowy folii holograficznej
    }

    let widthM = (width / 100).toFixed(2);
    let heightM = (height / 100).toFixed(2);
    let area = widthM * heightM;

    if (cut === "simple") {
      priceForSquareMeter += 2; //dodatkowa opłata za wycinanie prostego kształtu
    } else if (cut === "complex") {
      priceForSquareMeter += 5; //dodatkowa opłata za wycinanie skomplikowanego kształtu
    }

    if (lamination) {
      priceForSquareMeter += 5; //dodatkowa opłata za laminację 5 zł za metr kwadratowy
    }

    let price = priceForSquareMeter * area;

    const priceInk = 100 * area; //cena za tusz -> 100zl za metr kwadratowy
    const priceElectricity = 0.5 * area; //cena za prad -> 50 gr za metr kwadratowy
    const priceWork = 5 * area; //cena za prace -> 5zl za metr kwadratowy
    price += priceInk + priceElectricity + priceWork; //cena za tusz, prad i prace wliczona do ceny koncowej

    if (quantity > 1000) {
      price -= price * discount_1000; //rabat powyzej 1000 sztuk
      setDiscount(" (zastosowano -20% przy wyborze powyżej 1000 sztuk)");
    } else if (quantity > 100) {
      price -= price * discount_100; //rabat powyzej 100 sztuk
      setDiscount(" (zastosowano -10% przy wyborze powyżej 100 sztuk)");
    } else {
      setDiscount("");
    }

    let total = price * quantity; //cena za wszystkie naklejki
    if (cutS) {
        if (quantity === 1) {
          //bez zmian
        } else if (quantity <= 10 && quantity > 1) {
          total += 1; // + 1 zł za wycięcie 2-10 arkuszy
        } else if (quantity <= 100) {
          total += 10; // + 10 zł za wycięcie 11-100 arkuszy
        } else if (quantity <= 1000) {
          total += 100; // + 100 zł za wycięcie 101-1000 arkuszy
        } else {
          total += 200; // + 200 zł za wycięcie powzyej 1000 arkuszy
        }
      }
    
    price = total / quantity; //cena z wliczonym wycinaniem arkuszy podzielona na sztuki

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
              src="/img/sticker.jpg"
              className="img-fluid rounded-start"
              alt="..."
            />
            <h5 className="card-title">NAKLEJKI</h5>
            <span className="scroll-down">
              <b>Zjedź na dół by skorzystać z kalkulatora cen.</b>
            </span>
            <p className="card-text-2">
              Nasza oferta obejmuje unikalne naklejki, które mogą być docinane
              do dowolnego kształtu. Współpracujemy zarówno z klientami
              poszukującymi kształtów prostych, takich jak prostokąty czy
              okręgi, jak i tych, którzy marzą o szczegółowych i zaawansowanych
              kształtach, idealnie dopasowanych do ich logo lub napisu.
              <br />
              <br />
              Dysponujemy dwiema opcjami dla naszych klientów. <br />
              Po pierwsze, oferujemy naklejki{" "}
              <b>wycinane w folii jednokolorowej</b>, które są dostępne w wielu
              wariantach kolorystycznych. Ta opcja pozwala na stworzenie
              minimalistycznego, ale równocześnie efektownego wzoru, który
              doskonale pasuje do różnorodnych powierzchni.
              <br />
              Po drugie, oferujemy również <b>naklejki nadrukowywane.</b> Dzięki
              temu rozwiązaniu nasi klienci mogą cieszyć się pełną dowolnością w
              tworzeniu wzoru i wykorzystaniu gamy kolorów, co pozwala na
              uzyskanie bardziej złożonych i atrakcyjnych projektów.
              <br />
              <br />
              Nasza oferta folii jest szeroka i różnorodna. Oferujemy folię{" "}
              <b>monomeryczną</b> oraz <b>polimerową,</b> zapewniając tym samym
              odpowiednią folię do każdego projektu i zastosowania.
              <br />
              <br />
              Różnice w folii monomerycznej i polimerowej:
            </p>
            <ul className="baners-list">
              <li>
                <b>Folia monomeryczna</b>
                <br />
                jest wykonana z pojedynczych łańcuchów polimerowych, które są
                mniej elastyczne niż folia polimerowa. Charakteryzuje się niższą
                jakością i trwałością w porównaniu z folią polimerową. Jest
                bardziej przystępna cenowo, co czyni ją atrakcyjnym wyborem dla
                krótkoterminowych zastosowań
                <ul>
                  <li>
                    Krótszy okres trwałości: Folia monomeryczna może wykazywać
                    oznaki starzenia się szybciej niż folia polimerowa w
                    ekstremalnych warunkach atmosferycznych.
                  </li>
                  <li>
                    Mniejsza odporność na rozciąganie: Jest mniej elastyczna i
                    może łatwiej ulegać rozerwaniu przy ekstremalnym
                    rozciąganiu.
                  </li>
                  <li>
                    Zastosowania wewnętrzne i krótkoterminowe: Ze względu na
                    swoją niższą trwałość, folia monomeryczna najlepiej sprawdza
                    się w zastosowaniach wewnętrznych lub tam, gdzie nie jest
                    narażona na intensywne działanie czynników atmosferycznych.
                  </li>
                </ul>
              </li>
              <li>
                <b>Folia polimerowa</b>
                <br />
                Folia polimerowa składa się z wielu łańcuchów polimerowych, co
                czyni ją bardziej elastyczną i wytrzymałą w porównaniu z folią
                monomeryczną. Jest to wyższej jakości folia, która wykazuje
                doskonałą odporność na działanie czynników atmosferycznych,
                promienie UV oraz uszkodzenia mechaniczne.
                <ul>
                  <li>
                    Długi okres trwałości: Folia polimerowa może utrzymać swoje
                    właściwości przez długi czas, nawet w ekstremalnych
                    warunkach atmosferycznych, co sprawia, że jest idealna do
                    zastosowań na zewnątrz, w tym na pojazdach.
                  </li>
                  <li>
                    Wyższa odporność na rozciąganie: Dzięki większej
                    elastyczności, folia polimerowa jest mniej podatna na
                    rozerwanie i odkształcenia.
                  </li>
                  <li>
                    Zastosowania zarówno wewnętrzne, jak i zewnętrzne: Folia
                    polimerowa sprawdza się zarówno w zastosowaniach
                    wewnętrznych, jak i na zewnątrz, gdzie jest narażona na
                    działanie różnorodnych warunków atmosferycznych.
                  </li>
                </ul>
              </li>
            </ul>
            <p>
              Zapraszamy do skorzystania z naszych usług i odkrycia, jak nasze
              naklejki mogą wzbogacić Twoją firmową identyfikację wizualną,
              promocję produktów lub po prostu dodać uroku i kreatywności do
              Twoich projektów!
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

              <h5 className="option-sticker pt-3">
                Jaką naklejką jesteś zainteresowany:
              </h5>
              <select
                id="selectOption"
                name="option"
                className="form-select"
                aria-label=""
                value={stickerType}
                onChange={(e) => setStickerType(e.target.value)}
              >
                <option selected value=" ">
                  {" "}
                </option>
                <option value="jednokolorowa">Jednokolorowa</option>
                <option value="nadrukowywana">Nadrukowywana</option>
              </select>
              {stickerType === "jednokolorowa" ? (
                <form className="p-5">
                  <br id="here" />
                  <label for="quantity">Ilość naklejek: </label>
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
                  <label for="width">
                    Wysokość jednej naklejki (w centymetrach):{" "}
                  </label>
                  <input
                    type="number"
                    name="width"
                    min="4"
                    step="1"
                    max="200"
                    value={width}
                    onChange={(e) => setWidth(e.target.value)}
                    className="w-100"
                  />
                  <br />
                  <br />
                  <label for="height">
                    Szerokość jednej naklejki (w centymetrach):{" "}
                  </label>
                  <input
                    type="number"
                    name="height"
                    min="4"
                    step="1"
                    max="200"
                    value={height}
                    onChange={(e) => setHeight(e.target.value)}
                    className="w-100"
                  />
                  <br />
                  <br />
                  <label for="cut">Wycinanie kształtu: </label>
                  <select
                    name="cut"
                    className="form-select"
                    aria-label=""
                    value={cut}
                    onChange={(e) => setCut(e.target.value)}
                  >
                    <option selected value="none">
                      {" "}
                      Nie{" "}
                    </option>
                    <option value="simple">
                      Tak, prosty kształt (prostokątny, lub okrągły)
                    </option>
                    <option value="complex">
                      Tak, szczegółowy kształt (np. napis, lub logo)
                    </option>
                  </select>
                  <br />
                  <label for="cut">Wycinanie arkuszy:&nbsp;</label>
                  <input
                    type="checkbox"
                    name="cutS"
                    value={cutS}
                    onChange={(e) => setCutS(e.target.checked)}
                    id="cutS"
                    onclick="change4()"
                  />
                  <span id="cutStatusS">
                    {cutS ? " Tak" : " Nie, wiele naklejek na jednym arkuszu"}
                  </span>
                  <br />
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
                  <label for="color">Typ folii: </label>
                  <select
                    name="color"
                    className="form-select"
                    aria-label=""
                    value={color}
                    onChange={(e) => setColor(e.target.value)}
                  >
                    <option selected value="white">
                      Kolor biały
                    </option>
                    <option value="normal">
                      Kolor standardowy(np. czerwony, zielony)
                    </option>
                    <option value="gold">Złoty, srebrny</option>
                    <option value="holo">Holograficzny</option>
                  </select>
                  <br />
                  <br />
                  <button
                    type="button"
                    className="button-banner"
                    onClick={calculatePriceOneColor}
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
                  <p className="baners-list pt-4">
                    Proszę mieć na uwadze, że przedstawiona cena jest szacunkowa
                    i podlega drobnym zmianom. W celu uzyskania dokładnej oferty
                    prosimy o{" "}
                    <Link to="/contact" className="link">
                      kontakt
                    </Link>
                    .
                  </p>
                </form>
              ) : stickerType === "nadrukowywana" ? (
                <form className="p-5">
                  <br id="here" />
                  <label for="quantity2">Ilość naklejek: </label>
                  <input
                    type="number"
                    name="quantity2"
                    min="1"
                    max="1000000"
                    value={quantity}
                    onChange={(e) => setQuantity(e.target.value)}
                    className="w-100"
                  />
                  <br />
                  <br />
                  <label for="width2">
                    Wysokość jednej naklejki (w centymetrach):{" "}
                  </label>
                  <input
                    type="number"
                    name="width2"
                    min="4"
                    step="1"
                    max="200"
                    value={width}
                    onChange={(e) => setWidth(e.target.value)}
                    className="w-100"
                  />
                  <br />
                  <br />
                  <label for="height2">
                    Szerokość jednej naklejki (w centymetrach):{" "}
                  </label>
                  <input
                    type="number"
                    name="height2"
                    min="4"
                    step="1"
                    max="200"
                    value={height}
                    onChange={(e) => setHeight(e.target.value)}
                    className="w-100"
                  />
                  <br />
                  <br />
                  <label for="cut2">Wycinanie kształtu: </label>
                  <select
                    name="cut2"
                    className="form-select"
                    aria-label=""
                    value={cut}
                    onChange={(e) => setCut(e.target.value)}
                  >
                    <option selected value="none">
                      {" "}
                      Nie{" "}
                    </option>
                    <option value="simple">
                      Tak, prosty kształt (prostokątny, lub okrągły)
                    </option>
                    <option value="complex">
                      Tak, szczegółowy kształt (np. napis, lub logo)
                    </option>
                  </select>
                  <br />

                  <label for="cut">Wycinanie arkuszy:&nbsp;</label>
                  <input
                    type="checkbox"
                    name="cutS"
                    value={cutS}
                    onChange={(e) => setCutS(e.target.checked)}
                    id="cutS"
                    onclick="change4()"
                  />
                  <span id="cutStatusS">
                    {cutS ? " Tak" : " Nie, wiele naklejek na jednym arkuszu"}
                  </span>
                  <br />
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
                  <label for="color2">Typ folii: </label>
                  <select
                    name="color2"
                    className="form-select"
                    aria-label=""
                    value={color}
                    onChange={(e) => setColor(e.target.value)}
                  >
                    <option selected value="white">
                      Nadruk na białej folii monomerycznej
                    </option>
                    <option selected value="white-poli">
                      Nadruk na białej folii polimerowej
                    </option>
                    <option value="normal">
                      Nadruk na zwykłej folii kolorowej
                    </option>
                    <option value="gold">
                      Nadruk na folii złotej lub srebrnej
                    </option>
                    <option value="holo">Nadruk na folii holograficznej</option>
                  </select>
                  <br />
                  <label for="lamination2">Laminacja: </label>
                  <input
                    type="checkbox"
                    name="lamination2"
                    value={lamination}
                    onChange={(e) => setLamination(e.target.checked)}
                    id="lamination"
                  />
                  <span span id="laminationStatus">
                    {lamination ? " Tak" : " Nie"}
                  </span>
                  <br />
                  <br />
                  <button
                    type="button"
                    className="button-banner"
                    onClick={calculatePricePrinted}
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
                  <p className="baners-list pt-4">
                    Proszę mieć na uwadze, że przedstawiona cena jest szacunkowa
                    i podlega drobnym zmianom. W celu uzyskania dokładnej oferty
                    prosimy o{" "}
                    <Link to="/contact" className="link">
                      kontakt
                    </Link>
                    .
                  </p>
                </form>
              ) : null}
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Stickers;

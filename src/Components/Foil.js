import React, { useState, useEffect } from "react";
import * as Yup from "yup";
import { Link } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { Container, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleArrowDown } from "@fortawesome/free-solid-svg-icons";

const Foil = () => {
    const [stickerType, setStickerType] = useState("");
    const [quantity, setQuantity] = useState(1);
    const [cut, setCut] = useState("none");
    const [color, setColor] = useState("white");
    const [project, setProject] = useState(false);
    const [lamination, setLamination] = useState(false);
    const [withProject, setWithProject] = useState(false);
    const [isCalculated, setIsCalculated] = useState(false);
    const [total, setTotal] = useState(0);
    const [pricePerItem, setPricePerItem] = useState(0);
    const [discount, setDiscount] = useState("");
    const [isMobile, setIsMobile] = useState(window.innerWidth > 990);

    const validationSchema = Yup.object().shape({
        width: Yup.number()
        .min(3, "Wartość nie może być mniejsza niż 3cm")
        .max(137, "Wartość nie może przekroczyć 137cm")
        .required("Wymagane"),
        height: Yup.number()
        .min(3, "Wartość nie może być mniejsza niż 3cm")
        .max(2000, "Wartość nie może przekroczyć 2000cm")
        .required("Wymagane"),
    });

    const calculatePricePrinted = (width, height) => {
        //stale
        const discount_100s = 0.05; //10% za wiecej niz 100
        const discount_1000s = 0.1; //20% za wiecej niz 1000
        const discount_100b = 0.1; //10% za wiecej niz 100
        const discount_1000b = 0.2; //20% za wiecej niz 1000
        let priceForSquareMeter = 70; //cena za metr kwadratowy folii białej
        const projectPrice = 100; //cena za projekt graficzny

        let widthM = (width / 100).toFixed(2);
        let heightM = (height / 100).toFixed(2);
        let area = widthM * heightM;

        if (area < 0.1) {
            priceForSquareMeter = 280;
        }  else if (area < 0.5) {
            priceForSquareMeter = 150;
        } 

        if (color === "white-poli") {
            priceForSquareMeter += 30; //cena za metr kwadratowy folii białej polimerowej
        } 

        let price = priceForSquareMeter * area;

        if (cut === "simple") {
        price += 30; //dodatkowa opłata za wycinanie prostego kształtu
        }

        if (lamination) {
        price += 30; //dodatkowa opłata za laminację 5 zł za metr kwadratowy
        }

        if (area > 0.1) {
        if (quantity > 100) {
            price -= price * discount_1000b; //rabat powyzej 1000 sztuk
            setDiscount(" (zastosowano -20% przy wyborze powyżej 100 sztuk)");
        } else if (quantity > 10) {
            price -= price * discount_100b; //rabat powyzej 100 sztuk
            setDiscount(" (zastosowano -10% przy wyborze powyżej 10 sztuk)");
        } else {
            setDiscount("");
        }
        } else { 
        if (quantity > 1000) {
            price -= price * discount_1000s; //rabat powyzej 1000 sztuk
            setDiscount(" (zastosowano -10% przy wyborze powyżej 1000 sztuk)");
        } else if (quantity > 100) {
            price -= price * discount_100s; //rabat powyzej 100 sztuk
            setDiscount(" (zastosowano -5% przy wyborze powyżej 100 sztuk)");
        } else {
            setDiscount("");
        }
        }

        let total = price * quantity; //cena za wszystkie naklejki

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

    return(
        <>
      {isMobile ? (
        <div className="about">
          <Container className="card-container">
            <Row className="m-5 card-one">
              <Col md={6}>
                {stickerType === "jednokolorowa" ? (
                  <img
                    src="/img/sticker.jpg"
                    className="img-fluid rounded-left-top"
                    alt="..."
                  />
                ) : stickerType === "nadrukowywana" ? (
                  <img
                    src="/img/sticker-window.png"
                    className="img-fluid rounded-left-top"
                    alt="..."
                  />
                ) : (
                  <>
                  <img
                    src="/img/stickers-two.png"
                    className="img-fluid rounded-left-top"
                    alt="..."
                  />
                  </>
                )}

                <h5 className="card-title mt-4">FOLIE SAMOPRZYLEPNE, REKLAMOWE</h5>
                <p className="card-text-2">
                  Dysponujemy dwoma opcjami dla naszych klientów. <br />
                  Po pierwsze, oferujemy naklejki{" "}
                  <b>wycinane z folii Oracal</b>, które są dostępne w
                  wielu wariantach kolorystycznych. Ta opcja pozwala na
                  stworzenie minimalistycznego, ale równocześnie efektownego
                  wzoru, który doskonale pasuje do różnorodnych powierzchni. 
                  Są to np. napisy, proste logo, symbole itp.
                  Naklejki tego typu wyceniamy indywidualnie po skontaktowaniu się z nami.
                  <br /><br></br>
                  Po drugie, oferujemy również <b>
                    folie do zadruku.
                  </b>{" "}
                  <br />
                  Oferujemy folię{" "}
                  <b>monomeryczną</b> oraz <b>polimerową,</b> zapewniając tym
                  samym odpowiednią folię do każdego projektu i zastosowania. 
                  Folie te sprawdzą się idealnie do oklejania witryn, samochodów, 
                  czy tablic.
                  <br />
                  <br />
                  Różnice w folii monomerycznej i polimerowej:
                </p>
                <ul className="baners-list">
                  <li>
                    <b>Folia monomeryczna</b>
                    <br />
                    jest wykonana z pojedynczych łańcuchów polimerowych, które
                    są mniej elastyczne niż folia polimerowa. Charakteryzuje się
                    niższą jakością i trwałością w porównaniu z folią
                    polimerową. Jest bardziej przystępna cenowo, co czyni ją
                    atrakcyjnym wyborem dla krótkoterminowych zastosowań
                    <ul>
                      <li>
                        Krótszy okres trwałości: Folia monomeryczna może
                        wykazywać oznaki starzenia się szybciej niż folia
                        polimerowa w ekstremalnych warunkach atmosferycznych.
                      </li>
                      <li>
                        Mniejsza odporność na rozciąganie: Jest mniej elastyczna
                        i może łatwiej ulegać rozerwaniu przy ekstremalnym
                        rozciąganiu.
                      </li>
                      <li>
                        Zastosowania wewnętrzne i krótkoterminowe: Ze względu na
                        swoją niższą trwałość, folia monomeryczna najlepiej
                        sprawdza się w zastosowaniach wewnętrznych lub tam,
                        gdzie nie jest narażona na intensywne działanie
                        czynników atmosferycznych.
                      </li>
                    </ul>
                  </li>
                  <li>
                    <b>Folia polimerowa</b>
                    <br />
                    Folia polimerowa składa się z wielu łańcuchów polimerowych,
                    co czyni ją bardziej elastyczną i wytrzymałą w porównaniu z
                    folią monomeryczną. Jest to wyższej jakości folia, która
                    wykazuje doskonałą odporność na działanie czynników
                    atmosferycznych, promienie UV oraz uszkodzenia mechaniczne.
                    <ul>
                      <li>
                        Długi okres trwałości: Folia polimerowa może utrzymać
                        swoje właściwości przez długi czas, nawet w
                        ekstremalnych warunkach atmosferycznych, co sprawia, że
                        jest idealna do zastosowań na zewnątrz, w tym na
                        pojazdach.
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
                    <option value="jednokolorowa">Naklejki wycinane z folii Oracal</option>
                    <option value="nadrukowywana">Folie do zadruku</option>
                  </select>
                  {stickerType === "jednokolorowa" ? (
                   <div>
                    <br></br>
                    <b>Naklejki tego typu wyceniamy indywidualnie 
                      po skontaktowaniu się z nami. </b>
                      <p className="baners-list pt-4">
                            W celu
                            uzyskania dokładnej oferty prosimy o{" "}
                            <Link to="/contact" className="link">
                              kontakt
                            </Link>
                            .
                          </p>
                   </div>
                  ) : stickerType === "nadrukowywana" ? (
                    <Formik
                      initialValues={{ width: 30, height: 30 }}
                      validationSchema={validationSchema}
                      onSubmit={(values, { setSubmitting }) => {
                        calculatePricePrinted(values.width, values.height);
                        setSubmitting(false);
                      }}
                    >
                      {({ isSubmitting }) => (
                        <Form className="p-5">
                          <br id="here" />
                          <label for="quantity2">Ilość: </label>
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
                          <label htmlFor="width">
                            Szerokość (w centymetrach):{" "}
                          </label>
                          <Field
                            type="number"
                            name="width"
                            min="3"
                            step="1"
                            max="137"
                            className="w-100"
                          />
                          <ErrorMessage
                            name="width"
                            component="div"
                            className="error-message"
                          />
                          <br />
                          <br />

                          <label htmlFor="height">
                            Wysokość (w centymetrach):{" "}
                          </label>
                          <Field
                            type="number"
                            name="height"
                            min="3"
                            step="1"
                            max="2000"
                            className="w-100"
                          />
                          <ErrorMessage
                            name="height"
                            component="div"
                            className="error-message"
                          />
                          <br />
                          <br />
                          <label for="cut2">
                            Docinanie na ploterze:{" "}
                          </label>
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
                          </select>
                          <br />
                          <br />
                          <label htmlFor="project">
                            Projekt graficzny:&nbsp;
                          </label>
                          <div
                            onChange={(e) =>
                              setProject(e.target.value === "Tak")
                            }
                          >
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
                          <label for="color2">Typ folii: </label>
                          <select
                            name="color2"
                            className="form-select"
                            aria-label=""
                            value={color}
                            onChange={(e) => setColor(e.target.value)}
                          >
                            <option selected value="white">
                              Folia monomeryczna
                            </option>
                            <option  value="white-poli">
                              Folii polimerowa
                            </option>
                          </select>
                          <br />
                          <label htmlFor="lamination">Laminat:&nbsp;</label>
                          <div
                            onChange={(e) =>
                              setLamination(e.target.value === "Tak")
                            }
                          >
                            <input
                              type="radio"
                              name="lamination"
                              value="Tak"
                              id="laminationYes"
                              checked={lamination === true}
                            />
                            <label htmlFor="laminationYes">Tak</label>
                            &nbsp;&nbsp;
                            <input
                              type="radio"
                              name="lamination"
                              value="Nie"
                              id="laminationNo"
                              checked={lamination === false}
                            />
                            <label htmlFor="laminationNo">Nie</label>
                          </div>
                          <span className="info-project">
                            &nbsp;Opcja dostępna tylko dla większych naklejek.
                          </span>
                          <br />
                          <br />
                          <button type="submit" disabled={isSubmitting}>
                            Oblicz
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
                                  <span style={{ color: "red" }}>
                                    {discount}
                                  </span>
                                )}
                              </p>
                              {quantity > 1 && (
                                <p id="pricePerItem">
                                  Cena za jedną sztukę:{" "}
                                  {pricePerItem.toFixed(2)} zł
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
                            szacunkowa i podlega drobnym zmianom. W celu
                            uzyskania dokładnej oferty prosimy o{" "}
                            <Link to="/contact" className="link">
                              kontakt
                            </Link>
                            .
                          </p>
                        </Form>
                      )}
                    </Formik>
                  ) : null}
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
              {stickerType === "jednokolorowa" ? (
                  <img
                    src="/img/sticker.jpg"
                    className="img-fluid rounded-left-top"
                    alt="..."
                  />
                ) : stickerType === "nadrukowywana" ? (
                  <img
                    src="/img/sticker-window.png"
                    className="img-fluid rounded-left-top"
                    alt="..."
                  />
                ) : (
                  <>
                  <img
                    src="/img/stickers-two.png"
                    className="img-fluid rounded-left-top"
                    alt="..."
                  />
                  </> 
                )}
                <h3 className="header-center-big mb-5">FOLIE SAMOPRZYLEPNE, REKLAMOWE</h3>
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
                  Dysponujemy dwoma opcjami dla naszych klientów. <br />
                  Po pierwsze, oferujemy naklejki{" "}
                  <b>wycinane z folii Oracal</b>, które są dostępne w
                  wielu wariantach kolorystycznych. Ta opcja pozwala na
                  stworzenie minimalistycznego, ale równocześnie efektownego
                  wzoru, który doskonale pasuje do różnorodnych powierzchni. 
                  Są to np. napisy, proste logo, symbole itp.
                  Naklejki tego typu wyceniamy indywidualnie po skontaktowaniu się z nami.
                  <br /><br></br>
                  Po drugie, oferujemy również <b>
                    folie do zadruku.
                  </b>{" "}
                  <br />
                  Oferujemy folię{" "}
                  <b>monomeryczną</b> oraz <b>polimerową,</b> zapewniając tym
                  samym odpowiednią folię do każdego projektu i zastosowania. 
                  Folie te sprawdzą się idealnie do oklejania witryn, samochodów, 
                  czy tablic.
                  <br />
                  <br />
                  Różnice w folii monomerycznej i polimerowej:
                </p>
                <ul className="baners-list">
                  <li>
                    <b>Folia monomeryczna</b>
                    <br />
                    jest wykonana z pojedynczych łańcuchów polimerowych, które
                    są mniej elastyczne niż folia polimerowa. Charakteryzuje się
                    niższą jakością i trwałością w porównaniu z folią
                    polimerową. Jest bardziej przystępna cenowo, co czyni ją
                    atrakcyjnym wyborem dla krótkoterminowych zastosowań
                    <ul>
                      <li>
                        Krótszy okres trwałości: Folia monomeryczna może
                        wykazywać oznaki starzenia się szybciej niż folia
                        polimerowa w ekstremalnych warunkach atmosferycznych.
                      </li>
                      <li>
                        Mniejsza odporność na rozciąganie: Jest mniej elastyczna
                        i może łatwiej ulegać rozerwaniu przy ekstremalnym
                        rozciąganiu.
                      </li>
                      <li>
                        Zastosowania wewnętrzne i krótkoterminowe: Ze względu na
                        swoją niższą trwałość, folia monomeryczna najlepiej
                        sprawdza się w zastosowaniach wewnętrznych lub tam,
                        gdzie nie jest narażona na intensywne działanie
                        czynników atmosferycznych.
                      </li>
                    </ul>
                  </li>
                  <li>
                    <b>Folia polimerowa</b>
                    <br />
                    Folia polimerowa składa się z wielu łańcuchów polimerowych,
                    co czyni ją bardziej elastyczną i wytrzymałą w porównaniu z
                    folią monomeryczną. Jest to wyższej jakości folia, która
                    wykazuje doskonałą odporność na działanie czynników
                    atmosferycznych, promienie UV oraz uszkodzenia mechaniczne.
                    <ul>
                      <li>
                        Długi okres trwałości: Folia polimerowa może utrzymać
                        swoje właściwości przez długi czas, nawet w
                        ekstremalnych warunkach atmosferycznych, co sprawia, że
                        jest idealna do zastosowań na zewnątrz, w tym na
                        pojazdach.
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
                    <option value="jednokolorowa">Naklejki wycinane z folii Oracal</option>
                    <option value="nadrukowywana">Folie do zadruku</option>
                  </select>
                  {stickerType === "jednokolorowa" ? (
                    <div>
                    <br></br>
                    <b>Naklejki tego typu wyceniamy indywidualnie 
                      po skontaktowaniu się z nami. </b>
                      <p className="baners-list pt-4">
                            W celu
                            uzyskania dokładnej oferty prosimy o{" "}
                            <Link to="/contact" className="link">
                              kontakt
                            </Link>
                            .
                          </p>
                   </div>
                  ) : stickerType === "nadrukowywana" ? (
                    <Formik
                      initialValues={{ width: 30, height: 30 }}
                      validationSchema={validationSchema}
                      onSubmit={(values, { setSubmitting }) => {
                        calculatePricePrinted(values.width, values.height);
                        setSubmitting(false);
                      }}
                    >
                      {({ isSubmitting }) => (
                        <Form className="p-5">
                          <br id="here" />
                          <label for="quantity2">Ilość: </label>
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
                          <label htmlFor="width">
                            Szerokość (w centymetrach):{" "}
                          </label>
                          <Field
                            type="number"
                            name="width"
                            min="3"
                            step="1"
                            max="137"
                            className="w-100"
                          />
                          <ErrorMessage
                            name="width"
                            component="div"
                            className="error-message"
                          />
                          <br />
                          <br />

                          <label htmlFor="height">
                            Wysokość (w centymetrach):{" "}
                          </label>
                          <Field
                            type="number"
                            name="height"
                            min="3"
                            step="1"
                            max="2000"
                            className="w-100"
                          />
                          <ErrorMessage
                            name="height"
                            component="div"
                            className="error-message"
                          />
                          <br />
                          <br />
                          <label for="cut2">
                          Docinanie na ploterze:{" "}
                          </label>
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
                          </select>
                          <br />
                          <br />
                          <label htmlFor="project">
                            Projekt graficzny:&nbsp;
                          </label>
                          <div
                            onChange={(e) =>
                              setProject(e.target.value === "Tak")
                            }
                          >
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
                          <label for="color2">Typ folii: </label>
                          <select
                            name="color2"
                            className="form-select"
                            aria-label=""
                            value={color}
                            onChange={(e) => setColor(e.target.value)}
                          >
                            <option selected value="white">
                              Folia monomeryczna
                            </option>
                            <option  value="white-poli">
                              Folii polimerowa
                            </option>
                          </select>
                          <br />
                          <label htmlFor="lamination">Laminat:&nbsp;</label>
                          <div
                            onChange={(e) =>
                              setLamination(e.target.value === "Tak")
                            }
                          >
                            <input
                              type="radio"
                              name="lamination"
                              value="Tak"
                              id="laminationYes"
                              checked={lamination === true}
                            />
                            <label htmlFor="laminationYes">Tak</label>
                            &nbsp;&nbsp;
                            <input
                              type="radio"
                              name="lamination"
                              value="Nie"
                              id="laminationNo"
                              checked={lamination === false}
                            />
                            <label htmlFor="laminationNo">Nie</label>
                          </div>
                          <span className="info-project">
                            &nbsp;Opcja dostępna tylko dla większych naklejek.
                          </span>
                          <br />
                          <br />
                          <button type="submit" disabled={isSubmitting}>
                            Oblicz
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
                                  <span style={{ color: "red" }}>
                                    {discount}
                                  </span>
                                )}
                              </p>
                              {quantity > 1 && (
                                <p id="pricePerItem">
                                  Cena za jedną sztukę:{" "}
                                  {pricePerItem.toFixed(2)} zł
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
                            szacunkowa i podlega drobnym zmianom. W celu
                            uzyskania dokładnej oferty prosimy o{" "}
                            <Link to="/contact" className="link">
                              kontakt
                            </Link>
                            .
                          </p>
                        </Form>
                      )}
                    </Formik>
                  ) : null}
                </div>
              </Col>
            </Row>
          </Container>
        </>
      )}{" "}
    </>
    );
}

export default Foil;
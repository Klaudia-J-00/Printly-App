import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleArrowDown } from "@fortawesome/free-solid-svg-icons";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

const Baners = () => {
  const [quantity, setQuantity] = useState(1);
  const [lamination, setLamination] = useState(false);
  const [eyelets, setEyelets] = useState("0");
  const [welding, setWelding] = useState(false);
  const [project, setProject] = useState(false);
  const [discount, setDiscount] = useState("");
  const [total, setTotal] = useState(0);
  const [pricePerItem, setPricePerItem] = useState(0);
  const [isCalculated, setIsCalculated] = useState(false);
  const [withProject, setWithProject] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth > 990);

  const validationSchema = Yup.object().shape({
    width: Yup.number()
      .min(50, "Wartość nie może być mniejsza niż 50cm")
      .max(130, "Wartość nie może przekroczyć 130cm")
      .required("Wymagane"),
    height: Yup.number()
      .min(50, "Wartość nie może być mniejsza niż 50cm")
      .max(2000, "Wartość nie może przekroczyć 2000cm")
      .required("Wymagane"),
  });

  const calculatePrice = (width, height) => {
    //Stale
    const price_160g = 65; // Cena za 1m^2 przy gramaturze 160g (krotsza)
    //const price_400g = 12; // Cena za 1m^2 przy gramaturze 400g (dluzsza)
    const discount_5 = 0.05; // Rabat 5% od ceny końcowej powyżej 5 banerów
    const discount_10 = 0.1; // Rabat 10% od ceny końcowej powyżej 10 banerów
    const priceEyelet = 0.35; // Cena za 1 oczko 0.50gr
    const projectPrice = 100; // Cena za projekt graficzny

    //Obliczenia
    //const priceForSquareMeter = grams === "160" ? price_160g : price_400g; //cena Za metr kwadratowy w zaleznosci od gramatury
    const priceForSquareMeter = price_160g;
    let widthM = width / 100; //wysokosc w metrach
    let heightM = height / 100; //szerokosc w metrach
    let area = widthM * heightM; //pole powierzchni banera
    let perimeter = 2 * (widthM + heightM); //obwod banera

    let price = area * priceForSquareMeter; //cena za baner bez dodatków

    function metersToCentimeters(meters) {
      return meters * 100;
    }

    const perimeterInCentimeters = metersToCentimeters(perimeter); //obwod w centymetrach

    if (lamination) {
      price += area * 20; //cena za baner z laminacja -> 5 zl wiecej za metr kwadratowy laminacji
    }

    if (eyelets === "50" || eyelets === "25" || eyelets === "100") {
      const eyeletsCount = Math.ceil(
        perimeterInCentimeters / parseInt(eyelets)
      ); //ilosc oczek (obwod banera dzilimy przez odleglosc miedzy oczkami zeby wyliczyc liczbe oczek)
      price += priceEyelet * eyeletsCount; //cena za oczka
    }

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
            <Row className="row m-5 card-one">
              <Col md={6}>
                <img
                  src="/img/baner2.png"
                  className="img-fluid rounded-left-top"
                  alt="baner"
                />
                <h5 className="card-title mt-4">BANERY</h5>
                <p className="card-text-2">
                  <b>RODZAJE WYKOŃCZENIA </b> <br></br>
                  Oferujemy różnorodne wykończenia banerów, które 
                  pozwalają na ich łatwy montaż oraz zwiększają ich trwałość.
                  <br />
                  <br />
                  W zależności od Twoich potrzeb i miejsca, w którym baner
                  będzie eksponowany, możesz wybrać jedno z poniższych rozwiązań:
                
                <ol>
                  <li><b>Oczkowanie</b></li>
                  <p>Oczkowanie pozwala na szybki i wygodny montaż banera. 
                    Oferujemy trzy opcje rozmieszczenia oczek:
                    <ul>
                      <li>Co 25cm - dla większej stabilności i równomiernego rozłożenia ciężaru.</li>
                      <li>Co 50cm - standardowe rozwiązanie dla większości zastosowań.</li>
                      <li>Według życzenia klienta - możemy dostosować rozmieszczenie oczek do Twoich indywidualnych potrzeb.</li>
                    </ul>
                  </p>
                  <li><b>Tunel</b></li>
                  <p>
                  Tunel to opcja, która polega na stworzeniu przestrzeni na rurkę lub drążek od góry i dołu.
                  </p>
                  <li><b>Docinanie na ostro</b> z oczkami lub bez</li>
                  <p>
                  W tej opcji krawędzie banera są przycinane na ostro, co nadaje mu bardziej 
                  nowoczesny i elegancki wygląd. <br></br> Jest to doskonała opcja, gdy chcesz, aby Twój baner miał czyste, 
                  wyraziste krawędzie bez dodatkowego wykończenia. To rozwiązanie jest mniej trwałe od zawijania krawędzi.
                  </p>
                </ol>
                <p>
                <b>Dlaczego warto wybrać odpowiednie wykończenie?</b> <br></br> Wybór odpowiedniego wykończenia banera 
                zależy od jego przeznaczenia i miejsca montażu. Oferujemy elastyczność w dostosowywaniu rozwiązań do 
                Twoich potrzeb, co zapewnia wygodę i trwałość reklamy.
                <br></br><br></br>
                Dodatkowowo oferujemy laminowanie banerów, w celu zwiększenia ich żywotności i odporności na promieniowanie UV i warunki atmosferyczne. 
                </p>
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
                  <Formik
                    initialValues={{ width: 100, height: 100 }}
                    validationSchema={validationSchema}
                    onSubmit={(values, { setSubmitting }) => {
                      calculatePrice(values.width, values.height);
                      setSubmitting(false);
                    }}
                  >
                    {({ isSubmitting }) => (
                      <Form className="p-5">
                        {/* <label htmlFor="grams">Gramatura: </label>
                    <select
                      name="grams"
                      className="form-select"
                      aria-label=""
                      value={grams}
                      onChange={(e) => setGrams(e.target.value)}
                    >
                      <option value="160">
                        160 g/m<sup>2</sup>
                      </option>
                      <option value="400">
                        400g/m<sup>2</sup>
                      </option>
                    </select> */}
                        <br id="here" />

                        <label htmlFor="quantity">Ilość banerów: </label>
                        <input
                          type="number"
                          name="quantity"
                          min="1"
                          max="10000"
                          value={quantity}
                          className="w-100"
                          onChange={(e) => setQuantity(e.target.value)}
                        />
                        <br />
                        <br />

                        <label htmlFor="width">
                          Szerokość (w centymetrach):{" "}
                        </label>
                        <Field
                          type="number"
                          name="width"
                          min="50"
                          step="10"
                          max="130"
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
                          min="50"
                          step="10"
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

                        <label htmlFor="eyelets">Oczka: </label>
                        <select
                          name="eyelets"
                          className="form-select"
                          aria-label=""
                          value={eyelets}
                          onChange={(e) => setEyelets(e.target.value)}
                        >
                          <option value="0">Nie</option>
                          <option value="50">Tak, co 50cm</option>
                          <option value="25">Tak, co 25cm</option>
                          <option value="100">Tak, co 1m</option>
                        </select>
                        <br />

                        <label htmlFor="welding">Zgrzane brzegi:&nbsp;</label>
                        <div
                          onChange={(e) => setWelding(e.target.value === "Tak")}
                        >
                          <input
                            type="radio"
                            name="welding"
                            value="Tak"
                            id="weldingYes"
                            checked={welding === true}
                          />
                          <label htmlFor="weldingYes">Tak</label>
                          &nbsp;&nbsp;
                          <input
                            type="radio"
                            name="welding"
                            value="Nie"
                            id="weldingNo"
                            checked={welding === false}
                          />
                          <label htmlFor="weldingNo">Nie</label>
                        </div>
                        <br />

                        <label htmlFor="project">
                          Projekt graficzny:&nbsp;
                        </label>
                        <div
                          onChange={(e) => setProject(e.target.value === "Tak")}
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
                                <span style={{ color: "red" }}>{discount}</span>
                              )}
                            </p>
                            {quantity > 1 && (
                              <p id="pricePerItem">
                                Cena za jedną sztukę: {pricePerItem.toFixed(2)}{" "}
                                zł
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
                      </Form>
                    )}
                  </Formik>
                  <p className="baners-list">
                    Proszę mieć na uwadze, że przedstawiona cena jest szacunkowa
                    i podlega drobnym zmianom. W celu uzyskania dokładnej oferty
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
        </div>
      ) : (
        <>
          <Container className="price-list-mobile">
            <Row>
              <Col className="price-list-col-mobile">
                <img
                  src="/img/baner2.png"
                  className="img-fluid rounded"
                  alt="baner"
                />
                <h3 className="header-center-big mb-5">BANERY</h3>
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
                  <b>RODZAJE WYKOŃCZENIA </b> <br></br>
                  Oferujemy różnorodne wykończenia banerów, które 
                  pozwalają na ich łatwy montaż oraz zwiększają ich trwałość.
                  <br />
                  <br />
                  W zależności od Twoich potrzeb i miejsca, w którym baner
                  będzie eksponowany, możesz wybrać jedno z poniższych rozwiązań:
                
                <ol>
                  <li><b>Oczkowanie</b></li>
                  <p>Oczkowanie pozwala na szybki i wygodny montaż banera. 
                    Oferujemy trzy opcje rozmieszczenia oczek:
                    <ul>
                      <li>Co 25cm - dla większej stabilności i równomiernego rozłożenia ciężaru.</li>
                      <li>Co 50cm - standardowe rozwiązanie dla większości zastosowań.</li>
                      <li>Według życzenia klienta - możemy dostosować rozmieszczenie oczek do Twoich indywidualnych potrzeb.</li>
                    </ul>
                  </p>
                  <li><b>Tunel</b></li>
                  <p>
                  Tunel to opcja, która polega na stworzeniu przestrzeni na rurkę lub drążek od góry i dołu.
                  </p>
                  <li><b>Docinanie na ostro</b> z oczkami lub bez</li>
                  <p>
                  W tej opcji krawędzie banera są przycinane na ostro, co nadaje mu bardziej 
                  nowoczesny i elegancki wygląd. <br></br> Jest to doskonała opcja, gdy chcesz, aby Twój baner miał czyste, 
                  wyraziste krawędzie bez dodatkowego wykończenia. To rozwiązanie jest mniej trwałe od zawijania krawędzi.
                  </p>
                </ol>
                <p>
                <b>Dlaczego warto wybrać odpowiednie wykończenie?</b> <br></br> Wybór odpowiedniego wykończenia banera 
                zależy od jego przeznaczenia i miejsca montażu. Oferujemy elastyczność w dostosowywaniu rozwiązań do 
                Twoich potrzeb, co zapewnia wygodę i trwałość reklamy.
                <br></br><br></br>
                Dodatkowowo oferujemy laminowanie banerów, w celu zwiększenia ich żywotności i odporności na promieniowanie UV i warunki atmosferyczne. 
                </p>
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
                <div className="card-body flex-column justify-content-between text-center h-100">
                  <h5 className="card-title" id="here">
                    Sprawdź cenę
                  </h5>
                  <p className="card-text-3">
                    W przypadku większych zamówień cena jest niższa!
                  </p>
                  <Formik
                    initialValues={{ width: 100, height: 100 }}
                    validationSchema={validationSchema}
                    onSubmit={(values, { setSubmitting }) => {
                      calculatePrice(values.width, values.height);
                      setSubmitting(false);
                    }}
                  >
                    {({ isSubmitting }) => (
                      <Form className="p-5">
                        {/* <label htmlFor="grams">Gramatura: </label>
                    <select
                      name="grams"
                      className="form-select"
                      aria-label=""
                      value={grams}
                      onChange={(e) => setGrams(e.target.value)}
                    >
                      <option value="160">
                        160 g/m<sup>2</sup>
                      </option>
                      <option value="400">
                        400g/m<sup>2</sup>
                      </option>
                    </select> */}
                        <br id="here" />

                        <label htmlFor="quantity">Ilość banerów: </label>
                        <input
                          type="number"
                          name="quantity"
                          min="1"
                          max="10000"
                          value={quantity}
                          className="w-100"
                          onChange={(e) => setQuantity(e.target.value)}
                        />
                        <br />
                        <br />

                        <label htmlFor="width">
                          Szerokość (w centymetrach):{" "}
                        </label>
                        <Field
                          type="number"
                          name="width"
                          min="50"
                          step="10"
                          max="130"
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
                          min="50"
                          step="10"
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

                        <label htmlFor="eyelets">Oczka: </label>
                        <select
                          name="eyelets"
                          className="form-select"
                          aria-label=""
                          value={eyelets}
                          onChange={(e) => setEyelets(e.target.value)}
                        >
                          <option value="0">Nie</option>
                          <option value="50">Tak, co 50cm</option>
                          <option value="25">Tak, co 25cm</option>
                          <option value="100">Tak, co 1m</option>
                        </select>
                        <br />

                        <label htmlFor="welding">Zgrzane brzegi:&nbsp;</label>
                        <div
                          onChange={(e) => setWelding(e.target.value === "Tak")}
                        >
                          <input
                            type="radio"
                            name="welding"
                            value="Tak"
                            id="weldingYes"
                            checked={welding === true}
                          />
                          <label htmlFor="weldingYes">Tak</label>
                          &nbsp;&nbsp;
                          <input
                            type="radio"
                            name="welding"
                            value="Nie"
                            id="weldingNo"
                            checked={welding === false}
                          />
                          <label htmlFor="weldingNo">Nie</label>
                        </div>
                        <br />

                        <label htmlFor="project">
                          Projekt graficzny:&nbsp;
                        </label>
                        <div
                          onChange={(e) => setProject(e.target.value === "Tak")}
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
                                <span style={{ color: "red" }}>{discount}</span>
                              )}
                            </p>
                            {quantity > 1 && (
                              <p id="pricePerItem">
                                Cena za jedną sztukę: {pricePerItem.toFixed(2)}{" "}
                                zł
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
                      </Form>
                    )}
                  </Formik>
                  <p className="baners-list">
                    Proszę mieć na uwadze, że przedstawiona cena jest szacunkowa
                    i podlega drobnym zmianom. W celu uzyskania dokładnej oferty
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
      )}
    </>
  );
};
export default Baners;

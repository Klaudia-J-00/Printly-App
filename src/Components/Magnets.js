import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleArrowDown } from "@fortawesome/free-solid-svg-icons";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

const Magnets = () => {
  const [quantity, setQuantity] = useState(1);
  const [lamination, setLamination] = useState(false);
  const [project, setProject] = useState(false);
  const [discount, setDiscount] = useState("");
  const [total, setTotal] = useState(0);
  const [pricePerItem, setPricePerItem] = useState(0);
  const [isCalculated, setIsCalculated] = useState(false);
  const [withProject, setWithProject] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth > 990);

  const validationSchema = Yup.object().shape({
    width: Yup.number()
      .min(5, "Wartość nie może być mniejsza niż 5cm")
      .max(5000, "Wartość nie może przekroczyć 5000 cm")
      .required("Wymagane"),
    height: Yup.number()
      .min(5, "Wartość nie może być mniejsza niż 5cm")
      .max(61, "Wartość nie może przekroczyć 61cm")
      .required("Wymagane"),
  });


  const calculatePrice = (width, height) => {
    const discount_5 = 0.05; // 10% rabatu od 5 sztuk
    const discount_10 = 0.1; // 20% rabatu od 10 sztuk
    let priceForSquareMeter = 0; //cena za metr kwadratowy naklejki
    const projectPrice = 100;
    const widthM = width / 100;
    const heightM = height / 100;
    const area = widthM * heightM;
    let priceMagnetSquareMeter = 50; //cena za metr kwadratowy magnesu

    if (area < 0.002) {
      priceForSquareMeter = 3000;
    } else if (area < 0.01) {
      priceForSquareMeter = 1140;
    } else if (area < 0.2) {
      priceForSquareMeter = 1000;
    } else if (area < 0.1) {
      priceForSquareMeter = 300;
    } else if (area < 0.5) {
      priceForSquareMeter = 200;
    } else if (area < 1) {
      priceForSquareMeter = 190;
    } else if (area < 2) {
      priceForSquareMeter = 130;
    } else if (area < 3) {
      priceForSquareMeter = 120;
    }

    let price = area * priceForSquareMeter + area * priceMagnetSquareMeter; //cena za metr kwadratowy naklejki i magnesu

    // Dodatkowe koszty (tusz, prąd, praca)
    const priceInk = 2 * area; //cena za tusz -> 2zl za metr kwadratowy
    const priceElectricity = 0.5 * area; //cena za prad -> 50 gr za metr kwadratowy
    const priceWork = 5 * area; //cena za prace -> 5zl za metr kwadratowy
    price += priceInk + priceElectricity + priceWork; //cena za tusz, prad i prace wliczona do ceny koncowej

    if (lamination) {
      price += area * 20; //cena za baner z laminacja -> 10 gr wiecej za metr kwadratowy laminacji
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
                  src="/img/komura.png"
                  className="img-fluid rounded-left-top"
                  alt="..."
                />
                <h5 className="card-title mt-4">MAGNESY</h5>
                <p className="card-text-2">
                  <b>Czym są magnesy reklamowe?</b>
                  <br />
                  Magnesy reklamowe wykorzystywane są głównie na karoseriach
                  pojazdów, są łatwe do zamocowania i zdjęcia, co pozwala na
                  elastyczne korzystanie z tego nośnika reklamowego. Podstawowym
                  składnikiem magnesów reklamowych jest trwały i elastyczny
                  materiał magnetyczny, który umożliwia pewne przyczepienie do
                  metalowej powierzchni pojazdu.
                  <br />
                  <br />
                  <b>
                    Dlaczego warto skorzystać z naszych magnesów reklamowych do
                    samochodów?
                  </b>
                </p>
                <ul className="baners-list">
                  <li>
                    <b>Wysoka jakość druku:</b>
                    <br />
                    Nasza drukarnia stosuje najnowocześniejsze technologie, co
                    gwarantuje doskonałą jakość wydruku na magnesach. Oferujemy
                    intensywne kolory, precyzyjne detale i wysoką rozdzielczość,
                    dzięki czemu Twoja reklama przyciąga uwagę potencjalnych
                    klientów.
                  </li>
                  <li>
                    <b>Trwała konstrukcja:</b>
                    <br />
                    Nasze magnesy reklamowe charakteryzują się solidną
                    konstrukcją, odpornością na warunki atmosferyczne i
                    mechaniczne. Materiały, z których są wykonane, pozwalają na
                    wielokrotne wykorzystanie, co sprawia, że są idealne do
                    kampanii promocyjnych na samochodach.
                  </li>
                </ul>
                <p>
                  <b>Zastosowania magnesów reklamowych do samochodów:</b>
                  <ul className="baners-list">
                    <li>Reklama mobilna na pojazdach firmowych</li>
                    <li>Podczas promocyjnych wydarzeń i eventów</li>
                    <li>
                      Do oznaczania pojazdów uczestniczących w konwojach i
                      zlotach
                    </li>
                    <li>Jako element identyfikacyjny</li>
                    <li>Sklepy i punkty sprzedaży z dostawą do klienta</li>
                  </ul>
                  Zapraszamy do zamówienia naszych magnesów reklamowych, które
                  stanowią mobilne i efektywne narzędzie reklamowe, doskonale
                  sprawdzające się na karoserii samochodów.
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
                    initialValues={{ width: 50, height: 50 }}
                    validationSchema={validationSchema}
                    onSubmit={(values, { setSubmitting }) => {
                      calculatePrice(values.width, values.height);
                      setSubmitting(false);
                    }}
                  >
                    {({ isSubmitting }) => (
                      <Form className="p-5">
                        <br id="here" />
                        <label for="quantity">Ilość magnesów: </label>
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
                        <label htmlFor="width">
                          Szerokość (w centymetrach):{" "}
                        </label>
                        <Field
                          type="number"
                          name="width"
                          min="5"
                          step="1"
                          max="5000"
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
                          min="5"
                          step="1"
                          max="61"
                          className="w-100"
                        />
                        <ErrorMessage
                          name="height"
                          component="div"
                          className="error-message"
                        />
                        <br />
                        <br />

                        <label htmlFor="lamination">Laminacja:&nbsp;</label>
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
                        <p className="baners-list pt-4">
                          Proszę mieć na uwadze, że przedstawiona cena jest
                          szacunkowa i podlega drobnym zmianom. W celu uzyskania
                          dokładnej oferty prosimy o{" "}
                          <Link to="/contact" className="link">
                            kontakt
                          </Link>
                          .
                        </p>
                      </Form>
                    )}
                  </Formik>
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
                  src="/img/komura.png"
                  className="img-fluid rounded"
                  alt="..."
                />
                <h3 className="header-center-big mb-5">MAGNESY</h3>
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
                  <b>Czym są magnesy reklamowe?</b>
                  <br />
                  Magnesy reklamowe wykorzystywane są głównie na karoseriach
                  pojazdów, są łatwe do zamocowania i zdjęcia, co pozwala na
                  elastyczne korzystanie z tego nośnika reklamowego. Podstawowym
                  składnikiem magnesów reklamowych jest trwały i elastyczny
                  materiał magnetyczny, który umożliwia pewne przyczepienie do
                  metalowej powierzchni pojazdu.
                  <br />
                  <br />
                  <b>
                    Dlaczego warto skorzystać z naszych magnesów reklamowych do
                    samochodów?
                  </b>
                </p>
                <ul className="baners-list">
                  <li>
                    <b>Wysoka jakość druku:</b>
                    <br />
                    Nasza drukarnia stosuje najnowocześniejsze technologie, co
                    gwarantuje doskonałą jakość wydruku na magnesach. Oferujemy
                    intensywne kolory, precyzyjne detale i wysoką rozdzielczość,
                    dzięki czemu Twoja reklama przyciąga uwagę potencjalnych
                    klientów.
                  </li>
                  <li>
                    <b>Trwała konstrukcja:</b>
                    <br />
                    Nasze magnesy reklamowe charakteryzują się solidną
                    konstrukcją, odpornością na warunki atmosferyczne i
                    mechaniczne. Materiały, z których są wykonane, pozwalają na
                    wielokrotne wykorzystanie, co sprawia, że są idealne do
                    kampanii promocyjnych na samochodach.
                  </li>
                </ul>
                <p>
                  <b>Zastosowania magnesów reklamowych do samochodów:</b>
                  <ul className="baners-list">
                    <li>Reklama mobilna na pojazdach firmowych</li>
                    <li>Podczas promocyjnych wydarzeń i eventów</li>
                    <li>
                      Do oznaczania pojazdów uczestniczących w konwojach i
                      zlotach
                    </li>
                    <li>Jako element identyfikacyjny</li>
                    <li>Sklepy i punkty sprzedaży z dostawą do klienta</li>
                  </ul>
                  Zapraszamy do zamówienia naszych magnesów reklamowych, które
                  stanowią mobilne i efektywne narzędzie reklamowe, doskonale
                  sprawdzające się na karoserii samochodów.
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
                        <br id="here" />
                        <label for="quantity">Ilość magnesów: </label>
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
                        <label htmlFor="width">
                          Szerokość (w centymetrach):{" "}
                        </label>
                        <Field
                          type="number"
                          name="width"
                          min="5"
                          step="1"
                          max="5000"
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
                          min="5"
                          step="1"
                          max="61"
                          className="w-100"
                        />
                        <ErrorMessage
                          name="height"
                          component="div"
                          className="error-message"
                        />
                        <br />
                        <br />

                        <label htmlFor="lamination">Laminacja:&nbsp;</label>
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
                        <p className="baners-list pt-4">
                          Proszę mieć na uwadze, że przedstawiona cena jest
                          szacunkowa i podlega drobnym zmianom. W celu uzyskania
                          dokładnej oferty prosimy o{" "}
                          <Link to="/contact" className="link">
                            kontakt
                          </Link>
                          .
                        </p>
                      </Form>
                    )}
                  </Formik>
                </div>
              </Col>
            </Row>
          </Container>
        </>
      )}{" "}
    </>
  );
};

export default Magnets;

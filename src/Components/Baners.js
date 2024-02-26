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
      .max(140, "Wartość nie może przekroczyć 140cm")
      .required("Wymagane"),
    height: Yup.number()
      .min(50, "Wartość nie może być mniejsza niż 50cm")
      .max(2000, "Wartość nie może przekroczyć 2000cm")
      .required("Wymagane"),
  });

  const calculatePrice = (width, height) => {
    //Stale
    const price_160g = 42; // Cena za 1m^2 przy gramaturze 160g (krotsza)
    //const price_400g = 12; // Cena za 1m^2 przy gramaturze 400g (dluzsza)
    const discount_5 = 0.05; // Rabat 5% od ceny końcowej powyżej 5 banerów
    const discount_10 = 0.1; // Rabat 10% od ceny końcowej powyżej 10 banerów
    const priceEyelet = 0.6; // Cena za 1 oczko 0.50gr
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

    if (welding) {
      price += perimeter * 7; //cena za zgrzewanie brzegow -> 7 zł za metr zgrzewu
    }

    const priceInk = 2 * area; //cena za tusz -> 2zl za metr kwadratowy
    const priceElectricity = 0.5 * area; //cena za prad -> 50 gr za metr kwadratowy
    const priceWork = 5 * area; //cena za prace -> 5zl za metr kwadratowy
    price += priceInk + priceElectricity + priceWork; //cena za tusz, prad i prace wliczona do ceny koncowej

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
                  Nasze banery są dostępne w różnych rozmiarach i gramaturach,
                  dzięki czemu możesz wybrać dokładnie to, co najlepiej pasuje
                  do Twoich potrzeb. Przeczytaj opis zamieszczony poniżej by
                  poznać szczegóły na temat wykorzystywanych przez nas folii,
                  czym jest gramatura, oraz dlaczego ważne jest zgrzewanie
                  krawędzi.
                  <br />
                  <br />
                  Banery <b>frontlight</b> są specjalnie zaprojektowane do
                  użytku wewnątrz i na zewnątrz, dzięki czemu są idealnym
                  rozwiązaniem zarówno na wystawy, targi, jak i do promocji
                  reklam w przestrzeniach publicznych. Oto kilka zalet naszych
                  folii frontlight:
                </p>
                <ul className="baners-list">
                  <li>Wysoka jakość druku</li>
                  <li>Wysoka trwałość</li>
                  <li>
                    Folie frontlit charakteryzują się znakomitą
                    transparentnością, co pozwala na skuteczne wyświetlanie
                    grafiki zarówno w dzień, jak i w nocy.{" "}
                  </li>
                  <li>
                    Dostępne w różnych szerokościach: co pozwala na dostosowanie
                    ich do indywidualnych potrzeb klienta
                  </li>
                </ul>
                <p className="card-text-2">
                  <b>Gramatura</b> to parametr określający masę papieru lub
                  materiału na metr kwadratowy. Im większa gramatura, tym
                  grubszy i bardziej wytrzymały jest baner. Oto kilka
                  przykładowych banerów dostępnych w naszej ofercie:
                </p>
                <ul className="baners-list">
                  <li>
                    Banery o średniej gramaturze (160 g/m<sup>2</sup>)
                  </li>
                  <ul>
                    <li>
                      Doskonałe na średnioterminowe wydarzenia i promocje, jak
                      targi, wystawy czy prezentacje.
                    </li>
                    <li>
                      Zapewniają lepszą trwałość i wytrzymałość niż banery o
                      niskiej gramaturze.
                    </li>
                  </ul>
                  <li>
                    Banery o wysokiej gramaturze (400g/m<sup>2</sup>)
                  </li>
                  <ul>
                    <li>Wytrzymałe i odporne na warunki atmosferyczne.</li>
                    <li>
                      Stworzone z myślą o długoterminowych zastosowaniach,
                      takich jak reklama w sklepach czy na budynkach.
                    </li>
                  </ul>
                </ul>
                <p className="card-text-2">
                  Niezależnie od wybranej gramatury, nasze banery są drukowane
                  przy użyciu najnowocześniejszych technologii, które zapewniają
                  wyraziste kolory, ostre detale i trwałość na długie lata.
                  Ponadto, oferujemy różne opcje wykończenia, takie jak oczka do
                  zawieszania, aby ułatwić ich montaż.
                  <br />
                </p>
                <p className="card-text-2">
                  Zalecane jest również <b>zgrzewanie</b> banerów.
                  <br />
                  Zgrzewanie brzegów banera jest procesem używanym w produkcji
                  banerów i materiałów reklamowych, aby zabezpieczyć i wzmocnić
                  ich krawędzie. Podczas tego procesu brzegi banera są łączone
                  poprzez zastosowanie gorącego zgrzewu, który rozpuszcza
                  materiał na brzegach, tworząc trwałe połączenie. Zgrzewanie
                  brzegów pomaga zapobiec rozwarstwianiu się materiału,
                  zapewniając mu większą wytrzymałość, szczególnie w warunkach
                  atmosferycznych. Ważnym aspektem zgrzewania brzegów banera
                  jest szerokość zgrzewu. Szerokość ta zawiera się w
                  ostatecznych wymiarach banera.{" "}
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
                          max="140"
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
                  Nasze banery są dostępne w różnych rozmiarach i gramaturach,
                  dzięki czemu możesz wybrać dokładnie to, co najlepiej pasuje
                  do Twoich potrzeb. Przeczytaj opis zamieszczony poniżej by
                  poznać szczegóły na temat wykorzystywanych przez nas folii,
                  czym jest gramatura, oraz dlaczego ważne jest zgrzewanie
                  krawędzi.
                  <br />
                  <br />
                  Banery <b>frontlight</b> są specjalnie zaprojektowane do
                  użytku wewnątrz i na zewnątrz, dzięki czemu są idealnym
                  rozwiązaniem zarówno na wystawy, targi, jak i do promocji
                  reklam w przestrzeniach publicznych. Oto kilka zalet naszych
                  folii frontlight:
                </p>
                <ul className="baners-list">
                  <li>Wysoka jakość druku</li>
                  <li>Wysoka trwałość</li>
                  <li>
                    Folie frontlit charakteryzują się znakomitą
                    transparentnością, co pozwala na skuteczne wyświetlanie
                    grafiki zarówno w dzień, jak i w nocy.{" "}
                  </li>
                  <li>
                    Dostępne w różnych szerokościach: co pozwala na dostosowanie
                    ich do indywidualnych potrzeb klienta
                  </li>
                </ul>
                <p className="card-text-2">
                  <b>Gramatura</b> to parametr określający masę papieru lub
                  materiału na metr kwadratowy. Im większa gramatura, tym
                  grubszy i bardziej wytrzymały jest baner. Oto kilka
                  przykładowych banerów dostępnych w naszej ofercie:
                </p>
                <ul className="baners-list">
                  <li>
                    Banery o średniej gramaturze (160 g/m<sup>2</sup>)
                  </li>
                  <ul>
                    <li>
                      Doskonałe na średnioterminowe wydarzenia i promocje, jak
                      targi, wystawy czy prezentacje.
                    </li>
                    <li>
                      Zapewniają lepszą trwałość i wytrzymałość niż banery o
                      niskiej gramaturze.
                    </li>
                  </ul>
                  <li>
                    Banery o wysokiej gramaturze (400g/m<sup>2</sup>)
                  </li>
                  <ul>
                    <li>Wytrzymałe i odporne na warunki atmosferyczne.</li>
                    <li>
                      Stworzone z myślą o długoterminowych zastosowaniach,
                      takich jak reklama w sklepach czy na budynkach.
                    </li>
                  </ul>
                </ul>
                <p className="card-text-2">
                  Niezależnie od wybranej gramatury, nasze banery są drukowane
                  przy użyciu najnowocześniejszych technologii, które zapewniają
                  wyraziste kolory, ostre detale i trwałość na długie lata.
                  Ponadto, oferujemy różne opcje wykończenia, takie jak oczka do
                  zawieszania, aby ułatwić ich montaż.
                  <br />
                </p>
                <p className="card-text-2">
                  Zalecane jest również <b>zgrzewanie</b> banerów.
                  <br />
                  Zgrzewanie brzegów banera jest procesem używanym w produkcji
                  banerów i materiałów reklamowych, aby zabezpieczyć i wzmocnić
                  ich krawędzie. Podczas tego procesu brzegi banera są łączone
                  poprzez zastosowanie gorącego zgrzewu, który rozpuszcza
                  materiał na brzegach, tworząc trwałe połączenie. Zgrzewanie
                  brzegów pomaga zapobiec rozwarstwianiu się materiału,
                  zapewniając mu większą wytrzymałość, szczególnie w warunkach
                  atmosferycznych. Ważnym aspektem zgrzewania brzegów banera
                  jest szerokość zgrzewu. Szerokość ta zawiera się w
                  ostatecznych wymiarach banera.{" "}
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
                          max="140"
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

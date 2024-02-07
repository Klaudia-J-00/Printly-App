import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import React, { useState, useEffect, useRef } from "react";

const Baners = () => {
  const [grams, setGrams] = useState("160");
  const [quantity, setQuantity] = useState(1);
  const [width, setWidth] = useState("140");
  const [height, setHeight] = useState(100);
  const [lamination, setLamination] = useState(false);
  const [eyelets, setEyelets] = useState("0");
  const [welding, setWelding] = useState(false);

  const priceElement = useRef(null);
  const priceElement2 = useRef(null);

  const calculatePrice = () => {};

  useEffect(() => {
    calculatePrice();
  }, [
    grams,
    quantity,
    width,
    height,
    lamination,
    eyelets,
    welding,
  ]);

  useEffect(() => {
    if (quantity > 1) {
      priceElement2.current.style.display = "block";
    } else {
      priceElement2.current.style.display = "none";
    }
  }, [quantity]);

  return (
    <div className="about">
      <Container className="card-container">
        <Row className="row m-5 card-one">
          <Col md={6}>
            <img
              src="/img/baner2.png"
              class="img-fluid rounded-start"
              alt="baner"
            />
            <h5 className="card-title">BANERY</h5>
            <span className="scroll-down">
              <b>Zjedź na dół by skorzystać z kalkulatora cen.</b>
            </span>
            <p className="card-text-2">
              Nasze banery są dostępne w różnych rozmiarach i gramaturach,
              dzięki czemu możesz wybrać dokładnie to, co najlepiej pasuje do
              Twoich potrzeb. Przeczytaj opis zamieszczony poniżej by poznać
              szczegóły na temat wykorzystywanych przez nas folii, czym jest
              gramatura, oraz dlaczego ważne jest zgrzewanie krawędzi.
              <br />
              <br />
              Banery <b>frontlight</b> są specjalnie zaprojektowane do użytku
              wewnątrz i na zewnątrz, dzięki czemu są idealnym rozwiązaniem
              zarówno na wystawy, targi, jak i do promocji reklam w
              przestrzeniach publicznych. Oto kilka zalet naszych folii
              frontlight:
            </p>
            <ul className="baners-list">
              <li>Wysoka jakość druku</li>
              <li>Wysoka trwałość</li>
              <li>
                Folie frontlit charakteryzują się znakomitą transparentnością,
                co pozwala na skuteczne wyświetlanie grafiki zarówno w dzień,
                jak i w nocy.{" "}
              </li>
              <li>
                Dostępne w różnych szerokościach: co pozwala na dostosowanie ich
                do indywidualnych potrzeb klienta
              </li>
            </ul>
            <p className="card-text-2">
              <b>Gramatura</b> to parametr określający masę papieru lub
              materiału na metr kwadratowy. Im większa gramatura, tym grubszy i
              bardziej wytrzymały jest baner. Oto kilka przykładowych banerów
              dostępnych w naszej ofercie:
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
                  Zapewniają lepszą trwałość i wytrzymałość niż banery o niskiej
                  gramaturze.
                </li>
              </ul>
              <li>
                Banery o wysokiej gramaturze (400g/m<sup>2</sup>)
              </li>
              <ul>
                <li>Wytrzymałe i odporne na warunki atmosferyczne.</li>
                <li>
                  Stworzone z myślą o długoterminowych zastosowaniach, takich
                  jak reklama w sklepach czy na budynkach.
                </li>
              </ul>
            </ul>
            <p className="card-text-2">
              Niezależnie od wybranej gramatury, nasze banery są drukowane przy
              użyciu najnowocześniejszych technologii, które zapewniają
              wyraziste kolory, ostre detale i trwałość na długie lata. Ponadto,
              oferujemy różne opcje wykończenia, takie jak oczka do zawieszania,
              aby ułatwić ich montaż.
              <br />
            </p>
            <p className="card-text-2">
              Zalecane jest również <b>zgrzewanie</b> banerów.
              <br />
              Zgrzewanie brzegów banera jest procesem używanym w produkcji
              banerów i materiałów reklamowych, aby zabezpieczyć i wzmocnić ich
              krawędzie. Podczas tego procesu brzegi banera są łączone poprzez
              zastosowanie gorącego zgrzewu, który rozpuszcza materiał na
              brzegach, tworząc trwałe połączenie. Zgrzewanie brzegów pomaga
              zapobiec rozwarstwianiu się materiału, zapewniając mu większą
              wytrzymałość, szczególnie w warunkach atmosferycznych. Ważnym
              aspektem zgrzewania brzegów banera jest szerokość zgrzewu.
              Szerokość ta zawiera się w ostatecznych wymiarach banera.{" "}
            </p>

            <p className="card-text-2">
              <b>
                W przypadku pytań lub potrzeby indywidualnej pomocy prosimy o{" "}
                <Link to="/contact" class="link">
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
                <label htmlFor="grams">Gramatura: </label>
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
                </select>
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

                <label htmlFor="width">Wysokość (w centymetrach): </label>
                <select
                  name="width"
                  className="form-select"
                  aria-label=""
                  value={width}
                  onChange={(e) => setWidth(e.target.value)}
                >
                  <option value="140">140</option>
                  <option value="200">200</option>
                </select>
                <br />

                <label htmlFor="height">Szerokość (w centymetrach): </label>
                <input
                  type="number"
                  name="height"
                  min="100"
                  step="10"
                  max="1000"
                  value={height}
                  className="w-100"
                  onChange={(e) => setHeight(e.target.value)}
                />
                <br />
                <br />

                <label htmlFor="lamination">Laminacja: </label>
                <input
                  type="checkbox"
                  name="lamination"
                  value="lamination"
                  id="lamination"
                  checked={lamination}
                  onChange={(e) => setLamination(e.target.checked)}
                />
                <span id="laminationStatus">{lamination ? "Tak" : "Nie"}</span>
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

                <label htmlFor="welding">Zgrzane brzegi: </label>
                <input
                  type="checkbox"
                  name="welding"
                  value="welding"
                  id="welding"
                  checked={welding}
                  onChange={(e) => setWelding(e.target.checked)}
                />
                <span id="weldingStatus">{welding ? "Tak" : "Nie"}</span>
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

                <span id="price">
                  Cena: Wprowadź dane i kliknij{" "}
                  <a href="#here" className="link">
                    oblicz
                  </a>{" "}
                  by poznać cenę
                </span>
                <span id="price2">Cena za jedną sztukę: </span>
              </form>
              <p class="baners-list">
                Proszę mieć na uwadze, że przedstawiona cena jest szacunkowa i
                podlega drobnym zmianom. W celu uzyskania dokładnej oferty
                prosimy o{" "}
                <a href="/contact.html" class="link">
                  kontakt
                </a>
                .
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
export default Baners;

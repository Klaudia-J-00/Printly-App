import { faDollarSign } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const PriceList = () => {
    return (
        <Container className="card-container p-5">

        <Row className="price-list-row reveal">
          <h3 className="header-center-big mb-5">CENNIK</h3>
          <Col lg={4} className="price-list-col p-3">
            <h3 className="header-center">BANERY</h3>
            <p>
               <b>Na cenę banera składa się: </b>
               <ul>
                <li>Gramatura</li>
                <li>Wymiary</li>
                <li>Laminacja</li>
                <li>Zagęszczenie oczek</li>
                <li>Wykończenie</li>
                <li>Projekt</li>
                <li><b>W przypadku zamówienia większej <br/> ilości banerów niż 5, stosowany jest<br/> rabat -10%. Ilość powyżej 10 banerów skutkuje rabatem -20%.</b></li>
               </ul>
            </p>
          </Col>
          <Col lg={4} className="price-list-col p-3 px-5">
            <h3 class="header-center-white">
                <FontAwesomeIcon icon={faDollarSign} />
            </h3>
            <p className="white-list"><b>Przykładowa cena:</b><br/>
            Za baner o gramaturze 460g/m<sup>2</sup>, wymiarach 100x200cm, z laminacją, oczkami rozmieszczonymi co 50 cm, zgrzanymi brzegami bez potrzeby tworzenia projektu wynosi <b>110zł</b>
          <br/><br/>
          W przypadku zamówienia 6 sztuk takiego samego baneru, cena za sztukę zmniejszy się do: <b>163,80zł</b>
          </p>
            </p>
          <Col lg={4} className="p-3 middle-list">
            W celu obliczenia ceny banera, z wybranymi przez Ciebie parametrami skorzystaj z kalkulatora:
            <button className="mt-auto"><Link to="/baners">Kalkulator</Link></button>
          </Col>
        </Row>

        <Row className="price-list-row reveal2">
          <Col lg={4} className="price-list-col p-3">
            <h3 className="header-center">PLAKATY</h3>
            <p>
               <b>Na cenę plakatu składa się: </b>
               <ul>
                <li>Gramatura</li>
                <li>Wymiary</li>
                <li>Laminacja</li>
                <li>Rodzaj powierzchni</li>
                <li>Projekt</li>
                <li><b>W przypadku zamówienia większej <br/> ilości plakatów niż 5 stosowany <br/>jest rabat -10%. Ilość powyżej 10<br/> plakatów skutkuje rabatem -20%.</b></li>
               </ul>
            </p>
          </Col>
          <Col lg={4} className="price-list-col p-3 px-5">
            <h3 className="header-center-blue"><FontAwesomeIcon icon={faDollarSign} /></h3>
            <p className="white-list"><b>Przykładowa cena:</b><br/>
            Za plakat o gramaturze 150g/m<sup>2</sup>, wymiarach 100x200cm, satynowy, bez potrzeby tworzenia projektu wynosi <b>9zł</b>
          <br/><br/>
          W przypadku zamówienia 101 sztuk takiego samego baneru, cena za sztukę zmniejszy się do: <b>8,10zł</b>
            </p>
            </Col>
          <Col lg={4} className="p-3 middle-list">
            W celu obliczenia ceny plakatu, z wybranymi przez Ciebie parametrami skorzystaj z kalkulatora:
            <button className="mt-auto blue-button"><Link to="/posters">Kalkulator</Link></button>
          </Col>
        </Row>

        <Row className="price-list-row reveal">
          <Col lg={4} className="price-list-col p-3">
            <h3 className="header-center">NAKLEJKI</h3>
            <p>
               <b>Na cenę naklejek składają się: </b>
               <ul>
                <li>Wymiary</li>
                <li>Rodzaj folii</li>
                <li>Nadruk</li>
                <li>Laminacja</li>
                <li>Wycinanie kształtu</li>
                <li>Wycinanie arkuszu</li>
                <li>Projekt</li>
                <li><b>W przypadku zamówienia większej <br/> ilości naklejek niż 100 stosowany <br/>jest rabat -10%. Ilość powyżej 1000<br/> naklejek skutkuje rabatem -20%.</b></li>
               </ul>
            </p>
          </Col>
          <Col lg={4} className="price-list-col p-3 px-5">
            <h3 className="header-center-white"><i class="fa-solid fa-dollar-sign"></i></h3>
            <p className="white-list"><b>Przykładowa cena:</b><br>
            Za naklejkę nadrukowaną na białej folii monomerycznej o wymiarach 4x4cm, wycinaniem prostego kształtu zapłacisz <b>0.22zł</b>
          <br/><br/>
          W przypadku zamówienia 101 sztuk takiej samej naklejki, cena zmniejszy się do: <b>0.19zł</b>. Jeżeli będziesz chcieć by naklejki zostały wycięte na pojedyncze arkusze, cena ta w przypadku 101 sztuk wyniesie: <b>0.52zł</b>
          </p>
            </p>
          </Col>
          <Col lg={4} class="col-lg-4 p-3 middle-list">
            W celu obliczenia ceny naklejek, z wybranymi przez Ciebie parametrami skorzystaj z kalkulatora:
            <button class="mt-auto"><a href="services/stickers.html">Kalkulator</a></button>
          </Col>
        </div>

        <div class="row price-list-row reveal">
          <div class="col-lg-4 price-list-col p-3">
            <h3 class="header-center">POTYKACZE</h3>
            <p>
               <b>Na cenę potykacza składają się: </b>
               <ul>
                <li>Wymiary</li>
                <li>Rama potykacza</li>
                <li>Projekt</li>
                <li><b>W przypadku zamówienia większej <br> ilości potykaczy niż 5 stosowany <br>jest rabat -10%. Ilość powyżej 10<br> potykaczy skutkuje rabatem -20%.</b></li>
               </ul>
            </p>
          </div>
          <div class="col-lg-4 price-list-col p-3 px-5">
            <h3 class="header-center-blue"><i class="fa-solid fa-dollar-sign"></i></h3>
            <p class="white-list"><b>Przykładowa cena:</b><br>
            Za potykacz ze srebrną ramą o wymiarach A2(42x59.4cm) z tą samą grafiką z obu stron zapłacisz <b>44.49zł</b>
          <br><br>
          W przypadku zamówienia 6 sztuk takiego samego potykacza, cena za jeden potykacz zmniejszy się do: <b>40.04zł</b>.
          </p>
            </p>
          </div>
          <div class="col-lg-4 p-3 middle-list">
            W celu obliczenia ceny potykaczy, z wybranymi przez Ciebie parametrami skorzystaj z kalkulatora:
            <button class="mt-auto blue-button"><a href="services/aboards.html">Kalkulator</a></button>
          </div>
        </div>

        <div class="row price-list-row reveal2">
          <div class="col-lg-4 price-list-col p-3">
            <h3 class="header-center">ROLL-UPY</h3>
            <p>
               <b>Na cenę roll-upu składają się: </b>
               <ul>
                <li>Wymiary</li>
                <li>Laminacja</li>
                <li>Stelaż roll-upu</li>
                <li>Projekt</li>
                <li><b>W przypadku zamówienia większej <br> ilości potykaczy niż 5 stosowany <br>jest rabat -10%. Ilość powyżej 10<br> naklejek skutkuje rabatem -20%.</b></li>
               </ul>
            </p>
          </div>
          <div class="col-lg-4 price-list-col p-3 px-5">
            <h3 class="header-center-white"><i class="fa-solid fa-dollar-sign"></i></h3>
            <p class="white-list"><b>Przykładowa cena:</b><br>
            Za roll-up o wymiarach 80x200cm zapłacisz <b>128.88zł</b>
          <br><br>
          W przypadku zamówienia 6 sztuk takiego samego potykacza, cena zmniejszy się do: <b>115.92zł</b>.
          </p>
            </p>
          </div>
          <div class="col-lg-4 p-3 middle-list">
            W celu obliczenia ceny roll-upu, z wybranymi przez Ciebie parametrami skorzystaj z kalkulatora:
            <button class="mt-auto"><a href="services/rollups.html">Kalkulator</a></button>
          </div>
        </div>

        <div class="row price-list-row reveal">
          <div class="col-lg-4 price-list-col p-3">
            <h3 class="header-center">MAGNESY</h3>
            <p>
               <b>Na cenę magnesów składają się: </b>
               <ul>
                <li>Wymiary</li>
                <li>Rodzaj folii</li>
                <li>Laminacja</li>
                <li>Projekt</li>
                <li><b>W przypadku zamówienia większej <br> ilości magnesów niż 5 stosowany <br>jest rabat -10%. Ilość powyżej 10<br> magnesów skutkuje rabatem -20%.</b></li>
               </ul>
            </p>
          </div>
          <div class="col-lg-4 price-list-col p-3 px-5">
            <h3 class="header-center-blue"><i class="fa-solid fa-dollar-sign"></i></h3>
            <p class="white-list"><b>Przykładowa cena:</b><br>
            Za magnes o wymiarach 50x50cm z folią monomeryczną, z laminacją, zapłacisz <b>76.00zł</b>
          <br><br>
          W przypadku zamówienia 6 sztuk takiego samego magnesu, cena zmniejszy się do: <b>338.0zł</b>.
          </p>
            </p>
          </div>
          <div class="col-lg-4 p-3 middle-list">
            W celu obliczenia ceny magnesu, z wybranymi przez Ciebie parametrami skorzystaj z kalkulatora:
            <button class="mt-auto blue-button"><a href="services/aboards.html">Kalkulator</a></button>
          </div>
        </div>
        </Container>
    );
};

export default PriceList;

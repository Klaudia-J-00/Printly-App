import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';
import { faStar } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
    const windowHeight = window.innerHeight;

    useEffect(() => {
        const reveal = (className) => {
            var reveals = document.querySelectorAll(className);
        
            for (var i = 0; i < reveals.length; i++) {
                var elementTop = reveals[i].getBoundingClientRect().top;
                var elementVisible = 150;
        
                if (elementTop < windowHeight - elementVisible) {
                    reveals[i].classList.add("active");
                } else {
                    reveals[i].classList.remove("active");
                }
            }
        };
    
        window.addEventListener('scroll', () => {
            reveal(".reveal3");
        });
    
        // Initial reveal
        reveal(".reveal3");
        // Cleanup
        return () => {
            window.removeEventListener('scroll', () => {
                reveal(".reveal3");
            });
        }
    }, [windowHeight]); 

    return (
        <footer>
        <Container className="mt-5 reveal3">
          <Row className="py-5"><h3>printly</h3></Row>
          <Row>
            <Col md={3} style={{marginBottom: '120px'}}><h4>Zaobserwuj nas <br/>
            <a href="https://www.facebook.com/Printlypl/">
                <FontAwesomeIcon icon={faFacebook} className="socials-icon" />
            </a>
            <a href="https://www.instagram.com/printly.pl/">
                <FontAwesomeIcon icon={faInstagram} className="socials-icon" />
            </a>
            <Link to="/">
                <FontAwesomeIcon icon={faLinkedin} className="socials-icon" />
            </Link>
            </h4>
            </Col>
            <Col md={2}><h5>Cookies</h5>
              <p>Dowiedz się dlaczego ta witryna korzysta z ciasteczek. </p>
              <button><Link to="/cookies">Kliknij</Link></button>
            </Col>
            <Col md={2}><h5>Polityka prywatnosci</h5>
              <p>Zapoznaj się z naszą polityką prywatności.</p>
              <button><Link to="/policy">Kliknij</Link></button>
            </Col>
            <Col md={2}><h5>Zasady i warunki</h5>
              <p>Poznaj zasady i warunki korzystania z tej strony. </p>
              <button><Link to="/terms">Kliknij</Link></button>
            </Col>
            <Col md={2}><h5>Oceń nas</h5>
              <p>Jesteś naszym klientem? 
                Oceń nas w Google!</p>
                <a href="https://g.page/r/CWKykwH-7xqWEBM/review">
                    <p className="stars">
                        <FontAwesomeIcon icon={faStar}/>
                        <FontAwesomeIcon icon={faStar}/>
                        <FontAwesomeIcon icon={faStar}/>
                        <FontAwesomeIcon icon={faStar}/>
                        <FontAwesomeIcon icon={faStar}/>
                    </p>
                </a>
            </Col>
          </Row>
          <Row className="mt-2">
            <Col md={3} className="mt-4"><h5>&copy; Printly Oskar Golanowski 2024</h5>
              <p>Wszelkie prawa zastrzeżone. Kopiowanie lub wykorzystywanie materiałów jest zabronione.</p></Col>
              <Col style={{marginTop: '40px'}}><p>Witamy w Printly! Dążymy do najwyższej jakości, dbając o każdy detal, aby zapewnić naszym klientom doskonałe rezultaty. Zachęcamy Cię do śledzenia nas na mediach społecznościowych oraz ocenienia nas na Google. Dziękujemy za odwiedzenie naszej strony i zapraszamy do zapoznania się z naszymi kreatywnymi i innowacyjnymi rozwiązaniami drukarskimi!</p></Col>
              <Col md={2} className='company-info'>
                <p className="p-info">ul. Stawowa 5</p>
                <p className="p-info">42-274 Konopiska</p>
                <p className="p-info">+48 575 254 057</p>
                <p className="p-info">printlypl@gmail.com</p>
                <p className="p-info">NIP: 5732943270</p>
                <p className="p-info">REGON: 525220560</p>
              </Col>
          </Row>
        </Container>
      </footer>
    );
};
export default Footer;

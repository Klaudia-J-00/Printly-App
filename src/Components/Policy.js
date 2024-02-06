import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';

const Policy = () => {
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
            reveal(".reveal");
        });
    
        // Initial reveal
        reveal(".reveal");
        // Cleanup
        return () => {
            window.removeEventListener('scroll', () => {
                reveal(".reveal");
            });
        }
    }, [windowHeight]); 

    return (
        <Container className="mt-5 policy">
        <Row className="row mt-5">
            <Col md={8} className="mt-5">
                <h2>POLITYKA PRYWATNOŚCI</h2>
                <Row>
                    <Col md={6}>
                      <div className="reveal">
                        <h5>Informacje ogólne</h5>
                        <p>Niniejsza polityka dotyczy Serwisu www, funkcjonującego pod adresem url: <a href="https://www.printly.net.pl">printly.net.pl</a></p>
                            
                                <li>Operatorem serwisu oraz Administratorem danych osobowych jest: Oskar Golanowski Stawowa, 42-274, Konopiska</li>
                                <li>Adres kontaktowy poczty elektronicznej operatora: <b>kontakt@printly.net.pl</b></li>
                            <br/>
                            <p>
                            Operator jest Administratorem Twoich danych osobowych w odniesieniu do danych podanych dobrowolnie w Serwisie.
                            Serwis wykorzystuje dane osobowe w następujących celach:
                            </p>
                                <li>Obsługa zapytań przez formularz</li>
                                <li>Prezentacja oferty lub informacji</li>
                            <br/>
                            <p>
                            Serwis realizuje funkcje pozyskiwania informacji o użytkownikach i ich zachowaniu w następujący sposób:
                            Poprzez dobrowolnie wprowadzone w formularzach dane, które zostają wprowadzone do systemów Operatora.
                            Poprzez zapisywanie w urządzeniach końcowych plików cookie (tzw. „ciasteczka”).</p>
                            <hr/><br/>
                            </div>
                            <div className="reveal">
                            <h5>Istotne techniki marketingowe</h5>
                            <p>Operator stosuje analizę statystyczną ruchu na stronie, poprzez Google Analytics (Google Inc. z siedzibą w USA). Operator nie przekazuje do operatora tej usługi danych osobowych, a jedynie zanonimizowane informacje. 
                                Usługa bazuje na wykorzystaniu ciasteczek w urządzeniu końcowym użytkownika. W zakresie informacji o preferencjach użytkownika gromadzonych przez sieć reklamową 
                                Google użytkownik może przeglądać i edytować informacje wynikające z plików cookies przy pomocy narzędzia: <a href="https://www.google.com/ads/preferences/">preferences</a>.</p>
                                <hr/><br/>
                              </div>
                              <div className="reveal">
                              <h5>Dziękujemy za zapoznanie się z naszą polityką prywatności. Życzymy miłego korzystania z serwisu.</h5>
                              <Link to="/" className="link-policy"><b>WRÓĆ NA STRONĘ GŁÓWNĄ</b></Link>
                            
                              </div>
                          </Col>
                    <Col md={6}>
                        <div className="reveal">
                        <h5>Wybrane metody ochrony danych stosowane przez Operatora</h5>
                        <p>Miejsca logowania i wprowadzania danych osobowych są chronione w warstwie transmisji (certyfikat SSL). Dzięki temu dane osobowe, wprowadzone na stronie, zostają zaszyfrowane w komputerze użytkownika i mogą być odczytane jedynie na docelowym serwerze.</p>
                        <hr/><br/>
                        </div>
                        <div className="reveal">
                        <h5>Informacje w formularzach</h5>
                        <p>Serwis zbiera informacje podane dobrowolnie przez użytkownika, w tym dane osobowe, o ile zostaną one podane.
                            Dane podane w formularzu są przetwarzane w celu wynikającym z funkcji konkretnego formularza (kontaktu handlowego). Opis formularza w czytelny sposób informuje, do czego on służy.
                        </p>
                        <hr/><br/>
                        </div>
                        <div className="reveal">
                        <h5>Logi Administratora</h5>
                        <p>Informacje zachowaniu użytkowników w serwisie mogą podlegać logowaniu. Dane te są wykorzystywane w celu administrowania serwisem.</p>
                        <hr/><br/>
                        </div>
                        <div className="reveal">
                        <h5>Zarządzanie plikami cookies</h5>
                        <p>Jeśli użytkownik nie chce otrzymywać plików cookies, może zmienić ustawienia przeglądarki. Zastrzegamy, że wyłączenie obsługi plików cookies niezbędnych dla procesów uwierzytelniania, bezpieczeństwa, utrzymania preferencji użytkownika może utrudnić, a w skrajnych przypadkach może uniemożliwić korzystanie ze stron www
                            W celu zarządzania ustawienia cookies wybierz z listy poniżej przeglądarkę internetową, której używasz i postępuj zgodnie z instrukcjami:</p>

                                <li><a href="https://support.microsoft.com/pl-pl/microsoft-edge/wyświetlanie-i-usuwanie-historii-przeglądarki-w-programie-microsoft-edge-00cf7943-a9e1-975a-a33d-ac10ce454ca4">Edge</a></li>
                                <li><a href="https://support.microsoft.com/pl-pl/topic/jak-usunąć-pliki-cookie-w-programie-internet-explorer-bca9446f-d873-78de-77ba-d42645fa52fc">Internet Explorer</a></li>
                                <li><a href="https://support.google.com/chrome/answer/95647?hl=pl">Chrome</a></li>
                                <li><a href="https://support.apple.com/pl-pl/guide/safari/sfri11471/mac">Safari</a></li>
                                <li><a href="https://support.mozilla.org/pl/kb/wzmocniona-ochrona-przed-sledzeniem-firefox-desktop?redirectslug=Włączanie+i+wyłączanie+obsługi+ciasteczek&redirectlocale=pl">Firefox</a></li>
                                <li><a href="https://help.opera.com/pl/latest/web-preferences/#cookies">Opera</a></li>
                            <br/>
                            <p>Urządzenia mobilne:</p>
                            <li><a href="https://support.google.com/chrome/answer/95647?hl=pl">Android</a></li>
                            <li><a href="https://support.apple.com/pl-pl/HT201265">iOS</a></li>
                            <li><a href="https://support.microsoft.com/pl-pl/windows/windows-phone-7-3ebc303c-59c0-d367-3995-f258b184fabb">Windows Phone</a></li>
                      </div>  
                      </Col>
                </Row>
            </Col>
            <Col md={4}>
                <img src="img/policy.jpeg" className="img-fluid" alt='policy'/>
                <div className="reveal">
                <h5>Hosting</h5>
                <p>Serwis jest hostowany (technicznie utrzymywany) na serwerach operatora: home.pl</p>
                <hr/><br/>
                </div>
                <div className="reveal">
                <h5>Twoje prawa i dodatkowe informacje o sposobie wykorzystania danych</h5>
                <p>
                    Twoje dane osobowe przetwarzane przez Administratora nie dłużej, niż jest to konieczne do wykonania związanych z nimi czynności 
                    Przysługuje Ci prawo żądania od Administratora:
                </p>
                    <li>dostępu do danych osobowych Ciebie dotyczących,</li>
                    <li>ich sprostowania,</li>
                    <li>usunięcia,</li>
                    <li>ograniczenia przetwarzania,</li>
                    <li>oraz przenoszenia danych</li>
                <br/>
                <hr/><br/>
                </div>
                <div className="reveal">
                <h5>Informacja o plikach cookies</h5>
                <p>Serwis korzysta z plików cookies.
                    Pliki cookies (tzw. „ciasteczka”) stanowią dane informatyczne, w szczególności pliki tekstowe, które przechowywane są w urządzeniu końcowym Użytkownika Serwisu i przeznaczone są do korzystania ze stron internetowych Serwisu. Cookies zazwyczaj zawierają nazwę strony internetowej, z której pochodzą, czas przechowywania ich na urządzeniu końcowym oraz unikalny numer.
                    Podmiotem zamieszczającym na urządzeniu końcowym Użytkownika Serwisu pliki cookies oraz uzyskującym do nich dostęp jest operator Serwisu.
                    Pliki cookies wykorzystywane są w następujących celach:</p>
                
                        <li>realizacji celów określonych w części "Istotne techniki marketingowe";</li>
                    </div>
            </Col>
        </Row>
      </Container>
    );
};

export default Policy;

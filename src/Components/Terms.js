import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useEffect } from "react";

const Terms = () => {
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

    window.addEventListener("scroll", () => {
      reveal(".reveal");
    });

    // Initial reveal
    reveal(".reveal");
    // Cleanup
    return () => {
      window.removeEventListener("scroll", () => {
        reveal(".reveal");
      });
    };
  }, [windowHeight]);

  return (
    <Container className="mt-5 terms">
      <Row className="row mt-5">
        <Col md={8} className="mt-5">
          <h2>OGÓLNE WARUNKI UŻYTKOWANIA STRONY INTERNETOWEJ</h2>
          <Row>
            <Col md={6}>
              <div classNam="reveal">
                <h5>I. PREAMBUŁA</h5>
                <p>
                  <li>
                    Niniejszy dokument określa warunki dostępu i korzystania ze
                    strony internetowe, zwany będzie dalej: "Ogólne warunki".
                  </li>
                  <li>
                    Każdy Użytkownik z chwilą podjęcia czynności zmierzających
                    do korzystania ze strony internetowej zobowiązany jest do
                    zapoznania się, przestrzegania oraz akceptacji Ogólnych
                    warunków, bez ograniczeń i zastrzeżeń
                  </li>
                  <li>
                    W przypadku niewyrażenia zgody na wszystkie Ogólne warunki
                    należy zaprzestać korzystania ze strony internetowej i
                    natychmiast ją opuścić.
                  </li>
                  <li>
                    Wszystkie nazwy handlowe, nazwy firm i ich logo, użyte na
                    stronie internetowej należą do ich właścicieli i są używane
                    wyłącznie w celach identyfikacyjnych. Mogą być one
                    zastrzeżone znakami towarowymi.
                  </li>
                  <li>
                    Zabrania się nieuprawnionego korzystania z zawartości strony
                    internetowej lub informacji, jak też in nieuprawnionej
                    reprodukcji, retransmiji lub innego użycia jakiegokolwiek
                    elementu strony internetowej, gdyż takie działanie może
                    naruszać m.in prawa autoskie lub chronione znaki towarowe.
                  </li>
                  <li>
                    Pytania lub uwagi dotyczące strony internetowej można
                    zgłaszać na następujący adres e-mail{" "}
                    <Link to="/">kontakt@printly.net.pl</Link>
                  </li>
                </p>
                <hr />
                <br />
              </div>
              <div className="reveal">
                <h5>V. COOKIES</h5>
                <li>
                  Strona internetowa używa plików cookies (ciasteczka) lub
                  podobną technologię (dalej łącznie nazwane: "cookies") do
                  zbierania informacji o dostępie Użytkownika do strony
                  internetowej (np. za pomocą komputera lub smartfona) oraz jego
                  preferencjach. Są one wykorzystywane m.in w celach
                  statystycznych oraz w celu dostosowania strony internetowej do
                  indywidualnych potrzeb Użytkownika.
                </li>
                <li>
                  Pliki cookies to fragmenty informacji, które zawierają
                  unikalny kod referencyjny, który strona internetowa przesyła
                  na urządzenie Użytkownika, w celu przechowywania, a czasem
                  śledzenia informacji dotyczących używanego urządzenia. Zwykle
                  nie pozwalają one zidentyfikować osoby Użytkownika. Ich
                  głównym zastosowaniem jest lepsze dopasowanie strony
                  internetowej do Użytkownika.
                </li>
                <li>
                  Niektore z plików cookies, występujące na stronie
                  internetowej, są dostępne tylko przez czas trwania danej sesji
                  internetowej i wygasają po zamknięciu przeglądarki. Inne pliki
                  cookies służą do zapamiętywania Użytkownika, który po powrocie
                  na stronę internetową, jest na niej rozpoznawany. Są one
                  wówczas zachowywane przez dłuższczy czas.
                </li>
                <li>
                  Wszystkie pliki cookies, używane przez niniejszą stronę
                  internetową, są zgodne z obowiązującym prawem Unii
                  Europejskiej.
                </li>
                <li>
                  Wszystkie pliki cookies, występuące na stronie internetowej,
                  są ustalane przez Właściciela
                </li>
                <li>
                  Większość Użytkowników i niektórych przeglądarek mobilnych
                  automatycznie akceptuje pliki cookies. Jeżeli ustawienia te
                  pozostaną bez zmian, pliki cookies zostaną zapisane w pamięci
                  urządzenia.
                </li>
                <li>
                  Użytkownik może zmienić preferencje dotyczace akceptacji
                  plików cookies lub zmienić przeglądarkę, aby móc otrzymać za
                  każdym razem stosowne powiadomienie, gdy funkcja cookies jest
                  ustawiona. Aby zmienić ustawienia akceptacji cookies, należy
                  dostosować ustawienia w przeglądarce.
                </li>
                <li>
                  Pliki cookies będą wykozystywane do niezbędnego zarządania
                  sesją, w tym:
                </li>
                <ul>
                  <li>
                    Rozpoznawianiu Użytkownika, który już wcześniej odwiedził
                    stronę internetową co pozwala na identyfikację liczby
                    unikalnych użytkowników, którzy skorzystali z serwisu i
                    pozwala upewnić się co do wystarczającej pojemności serwisu
                    dla liczby nowych użytkowników;
                  </li>
                  <li>
                    Dostosowania elementów układu szaty graficznej lub
                    zawartości strony internetowej;
                  </li>
                  <li>
                    Zbierania informacji statystycznych o tym, jak Użytkownik
                    korzysta ze strony, w celu możliwości ulepszenia witry i
                    stwierdzenia, które zakresy strony internetowej są
                    najbardziej popularne dla Użytkowników.
                  </li>
                </ul>
                <hr />
                <br />
              </div>
              <div className="reveal">
                <h5>X. POSZANOWANIE WŁASNOŚCI INTELEKTUALNEJ</h5>
                <li>
                  Strona internetowa oraz jej treści mogą być chronione prawami
                  autorskimi, prawami dotyczącymi znaków towarowych oraz innymi
                  przepisami, związanymi z ochroną własności intelektualnej.
                </li>
                <li>
                  Znaki, loga i inne spersonalizowane emblamaty Właściciela,
                  pojawiające się na stronie internetowej (zwane łącznie: "
                  <b>Znakami</b>"), stanowią znaki towarowe Właściciela.
                </li>
                <li>
                  Z wyjątkiem osobnych, indywidualnych, pisemnych upoważnień,
                  Użytkownik nie może wykorzystywać przez siebie, należących do
                  Właściciela, Znaków: osobno, ani w zestawieniu z innymi
                  elementami słownymi lub graficznymi, szczególnie w
                  informacjach prasowych, reklamach, materiałach promocyjnych,
                  marketingowych, w mediach, w materiałach pisemnych lub
                  ustnych, w formie elektronicznej, w formie wizulanej ani w
                  żadnej innej formie.
                </li>
                <hr />
                <br />
              </div>
              <div className="reveal">
                <h5>XIII. STOSUNEK DO ZAWARTYCH UMÓW</h5>
                <p>
                  Jeśli nie postanowiono inaczej, Ogólne warunki stanowią
                  kompletną i wyczerpującą umowę pomiędzy Użytkownikiem i
                  Właścicielem, dotyczącą korzystania ze strony internetowej, w
                  zakresie teści w nich zawartych oraz zastępują wszelkie inne
                  porozumienia, uzgodnienia i umowy dotyczące przedmiotu
                  (treści) niniejszych Ogólnych warunków.
                </p>
                <hr />
                <br />
              </div>
              <div className="reveal">
                <h5>XVI. PODSTAWA PRAWNA</h5>
                <li>
                  W sprawach nieuregulowanych w niniejszych Ogólnych warunkach
                  stosuje się odpowiednio następujące ustawy:{" "}
                </li>
                <ul>
                  <li>
                    ustawę z dnia 16 lipca 2004 r. prawo telekomunikacyjne (tj.
                    Dz.U. z 2022 r. poz. 1648, ze zm.);
                  </li>
                  <li>
                    ustawę z dani 18 licpa 2002 r. o świadczeniu usług drogą
                    elektroniczną (tj. Dz.U z 2020 r. poz. 344, ze zm.);
                  </li>
                  <li>
                    ustawę z dnia 4 lutego 1994 r. o prawie autorskim i prawach
                    pokrenych (tj. Dz.U. z 2022 r. poz. 2509, ze zm.);
                  </li>
                  <li>
                    ustawę z dnia 23 kwietnia 1964 r. Kodeks Cywilny (tj. Dz.U.
                    z 2022 r. z poz. 1360, ze zm.);
                  </li>
                  <p>oraz inne właściwe przepisy prawa polskiego.</p>
                </ul>
              </div>
            </Col>

            <Col md={6}>
              <div className="reveal">
                <h5>II. DEFINICJE</h5>
                <li>
                  <b>FORMULARZ KONTAKTOWY</b> - kwestionariusz dostępny na
                  stronie internetowej, który umożliwia natychmiastowe wysłanie
                  wiadomości do Właściciela strony internetowej.
                </li>
                <li>
                  <b>PRAWO WŁAŚCIWIE</b> - Do celów realizacji Ogólnych warunków
                  zastosowanie ma prawo polskie.
                </li>
                <li>
                  <b>STRONA INTERNETOWA</b> - Narzędzie, o nazwie
                  www.printly.net.pl służące do świadczenia usług
                  elektronicznych.
                </li>
                <li>
                  <b>UŻYTKOWNIK</b> - osoba fizyczna, osoba prawna, albo
                  jednostka organizacyjna nieposiadająca osobowości prawnej,
                  której ustawa przyznaje zdolność prawną, korzystająca z usług
                  elektronicznych dostępnych w ramach strony internetowej.
                </li>
                <li>
                  <b>WARUNKI</b> - zbiór wszystkich postanowień m.in.
                  niniejszych Ogólnych warunków, zasad polityki prywatności,
                  plików cookies oraz wszelkich innych warunków, znajdujących
                  się na stronie internetowej, które dotyczą określonych
                  funkcji, właściwości lub promocji, jak również obsługi
                  klienta.
                </li>
                <li>
                  <b>WŁAŚCICIEL</b> - Podmiot udostępniający niniejszą stronę
                  internetową, mianowicie Przedsiębiorca Pan Oskar Golanowski,
                  prowadzący działalność gospodarczą pod firmą: Printly, z
                  siedzibą przy: ul. Stawowa 5, 42-274, Konopiska, NIP:
                  5732943270.
                </li>
                <hr />
                <br />
              </div>
              <div className="reveal">
                <h5>VI. PLUGIN FACEBOOKA</h5>
                <li>
                  Strona internetowa zawier plugin (wtyczkę) do serwisu
                  społecznościowego Facebook.
                </li>
                <li>Plugin Facebooka jest oznaczony logo Facebook.</li>
                <li>
                  Jeżeli Użytkownik odwiedza stronę internetową będąc
                  zalogowanym na swoim profilu na Facebooku, Facebook
                  zarejestruje informację o wizycie. Nawet w sytuacji, gdy
                  Użytkownik nie jest zalogowany na Facebooku, Facebook jest w
                  stanie pozyskiwać informacje o adresie IP.
                </li>
                <li>
                  Facebook nie przekazuje Włascicielowi informacji gromadzonych
                  danych i sposobie ich wykorzystania. Cel i zakres danych
                  gromadzonych przez Facebook nie są znane Właścicielowi. W celu
                  uzyskania dodatkowych informacji, dotyczących prywatności na
                  portallu Facebook, należy kontaktować się bezpośrednio z
                  Facebookiem lub zapoznać z{" "}
                  <a href="https://www.facebook.com/about/privacy">
                    polityką prywatności portalu Facebook
                  </a>
                  .{" "}
                </li>
                <li>
                  Jeżeli Użytkownik nie chce, aby Facebook mógł pozyskiwać
                  informacje dotyczące przeglądania strony internetowej dobrze
                  jest, aby Użytkownik wylogował się wcześniej ze swojego konta
                  Facebook.
                </li>
                <hr />
                <br />
                <h5>VII. PLUGIN INNYCH PORTALI SPOŁECZNOŚCIOWYCH</h5>
                <li>
                  Właścicel może również używać innych plugin (wtyczek)
                  społecznościowych (Instagram, LinkedIn).
                </li>
                <li>
                  Wtyczki portali społecznościowych można zidentyfikować po
                  ikonkach służących do udostępniania informacji na danej
                  platformie.
                </li>
                <li>
                  Wtyczki umożliwiają użytkownikom tych platform linkowanie
                  strony internetowej w ich postach, umieszczonych na
                  platformach społecznościowych.
                </li>
                <li>
                  Wtyczki bezpośrednio połączą z profilem Własciela na serwerez
                  danego portalu społeczniościowego. Portal ten może wówcza
                  uzyskać informacje, że Użytkownik odwiedził stronę internetową
                  ze swojego adresu IP.
                </li>
                <li>
                  Podczas wizyty Użytkownika na profilu, administartor serwisu
                  społecznościowego korzysta z plików cookies i innych podobnych
                  technologii, w celu monitorowania zachowania i akcji
                  podejmowanych przez Użytkownika. Informacje te gromadzone są
                  między innymi na potrzeby stworzenia tzw. statystyki strony.
                  Statystyki zawierają wyłącznie zanonimizowane dane
                  statystyczne na temat użytkowników odwiedzających profil i nie
                  ma możliwości powiązania ich z konkretna osobą. Właściciel nie
                  ma dostępu do danych osobowych wykorzystywanycyh przez serwisy
                  społecznosciowe.
                </li>
                <hr />
                <br />
              </div>
              <div className="reveal">
                <h5>XI. OCHRONA DANYCH UŻYTKOWNIKA</h5>
                <li>
                  Właściciel szanuje w pełni prywatność Użytkowników.
                  Szczegółowe informacje na temat sposobu gromadzenia i
                  przetwarzania danych osobowych Użytkownika lub innych
                  informacji, jak również sytuacji, w których Właściciel może je
                  ujawniać, znajdują się w zakładce{" "}
                  <a href="policy.html">Polityka Prywatności</a>.
                </li>
                <hr />
                <br />
              </div>
              <div className="reveal">
                <h5>XIV. ZMIANA WARUNKÓW STRONY INTERNETOWEJ</h5>
                <li>
                  Właściciel strony internetowej zastrzega sobie prawo do
                  dokonywania modyfikacji niniejszych Ogólnych warunków, w
                  dowolnym momencie ich obowiązywania, zamieszczając ich
                  zaaktualizwoaną wersję na stronie internetowej, które
                  zaczynają obowiązywać Użytkowników od momentu ich publikacji,
                  chyba że inaczej wskazano w zmodyfikowanych Ogólnych
                  warunkach.
                </li>
                <li>
                  Użytkownik ma obowiązek zapoznania się z modyfikacjami
                  Ogólnych Warunków, o czym Właściciel poinformuje go w
                  komunikacie o zmianach Ogólnych warunków do zaakceptowania.
                </li>
                <li>
                  Dalsze korzystanie ze strony internetowej jest równoznaczne z
                  akceptacją zmodyfikowanych Warunków strony internetowej.
                </li>
                <hr />
                <br />
              </div>
              <div className="reveal">
                <h5>XV. ROZWIĄZYWANIE SPORÓW</h5>
                <li>
                  Wszelkie powstałe spory Strony postanawiają w pierwszej
                  kolejności rozwiązać w trybie polubownego załatwienia sprawy,
                  przed właściwym sądem polubownym (zapis na sąd polubowny).
                </li>
                <li>
                  Jeśli polubowne załatwienie sprawy okaże się niemożliwe, spór
                  wynikający z niniejszej umowy zostanie rozstrzygnięty przez
                  sąd, w którego okręgu znajduje się siedziba Właściciela.
                </li>
                <hr />
                <br />
              </div>
              <div className="reveal">
                <h5>
                  Dziękujemy za zapoznanie się z naszą polityką prywatności.
                  Życzymy miłego korzystania z serwisu.
                </h5>
                <Link to="/">
                  <b>WRÓĆ NA STRONĘ GŁÓWNĄ</b>
                </Link>
              </div>
            </Col>
          </Row>
        </Col>

        <Col md={4} className="mt-4">
          <img src="img/terms.jpeg" className="img-fluid terms-img" alt='terms'/>
          <div className="reveal">
            <h5 className="mt-3">III. ZAKRES WARUNKÓW</h5>
            <li>
              Właściciel zapewnia dostęp do zawartości strony internetowej,
              zgodnie z poniższymi Ogólnymi warunkami.
            </li>
            <li>
              Zawartość i dane publikowane na stronie internetowej mają
              charakter informacyjny dla osób zainteresowanych i mogą być
              wykorzystywane jedynie do celów informacyjnych.
            </li>
            <li>
              Użytkownicy mogą korzystać z dostępu i usług oferowanych na
              stronie internetowej, pod warunkiem uprzedniego wyrażenia zgody na
              Ogólne warunki.
            </li>
            <hr />
            <br />
          </div>
          <div className="reveal">
            <h5>IV. ZASADY KORZYSTANIA ZE STRONY INTERNETOWEJ</h5>
            <li>
              Strona internetowa jest obsługiwana przez wszelkiego rodzaju
              przeglądarki internetowe. Nie wymaga się żadnych szczególnyuch
              właściwości urządzenia końcowego Użytkownika.
            </li>
            <li>
              Po zaakceptowaniu Warunków, Użytkownik ma prawo przeglądać,
              kopiować, drukować oraz rozpowszechniać, bez dokonywania zmian w
              treści, zawartość niniejszej strony internetowej, pod warunkiem,
              że:{" "}
            </li>
            <ul>
              <li>
                treści będą wykorzystywane wyłącznie informacyjnie, w celach
                niekomercyjnych;
              </li>
              <li>
                każda wykonana kopia będzie zawierała informacje na temat praw
                autorskich lub dane dotyczące autora treści.
              </li>
            </ul>
            <li>
              Zakazane jest używanie i kopiowanie oprogramowania, procesów i
              technologii, stanowiących część strony internetowej.
            </li>
            <li>
              Użytkownicy mogą korzystać ze strony internetowej jedynie w
              poszanowaniu przepisów ustawy prawo telekomunikacyjne, ustawy o
              świadczeniu usług drogą elektroniczną i odpowiednich przepisów
              prawa cywilnego.
            </li>
            <li>
              <b>Zabronione</b> jest korzystanie ze strony:{" "}
            </li>
            <ul>
              <li>
                w sposób prowadzący do naruszenia obowiązujących przepisów
                prawa;
              </li>
              <li>
                w jakikolwiek sposób niezgodny z prawem lub nieuczciwy, albo w
                sposób, zmierzający do osiągnięcia niezgodnego z prawem lub
                nieuczciwego celu;
              </li>
              <li>
                do celów związanych z wyrządzeniem szkody dzieciom lub prób
                wyrządzenia im jakiejkolwiek szkody;
              </li>
              <li>do form zaliczanych do zbiórczej kategorii SPAM;</li>
              <li>
                do świadomego przekazywania jakichkolwiek danych, wysyłania lub
                wgryuwania jakichkolwiek materiałów zawierających wirusy, konie
                trojańskie, oprogramowanie szpiegujące (spyware), oprogramowanie
                z reklamami (adware) lub inny szkodliowy program lub zbliżone
                kody komputerowe zaprogramowane, by niekorzystnie wpływać lub
                zagrażać na funkcjonowanie jakiegokolwiek oprogramowania lub
                sprzętu komputerowego albo niekorzystnie wpływać lub zagrażać
                Użytkownikowi.
              </li>
            </ul>
            <hr />
            <br />
          </div>
          <div className="reveal">
            <h5>VIII. LINKI ZEWNĘTRZNE</h5>
            <li>
              Odnośniki znajdujące się na niniejszej stronie, do innych stron
              internetowcyu, są podane wyłacznie w celu informacyjnym.
            </li>
            <li>
              Właściciel strony internetowej nie ponosi odpowiedzialnosci za
              treści znajdujące się na innych witrynach. ani za jakiekolwiek
              szkody wynikające z ich użytkownika.
            </li>
            <hr />
            <br />
          </div>
          <div className="reveal">
            <h5>IX. FORMULARZ KONTAKTOWY</h5>
            <li>
              Użytkownik może wpisać swoje dane kontaktowe, wypełniając
              specjalny formularz przewidziany do kontaktu z Właścicielem, treść
              wiadomości i akceptując ich wysyłkę do Właściciela.
            </li>
            <li>
              Pozostawienie danych kontaktowych oznacza, że Użytkownik wyraził
              zgodę na przetwarzanie przez Właściciela podanych w Formularz
              Kontaktowym danych osobowych. Właściciel będzie mógł użyć podanych
              danych kontaktowych, w celu wysłania ofert lub nawiązania kontaktu
              z Użytkownikiem.
            </li>
            <hr />
            <br />
          </div>
          <div className="reveal">
            <h5>XII. OGRANICZENIE ODPOWIEDZIALNOŚCI</h5>
            <li>
              Strona internetowa zaiwera informacje o charakterze ogólnyum. Nie
              ma na celu pośredniczyć w świadczeniu jakichkolwiek usług
              doradztwa profesjonalnego.
            </li>
            <li>
              Strona internetowa nie zapewnia żadnych gwarancji dotyczących jej
              treści, w szczególności gwarancji bezpieczeństwa, bezbłędności,
              braku wirusów lub złośliwych kodów, gwarancji dotyczących
              poprawnego działania czy jakości.
            </li>
            <li>
              Strona internetowa nie zawiera żadnej rękojmi, wyrażanej lub
              dorozumianej, w tym gwarancji przydatności handlowej lub
              przydatności do określonego celu, nienaruszenia praw autoskich,
              dostosowania, bezpieczeństwa i rzetelności informacji.
            </li>
            <li>
              Użytkownik korzysta ze strony internetowej na własne ryzyko i
              przyjmuje na siebie pełną odpowiedzialnośc za szkody związane lub
              wynikające z jej wykorzystania, zarówno bezpośrednie jak i
              pośrednie, uboczne, następcze, moralne, lub inne szkody z tytułu
              odpowiedzialności umownej, deliktowej, z tytułu zaniedbań, w tym
              m.in. za utratę danych lub usług.
            </li>
            <li>
              Strona internetowa nie ponosi żadnej odpowiedzialności za linki
              zamieszczone na stronie internetowej, szczególnie jesli prowadzą
              do witryn, zasobów lub narzędzi utrzymanych przez osoboy trzecie.
            </li>
            <li>
              Właścicel nie ponosi odpoweidzialnosci, jeśli strona internetowa
              jest z jakichkolwiek przyczyn tymczasowo lub długookresowo
              niedostępna.
            </li>
            <li>
              Właściciel nie ponosi odpoweidzialności za informacje przekazywane
              na stronie internetowej, ani też nie może zapewnić całkowitego
              bezpieczeństwa komunikacji, prowadzonych za pomocą strony
              internetowej.
            </li>
            <li>
              Pomimo podejmowanie przez Właściciela największych starań, w
              kwestii zapewnieniea dokładnosći i aktualnośći strony
              internetowej, mogą pojawić się niezamierzone przez Właściciela
              błędy, które Użytkownik, po ich wykryciu, proszony jest zgłaszać
              Właścicielowi.
            </li>
            <li>
              Wszystkie wskazane powyżej wyłączenia i ograniczenia
              odpoweidzialności obowiązują w najszerszym dopuszczalnym prawnie
              zakresie, obejmując każdy typ istniejącej odpoweidzialności m.in.
              odpowiedzialności kontaktowej, deliktowej i każdej innej
              przewidzianej w polskim lub zagranicznym porządku prawnym.
            </li>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Terms;

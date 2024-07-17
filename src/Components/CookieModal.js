import React, { useState, useEffect } from 'react';
import Cookies from 'js-cookie';
import { Link } from 'react-router-dom';

function CookieModal() {
  const [show, setShow] = useState(false);
  const [showValidationMessage, setShowValidationMessage] = useState(true);
  const [policyCheck, setPolicyCheck] = useState(false);
  const [termsCheck, setTermsCheck] = useState(false);

  const handleCheckChange = (e) => {
    if (e.target.name === 'policy-check') {
      setPolicyCheck(e.target.checked);
    } else if (e.target.name === 'terms-check') {
      setTermsCheck(e.target.checked);
    }

  };

  const handleAccept = () => {
    if (policyCheck && termsCheck) {
      Cookies.set('cookieModalShown', 'true', { expires: 30 });
      setShow(false);
    }
  };

  useEffect(() => {
    if (!Cookies.get('cookieModalShown')) {
      setShow(true);
    }
    if (policyCheck && termsCheck) {
        setShowValidationMessage(false);
      } else {
        setShowValidationMessage(true);
      }

  }, [policyCheck, termsCheck]);

  return (
    <>
      <div className={show ? 'show2' : 'hide2'} id="cookiePopup">
        <img src="img/cookie.png" className="img-fluid" alt='cookie'/>
        <p> Nasza strona internetowa korzysta z plików cookies, 
        aby zapewnić Ci najlepsze możliwe doświadczenie podczas korzystania z naszej 
        strony. Korzystając z naszej strony, wyrażasz zgodę na stosowanie plików cookies zgodnie 
        z naszą <Link to="/policy">polityką prywatności.</Link> oraz <Link to="/terms">warunkami korzystania</Link> z tej strony
        </p>
        <input type="checkbox" id="policy-check" name="policy-check" onChange={handleCheckChange} required/>
        <label htmlFor="policy-check" style={{marginLeft: '6px'}}> Zapoznałem/am się z polityką prywatności</label><br/>
        <input type="checkbox" id="terms-check" name="terms-check" onChange={handleCheckChange} required/>
        <label htmlFor="terms-check" style={{marginLeft: '6px'}}> Zapoznałem/am się z warunkami korzystania z tej strony</label>
        <p id="validationMessage" style={{ display: showValidationMessage ? 'block' : 'none' }}>Musisz zaakceptować zgody by przejść dalej.</p>
        <button id="acceptCookie" disabled={!policyCheck || !termsCheck} onClick={handleAccept}>Zaakceptuj</button>
      </div>
    </>
  );
}

export default CookieModal;
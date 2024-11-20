import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);  // Scrolls to the top of the page
  }, [location]); 

  return null;
};

export default ScrollToTop;
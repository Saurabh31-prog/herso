import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {

    //scroll to top of the page on every route change
    window.scrollTo({ top: 0,left: 0, behavior: "smooth"});
  }, [pathname])
  return null;
}
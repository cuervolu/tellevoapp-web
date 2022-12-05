import { useState, useEffect } from "react";

import { NavBar, Banner, Download, About, Reviews, Footer ,Preloader } from "./components";
import "bootstrap/dist/css/bootstrap.min.css";
import "animate.css";

export const TeLlevoApp = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <>
      {loading ? (
        <Preloader isLoading={loading} />
      ) : (
        <>
          <NavBar />
          <Banner />
          <About />
          <Reviews />
          <Download />
          <Footer />
        </>
      )}
    </>
  );
};

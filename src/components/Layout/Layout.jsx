import React from "react";
import Footer from "../Footer";
import Navbar from "../Navbar";

const Layout = ({ children }) => {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <section>{children}</section>
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default Layout;

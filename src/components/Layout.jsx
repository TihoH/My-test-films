import React from "react";
import Header from "./Header/Header";
import { Outlet, useLocation, useParams } from "react-router";
import Footer from "./Footer/Footer";

const Layout = () => {
  const location = useLocation()
  const {id , type} = useParams()
  

  return (
    <div className="flex flex-col">
      <header className="container">
        <Header />
      </header>
      <main className={ location.pathname === '/' || location.pathname === `/AboutFilm/type/${type}/${id}` ? '' : 'container'   }>
        <Outlet />
      </main>
      <footer className="container">
        <Footer />
      </footer>
    </div>
  );
};

export default Layout;

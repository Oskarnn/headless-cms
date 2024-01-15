import * as React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/style.css";
import { Link } from "gatsby";
import Header from "./header";

const Layout = ({ children }) => (
  <>
    <Header />
    <header>
      <Link to="/">Oskars Portfolio</Link>
    </header>
    <main>{children}</main>
    <footer>Footer!</footer>
  </>
);

export default Layout;

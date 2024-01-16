import * as React from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/style.css';
import {Link} from "gatsby";
import Header from "./header";
import Footer from "./footer";

// REACT HELMET FÖR META TAGGAR?

const Layout = ({ children }) => (
    <>
      <Header/>
      <main>{children}</main>
      <Footer/>
    </>
  )


export default Layout

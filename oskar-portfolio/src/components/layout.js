import * as React from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/style.css';
import {Link} from "gatsby";

const Layout = ({ children }) => (
    <>
      <header><Link to="/">Oskars Portfolio</Link></header>
      <main>{children}</main>
      <footer>Footer!</footer>
    </>
  )


export default Layout

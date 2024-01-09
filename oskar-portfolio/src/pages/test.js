import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"

//sidans namn blir portfolio efter namnet på javascript-filen
const test = () => (
  <Layout>
    <h1>Hi from the test page</h1>
    <p>Welcome to Test</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export const Head = () => <title>TEST Page</title>

export default test;
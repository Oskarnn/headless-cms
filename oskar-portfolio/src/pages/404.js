import * as React from "react";

import Layout from "../components/layout";

//i dev mode overridas denna sida av en inbyggd 404-sida
const NotFoundPage = () => (
  <>
    <h1>404: Not Found</h1>
  </>
);

export const Head = () => <title>404</title>;

export default NotFoundPage;

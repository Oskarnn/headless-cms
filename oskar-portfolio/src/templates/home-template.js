import React from "react";

const HomeTemplate = (props) => {
  return (
    <main>
      <h2>{props.title}</h2>
      <h2>{props.template}</h2>
    </main>
  );
};

export default HomeTemplate;

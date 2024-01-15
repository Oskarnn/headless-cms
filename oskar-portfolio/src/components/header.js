import React from "react";
import useNavigation from "../hooks/useNavigation";
import { Link } from "gatsby";

function Header() {
  const navbarItems = useNavigation();
  return (
    <>
      <div>
        <ul>
          {navbarItems.map((item) => {
            return (
              <li key={item.node.id}>
                <Link to={item.node.url}>{item.node.title}</Link>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}

export default Header;

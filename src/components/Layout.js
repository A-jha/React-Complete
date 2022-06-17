import React from "react";
import { Link } from "react-router-dom";
export default function Layout({ children }) {
  return (
    <div>
      <header>
        <h1>header</h1>
        <Link to={"/hooks"} placeholder="sad">
          Fuck
        </Link>
      </header>
      <main>{children}</main>
      <footer>Footer</footer>
    </div>
  );
}

import Link from "next/link";
import React from "react";
import "./Header.css"

const Header = () => {
  return (
    <div className="listado">
      <p>
        <Link href="/Home">- Home</Link>
      </p>
      <p>
        <Link href="/About">- About</Link>
      </p>
      <p>
        <Link href="/Dashboard">- Dashboard</Link>
      </p>
    </div>
  );
};

export default Header;

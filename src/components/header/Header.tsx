import "./Header.scss";
import Logo from "../svg/Logo";
import { useState } from "react";
export default function Header() {
  const [links, setLinks] = useState([
    { name: "features" },
    { name: "team" },
    { name: "sign in" },
  ]);

  const displayLinks = links.map((link, index) => {
    return <li key={index}> {link.name} </li>;
  });
  return (
    <header className="header-ctn">
      <div className="logo-ctn">
        <Logo />
      </div>

      <div className="actions">
        <ul>{displayLinks}</ul>
      </div>
    </header>
  );
}

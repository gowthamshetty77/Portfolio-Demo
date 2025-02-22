import Reactfrom, { useState } from "react";
import "./NavBar.css";
import { Link } from "react-scroll";
import logo from "../../assets/G.png";
import contactImg from "../../assets/contact.png";
import Menu from "../../assets/menu.png";

const NavBar = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <nav className="navbar">
      <img src={logo} alt="G-logo" className="logo" />
      <div className="desktopMenu">
        <Link
          activeClass="active"
          to="intro"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          className="desktopMenuListItem"
        >
          Home
        </Link>
        <Link
          to="skills"
          spy={true}
          smooth={true}
          offset={-55}
          duration={500}
          activeClass="active"
          className="desktopMenuListItem"
        >
          About
        </Link>
        <Link
          to="works"
          spy={true}
          smooth={true}
          offset={-55}
          duration={500}
          activeClass="active"
          className="desktopMenuListItem"
        >
          Portfolio
        </Link>
        <Link
          to="clients"
          spy={true}
          smooth={true}
          offset={-50}
          duration={500}
          activeClass="active"
          className="desktopMenuListItem"
        >
          Clients
        </Link>
      </div>
      <button
        className="desktopMenuBtn"
        onClick={() => {
          document
            .getElementById("contact")
            .scrollIntoView({ behavior: "smooth" });
        }}
      >
        <img src={contactImg} className="desktopMenuImg" /> Contact Me
      </button>

      {/* ------------------------------------------------------------------------------------- */}

      <img
        src={Menu}
        alt="Menu"
        className="mobMenu"
        onClick={() => setShowMenu(!showMenu)}
      />
      <div className="navMenu" style={{ display: showMenu ? "flex" : "none" }}>
        <Link
          activeClass="active"
          to="intro"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          className="navMenuListItem"
          onClick={() => setShowMenu(false)}
        >
          Home
        </Link>
        <Link
          to="skills"
          spy={true}
          smooth={true}
          offset={-55}
          duration={500}
          activeClass="active"
          className="navMenuListItem"
          onClick={() => setShowMenu(false)}
        >
          About
        </Link>
        <Link
          to="works"
          spy={true}
          smooth={true}
          offset={-55}
          duration={500}
          activeClass="active"
          className="navMenuListItem"
          onClick={() => setShowMenu(false)}
        >
          Portfolio
        </Link>
        <Link
          to="clients"
          spy={true}
          smooth={true}
          offset={-50}
          duration={500}
          activeClass="active"
          className="navMenuListItem"
          onClick={() => setShowMenu(false)}
        >
          Clients
        </Link>
        <Link
          activeClass="active"
          to="contact"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          className="navMenuListItem"
          onClick={() => setShowMenu(false)}
        >
          Contact
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;

//Component for the header
import inculogo from "../images/wave-2.svg";
import NavBar from "./Navbar";

function Header() {
  return (
    <div>
      <div className="header-part">
        <div className="heading">
          <img src={inculogo} alt="Incubyte-Logo" />
        </div>
      </div>
      <NavBar />
    </div>
  );
}

export default Header;

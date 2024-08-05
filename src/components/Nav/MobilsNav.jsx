import Logo from "../elements/Logo/Logo";
import "./Nav.css";
import { IoClose } from "react-icons/io5";
import { Navlinks } from "./../../data";
import MainButton from "../elements/MainButton/MainButton";
import { Link } from "react-router-dom";
const MobilsNav = ({ setToggleNav }) => {
  return (
    <div className="mobile-sidebar">
      <IoClose
        className="close-icon"
        fontSize={30}
        color="#21b573"
        onClick={() => setToggleNav(false)}
      />
      <Logo name="Edu<span>jar</span>" />
      <ul className="mobile-sidebar-items">
        {Navlinks.map((el, index) => {
          return (
            <li key={index}>
              <Link to={el.path}>{el.title}</Link>
            </li>
          );
        })}
      </ul>
      <MainButton title="Signup" />
    </div>
  );
};

export default MobilsNav;

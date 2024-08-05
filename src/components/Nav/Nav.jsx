import "./Nav.css";
import Logo from "../elements/Logo/Logo";
import MainButton from "../elements/MainButton/MainButton";
import MobilsNav from "./MobilsNav";
import NavItems from "./NavItems";
import { Navlinks } from "./../../data";
import { CiMenuFries } from "react-icons/ci";
import { useState } from "react";
export default function Nav() {
  const [toggleNav, setToggleNav] = useState(false);
  return (
    <>
      <div className="container">
        <nav>
          <Logo name="Edu<span>jar</span>" />
          <NavItems links={Navlinks} />
          <MainButton title="Signup" />
          <CiMenuFries
            fontSize={35}
            fontWeight={700}
            color="#21b573"
            className="menu-icon"
            onClick={() => setToggleNav(true)}
          />
        </nav>
      </div>
      {toggleNav && <MobilsNav setToggleNav={setToggleNav} />}
    </>
  );
}

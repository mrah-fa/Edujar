import "./Nav.css";
import { Link } from "react-router-dom";
export default function NavItems({ links }) {
  return (
    <>
      <ul className="nav-items d-none">
        {links.map((el, index) => {
          return (
            <li key={index}>
              <Link to={el.path}>{el.title}</Link>
            </li>
          );
        })}
      </ul>
    </>
  );
}

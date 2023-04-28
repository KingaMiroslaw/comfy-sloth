import logo from "../assets/logo.svg";
import { Link } from "react-router-dom";
import { FaTimes } from "react-icons/fa";
import { links } from "../utils/constants";
import CartButtons from "./CartButtons";

const Sidebar = () => {
  return (
    <div>
      <aside>
        <div className="sidebar-header">
          <img src={logo} alt="comfy sloth" />
          <button type="button">
            <FaTimes />
          </button>
        </div>
        <ul>
          {links.map(({ id, text, url }) => {
            return (
              <li key={id}>
                <Link to={url}>{text}</Link>
              </li>
            );
          })}
          <li>
            <Link to="/checkout">checkout</Link>
          </li>
        </ul>
        <CartButtons />
      </aside>
    </div>
  );
};
export default Sidebar;

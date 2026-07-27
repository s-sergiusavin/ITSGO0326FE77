import { Link, NavLink } from "react-router-dom";
import styles from "./Navigation.module.scss";

const Navigation = () => {
    const []
  return (
    <header>
      <Link>
        <div className="{styles.logo}">My Social Media App</div>
      </Link>

      <nav>
        <ul className="{styles.menu}">
          <li className="{styles.menuItem}">
            <NavLink to="/my-profile">My Profile</NavLink>
          </li>
          <li className="{styles.menuItem}">
            <NavLink to="/friends">Friends</NavLink>
          </li>
          <li className="{styles.menuItem}">
            <NavLink to="/auth"></NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navigation;

import { NavLink } from "react-router-dom";
import styles from "./AuthNav.module.css";
import { mainRoutes } from "../../routes/mainRoutes";

const AuthNav = () => {
  return (
    <>
      <NavLink
        className={styles.header__link}
        activeClassName={styles.header__link_active}
        to={mainRoutes.authentication.register.path}
      >
        {mainRoutes.authentication.register.name}
      </NavLink>

      <NavLink
        className={styles.header__link}
        activeClassName={styles.header__link_active}
        to={mainRoutes.authentication.login.path}
      >
        {mainRoutes.authentication.login.name}
      </NavLink>
    </>
  );
};

export default AuthNav;

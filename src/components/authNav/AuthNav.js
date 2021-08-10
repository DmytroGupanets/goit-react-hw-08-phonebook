import { NavLink } from "react-router-dom";
import styles from "./AuthNav.module.css";
import { mainRoutes } from "../../routes/mainRoutes";

const AuthNav = () => {
  return (
    <>
      {mainRoutes.auth.map((el) => (
        <NavLink
          key={el.path}
          className={styles.header__link}
          activeClassName={styles.header__link_active}
          to={el.path}
        >
          {el.name}
        </NavLink>
      ))}
    </>
  );
};

export default AuthNav;

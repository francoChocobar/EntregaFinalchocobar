import CartWidget from "../CartWidget/CartWidget";
import styles from "./Navbar.module.css";
import { Outlet, Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <div>
      <div className={styles.containerNavbar}>
        <Link to="/">Preparar.Te</Link>

        <div className={styles.categories}>
          <Link to="/">Todos</Link>
          <Link to="/category/Tazas">Tazas</Link>
          <Link to="/category/Frascos">Frascos</Link>
        </div>

        <CartWidget />
      </div>

      <Outlet />
    </div>
  );
};

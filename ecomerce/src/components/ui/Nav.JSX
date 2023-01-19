import React from "react";
import { NavLink } from "react-router-dom";
const Nav = () => {
  return (
    <nav className="navbar is-transparent">
      <div className="navbar-brand">
        <a className="navbar-item" href="https://bulma.io">
          <img
            src="https://www.utpl.edu.ec/sites/default/files/archivos/marca%20UTPL%202018-01.png"
            alt="UTPL"
            width="115"
            height="35"
          />
        </a>
      </div>

      <div id="navbarExampleTransparentExample" className="navbar-menu">
        <div className="navbar-start">
          <NavLink className="navbar-item" href="/">
            Home
          </NavLink>
          <div className="navbar-item has-dropdown is-hoverable">
            <NavLink className="navbar-link" to="/">
              Productos
            </NavLink>
            <div className="navbar-dropdown is-boxed">
              <NavLink className="navbar-item" to="/producto">
                Agregar
              </NavLink>
              <NavLink className="navbar-item" to="/consulta">
                Presentaciones
              </NavLink>
              <NavLink className="navbar-item" href="categorias">
                Categorías
              </NavLink>
              <NavLink className="navbar-item" href="categorias">
                Lista
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;

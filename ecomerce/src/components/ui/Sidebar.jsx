import React from "react";
import { NavLink } from "react-router-dom";
const Sidebar = () => {
  return (
    <>
      <ul className="menu-list">
        <li>
          <a className="menu-label has-text-grey-dark">Team Settings</a>
        </li>
        <li>
          <a className="">Productos</a>
          <ul>
            <li>
              <NavLink to="/producto" className="has-text-grey-dark ">
                Agregar Producto
              </NavLink>
            </li>
            <li>
              <NavLink to="/consultas" className="has-text-grey-dark">
                Categoria Productos
              </NavLink>
            </li>
            <li>
              <a className="has-text-grey-dark">Presentación Producto</a>
            </li>
          </ul>
        </li>
        <li>
          <a className="has-text-grey-dark">Inventario</a>
        </li>
      </ul>
    </>
  );
};
export default Sidebar;

import React from "react";
import { useProducto } from "@/hooks/useProducto";
import { Link } from "react-router-dom";
const TableBody = ({
  idProducto,
  nombreProducto,
  descripcionProducto,
  categoria,
  presentacion,
  costoUnitario,
  grabaIva,
  margenGananacia,
  stock,
  productoActivo,
}) => {
  const { seleccionarProductoActivo, eliminarProducto } = useProducto();
  return (
    <tr>
      <td>{idProducto}</td>
      <td>{nombreProducto}</td>
      <td>{descripcionProducto}</td>
      <td>{categoria}</td>
      <td>{presentacion}</td>
      <td>{costoUnitario}</td>
      <td>{grabaIva ? "SI" : "NO"}</td>
      <td>{margenGananacia}%</td>
      <td>{stock}</td>
      <td>{productoActivo ? "SI" : "NO"}</td>
      <td>
        <Link to={"/producto"}>
          <button
            className="button is-info is-light is-small"
            onClick={() => seleccionarProductoActivo(idProducto)}
          >
            Actualizar
          </button>
        </Link>
      </td>
      <td>
        <button
          className={
            productoActivo
              ? "button  is-danger is-light is-small"
              : "button is-primary is-light is-small"
          }
          onClick={() => eliminarProducto(idProducto, productoActivo)}
        >
          {productoActivo ? "Desactivar" : "Activar"}
        </button>
      </td>
    </tr>
  );
};

export default TableBody;

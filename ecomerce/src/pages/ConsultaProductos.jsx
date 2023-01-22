import React, { useEffect } from "react";
import { endPoints } from "@/assets/constantes";
import TableBody from "@/components/ui/TableBody";
import { useProducto } from "@/hooks/useProducto";

const ConsultaProductos = () => {
  const { peticiones, isLoading, listaProductos } = useProducto();
  useEffect(() => {
    peticiones(endPoints.ConsultarProductos);
  }, []);

  if (isLoading) return <h2>No existen productos</h2>;

  return (
    <table className="table is-striped is-narrow is-fullwidth">
      <thead>
        <tr>
          <th>ID</th>
          <th>Nombre Producto</th>
          <th>Decripción Producto</th>
          <th>Categoría</th>
          <th>Presentación</th>
          <th>Costo Producto</th>
          <th>IVA</th>
          <th>Margen Ganancia</th>
          <th>Stock Actual</th>
          <th>Activo</th>
        </tr>
      </thead>
      <tbody>
        {listaProductos.map((producto) => (
          <TableBody key={Date.now + Math.random()} {...producto} />
        ))}
      </tbody>
    </table>
  );
};
export default ConsultaProductos;

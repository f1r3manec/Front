import { useForm } from "@/hooks/useForm";
import useGetCategorias from "@/hooks/useGetCategorias";
import useGetPresentaciones from "@/hooks/useGetPresentaciones";
import { useProducto } from "@/hooks/useProducto";
import React from "react";

const Product = () => {
  const { getProductoActivo } = useProducto();
  const producto = getProductoActivo();
  const { isLoadingCategorias, getStateCategorias } = useGetCategorias();
  const { isLoadingPresentaciones, getStatePresentaciones } =
    useGetPresentaciones();
  const { values, handleInputChange, reset, handleInputCheck } = useForm({
    IdProducto: producto ? producto.idProducto : 0,
    NombreProducto: producto ? producto.nombreProducto : "",
    DescripcionProducto: producto ? producto.descripcionProducto : "",
    IdCategoria: producto ? producto.idCategoria : 0,
    IdPresentacion: producto ? producto.idProducto : 0,
    Cantidad_Producto: producto ? producto.idProducto : 0,
    Costo_unitario: producto ? producto.idProducto : 0,
    GrabaIva: producto ? producto.idProducto : 0,
    PorcentajeMargenGanancia: producto ? producto.idProducto : 0,
    ProductoActivo: producto ? producto.idProducto : 0,
  });
  const {
    IdProducto,
    NombreProducto,
    DescripcionProducto,
    IdCategoria,
    IdPresentacion,
    Cantidad_Producto,
    Costo_unitario,
    GrabaIva,
    PorcentajeMargenGanancia,
    ProductoActivo,
  } = values;
  if (isLoadingCategorias && isLoadingPresentaciones)
    return <h2 className="title is-2">Cargando </h2>;
  const listCategorias = getStateCategorias();
  const listPresentacion = getStatePresentaciones();

  return (
    <>
      <div className="container">
        <h2 className="title is-2">Agregar Producto </h2>
        <div className="field">
          <label className="label">Nombre Producto</label>
          <div className="control">
            <input
              className="input"
              name="NombreProducto"
              value={NombreProducto}
              type="text"
              placeholder="Nombre Producto"
              onChange={handleInputChange}
            />
          </div>
        </div>

        <div className="field">
          <label className="label">Descripcion Producto</label>
          <div className="control has-icons-left has-icons-right">
            <textarea
              className="textarea is-success"
              type="text"
              placeholder="Text input"
              name="DescripcionProducto"
              values={DescripcionProducto}
              onChange={handleInputChange}
            />
          </div>
        </div>

        <div className="field">
          <label className="label">Subject</label>
          <div className="control">
            <div className="select">
              <select>
                {listCategorias.map(() => {})}

                <option>Select dropdown</option>
                <option>With options</option>
              </select>
            </div>
          </div>
        </div>

        <div className="field">
          <div className="control">
            <label className="checkbox">
              <input type="checkbox" />I agree to the{" "}
              <a href="#">terms and conditions</a>
            </label>
          </div>
        </div>

        <div className="field">
          <div className="control">
            <label className="radio">
              <input type="radio" name="question" />
              Yes
            </label>
            <label className="radio">
              <input type="radio" name="question" />
              No
            </label>
          </div>
        </div>

        <div className="field is-grouped">
          <div className="control">
            <button className="button is-link">Submit</button>
          </div>
          <div className="control">
            <button className="button is-link is-light">Cancel</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;

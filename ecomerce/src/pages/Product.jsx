import React from "react";
import { useForm } from "@/hooks/useForm";
import useGetCategorias from "@/hooks/useGetCategorias";
import useGetPresentaciones from "@/hooks/useGetPresentaciones";
import { useProducto } from "@/hooks/useProducto";
import { InputsForm } from "@/components/InputsForm";
import { SelectForms } from "@/components/SelectForms";

const Product = () => {
  const { getProductoActivo, guardarProducto, eliminarProductoActico } =
    useProducto();
  const producto = getProductoActivo();
  const { isLoadingCategorias, getStateCategorias } = useGetCategorias();
  const { isLoadingPresentaciones, getStatePresentaciones } =
    useGetPresentaciones();
  const { values, handleInputChange, reset, handleInputCheck } = useForm({
    IdProducto: producto ? producto.idProducto : 0,
    NombreProducto: producto ? producto.nombreProducto : "",
    DescripcionProducto: producto ? producto.descripcionProducto : "",
    IdCategoria: producto ? producto.idCategoria : 0,
    IdPresentacion: producto ? producto.idPresentacion : 0,
    Cantidad_Producto: producto ? producto.stock : 0,
    Costo_unitario: producto ? producto.costoUnitario : 0.0,
    GrabaIva: producto ? producto.grabaIva : false,
    PorcentajeMargenGanancia: producto ? producto.margenGananacia : 0,
    ProductoActivo: producto ? producto.productoActivo : true,
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
  const cancelarGuardado = () => {
    eliminarProductoActico();
    reset({
      IdProducto: 0,
      NombreProducto: "",
      DescripcionProducto: "",
      IdCategoria: 0,
      IdPresentacion: 0,
      Cantidad_Producto: 0,
      Costo_unitario: 0.0,
      GrabaIva: false,
      PorcentajeMargenGanancia: 0,
      ProductoActivo: true,
    });
  };
  const guardarCambios = () => {
    (values.IdCategoria = parseInt(values.IdCategoria)),
      (values.IdPresentacion = parseInt(values.IdPresentacion)),
      (values.Cantidad_Producto = parseInt(values.Cantidad_Producto));
    values.Costo_unitario = parseFloat(values.Costo_unitario);
    guardarProducto(values);
    reset({
      IdProducto: 0,
      NombreProducto: "",
      DescripcionProducto: "",
      IdCategoria: 0,
      IdPresentacion: 0,
      Cantidad_Producto: 0,
      Costo_unitario: 0.0,
      GrabaIva: false,
      PorcentajeMargenGanancia: 0,
      ProductoActivo: true,
    });
  };

  return (
    <>
      <div className="container">
        <h2 className="title is-2">Agregar Producto </h2>
        <div className="field">
          <InputsForm
            label={"Nombre Producto"}
            componentName={"NombreProducto"}
            componentType={"text"}
            placeholder={"Nombre Producto"}
            componentValue={NombreProducto}
            onChance={handleInputChange}
          />
        </div>
        <div className="field">
          <label className="label"></label>
          <div className="control has-icons-left has-icons-right">
            <textarea
              className="textarea is-success"
              type="text"
              placeholder="Text input"
              name="DescripcionProducto"
              value={DescripcionProducto}
              onChange={handleInputChange}
            />
          </div>
        </div>

        <div className="field is-grouped">
          <div className="m-3">
            <SelectForms
              selectLabel={"Categoría"}
              onChange={handleInputChange}
              selectName={"IdCategoria"}
              selectValue={IdCategoria}
              listadoRender={listCategorias}
            />
          </div>
          <div className="m-3">
            <SelectForms
              selectLabel={"Presentación"}
              onChange={handleInputChange}
              selectName={"IdPresentacion"}
              selectValue={IdPresentacion}
              listadoRender={listPresentacion}
            />
          </div>
          <div className="m-3">
            <InputsForm
              label={IdProducto === 0 ? "Cantidad Ingreso" : "Stock Actual"}
              componentName={"Cantidad_Producto"}
              componentType={"number"}
              placeholder={"Nombre Cantidad Stock"}
              componentValue={Cantidad_Producto}
              onChance={handleInputChange}
              disabledComponent={IdProducto === 0 ? false : true}
            />
          </div>
          <div className="m-3">
            <InputsForm
              label={"Costo Producto"}
              componentName={"Costo_unitario"}
              componentType={"number"}
              placeholder={"Costo_unitario"}
              componentValue={Costo_unitario}
              onChance={handleInputChange}
            />
          </div>
          <div className="m-3">
            <InputsForm
              label={"Margen de Utilidad"}
              componentName={"PorcentajeMargenGanancia"}
              componentType={"number"}
              placeholder={"PorcentajeMargenGanancia"}
              componentValue={PorcentajeMargenGanancia}
              onChance={handleInputChange}
            />
          </div>
          <div className="m-3">
            <div className="control">
              <label className="checkbox">
                <input
                  type="checkbox"
                  name="ProductoActivo"
                  defaultChecked={ProductoActivo}
                  onChange={handleInputCheck}
                />
                Graba IVA
              </label>
            </div>
          </div>
          <div className="m-3">
            <div className="control">
              <label className="checkbox">
                <input
                  type="checkbox"
                  name="GrabaIva"
                  defaultChecked={GrabaIva}
                  onChange={handleInputCheck}
                />
                Activo
              </label>
            </div>
          </div>
        </div>
        <div className="field is-grouped">
          <div className="control">
            <button className="button is-link" onClick={guardarCambios}>
              {IdProducto === 0 ? "Guardar" : "Actualizar"}
            </button>
          </div>
          {IdProducto !== 0 && (
            <div className="control">
              <button
                className="button is-link is-light"
                onClick={cancelarGuardado}
              >
                Cancel
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Product;

import React from "react";

export const SelectForms = ({
  selectLabel,
  onChange,
  selectName,
  selectValue,
  listadoRender,
}) => {
  return (
    <>
      <label className="label">{selectLabel}</label>
      <div className="control">
        <div className="select">
          <select onChange={onChange} name={selectName} value={selectValue}>
            <option>Seleecione</option>
            {listadoRender.map((elemento) => {
              return (
                <option key={elemento.idItem + Date()} value={elemento.idItem}>
                  {elemento.descripcion}
                </option>
              );
            })}
          </select>
        </div>
      </div>
    </>
  );
};

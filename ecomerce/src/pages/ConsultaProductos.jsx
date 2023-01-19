import React from "react";
import { endPoints } from "@/assets/constantes";
import { useEffect, useState } from "react";
import { peticiones } from "@/helpers/peticiones";
const ConsultaProductos = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(peticiones(endPoints.ConsultarProductos));
  }, []);

  return (
    <div>
      <h1>asdasd</h1>
    </div>
  );
};
export default ConsultaProductos;

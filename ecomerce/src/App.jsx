import { Routes, Route } from "react-router-dom";
import Layout from "@/components/ui/Layaout";
import Product from "@/pages/Product";
import ConsultaProductos from "@/pages/ConsultaProductos";
import "bulma/css/bulma.min.css";
import Swal from "sweetalert2";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/producto" element={<Product />}></Route>
        <Route path="/consulta" element={<ConsultaProductos />}></Route>
        <Route path="*" element=""></Route>
      </Route>
    </Routes>
  );
};

export default App;

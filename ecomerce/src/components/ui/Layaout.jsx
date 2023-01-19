import { Outlet } from "react-router-dom";
import Nav from "@/components/ui/Nav";

const Layout = () => {
  return (
    <>
      <div className="row">
        <Nav />
      </div>
      <div className="row">
        <div className="columns is-desktop is-mobile">
          <div className="column is-12 ">
            <div className="container">
              <Outlet />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Layout;

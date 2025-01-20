import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/"></Link>
          </li>
          <li>
            <Link to="/plant-detils"></Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  )
};

export default Layout;
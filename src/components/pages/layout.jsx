import { Outlet, NavLink } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { MdAssessment } from "react-icons/md";
import { MdDashboard } from "react-icons/md";
import { MdGroups2 } from "react-icons/md";
import "../sidebar.css";

const Layout = () => {
  return (
    <div className="container">
      <nav className="sidebar">
        <ul className="icon">
          <NavLink to="/Home" className={"sidebarmenu"} activeClassName="active">
            <li className="sidebarmenu">
              <FaHome className="img" />
              <h1>Home</h1>
            </li>
          </NavLink>

          <NavLink to="/Mail" className={"sidebarmenu"} activeClassName="active">
            <li className="sidebarmenu">
              <IoIosMail className="img" />
              <h1>Mail</h1>
            </li>
          </NavLink>

          <NavLink to="/Analystics" className={"sidebarmenu"} activeClassName="active">
            <li className="sidebarmenu">
              <MdAssessment className="img" />
              <h1>Analystics</h1>
            </li>
          </NavLink>

          <NavLink to="/Dashboard" className={"sidebarmenu"} activeClassName="active">
            <li className="sidebarmenu">
              <MdDashboard className="img" />
              <h1>Dashboard</h1>
            </li>
          </NavLink>

          <NavLink to="/Friends" className={"sidebarmenu"} activeClassName="active">
            <li className="sidebarmenu">
              <MdGroups2 className="img" />
              <h1>Friends</h1>
            </li>
          </NavLink>
        </ul>
      </nav>
      <div className="sidebarcom">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;

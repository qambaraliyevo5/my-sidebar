import { Outlet, Link } from "react-router-dom";
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
         
            <Link to="/Home">
                <li className="active">
              <FaHome />
              Home{" "}
              </li>
            </Link>
          
          
            <Link to="/Mail">
             <li>
             <IoIosMail />
              Mail
             </li>
            </Link>
          
          
            <Link to="/Analystics">
              <li><MdAssessment />
              Analystics</li>
            </Link>
          
         
            <Link to="/Dashboard">
             <li>
             <MdDashboard />
              Dashboard
             </li>
           
            </Link>
          
        
            <Link to="/Friends">
              <li>
              <MdGroups2 />
              Friends
              </li>
            </Link>
          
        </ul>
      </nav>
      <div className="sidebarcom">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;

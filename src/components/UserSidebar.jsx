import { Link } from "react-router-dom";
import { useUser } from "../providers/AuthProvider";
import "./styles/UserSidebar.css";
import parking from "../img/parking.png";
import Permit from "../img/Permit.png";
import Report from "../img/Report.png";
export default function Sidebar() {
  const { user } = useUser();
  return (
    <div className="sidebar">
      <h3>
        Welcome &nbsp;
        {user.firstName}
      </h3>
      <div className="navItems">
        <Link to="/Parking" className="navItem">
          <img src={parking} alt="parking" className="navIcon" />
          <span className="navText">Parking</span>
        </Link>
        <Link to="/Permit" className="navItem">
          <img src={Permit} alt="permit" className="navIcon" />
          <span className="navText">Permit</span>
        </Link>
        <Link to="/Report" className="navItem">
          <img src={Report} alt="report" className="navIcon" />
          <span className="navText">Report</span>
        </Link>
      </div>
    </div>
  );
}

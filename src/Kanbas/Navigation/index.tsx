import { Link, useLocation } from "react-router-dom";
import "./index.css";
import { FaTachometerAlt, FaRegUserCircle, FaBook,FaCalendar ,FaQuestionCircle, FaClock, FaInbox, FaPalette, FaArrowAltCircleRight } from "react-icons/fa";
function KanbasNavigation() {
    const links = [
        { label: "Account", icon: <FaRegUserCircle className="fs-2 kanbas-gray" /> },
        { label: "Dashboard", icon: <FaTachometerAlt className="fs-2 kanbas-red" /> },
        { label: "Courses", icon: <FaBook className="fs-2 kanbas-red" /> },
        { label: "Calendar", icon: <FaCalendar className="fs-2 kanbas-red" /> },
        { label: "Inbox", icon: <FaInbox className="fs-2 kanbas-red" /> },  
        { label: "History", icon: <FaClock className="fs-2 kanbas-red" /> },
        { label: "Studio", icon: <FaPalette className="fs-2 kanbas-red" /> },  
        { label: "Commons", icon: <FaArrowAltCircleRight className="fs-2 kanbas-red" /> }, 
        { label: "Help", icon: <FaQuestionCircle className="fs-2 kanbas-red" /> } 
    ];
    const { pathname } = useLocation();
    return (
        <ul className="wd-kanbas-navigation">
            <li>
                <img
                    src="Images\neu.jpg"
                    width ="100%"
                />
                <Link to={`/Kanbas/Dashboard}`}> </Link>
            </li>
            {links.map((link, index) => (
                <li key={index} className={pathname.includes(link.label) ? "wd-active" : ""}>
                    <Link to={`/Kanbas/${link.label}`}> {link.icon} {link.label} </Link>
                </li>
            ))}
        </ul>
    );
}
export default KanbasNavigation;
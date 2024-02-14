import { Link, useLocation } from "react-router-dom";
import "./index.css"; // feel free to use the CSS from previous assignments
interface CourseNavigationProps {
  activeRoute: string;
}

const CourseNavigation: React.FC<CourseNavigationProps> = ({ activeRoute }) => {
  const links = ["Home", "Modules", "Piazza", "Grades", "Assignments", "Quizzes", "People"];
  const { pathname } = useLocation();

  return (
    <ul className="wd-navigation">
      {links.map((link, index) => (
        <li key={index} className={activeRoute === link ? "wd-active" : ""}>
          <Link to={link}>{link}</Link>
        </li>
      ))}
    </ul>
  );
}

export default CourseNavigation;
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { HiMiniBars3 } from "react-icons/hi2";
import { useParams, useLocation } from "react-router-dom";
import { courses } from "..//Database";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./Home";
import Modules from "./Modules";
import CourseNavigation from "./Navigation";
import Assignments from "./Assignments";
import "./index.css"
function Courses() {
  const { courseID } = useParams();
  const course = courses.find((course) => course._id === courseID);
  const { pathname } = useLocation();
  const [activeCourseNavigation, setActiveCourseNavigation] = useState("");

  useEffect(() => {
    const activeRouteName = pathname.split("/").pop();
    setActiveCourseNavigation(activeRouteName || "");
  }, [pathname]);
  return (
    <div>
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
              <HiMiniBars3 className="kanbas-red" />
          </li>
          <li className="breadcrumb-item kanbas-red">
            <Link className = "kanbas-red" to={`./Home`}>
              {course?.name}
            </Link>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            {activeCourseNavigation}
          </li>
        </ol>
      </nav>
      <CourseNavigation activeRoute={pathname}/>
      <div>
        <div
          className="overflow-y-scroll position-fixed bottom-0 end-0"
          style={{ left: "320px", top: "50px" }}
        >
          <Routes>
            <Route path="/" element={<Navigate to="Home" />} />
            <Route path="Home" element={<Home/>} />
            <Route path="Modules" element={<Modules/>} />
            <Route path="Piazza" element={<h1>Piazza</h1>} />
            <Route path="Assignments" element={<Assignments/>} />
            <Route path="Assignments/:assignmentId" element={<h1>Assignment Editor</h1>} />
            <Route path="Grades" element={<h1>Grades</h1>} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default Courses;

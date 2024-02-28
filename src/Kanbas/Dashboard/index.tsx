import React, { useState } from "react";
import { Link } from "react-router-dom";
import db from "../Database";
import "./index.css"
interface Course {
  _id: string;
  name: string;
  number: string;
  startDate: string;
  endDate: string;
  image: string;
}

interface DashboardProps {
  courses: Course[];
  course: Course;
  setCourse: React.Dispatch<React.SetStateAction<Course>>;
  addNewCourse: () => void;
  deleteCourse: (courseId: string) => void;
  updateCourse: () => void;
}
function Dashboard({
  courses,
  course,
  setCourse,
  addNewCourse,
  deleteCourse,
  updateCourse,
} : DashboardProps) {
  return (
    <>
      <div className="kanbas-column" style={{ width: "75%" }}>
        <h1>Dashboard</h1>
        <div className="mb-2 me-2" style={{ display: "inline-flex", alignItems: "center" }}>
          <h5>Course</h5>
          <input value={course.name} className="form-control"
            onChange={(e) => setCourse({ ...course, name: e.target.value })} />
          <input value={course.number} className="form-control"
            onChange={(e) => setCourse({ ...course, number: e.target.value })} />
          <input value={course.startDate} className="form-control" type="date"
            onChange={(e) => setCourse({ ...course, startDate: e.target.value })} />
          <input value={course.endDate} className="form-control" type="date"
            onChange={(e) => setCourse({ ...course, endDate: e.target.value })} />
          <button className="btn btn-danger ms-2 me-2 mb-2" onClick={addNewCourse} >
            Add
          </button>
          <button
            onClick={updateCourse}
            className="btn btn-warning mb-2 me-2"
          >
            Update
          </button>
        </div>
        <hr />
        <h2>Published Courses ({courses.length})</h2>
        <hr />
        <div className="d-flex flex-row flex-wrap">
          {courses.map((course, index) => (
            <a
              href={`../#/Kanbas/Courses/${course._id}`}
              className="kanbas-card"
              key={course._id}
            >
              <div className="card">
                <div className={`card-header bg-${getCourseColor(index)}`}>
                  <i className="fa fa-ellipsis-vertical float-end kanbas-ellipsis"></i>
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                </div>
                <div className="card-body kanbas-card-height">
                  <h5 className="card-title">{`${course.number} ${course._id} ${course.name}`}</h5>
                  <h6 className="card-title">{`${course.number}.${course._id}`}</h6>
                  <p className="card-text">{getCourseTerm(course.startDate)}</p>
                </div>
                <button
                  className="btn btn-dark ms-2 me-2 mb-2"
                  onClick={(event) => {
                    event.preventDefault();
                    setCourse(course);
                  }}
                >
                  Edit
                </button>
                <button
                  className="btn btn-danger ms-2 me-2 mb-2"
                  onClick={(event) => {
                    event.preventDefault();
                    deleteCourse(course._id);
                  }}
                >
                  Delete
                </button>
              </div>
            </a>
          ))}
        </div>
      </div>
    </>
  );
}


function getCourseTerm(startDate: string) {
  const date = new Date(startDate);
  const year = date.getFullYear();
  const month = date.getMonth() + 1;

  if (month >= 1 && month <= 4) {
    return `Spring ${year} Semester`;
  } else if (month >= 5 && month <= 8) {
    return `Summer ${year} Semester`;
  } else {
    return `Fall ${year} Semester`;
  }
}

function getCourseColor(index: number) {
  const colors = [
    "primary",
    "secondary",
    "success",
    "danger",
    "warning",
    "info",
  ];
  return colors[index % colors.length];
}

export default Dashboard;
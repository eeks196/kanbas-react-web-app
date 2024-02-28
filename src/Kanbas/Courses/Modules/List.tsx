import React, { useState } from "react";
import "./index.css";
import db from "../../Database";
import { FaEllipsisV, FaCheckCircle, FaPlusCircle } from "react-icons/fa";
import { useParams } from "react-router";
import ModuleButtons from "./Modulebuttons";
import { useSelector, useDispatch } from "react-redux";
import {
  addModule,
  deleteModule,
  updateModule,
  setModule,
} from "./modulesReducer";
import { KanbasState } from "../../store";
function ModuleList() {
  const { courseID } = useParams();
  const modules = useSelector((state: KanbasState) =>
    state.modulesReducer.modules);
  const module = useSelector((state: KanbasState) =>
    state.modulesReducer.module);
  const dispatch = useDispatch();
  return (
    <div>
      <ModuleButtons />
      <br />
      <br />
      <ul className="list-group">
        <li
          className="list-group-item"
          style={{ display: "inline-flex", alignItems: "center" }}
        >
          <input
            className="form-control me-2"
            value={module.name}
            onChange={(e) =>
              dispatch(setModule({ ...module, name: e.target.value }))
            }
          />
          <textarea
            className="form-control me-2"
            style={{ height: "2rem" }}
            value={module.description}
            onChange={(e) =>
              dispatch(setModule({ ...module, description: e.target.value }))
            }
          />
          <button
            className="btn btn-primary me-2"
            onClick={() => dispatch(updateModule(module))}
          >
            Update
          </button>

          <button
            className="btn btn-success me-2"
            onClick={() => dispatch(addModule({ ...module, course: courseID }))}
          >
            Add
          </button>
        </li>

        {modules
        .filter((module) => module.course === courseID)
        .map((module, index) => (
          <li key={index} className="list-group-item kanbas-module-padding">
            <div>
              <button
                className="btn btn-danger float-end mt-1"
                onClick={() => dispatch(deleteModule(module._id))}
              >
                Delete
              </button>
              <button
                className="btn btn-success float-end mt-1 me-2"
                onClick={() => dispatch(setModule(module))}
              >
                Edit
              </button>
              <b>{module.name}</b>
              <br />
              {module.description}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default ModuleList;
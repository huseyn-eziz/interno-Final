import React from "react";
import object from "../../../db.json";
import { FaArrowRight } from "react-icons/fa6";
import { Link } from "react-router-dom";
import ProjectDetail from "./ProjectDetail";

const ProjectPlan = () => {
  const array = object.users;
  return (
    <div className="container mx-auto flex my-10">
      <div className="grid grid-cols-3 gap-4">
        {array.map((elem) => (
          <div key={elem.id} className="col-span-1">
            <div className="flex flex-col  p-4 rounded-md items-center  gap-4">
              <div> {elem.title}</div>
              <div className="text-center">{elem.description}</div>
              <div ><Link className="flex items-center" href={<ProjectDetail/>}>Read More <span className="ml-3 text-[#CDA274] "> <FaArrowRight /></span></Link></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectPlan;

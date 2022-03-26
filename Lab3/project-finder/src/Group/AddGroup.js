import React from "react";
import { NavLink } from "react-router-dom";

const AddGroup = () => {
  return (
    <div>
      <NavLink className="btn btn-secondary" to="/listofgroups">
        Szukaj grupy
      </NavLink>
      <NavLink className="btn btn-secondary" to="/addgroup">
        Grupa szuka studenta
      </NavLink>
      <div>
        AddGroup
      </div>
    </div>
  );
};

export default AddGroup;

import React from "react";
import { NavLink } from "react-router-dom";

const ListOfGroups = () => {
  return (
    <div>
      <NavLink className="btn btn-secondary" to="/listofgroups">
        Szukaj grupy
      </NavLink>
      <NavLink className="btn btn-secondary" to="/addgroup">
        Grupa szuka studenta
      </NavLink>
      <div>
        ListOfGroup
      </div>
    </div>
  );
};

export default ListOfGroups;

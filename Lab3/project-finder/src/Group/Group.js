import React from "react";
import { NavLink, Routes, Route } from "react-router-dom";
import ListOfGroup from "./Group/ListOfGroup";
import AddGroup from "./Group/AddGroup";

const Group = () => {
  return (
    <div>
      <NavLink className="btn btn-secondary" to="/listofgroups">
        Szukaj grupy
      </NavLink>
      <NavLink className="btn btn-secondary" to="/addgroup">
        Grupa szuka studenta
      </NavLink>
      <Routes>
        <Route path="/listofgroups" element={<ListOfGroup />} />
        <Route path="/addgroup" element={<AddGroup />} />
      </Routes>
    </div>
  );
};

export default Group;

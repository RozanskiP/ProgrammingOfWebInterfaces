import React, { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import { Container } from "react-bootstrap";
import Group from "./Group";
import { ListOfGroupsContext } from "../state/Contex";

const ListOfGroups = () => {
  const { groups } = useContext(ListOfGroupsContext);

  // lista checkbox grup
  const [radioCheckbox, setRadioCheckbox] = useState("radioDescription");

  const handleSetRadioCheckbox = (event) => {
    setRadioCheckbox(event.target.value);
  };

  // filter do inputa grup
  const [filter, setFilter] = useState("");

  // zmiana filtra do inputa grup
  const handleSetFilter = (event) => {
    setFilter(event.target.value);
  };

  // tymczasowa lista do sortowania grup
  const filterListGroup = groups.filter((group) => {
    return radioCheckbox === "radioDescription"
      ? group.description.toLowerCase().includes(filter.toLowerCase())
      : group.subject.toLowerCase().includes(filter.toLowerCase());
  });

  return (
    <div>
      <NavLink className="btn btn-secondary m-2" to="/listofgroups">
        Szukaj grupy
      </NavLink>
      <NavLink className="btn btn-secondary m-2" to="/addgroup">
        Grupa szuka studenta
      </NavLink>
      <div>
        <Container>
          <div className="d-flex justify-content-around m-1">
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="flexRadioDefault"
                value="radioDescription"
                checked={radioCheckbox === "radioDescription"}
                onChange={handleSetRadioCheckbox}
              />
              <label className="form-check-label">Opis</label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="flexRadioDefault"
                value="radioSubject"
                checked={radioCheckbox === "radioSubject"}
                onChange={handleSetRadioCheckbox}
              />
              <label className="form-check-label">Przedmot</label>
            </div>
          </div>
          <div>
            <div className="input-group input-group-lg">
              <input
                type="text"
                id="search"
                placeholder="Przeszukaj przedmioty lub opisy"
                className="form-control"
                aria-label="Large"
                aria-describedby="inputGroup-sizing-sm"
                onChange={handleSetFilter}
              />
            </div>
          </div>
        </Container>
        {filterListGroup.map((val, index) => {
          return <Group group={val} key={index} />;
        })}
      </div>
    </div>
  );
};

export default ListOfGroups;

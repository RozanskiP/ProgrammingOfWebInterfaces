import React from "react";
import { NavLink } from "react-router-dom";
import Student from "./Student";
import { Container } from "react-bootstrap";

const ListOfStudents = (props) => {
  return (
    <div>
      <NavLink className="btn btn-secondary" to="/listofstudents">
        Szukaj studenta
      </NavLink>
      <NavLink className="btn btn-secondary" to="/addstudent">
        Dodaj nowego studenta
      </NavLink>
      <div>
        <Container>
          <div className="d-flex justify-content-around m-4">
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="flexRadioDefault"
                value="radioDescription"
                checked={props.radioCheckbox === "radioDescription"}
                onChange={props.handleSetRadioCheckbox}
              />
              <label className="form-check-label">
                Opis
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="flexRadioDefault"
                value="radioTags"
                checked={props.radioCheckbox === "radioTags"}
                onChange={props.handleSetRadioCheckbox}
              />
              <label className="form-check-label">
                Tagi
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="flexRadioDefault"
                value="radioSubject"
                checked={props.radioCheckbox === "radioSubject"}
                onChange={props.handleSetRadioCheckbox}
              />
              <label className="form-check-label">
                Przedmiot
              </label>
            </div>
          </div>
          <div>
            <div className="input-group input-group-lg">
              <input
                type="text"
                id="search"
                placeholder="Przeszukaj przedmioty opisy lub tagi"
                className="form-control"
                aria-label="Large"
                aria-describedby="inputGroup-sizing-sm"
                onChange={props.handleSetFilter}
              />
            </div>
          </div>
        </Container>
        {props.students.map((val, index) => {
          return <Student student={val} key={val.id}/>;
        })}
      </div>
    </div>
  );
};

export default ListOfStudents;

import React from "react";
import { NavLink } from "react-router-dom";

const AddStudent = (props) => {
  return (
    <div>
      <NavLink className="btn btn-secondary" to="/listofstudents">
        Szukaj studenta
      </NavLink>
      <NavLink className="btn btn-secondary" to="/addstudent">
        Dodaj nowego studenta
      </NavLink>
      <div className="container">
        <div className="row justify-content-md-center">
          <div className="col col-lg-6">
            <div className="form-group m-3">
              <label>Nazwa</label>
              <input
                type="text"
                className="form-control"
                value={props.student.name}
                name="name"
                placeholder="Nazwa"
                onChange={props.handleSetStudentInputsValue}
              />
              <small id="emailHelp" className="form-text text-muted">
                Ta nazwa będzie sie pojawiała jako twój identyfikator na stronie
                - Imie
              </small>
            </div>
            <div className="form-group m-3">
              <label>Email address</label>
              <input
                type="email"
                className="form-control"
                name="email"
                value={props.student.email}
                aria-describedby="emailHelp"
                placeholder="Wprowadz Email"
                onChange={props.handleSetStudentInputsValue}
              />
              <small id="emailHelp" className="form-text text-muted">
                Nigdy nie udostepnimy swojego emaila innym osoba
              </small>
            </div>
            <div className="form-group m-3">
              <label>Wprowadz nazwe przedmiotu</label>
              <input
                type="text"
                className="form-control"
                name="subject"
                value={props.student.subject}
                placeholder="Nazwa przedmiotu"
                onChange={props.handleSetStudentInputsValue}
              />
            </div>
            <div className="form-group m-3">
              <label>Wprowadz dzień i godzinę zajęć</label>
              <input
                type="text"
                className="form-control"
                name="group"
                value={props.student.group}
                placeholder="Kiedy"
                onChange={props.handleSetStudentInputsValue}
              />
            </div>
            <div className="form-group m-3">
              <label>
                Wprowadz Tagi ułatwiające wyszukiwanie (po przecinku)
              </label>
              <input
                type="text"
                className="form-control"
                name="tags"
                value={props.student.tags}
                placeholder="Tagi"
                onChange={props.handleSetStudentInputsValue}
              />
            </div>
            <div className="form-group m-3">
              <label>Opisz Siebie</label>
              <textarea
                className="form-control"
                name="description"
                value={props.student.description}
                rows="3"
                onChange={props.handleSetStudentInputsValue}
              ></textarea>
            </div>
            <button
              className="btn btn-success"
              onClick={props.handleSetStudent}
            >
              Dodaj swoje zgłoszenie
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddStudent;

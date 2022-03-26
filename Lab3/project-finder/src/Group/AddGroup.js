import React, { useState } from "react";
import ModalInput from "../components/ModalInput";
import { NavLink } from "react-router-dom";

const AddGroup = (props) => {
  // liczba członków grupy
  const [valueOfMembers, setValueOfMembers] = useState(1);

  const handleSetValueOfMembers = (event) => {
    setValueOfMembers(event.target.value);
  };

  const [show, setShow] = useState(false);

  const handleClose = () => {
    setShow(false);
    props.handleSetGroups();
  };

  const handleShow = () => {
    setShow(true);
  };

  return (
    <div>
      <NavLink className="btn btn-secondary" to="/listofgroups">
        Szukaj grupy
      </NavLink>
      <NavLink className="btn btn-secondary" to="/addgroup">
        Grupa szuka studenta
      </NavLink>
      <ModalInput
        valueOfMembers={valueOfMembers}
        show={show}
        handleClose={handleClose}
        handleShow={handleShow}
        member={props.member}
        handleSetMember={props.handleSetMember}
      />
      <div className="container">
        <div className="row justify-content-md-center">
          <div className="col col-lg-6">
            <div className="form-group m-3">
              <label>Nazwa grupy</label>
              <input
                type="text"
                className="form-control"
                value={props.group.name}
                name="name"
                placeholder="Nazwa"
                onChange={props.handleSetGroupInputsValue}
              />
              <small id="emailHelp" className="form-text text-muted">
                Ta nazwa będzie sie pojawiała jako twój identyfikator grupy na
                stronie
              </small>
            </div>
            <div className="form-group m-3">
              <label>Liczba osob w grupie</label>
              <input
                type="number"
                min="0"
                step="1"
                className="form-control"
                value={valueOfMembers}
                name="name"
                placeholder="Nazwa"
                onChange={handleSetValueOfMembers}
              />
            </div>
            <div className="form-group m-3">
              <label>Opisz Grupe</label>
              <textarea
                className="form-control"
                name="description"
                value={props.group.description}
                rows="3"
                onChange={props.handleSetGroupInputsValue}
              ></textarea>
            </div>
            <div className="form-group m-3">
              <label>Wprowadz nazwe przedmiotu</label>
              <input
                type="text"
                className="form-control"
                name="subject"
                value={props.group.subject}
                placeholder="Nazwa przedmiotu"
                onChange={props.handleSetGroupInputsValue}
              />
            </div>
            <button className="btn btn-success" onClick={handleShow}>
              Dodaj swoje zgłoszenie
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddGroup;

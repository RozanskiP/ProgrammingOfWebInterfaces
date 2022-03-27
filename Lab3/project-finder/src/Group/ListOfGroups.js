import React from "react";
import { NavLink } from "react-router-dom";
import { Container } from "react-bootstrap";
import Group from "./Group";

class ListOfGroups extends React.Component {
  render() {
    return (
      <div>
        <NavLink className="btn btn-secondary" to="/listofgroups">
          Szukaj grupy
        </NavLink>
        <NavLink className="btn btn-secondary" to="/addgroup">
          Grupa szuka studenta
        </NavLink>
        <div>
          <Container>
            <div className="d-flex justify-content-around m-4">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="flexRadioDefault"
                  value="radioDescriptionGroup"
                  checked={
                    this.props.radioCheckboxGroup === "radioDescriptionGroup"
                  }
                  onChange={this.props.handleSetRadioCheckboxGroup}
                />
                <label className="form-check-label">Opis</label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="flexRadioDefault"
                  value="radioSubjectGroup"
                  checked={
                    this.props.radioCheckboxGroup === "radioSubjectGroup"
                  }
                  onChange={this.props.handleSetRadioCheckboxGroup}
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
                onChange={this.props.handleSetFilterGroup}
              />
            </div>
          </div>
          </Container>
          {this.props.groups.map((val, index) => {
            return <Group group={val} key={val.id} handleSendData={this.props.handleSendData} />;
          })}
        </div>
      </div>
    );
  }
}

export default ListOfGroups;

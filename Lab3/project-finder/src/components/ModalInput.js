import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

const ModalInput = (props) => {
  return (
    <div>
      <Modal show={props.show} onHide={props.handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {[...Array(Number(props.valueOfMembers))].map((x, i) => (
            <div>
              <div>Member {i + 1}</div>
              <div>
                <div className="form-group m-3">
                  <label>Podaj Imie</label>
                  <input
                    type="text"
                    className="form-control"
                    name={"studentName-" + i}
                    value={props.member.studentName}
                    placeholder="Imie"
                    onChange={props.handleSetMember}
                  />
                </div>
                <div className="form-group m-3">
                  <label>Podaj Email</label>
                  <input
                    type="email"
                    className="form-control"
                    name={"email-" + i}
                    value={props.member.email}
                    placeholder="Email"
                    onChange={props.handleSetMember}
                  />
                </div>
                <div className="form-group m-3">
                  <label>Podaj czym sie zajmujesz w grupie</label>
                  <input
                    type="text"
                    className="form-control"
                    name={"whatStudentTo-" + i}
                    value={props.member.whatStudentTo}
                    placeholder="Czym sie zajmujesz"
                    onChange={props.handleSetMember}
                  />
                </div>
              </div>
            </div>
          ))}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={props.handleClose}>
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};
export default ModalInput;

import React from "react";
import { Card, Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Group = (props) => {
  const navigate = useNavigate();

  const handleClickContact = () => {
    navigate(`/listofgroups/${props.group.id}/contact`);
  };

  return (
    <Container>
      <div className="m-3">
        <Card className="text-center">
          <Card.Header>{props.group.subject}</Card.Header>
          <Card.Body>
            <Card.Title>{props.group.name}</Card.Title>
            <Card.Text>{props.group.description}</Card.Text>
            <button
              className="btn btn-success"
              id={"group-" + props.group.id}
              onClick={handleClickContact}
            >
              Wyslij zgloszenie
            </button>
          </Card.Body>
          <Card.Footer className="text-muted">
            {props.group.members.map((val) => {
              return (
                <>
                  {val.studentName} - {val.whatStudentTo},{" "}
                </>
              );
            })}
          </Card.Footer>
        </Card>
      </div>
    </Container>
  );
};

export default Group;

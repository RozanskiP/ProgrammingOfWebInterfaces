import React from "react";
import { Card, Container } from "react-bootstrap";

const Student = (props) => {
  return (
    <Container>
      <div className="m-3">
        <Card className="text-center">
          <Card.Header>
            {props.student.subject} - {props.student.group}
          </Card.Header>
          <Card.Body>
            <Card.Title>{props.student.name}</Card.Title>
            <Card.Text>{props.student.description}</Card.Text>
          </Card.Body>
          <Card.Footer className="text-muted">
            {props.student.tags.map((val) => {
              return <>{val}, </>;
            })}
          </Card.Footer>
        </Card>
      </div>
    </Container>
  );
};

export default Student;

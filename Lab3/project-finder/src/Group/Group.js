import React from "react";
import { Card, Container } from "react-bootstrap";

class Group extends React.Component{
  render(){
    return (
      <Container>
      <div className="m-3">
        <Card className="text-center">
          <Card.Header>
            {this.props.group.subject}
          </Card.Header>
          <Card.Body>
            <Card.Title>{this.props.group.name}</Card.Title>
            <Card.Text>{this.props.group.description}</Card.Text>
          </Card.Body>
          <Card.Footer className="text-muted">
            {this.props.group.members.map((val) => {
              return <>{val.studentName} - {val.whatStudentTo}, </>;
            })}
          </Card.Footer>
        </Card>
      </div>
    </Container>
    );
  }
};

export default Group;

import React from "react";
import { Card } from "react-bootstrap";

const SendMessage = (props) => {
  return (
    <div>
      <div className="container">
        <div className="row justify-content-md-center">
          <div className="col col-lg-6">
            <Card className="text-center">
              <Card.Header>{props.sendData.name}</Card.Header>
              <Card.Body>
                <Card.Title>{props.sendData.subject}</Card.Title>
                <Card.Text>{props.sendData.description}</Card.Text>
                <div className="form-group m-3">
                  <label>Wiadomość:</label>
                  <textarea
                    className="form-control"
                    name="description"
                    rows="3"
                  ></textarea>
                </div>
              </Card.Body>
              <Card.Footer className="text-muted">
                <button className="btn btn-success" onClick={props.handleBack}>
                  Wyslij
                </button>
              </Card.Footer>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SendMessage;

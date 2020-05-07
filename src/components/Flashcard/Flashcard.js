import React from "react";
import { Col, Button, CardText, Card, Row, CardTitle } from "reactstrap";

function Flashcard(props) {
  return (
    <Row key={props.word.id}>
      <Col sm={{ span: 3, offset: 1 }}>
        <Card body className="my-3">
          <CardTitle>{props.word.name}</CardTitle>
          <CardText>{props.word.definition}</CardText>
          <Button>This could flip</Button>
        </Card>
      </Col>
    </Row>
  );
}

export default Flashcard;

import React from "react";
import { Col, Button, CardText, Card, Row, CardTitle } from "reactstrap";
import { WordsContainer } from "../../context/WordsContainer";

function Flashcard() {
    const wordsContainer = WordsContainer.useContainer();
    return (
        <Row>
            <Col sm="2"></Col>
            <Col sm="8">
                <Card body>
                    <CardTitle>{wordsContainer.words.summary}</CardTitle>
                    <CardText>This could be the definition of the word. Who knows</CardText>
                    <Button>This could flip</Button>
                </Card>
            </Col>
            <Col sm="2"></Col>
        </Row>
    );
};

export default Flashcard;
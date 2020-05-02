import React from "react";
import { Col, Button, CardText, Card, Row, CardTitle } from "reactstrap";
import { WordsContainer } from "../../context/WordsContainer";

function Flashcard() {
    const wordsContainer = WordsContainer.useContainer();
    return (
        <Row>
            <Col sm={{span: 3, offset: 1}}>
                <Card body className="my-3">
                    <CardTitle>{wordsContainer.words.summary}</CardTitle>
                    <CardText>This could be the definition of the word. Who knows</CardText>
                    <Button>This could flip</Button>
                </Card>
                <Card body>
                    <CardTitle>{wordsContainer.words.summary}</CardTitle>
                    <CardText>This could be the definition of the word. Who knows</CardText>
                    <Button>This could flip</Button>
                </Card>
            </Col>
            <Col sm={{span: 3, offset: 1}}>
                <Card body className="my-3">
                    <CardTitle>{wordsContainer.words.summary}</CardTitle>
                    <CardText>This could be the definition of the word. Who knows</CardText>
                    <Button>This could flip</Button>
                </Card>
                <Card body>
                    <CardTitle>{wordsContainer.words.summary}</CardTitle>
                    <CardText>This could be the definition of the word. Who knows</CardText>
                    <Button>This could flip</Button>
                </Card>
            </Col>
            <Col sm={{span: 3, offset: 1}}>
                <Card body className="my-3">
                    <CardTitle>{wordsContainer.words.summary}</CardTitle>
                    <CardText>This could be the definition of the word. Who knows</CardText>
                    <Button>This could flip</Button>
                </Card>
                <Card body>
                    <CardTitle>{wordsContainer.words.summary}</CardTitle>
                    <CardText>This could be the definition of the word. Who knows</CardText>
                    <Button>This could flip</Button>
                </Card>
            </Col>
        </Row>
    );
};

export default Flashcard;
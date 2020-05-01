import React from "react";
import { Col, Container, Row } from "reactstrap";

function Header() {
    return (
        <Container fluid className="header">
            <Row className="h-100">
                <Col md="6" className="d-none d-md-flex">
                    <div>
                        <h5>Koine Greek Vocabulary</h5>
                    </div>
                </Col>

                <Col xs="12" md="6">
                    
                </Col>
            </Row>
        </Container>
    );
};

export default Header;
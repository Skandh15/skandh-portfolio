import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../css/Portfolio.css";
import { portfolioCards } from "../EditMe";

function Portfolio() {
    return (
        <Container className="portfolio-container">
            <Row style={{ justifyContent: "center" }}>
                {portfolioCards.map((card, key) => (
                    <Col xs={12} md={6} lg={4} className="portfolio-card" key={key}>
                        <div className="card-info">
                            <Row>
                                <Col xs={10} className="card-title">
                                    {card.projectTitle}
                                </Col>
                            </Row>
                            <Row>
                                <Col className="card-desc">{card.projectDesc}</Col>
                            </Row>
                        </div>
                    </Col>
                ))}
            </Row>
        </Container>
    );
}

export default Portfolio;

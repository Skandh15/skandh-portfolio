import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { PieChart } from "react-minimal-pie-chart";
import "../css/Skills.css";
import { } from "@fortawesome/free-solid-svg-icons";
import { skills } from "../EditMe";

function Skills() {
    return (
        <Container className="skills-section">
            <Row>
                <Col xs={12} sm={6}>
                    <PieChart
                        data={skills.skillsData}
                        label={({ dataEntry }) => dataEntry.title}
                        labelStyle={(index) => ({
                            fill: skills.skillsData[index].color,
                            fontSize: skills.fontSize,
                        })}
                        radius={skills.radius}
                        labelPosition={skills.labelPosition}
                        lineWidth={skills.lineWidth}
                        paddingAngle={skills.paddingAngle}
                    />
                </Col>
                <Col xs={12} sm={6} className="skills-panel">
                    {skills.skillsData.map((skill, key) => (
                        <span key={key}>
                            <p>
                                <span className="skills-highlight">{skill.title}</span>
                                <br />- {skill.description}
                                <br />
                                Experience:{" "}
                                <span className="skills-highlight">{skill.experience}</span>
                            </p>
                        </span>
                    ))}
                </Col>
            </Row>
        </Container>
    );
}

export default Skills;

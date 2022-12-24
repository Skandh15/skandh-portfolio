/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import clsx from 'clsx';

import { Row, Col } from 'react-bootstrap';

import '../css/Experience.css';
import { experience } from '../EditMe';

function Experience() {
    return (
        <Row className="experience-container">
            <Col xs={12} className="experience-section">
                {experience.experiences.map((company, key) =>
                    <Row className="company" key={key}>
                        <Col xs={12} md={3} style={{ textAlign: "right" }}>
                            <img className="companyLogo" src={clsx({
                                'https://quarkerp.com.br/images/logo-placeholder.png': company.companyLogo === "",
                                [company.companyLogo]: company.companyLogo !== "",
                            })} />
                        </Col>
                        <Col xs={12} md={9} className="companyDetails">
                            <p className="companyName">{company.companyName}</p>
                            <p className="companyLocation">{company.companyLocation}</p>
                            {company.roles.map((role, key) =>
                                <>
                                    <p className="role" key={key}>• {role.role}</p>
                                    <p className="role-time" key={key}>{role.startPeriod} - {role.endPeriod} • {role.type}</p>
                                    <p className="role-desc" key={key}>{role.description}</p>
                                </>
                            )}
                        </Col>
                    </Row>
                )}
            </Col>
        </Row>
    );
}

export default Experience;
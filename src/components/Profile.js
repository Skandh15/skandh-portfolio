import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../css/Profile.css";
import { faViber, faWhatsapp, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { information, socials } from "../EditMe";
import profile from "../profile.jpg";

function Profile() {
    return (
        <Container fluid className="profile-row">
            <Row>
                <Col className="column-greeting" xs={12} lg={4}>
                    <p className="greeting-sub">{information.welcomeMsg}</p>
                    <p className="greeting-name">{information.fullName}</p>
                </Col>
                <Col className="column-profile" xs={12} lg={4}>
                    <div className="profile">
                        <img
                            className="profile-img"
                            src={profile}
                            alt={information.fullName + "'s profile"}
                        ></img>
                    </div>
                    <div className="profile-socials">
                        <a
                            target="_blank"
                            rel="noreferrer"
                            href={socials.whatsappURL}
                            className="profile-whatsapp"
                        >
                            <FontAwesomeIcon icon={faWhatsapp} />
                        </a>
                        <a
                            target="_blank"
                            rel="noreferrer"
                            href={socials.callURL}
                            className="profile-call"
                        >
                            <FontAwesomeIcon icon={faViber} />
                        </a>
                        <a
                            target="_blank"
                            rel="noreferrer"
                            href={socials.linkedinURL}
                            className="profile-linkedin"
                        >
                            <FontAwesomeIcon icon={faLinkedin} />
                        </a>
                    </div>
                </Col>
                <Col className="column-status" xs={12} lg={4}>
                    <p className="lower-profile-text">{information.aboutMe}</p>
                    <p className="lower-profile-text-sub">{information.companyName}</p>
                </Col>
            </Row>
        </Container>
    );
}

export default Profile;

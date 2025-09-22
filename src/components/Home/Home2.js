import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ExperiencesSection from "../Projects/ExperiencesSection";
import myImg from "../../Assets/pp.jpeg";
import Tilt from "react-parallax-tilt";
import { AiFillGithub, AiOutlineMail } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LAISSE-MOI <span className="purple">ME PRÉSENTER</span>
            </h1>

            <p className="home-about-body">
              Bonjour, je m’appelle <b className="purple">Ewan LE FLOCH</b>.
              <br />
              je suis actuellement en{" "}
              <b className="purple">2ᵉ année de Master informatique</b>,
              parcours <b className="purple">TIIL-A</b> en alternance chez{" "}
              <b className="purple">ASI</b>
              &nbsp; et en formation à <b className="purple">l’UBO</b>.
              <br />
              <br />
              J’ai commencé ma formation informatique avec un diplôme de{" "}
              <b className="purple">BUT informatique</b>, anciennement DUT.
              <br />
              <br />
              J’aime découvrir de{" "}
              <b className="purple">nouveaux projets informatiques</b>
              &nbsp;et{" "}
              <b className="purple">explorer de nouvelles technologies</b>.
              Actuellement, je me suis intéressé au développement de jeux vidéo avec le moteur
              de jeu <b className="purple">Godot</b>.
              <br />
              <br />
              Je suis également passionné par le{" "}
              <b className="purple">monde de l’esport</b>, où je soutiens la team esport française Gentle Mates, actuellement championne du monde sur Fortnite.
              <br />
              Je suis également fan de <b className="purple">manga</b>, 
              où sur mes réseaux, je poste régulièrement des reviews de mes lectures.
            <br />
            </p>
          </Col>

          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>

        <Row>
          <Col md={12} className="home-about-social">
            <h1>RETROUVE-MOI</h1>
            <p>
              N’hésite pas à <span className="purple">me contacter</span>
            </p>

            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/ewalefloch"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>

              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/ewan-le-floch-10792b230/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>

              <li className="social-icons">
                <a
                  href="mailto:ewan.lefloch29@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiOutlineMail />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
      <br />
      <div className="home-container">
        <ExperiencesSection />
      </div>{" "}
    </Container>
  );
}

export default Home2;

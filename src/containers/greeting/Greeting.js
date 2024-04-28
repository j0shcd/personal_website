import React from "react";
import "./Greeting.css";
// import SocialMedia from "../../components/socialMedia/SocialMedia";
import Button from "../../components/button/Button";
import { greeting } from "../../portfolio";
import { Fade } from "react-reveal";
import BannerImg from "./BannerImg";
import Typewriter from "typewriter-effect";
import CompetitiveSites from "../../components/competitiveSites/CompetitiveSites";
import { competitiveSites } from "../../portfolio";
export default function Greeting(props) {
  const theme = props.theme;
  return (
    <Fade bottom duration={2000} distance="40px">
      <div className="greet-main" id="greeting">
        <div className="greeting-main">
          <div className="greeting-text-div">
            <div>
              <h1 className="greeting-text" style={{ color: theme.orange }}>
                {greeting.title}
              </h1>
              <h1 className="greeting-sub" style={{ color: theme.grayText }}>
                I'm <mark data-entity="person">{greeting.sub}</mark>
              </h1>
              <h1 className="greeting-typewriter" style={{ color: theme.blue }}>
                <Typewriter
                  onInit={(typewriter) => {
                    typewriter
                      .typeString("Robotics Engineer")
                      .pauseFor(200)
                      .deleteAll()
                      .typeString("Data Scientist")
                      .pauseFor(200)
                      .deleteAll()
                      .typeString("Computer Vision")
                      .pauseFor(200)
                      .deleteAll()
                      .typeString("AI Enthusiast")
                      .pauseFor(200)
                      .start();
                  }}
                  options={{
                    autoStart: true,
                    loop: true,
                  }}
                />
              </h1>
              <span
                className="greeting-text-span subTitle"
                style={{ color: theme.text }}
              >
                <div className="entities">
                  I am currently pursuing a{" "}
                  <mark data-entity="diploma">Master's degree in Robotics</mark>{" "}
                  with a minor in Data Science, specializing in the field of{" "}
                  <mark data-entity="passion">Artificial Intelligence</mark>,
                  with a particular focus on{" "}
                  <mark data-entity="skill">Computer Vision</mark>. <br />
                  Driven by a passion for innovative technologies, my goal is to
                  develop solutions that not only advance the field but also
                  tackle real-world challenges, improve quality of life and
                  deliver a{" "}
                  <mark data-entity="objective">
                    positive impact on the world
                  </mark>
                  .<br />
                  Outside of my technical pursuits, I enjoy{" "}
                  <mark data-entity="hobby">
                    exploring nature and traveling
                  </mark>
                  , which broaden my perspectives and inspire my professional
                  endeavors.
                </div>
              </span>
              <CompetitiveSites logos={competitiveSites.competitiveSites} />
              <div className="button-greeting-div">
                <Button text="Contact me" href="/contact" />
                <Button
                  text="See my resume"
                  newTab={true}
                  href={greeting.resumeLink}
                />
              </div>
            </div>
          </div>
          <div className="greeting-image-div">
            <BannerImg />
          </div>
        </div>
      </div>
    </Fade>
  );
}

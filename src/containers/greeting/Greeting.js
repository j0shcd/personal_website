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

import epfl_me from "../../assets/images/epfl_me.jpg";
import mountains from "../../assets/images/mountains.jpg";
import japan from "../../assets/images/japan.jpg";

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
                I'm {greeting.sub.split(" ")[0]}
                <br />
                {greeting.sub.split(" ").slice(1).join(" ")}
              </h1>
              <h1 className="greeting-typewriter" style={{ color: theme.blue }}>
                <Typewriter
                  onInit={(typewriter) => {
                    typewriter
                      .typeString("Data Science")
                      .pauseFor(200)
                      .deleteAll()
                      .typeString("Startups")
                      .pauseFor(200)
                      .deleteAll()
                      .typeString("Product")
                      .pauseFor(200)
                      .deleteAll()
                      .typeString("Machine Learning")
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
                  I'm an EPFL engineer and tech enthusiast with a passion for{" "}
                  <mark data-entity="skill">product innovation and data</mark>,
                  currently pursuing a{" "}
                  <mark data-entity="diploma">
                    Master's in Technology Management and Data Science
                  </mark>{" "}
                  after a{" "}
                  <mark data-entity="passion">
                    {" "}
                    Bachelor's in Microengineering
                  </mark>
                  .
                  <br />
                  <br />
                  During my studies at EPFL, I have spent time
                  <mark data-entity="objective">building rockets</mark> for the{" "}
                  <a
                    href="https://epflrocketteam.ch/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    EPFL Rocket Team
                  </a>
                  , been <mark data-entity="objective">President</mark> at the{" "}
                  <a
                    href="https://www.ec-epfl-unil.org/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Entrepreneur Club
                  </a>{" "}
                  and <mark data-entity="objective">Managing Partner</mark> at
                  student-led VC fund{" "}
                  <a
                    href="https://www.campus.founderful.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Founderful Campus
                  </a>
                  . I also worked for{" "}
                  <a
                    href="https://www.intel.com/content/www/us/en/research/neuromorphic-computing.html"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Intel Labs
                  </a>{" "}
                  as a <mark data-entity="objective">Software Engineer</mark>{" "}
                  and for{" "}
                  <a
                    href="https://www.daav.ch/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    DAAV
                  </a>{" "}
                  on <mark data-entity="objective">Business Development</mark>.
                  <br />
                  <br />
                  Outside of my professional pursuits, I enjoy{" "}
                  <mark data-entity="hobby">
                    exploring nature, photography, and cooking
                  </mark>
                  .
                </div>
              </span>
              <CompetitiveSites logos={competitiveSites.competitiveSites} />
              <div className="button-greeting-div">
                <Button text="Contact me" href="/contact" />
                {/* <Button
                  text="See my resume"
                  newTab={true}
                  href={greeting.resumeLink}
                /> */}
              </div>
            </div>
          </div>
          {/* <div className="greeting-image-div">
            <BannerImg />
          </div> */}
          <div className="greeting-image-div">
            <div className="image-container">
              <div className="image-stack">
                <img
                  src={epfl_me}
                  alt="EPFL and me"
                  className="image epfl_me"
                />
                <img
                  src={mountains}
                  alt="Mountains"
                  className="image mountains"
                />
                <img src={japan} alt="Japan" className="image Japan" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fade>
  );
}

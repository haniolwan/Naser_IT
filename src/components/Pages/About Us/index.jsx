import { Col, Row, Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Footer } from "../..";
import useScrollPosition from "../../../hooks/useScrollPosition";
import useWindowSize from "../../../hooks/useWindowSize";
import StaticNavbar from "../../common/Navbar/StaticNavbar";
import StickyNavbar from "../../common/Navbar/StickyNavbar";
import rightArrowImg from "../../../assets/angle-right-.svg";
import "./style.css";

function AboutUs() {
  const navigate = useNavigate();

  const scrollPosition = useScrollPosition();
  const { width: windowWidth } = useWindowSize();
  return (
    <>
      {windowWidth <= 1024 || scrollPosition >= 30 ? <StickyNavbar /> : null}
      <div className="services-page-container" data-aos="fade-down">
        {windowWidth > 1024 && <StaticNavbar />}
        <div className="heading-text">
          <h1>About Us</h1>
          <p>
            <span
              className="home-link"
              role="presentation"
              onClick={() => navigate("/")}
            >
              Home
            </span>
            <LazyLoadImage
              className="right-arrow"
              src={rightArrowImg}
              alt="SP.png"
            />
            About us
          </p>
        </div>
      </div>
      <Container className="about-page-content">
        <Row className="about-page-row">
          {/* <Col className="about-page-img">
            <LazyLoadImage className="profile-img" src={profileImg} alt="Aboutus.png" />
          </Col> */}
          <Col className="services-left-content">
            <div className="w-75">
              <h1 className="fw-bold pb-2 display-4">NASER AL-NAWATI</h1>
              <p className="lh-5 fs-5">
                As an expert in Quality Assurance and Software/System testing in
                the automotive industry, as well as a Test Automation expert, I
                have a strong understanding of the functional safety
                requirements and standards specific to the automotive industry,
                such as{" "}
                <a href="https://www.iso.org/standard/43464.html"> ISO 26262</a>
                . I have extensive experience in implementing Quality Assurance
                processes and conducting Software and System testing for
                automotive systems, as well as expertise in test automation. My
                expertise includes:
              </p>

              <p>
                &#x2022; Reviewing and ensuring compliance of requirements,
                design, and test plans to functional safety standards.
              </p>

              <p>
                &#x2022; Developing and implementing test strategies and plans
                for software and systems.
              </p>
              <p>
                &#x2022; Conducting unit, integration, and system testing to
                ensure functional safety.
              </p>
              <p>
                &#x2022; Designing and implementing automated test scripts and
                frameworks for software and systems.
              </p>
              <p>
                &#x2022; Using test management tools and test automation
                frameworks to ensure efficient and effective testing.
              </p>
              <p>
                &#x2022; Troubleshooting and debugging software and systems to
                identify and resolve functional safety issues.
              </p>
              <p className="">
                &#x2022; Providing guidance and mentoring to other team members
                on functional safety, testing best practices, and test
                automation.
              </p>
              <p className="lh-5 fs-6">
                I have experience working on specific projects and standards
                like{" "}
                <a href="https://www.iso.org/standard/60555.html"> ISO 15504</a>
                ,{" "}
                <a href="https://www.iso.org/standard/43464.html"> ISO 26262</a>
                , or{" "}
                <a href="https://www.iso.org/standard/70918.html">
                  {" "}
                  ISO/SAE 21434{" "}
                </a>
                I am able to communicate effectively with different
                stakeholders, including project managers, development teams, and
                regulatory bodies. I have strong problem-solving skills and am
                able to effectively manage competing priorities and deadlines.
                Overall, as an expert in Quality Assurance, Software/System
                testing and Test Automation in the automotive industry, I am a
                valuable asset for any organization looking to ensure the
                functional safety of their automotive systems and implement
                effective test automation strategies.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
}

export default AboutUs;

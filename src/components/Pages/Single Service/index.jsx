import {
  Container,
  Col,
  Row,
} from 'react-bootstrap';
import { useState } from 'react';
import {
  useNavigate,
  Routes,
  Route,
} from 'react-router-dom';
import PropTypes from 'prop-types';
import useScrollPosition from '../../../hooks/useScrollPosition';
import useWindowSize from '../../../hooks/useWindowSize';
import StaticNavbar from '../../common/Navbar/StaticNavbar';
import StickyNavbar from '../../common/Navbar/StickyNavbar';
import rightArrowImg from '../../../assets/angle-right-.svg';
import { NavigationTab, ProcessCard } from '../../common';
import { Footer } from '../..';
import computerImg from '../../../assets/computer.png';
import brainstormingImg from '../../../assets/brainstorming.png';
import wireframingImg from '../../../assets/wireframe.png';
import laptopImg from '../../../assets/laptop.png';
import processArrowImg from '../../../assets/services/right-arrow.png';
import webDesign from '../../../assets/web-design.jpg';
import webDesign2 from '../../../assets/web-design2.jpg';

import './style.css';

function SingleService({ title }) {
  const scrollPosition = useScrollPosition();
  const navigate = useNavigate();
  const { width: windowWidth } = useWindowSize();
  const [selectedTab, setSelectedTab] = useState(0);
  const setTap = (index) => {
    setSelectedTab(index);
  };
  return (
    <>
      {windowWidth <= 1024 || scrollPosition >= 30 ? <StickyNavbar /> : null}
      <div className="services-page-container" data-aos="fade-down">
        {windowWidth > 1024 && <StaticNavbar />}
        <div className="heading-text">
          <h1>{title}</h1>
          <p>
            <span
              className="home-link"
              role="presentation"
              onClick={() => navigate('/')}
            >
              Home

            </span>
            <img className="right-arrow" src={rightArrowImg} alt="SP.png" />
            <span
              className="home-link"
              role="presentation"
              onClick={() => navigate('/services')}
            >
              Services

            </span>
            <img className="right-arrow" src={rightArrowImg} alt="SP.png" />
            {title}
          </p>
        </div>
      </div>
      <Container className="mt-5">
        <Row className="processes-header-content">
          <Col className="services-left-content">
            <div className="services-header">
              <h1 className="services-header-text">{title}</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Morbi fermentum placerat leo, quis imperdiet odio ullamcorper at.
                Sed lacinia neque at nisl condimentum vestibulum.
                Aenean aliquet lorem vitae ex rhoncus condimentum.
                Cras blandit dui a porta malesuada. Nulla et elit ante.
                Morbi egestas velit vel feugiat condimentum. Aliquam erat volutpat.
              </p>
              <ul>
                <li>
                  <img className="list-icons" src={computerImg} alt="services.png" />
                  One design for your desktop, tab and mobile.
                </li>
                <li>
                  <img className="list-icons" src={computerImg} alt="services.png" />
                  Beautiful and modern design that makes difference.
                </li>
                <li>
                  <img className="list-icons" src={computerImg} alt="services.png" />
                  Boost your sales with strategically built user experience.
                </li>
              </ul>
            </div>
          </Col>
          <Col className="process-header-img">
            <img className="processes-section-header-img" src={webDesign} alt="Service.png" />
          </Col>
        </Row>
        <Row className="services-process-section">
          <div className="process-section">
            <h1 className="services-header-text">Our Process</h1>
            <p className="services-subtext">
              Great websites add great values to your business. From wire-framing to
              PSD designing, we do it all.
            </p>
          </div>
          <div className="navigation-taps-container">
            <div className="navigation-taps-content">
              <NavigationTab
                title="Consultation"
                path="/services/ui-design/consultation"
                setTap={setTap}
                option={0}
                selectedTab={selectedTab}
                imgSrc={brainstormingImg}
                classes="service-tap-img first-tab-img"
              />
              <img className={`process-arrow first-process-arrow ${selectedTab > 0 ? 'highlighted' : ''}`} src={processArrowImg} alt="arrow.png" />
              <NavigationTab
                title="Wire-frame"
                path="/services/ui-design/wire-frame"
                setTap={setTap}
                option={1}
                selectedTab={selectedTab}
                imgSrc={wireframingImg}
                classes="service-tap-img second-tab-img"
              />
              <img className={`process-arrow second-process-arrow ${selectedTab > 1 ? 'highlighted' : ''}`} src={processArrowImg} alt="right-arrow.png" />
              <NavigationTab
                title="Final Design"
                path="/services/ui-design/final-design"
                setTap={setTap}
                option={2}
                selectedTab={selectedTab}
                imgSrc={laptopImg}
                classes="service-tap-img third-tab-img"
              />
            </div>
          </div>
        </Row>

        <Routes>
          <Route
            path="/"
            element={(
              <ProcessCard
                imgSrc={webDesign2}
                title="Consultation"
                description="Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                        sed diam nonummy nibh euismod tincid unt ut laoreet dolore magna aliquam erat volutpat.
                        Ut wisi enim ad minim veniam."
                subDescription="Quis nostrud exerci tation ullam corper suscipit lobortis nisl ut aliquip ex ea
                        commodo consequat."
                option={selectedTab}
                nextOption={setTap}
                nextPath="services/ui-design/wire-frame"
              />
                        )}
          />
          <Route
            path="/wire-frame"
            element={(
              <ProcessCard
                imgSrc={webDesign2}
                title="Wireframing"
                description="Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                        sed diam nonummy nibh euismod tincid unt ut laoreet dolore magna aliquam erat volutpat.
                        Ut wisi enim ad minim veniam."
                subDescription="Quis nostrud exerci tation ullam corper suscipit lobortis nisl ut aliquip ex ea
                        commodo consequat."
                option={selectedTab}
                nextOption={setTap}
                nextPath="services/ui-design/final-design"
              />
                        )}
          />
          <Route
            path="/final-design"
            element={(
              <ProcessCard
                imgSrc={webDesign2}
                title="Final Design"
                description="Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                        sed diam nonummy nibh euismod tincid unt ut laoreet dolore magna aliquam erat volutpat.
                        Ut wisi enim ad minim veniam."
                subDescription="Quis nostrud exerci tation ullam corper suscipit lobortis nisl ut aliquip ex ea
                        commodo consequat."
                option={selectedTab}
                nextOption={setTap}
                nextPath="services/ui-design/consultation"
              />
                        )}
          />
          <Route
            path="/*"
            element={(
              <ProcessCard
                imgSrc={webDesign2}
                title="Consultation"
                description="Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                       sed diam nonummy nibh euismod tincid unt ut laoreet dolore magna aliquam erat volutpat.
                       Ut wisi enim ad minim veniam."
                subDescription="Quis nostrud exerci tation ullam corper suscipit lobortis nisl ut aliquip ex ea
                       commodo consequat."
                option={selectedTab}
                nextOption={setTap}
                nextPath="services/ui-design/wire-frame"
              />
                        )}
          />
        </Routes>
      </Container>
      <Footer />
    </>
  );
}

export default SingleService;

SingleService.propTypes = {
  title: PropTypes.string.isRequired,
};

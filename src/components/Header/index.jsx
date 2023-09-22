import { Container, Row, Col } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import useScrollPosition from "../../hooks/useScrollPosition";
import StaticNavbar from "../common/Navbar/StaticNavbar";
import StickyNavbar from "../common/Navbar/StickyNavbar";
import useWindowSize from "../../hooks/useWindowSize";

import "./style.css";

function Header() {
  const scrollPosition = useScrollPosition();
  const { width: windowWidth } = useWindowSize();
  const { t } = useTranslation();
  return (
    <div className="header">
      {windowWidth > 1024 && <StaticNavbar />}
      {windowWidth <= 1024 || scrollPosition >= 30 ? <StickyNavbar /> : null}
      <Container>
        <Row className="content">
          <Col className="header-right-content">
            <div
              className="welcome-msg mb-4"
              data-aos="fade-up"
              data-aos-delay="500"
              data-aos-easing="ease-in-out"
            >
              {t("Header.Content.Welcome")}
            </div>
            <h1 className="title mb-4" data-aos="fade-up" data-aos-delay="700">
              {t("Header.Content.Advertise")}
              <div className="aqua-line" />
            </h1>
            <h3 className="description" data-aos="fade-up" data-aos-delay="900">
              {t("Header.Content.Motive")}
            </h3>
            <button
              type="button"
              className="btn btn-warning get-started-button"
              data-aos="fade-up"
              data-aos-delay="1100"
            >
              {t("Header.Content.Get Started")}
            </button>
          </Col>
          <Col className="header-left-content">
            {/* <img src={headerImg} className="img-fluid header-image" alt="Header.jpg" /> */}
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Header;

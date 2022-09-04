import { LazyLoadImage } from 'react-lazy-load-image-component';
import {
  Col,
  Row,
  Placeholder,
} from 'react-bootstrap';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import processArrowImg from '../../../assets/services/right-arrow.png';

import './style.css';

function ProcessCard({
  imgSrc,
  title,
  description,
  subDescription,
  option,
  nextOption,
  nextPath,
}) {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setIsLoading(true);
    const loader = setTimeout(() => {
      setIsLoading(false);
    }, 500);
    return () => clearTimeout(loader);
  }, [option]);
  return (
    <div className="process-details-container">
      {isLoading ? (
        <Row className="process-details-content">
          <Col>
            <Placeholder animation="glow">
              <Placeholder className="process-title-loader rounded" xs={6} />
            </Placeholder>
          </Col>
          <Col>
            <Placeholder className="process-loading" animation="glow">
              <Placeholder className="first-details-loader rounded" xs={6} />
              <Placeholder className="second-details-loader rounded" xs={6} />
              <Placeholder className="third-details-loader rounded" xs={6} />
              <Placeholder className="rounded" as="p" bg="primary" xs={6} />
            </Placeholder>
          </Col>
        </Row>
      ) : (
        <Row className="process-details-content">
          <Col>
            <LazyLoadImage className="process-desc-img" src={imgSrc} alt="web design.png" />
          </Col>
          <Col className="single-process-description">
            <h1 className="subheading-process-title">{title}</h1>
            <p className="subheading-description">{description}</p>
            <p className="subheading-description">{subDescription}</p>
            <Link to={`/${nextPath}`}>
              <h4 className="text-only-btn" role="presentation" onClick={() => nextOption(option === 2 ? 0 : option + 1)}>
                Next Process
                <LazyLoadImage className="process-arrow second-process-arrow" src={processArrowImg} alt="right-arrow.png" />
              </h4>
            </Link>
          </Col>
        </Row>
      )}
    </div>
  );
}
export default ProcessCard;

ProcessCard.propTypes = {
  imgSrc: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  subDescription: PropTypes.string.isRequired,
  option: PropTypes.string.isRequired,
  nextOption: PropTypes.string.isRequired,
  nextPath: PropTypes.string.isRequired,
};

import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import rightArrowImg from '../../../assets/services/right-arrow.png';

function ServiceCard({
  url,
  img,
  blob,
  title,
  details,
  classes = '',
}) {
  const navigate = useNavigate();
  const navigation = (event) => {
    event.preventDefault();
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    return navigate(url);
  };
  return (
    <div className="service-card w-100" role="presentation" data-aos="fade-up" onClick={navigation}>
      <LazyLoadImage className={`service-img ${classes}`} src={img} alt="service.png" />
      <div className="card-icon-container">
        {blob}
      </div>
      <h2 className="card-title"><a href="/">{title}</a></h2>
      <p className="service-details">
        {details}
      </p>
      <a className="card-dicover-link" href="/" onClick={navigation}>
        Discover Now
        <LazyLoadImage className="arrow-img" src={rightArrowImg} alt="arrow.png" />
      </a>
    </div>
  );
}

export default ServiceCard;

ServiceCard.propTypes = {
  url: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  blob: PropTypes.shape({ blob: PropTypes.string }).isRequired,
  title: PropTypes.string.isRequired,
  details: PropTypes.string.isRequired,
  classes: PropTypes.string.isRequired,
};

import { useNavigate } from "react-router-dom";
import rightArrowImg from '../../../assets/services/right-arrow.png';

const ServiceCard = ({ url, img, blob, title, details, classes = '' }) => {
    const navigate = useNavigate();
    const navigation = (event) => {
        event.preventDefault();
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
        return navigate(url);
    }
    return (
        <div className="service-card" data-aos="fade-up" onClick={navigation}>
            <img className={`service-img ${classes}`} src={img} alt="service.png" />
            <div className="card-icon-container">
                {blob}
            </div>
            <h2 className="card-title"><a href="/">{title}</a></h2>
            <p className="service-details">
                {details}
            </p>
            <a className="card-dicover-link" href="/" onClick={navigation}>Discover Now
                <img className="arrow-img" src={rightArrowImg} alt="arrow.png" />
            </a>
        </div>
    )
}

export default ServiceCard;
import {
    Solutions,
    Footer,
} from '../..';
import { useNavigate } from "react-router-dom";
import { useScrollPosition } from '../../../hooks/useScrollPosition';
import { useWindowSize } from '../../../hooks/useWindowSize';
import { StaticNavbar } from '../../common/Navbar/StaticNavbar';
import { StickyNavbar } from '../../common/Navbar/StickyNavbar';
import rightArrowImg from '../../../assets/angle-right-.svg';
import './style.css';

const Services = () => {
    let navigate = useNavigate();

    const scrollPosition = useScrollPosition();
    const { width: windowWidth } = useWindowSize();
    return (
        <>
            {windowWidth <= 1024 ? <StickyNavbar /> : scrollPosition >= 30 ? <StickyNavbar /> : null}
            <div className="services-page-container" data-aos="fade-down">
                {windowWidth > 1024 && <StaticNavbar />}
                <div className="heading-text">
                    <h1>Services</h1>
                    <p>
                        <span className="home-link" onClick={() => navigate('/')}>Home</span>
                        <img className="right-arrow" src={rightArrowImg} alt="SP.png" />
                        Services
                    </p>
                </div>
            </div>
            <Solutions />
            <Footer />
        </>
    )
}

export default Services;
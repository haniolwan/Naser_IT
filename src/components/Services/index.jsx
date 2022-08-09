import {
    Container,
    Row,
    Col
} from 'react-bootstrap';
import responsiveImg from '../../assets/services/responsive.png';
import codeImg from '../../assets/services/code.png';
import mobileImg from '../../assets/services/mobile.png';
import qaImg from '../../assets/services/qa.png';
import designImg from '../../assets/services/design.png';
import handImg from '../../assets/services/hand.png';
import rightArrowImg from '../../assets/services/right-arrow.png';
import './style.css';

const Services = () => {
    return (
        <div className="services mt-5 mb-5">
            <Container className="services-container">
                <div className="process-title mb-4">
                    <h1 className="process-section-title">Solutions & Services</h1>
                    <p className="process-section-description">
                        We bring ideas to life!
                    </p>
                </div>
                <Row className="services-content">
                    <Col>
                        {/* First Card */}
                        <a className="card-link" href="/first-link">
                            <div className="service-card">
                                <img className="first-service-img service-img" src={responsiveImg} alt="service.png" />
                                <div className="card-icon-container">
                                    <svg
                                        xmlns="http://wwww.w3.org/2000/svg"
                                        xmlnsXlink="http://www.w3.org/1999/xlink" width="100px" height="80px">
                                        <path
                                            className="icon-bg-shape first-blob"
                                            d="M95.798,66.493 C95.402,67.238 94.989,67.934 94.568,68.608 C92.140,72.492 89.322,75.200 86.228,76.996 C75.718,83.098 62.044,78.694 49.794,74.183 C30.107,66.931 13.369,52.019 4.629,32.917 C0.428,23.737 -1.365,11.491 6.138,4.714 C11.356,0.001 19.072,-0.185 26.172,0.068 C26.493,0.079 26.814,0.090 27.132,0.103 C31.363,0.275 35.595,0.448 39.826,0.620 C45.043,0.833 50.261,1.045 55.479,1.256 C57.205,1.327 58.931,1.397 60.658,1.467 C67.392,1.740 74.374,2.077 80.361,5.160 C89.583,9.908 94.528,20.156 97.310,30.121 C97.438,30.578 97.561,31.039 97.682,31.500 C100.721,43.123 101.423,55.927 95.798,66.493 Z"></path>
                                    </svg>
                                </div>
                                <h2 className="card-title"><a href="/">App App Interface Makeover</a></h2>
                                <p className="service-details">
                                    Our UI designers can give your app's interface the facelift it needs to boost your sales,
                                    especially during these uncertain times.
                                </p>
                                <a className="card-dicover-link" href="/">Discover Now
                                    <img className="arrow-img" src={rightArrowImg} alt="arrow.png" />
                                </a>
                            </div>
                        </a>
                        {/* Forth Card */}
                        <a className="card-link" href="/forth-card">
                            <div className="service-card">
                                <img className="forth-service-img service-img" src={qaImg} alt="service.png" />
                                <div className="card-icon-container">
                                    <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="116px" height="81px">
                                        <path
                                            className="icon-bg-shape forth-blob"
                                            d="M109.211,58.119 C103.645,68.260 94.581,77.680 82.450,80.249 C73.546,82.134 64.269,80.109 55.400,78.092 C51.907,77.297 48.414,76.503 44.921,75.708 C40.378,74.674 35.835,73.641 31.291,72.607 C25.787,71.354 20.142,70.045 15.508,67.066 C9.647,63.297 8.873,57.835 6.412,52.231 C4.771,48.495 2.992,44.886 1.723,41.136 C0.784,38.357 0.123,35.500 0.013,32.453 C-0.185,27.013 1.715,21.246 5.539,17.213 C7.301,15.355 9.470,13.864 12.033,12.944 C22.467,9.200 34.071,16.001 45.211,14.807 C57.088,13.532 65.756,3.598 77.302,0.763 C89.987,-2.353 103.658,4.415 110.574,14.666 C111.487,16.019 112.287,17.429 112.946,18.888 C113.554,20.235 114.060,21.606 114.479,22.994 C115.652,26.875 116.114,30.898 115.979,34.945 C115.712,42.910 113.146,50.950 109.211,58.119 Z"></path>
                                    </svg>
                                </div>
                                <h2 className="card-title"><a href="/">
                                    QA and Testing
                                </a></h2>
                                <p className="service-details">
                                    We have a specialized team with great experience in Testing software using the best tools
                                </p>
                                <a className="card-dicover-link" href="/">Discover Now
                                    <img className="arrow-img" src={rightArrowImg} alt="arrow.png" />
                                </a>
                            </div>
                        </a>
                    </Col>
                    <Col>
                        {/* Second Card */}
                        <a className="card-link" href="">
                            <div className="service-card">
                                <img className="second-service-img service-img" src={codeImg} alt="service.png" />
                                <div className="card-icon-container">
                                    <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="105px" height="80px">
                                        <path
                                            className="icon-bg-shape second-blob"
                                            d="M104.768,46.596 C103.512,53.499 97.269,58.301 91.117,61.679 C77.841,68.967 63.002,72.833 48.310,76.516 C40.421,78.492 32.367,80.451 24.252,79.893 C23.977,79.874 23.702,79.851 23.426,79.826 C15.577,79.094 7.660,75.615 3.385,69.025 C0.518,64.605 -0.391,59.254 0.154,53.978 C0.481,50.815 1.330,47.677 2.594,44.784 C4.373,40.709 6.870,37.034 9.730,33.620 C12.289,30.568 15.138,27.725 18.038,25.002 C24.140,19.273 30.567,13.891 37.279,8.890 C41.647,5.637 46.299,2.342 51.494,0.551 C56.951,-1.331 61.008,1.926 65.771,4.608 C72.267,8.264 78.490,12.408 84.374,16.984 C86.832,18.895 89.229,20.884 91.564,22.945 C92.385,23.670 93.201,24.402 94.006,25.145 C96.362,27.319 98.710,29.770 100.630,32.428 C103.718,36.705 105.691,41.522 104.768,46.596 Z"></path>
                                    </svg>
                                </div>
                                <h2 className="card-title"><a href="/">Give Wings To Your Software Apps</a></h2>
                                <p className="service-details">
                                    We offer A-Z solutions for all your website needs!
                                    Boost your business performance with the best website it deserves!
                                </p>
                                <a className="card-dicover-link" href="/">Discover Now
                                    <img className="arrow-img" src={rightArrowImg} alt="arrow.png" />
                                </a>
                            </div>
                        </a>
                        {/* Fifth Card */}
                        <a className="card-link" href="">
                            <div className="service-card">
                                <img className="fifth-service-img service-img" src={designImg} alt="service.png" />
                                <div className="card-icon-container">
                                    <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="111px" height="79px">
                                        <path
                                            className="icon-bg-shape fifth-blob"
                                            d="M104.291,51.828 C98.019,60.839 88.939,65.934 79.675,69.589 C78.703,69.973 77.729,70.339 76.756,70.695 C70.214,73.079 63.555,75.012 56.818,76.487 C52.170,77.504 46.185,79.782 41.377,78.729 C35.709,77.491 29.573,72.385 24.073,66.622 C19.930,62.282 16.148,57.570 13.202,53.858 C9.879,49.670 6.733,45.085 4.332,40.057 C2.705,36.648 1.416,33.039 0.660,29.205 C0.495,28.369 0.363,27.520 0.260,26.664 C-0.809,17.814 1.431,8.213 7.280,3.434 C12.395,-0.743 19.166,-0.569 25.289,1.096 C31.411,2.760 37.332,5.756 43.525,6.802 C50.958,8.057 58.411,6.451 65.704,4.762 C72.997,3.075 80.398,1.296 87.854,2.211 C88.123,2.244 88.392,2.289 88.661,2.332 C95.524,3.379 102.448,7.076 106.734,13.861 C106.943,14.192 107.153,14.521 107.349,14.867 C113.666,26.001 111.221,41.873 104.291,51.828 Z"></path>
                                    </svg>
                                </div>
                                <h2 className="card-title"><a href="/">Software Maintenance Services</a></h2>
                                <p className="service-details">
                                    NASER IT application maintenance is a support service that ensures the stability of software
                                    applications and IT systems.
                                </p>
                                <a className="card-dicover-link" href="/">Discover Now
                                    <img className="arrow-img" src={rightArrowImg} alt="arrow.png" />
                                </a>
                            </div>
                        </a>
                    </Col>
                    <Col>
                        {/* Third Card */}
                        <a className="card-link" href="">
                            <div className="service-card">
                                <img className="third-service-img service-img" src={mobileImg} alt="service.png" />
                                <div className="card-icon-container">
                                    <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="119px" height="80px">
                                        <path className="icon-bg-shape third-blob"
                                            d="M118.988,32.868 C118.954,33.798 118.867,34.713 118.740,35.616 C117.289,45.963 109.998,54.513 102.246,60.696 C100.672,61.950 99.062,63.147 97.419,64.283 C85.885,72.259 72.742,77.274 59.279,78.981 C53.104,79.765 44.685,81.169 38.854,78.104 C32.784,74.915 27.054,69.136 21.255,65.231 C15.037,61.044 8.845,56.391 4.621,49.782 C0.397,43.173 -1.534,34.183 1.434,26.764 C2.652,23.719 4.595,21.166 6.927,19.084 C9.080,17.161 11.562,15.641 14.122,14.520 C16.812,13.341 19.604,12.537 22.432,11.873 C25.211,11.221 28.024,10.704 30.810,10.101 C32.737,9.685 34.655,9.223 36.569,8.737 C45.702,6.418 54.720,3.489 63.942,1.669 C75.098,-0.533 86.824,-1.043 97.533,3.095 C103.301,5.324 108.727,8.943 112.734,14.101 C114.004,15.737 115.121,17.535 116.049,19.444 C118.047,23.560 119.159,28.199 118.988,32.868 Z"></path>
                                    </svg>
                                </div>
                                <h2 className="card-title"><a href="/">Mobile Development</a></h2>
                                <p className="service-details">
                                    It is an application development service for Android or IOS devices,
                                    using the code Native or Native Cross Platfrom such as flutter
                                </p>
                                <a className="card-dicover-link" href="/">Discover Now
                                    <img className="arrow-img" src={rightArrowImg} alt="arrow.png" />
                                </a>
                            </div>
                        </a>
                        {/* Sixth Card */}
                        <a className="card-link" href="">
                            <div className="service-card">
                                <img className="sixth-service-img service-img" src={handImg} alt="service.png" />
                                <div className="card-icon-container">
                                    <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="112px" height="81px">
                                        <path
                                            className="icon-bg-shape sixth-blob"
                                            d="M94.170,75.633 C89.320,80.748 82.081,83.923 75.335,81.794 C69.399,79.922 65.020,74.470 59.599,71.197 C51.098,66.064 40.914,66.687 31.305,66.427 C27.387,66.323 23.278,65.938 19.374,64.964 C15.436,63.982 11.710,62.398 8.596,59.896 C7.227,58.797 5.976,57.524 4.879,56.041 C3.059,53.582 1.896,50.791 1.293,47.862 C-0.404,39.611 2.385,30.251 7.785,24.023 C13.919,16.948 22.510,13.058 31.345,10.292 C33.050,9.757 34.764,9.266 36.470,8.800 C39.687,7.924 42.924,7.120 46.176,6.383 C57.811,3.738 69.652,1.969 81.586,1.107 C82.278,1.057 82.974,1.011 83.672,0.974 C87.959,0.740 92.319,0.840 96.367,2.483 C105.518,6.200 110.819,17.150 111.330,27.451 C112.127,43.538 104.736,64.487 94.170,75.633 Z"></path>
                                    </svg>
                                </div>
                                <h2 className="card-title"><a href="/">Provide consulting</a></h2>
                                <p className="service-details">
                                    We provide technical consulting services to help technology companies
                                    overcome any problems that require much experience
                                </p>
                                <a className="card-dicover-link" href="/">Discover Now
                                    <img className="arrow-img" src={rightArrowImg} alt="arrow.png" />
                                </a>
                            </div>
                        </a>
                    </Col>
                </Row>
            </Container>
        </div >
    )
}

export default Services;
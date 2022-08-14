import {
    Link
} from 'react-router-dom';
const NavigationTab = ({
    title,
    path,
    setTap,
    selectedTab,
    option,
    imgSrc,
    classes
}) => {
    return (
        <Link className="tab-link" to={path} onClick={() => setTap(option)}>
            <div className={`nav-tap first-tap ${selectedTab === option || selectedTab > option ? "option-selected" : ""}`}>
                <div className="nav-tap-background"></div>
                <img className={classes} src={imgSrc} alt="nav-taps.png" />
                <h5 className="tap-title">
                    {title}
                </h5>
            </div>
        </Link>
    );
}
export default NavigationTab;
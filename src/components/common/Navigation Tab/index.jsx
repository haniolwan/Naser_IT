import { LazyLoadImage } from 'react-lazy-load-image-component';
import {
  Link,
} from 'react-router-dom';
import PropTypes from 'prop-types';

function NavigationTab({
  title,
  path,
  setTap,
  selectedTab,
  option,
  imgSrc,
  classes,
}) {
  return (
    <Link className="tab-link" to={path} onClick={() => setTap(option)}>
      <div className={`nav-tap first-tap ${selectedTab === option || selectedTab > option ? 'option-selected' : ''}`}>
        <div className="nav-tap-background" />
        <LazyLoadImage className={classes} src={imgSrc} alt="nav-taps.png" />
        <h5 className="tap-title">
          {title}
        </h5>
      </div>
    </Link>
  );
}
export default NavigationTab;

NavigationTab.propTypes = {
  title: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
  setTap: PropTypes.shape({ blob: PropTypes.string }).isRequired,
  selectedTab: PropTypes.string.isRequired,
  option: PropTypes.string.isRequired,
  imgSrc: PropTypes.string.isRequired,
  classes: PropTypes.string.isRequired,
};

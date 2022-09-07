import { LazyLoadImage } from 'react-lazy-load-image-component';
import useScrollPosition from '../../../hooks/useScrollPosition';
import upArrow from '../../../assets/up-arrow.png';

function BackToTopButton() {
  const scrollPosition = useScrollPosition();
  return (
    <div
      role="presentation"
      className={scrollPosition >= 300 ? 'show' : null}
      id="button"
      onClick={() => window.scrollTo(0, 0)}
    >
      <LazyLoadImage className="back-top-img" src={upArrow} alt="back-to-top.png" />
    </div>

  );
}

export default BackToTopButton;

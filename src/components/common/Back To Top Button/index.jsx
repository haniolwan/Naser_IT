import upArrow from '../../../assets/up-arrow.png';
import useScrollPosition from '../../../hooks/useScrollPosition';

function BackToTopButton() {
  const scrollPosition = useScrollPosition();

  return (
    <div
      role="presentation"
      className={scrollPosition >= 300 ? 'show' : null}
      id="button"
      onClick={() => window.scrollTo(0, 0)}
    >
      <img className="back-top-img" src={upArrow} alt="back-to-top.png" />
    </div>

  );
}

export default BackToTopButton;

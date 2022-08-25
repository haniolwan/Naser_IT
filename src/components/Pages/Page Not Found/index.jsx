import { useNavigate } from 'react-router-dom';
import './style.css';

function PageNotFound() {
  const navigate = useNavigate();
  return (
    <div className="not-found-container">
      <div className="not-found-content">
        <h1 className="text-light">404 - PAGE NOT FOUND</h1>
        <p className="text-light">
          The page you are looking for might have been
          removed had its name changed or is temporarily unavailable
        </p>
        <button
          type="button"
          className="btn btn-warning get-started-button"
          onClick={() => navigate('/')}
        >
          Go back to homepage
        </button>
      </div>
    </div>
  );
}
export default PageNotFound;

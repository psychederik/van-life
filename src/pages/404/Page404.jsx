import { Link } from 'react-router-dom';
import './Page404.css';

function Page404() {
   return (
      <div className="page-404-container">
         <h1>404: Page not found! 🦖</h1>
         <Link to="/" className="link-button">
            Go back to Homepage
         </Link>
      </div>
   );
}

export default Page404;

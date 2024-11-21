import { Link } from 'react-router-dom';

function Nav() {
   return (
      <header>
         <Link className="site-logo" to="/">
            #VANLIFE
         </Link>
         <nav>
            <Link to="/about">About</Link>
            <Link></Link>
         </nav>
      </header>
   );
}

export default Nav;

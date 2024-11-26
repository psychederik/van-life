import { NavLink } from 'react-router-dom';
import './HostVanDetailNav.css';

function HostVanLayout() {
   const activeStyles = {
      fontWeight: 'bold',
      textDecoration: 'underline',
      color: '#161616',
   };

   return (
      <>
         <nav className="host-van-detail-nav">
            <NavLink
               to="."
               end
               style={({ isActive }) => (isActive ? activeStyles : null)}
            >
               Info
            </NavLink>
            <NavLink
               to="pricing"
               style={({ isActive }) => (isActive ? activeStyles : null)}
            >
               Pricing
            </NavLink>
            <NavLink
               to="photos"
               style={({ isActive }) => (isActive ? activeStyles : null)}
            >
               Photos
            </NavLink>
         </nav>
      </>
   );
}

export default HostVanLayout;

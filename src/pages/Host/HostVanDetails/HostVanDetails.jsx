import { useEffect, useState } from 'react';
import { useParams, Link, Outlet } from 'react-router-dom';
import HostVanDetailsNav from '../../../components/HostVanDetailsNav';
import './HostVanDetails.css';

function HostVanDetails() {
   const [hostVanDetails, setHostVanDetails] = useState([]);
   const params = useParams();

   useEffect(() => {
      fetch(`/api/host/vans/${params.id}`)
         .then((res) => res.json())
         .then((data) => setHostVanDetails(data.vans));
   }, [params.id]);

   return (
      <div className="host-van-details-wrapper">
         {/* optionally use relative="path" */}
         <Link to={-1} className="back-button">
            ↩ Back to all vans
         </Link>
         <div className="host-van-details-layout-container">
            <div className="host-van-details">
               <img
                  src={hostVanDetails.imageUrl}
                  alt={`Photo of ${hostVanDetails.name}`}
               />
               <div className="host-van-details-info-text">
                  <i className={`van-type van-type-${hostVanDetails.type}`}>
                     {hostVanDetails.type}
                  </i>
                  <h3>{hostVanDetails.name}</h3>
                  <p>
                     <strong>${hostVanDetails.price}</strong>
                     <span>/day</span>
                  </p>
               </div>
            </div>
            <HostVanDetailsNav />
            <Outlet context={{ hostVanDetails }} />
         </div>
      </div>
   );
}

export default HostVanDetails;

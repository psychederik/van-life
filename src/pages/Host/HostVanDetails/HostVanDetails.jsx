import { useEffect, useState } from 'react';
import { useParams, Link, Outlet } from 'react-router-dom';
import { getHostVans } from '../../../api';
import HostVanDetailsNav from '../../../components/HostVanDetailsNav';
import './HostVanDetails.css';

function HostVanDetails() {
   const [hostVanDetails, setHostVanDetails] = useState([]);
   const [loading, setLoading] = useState(false);
   const [error, setError] = useState(null);
   const { id } = useParams();

   useEffect(() => {
      async function loadVans() {
         setLoading(true);
         try {
            const data = await getHostVans(id);
            setHostVanDetails(data);
         } catch (err) {
            setError(err);
         } finally {
            setLoading(false);
         }
      }

      loadVans();
   }, [id]);

   if (loading) {
      return <h1>Loading...</h1>;
   }

   if (error) {
      return <h1>There was an error: {error.message}</h1>;
   }

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

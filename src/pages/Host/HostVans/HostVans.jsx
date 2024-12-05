import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getHostVans } from '../../../api';
import './HostVans.css';

function HostVans() {
   const [hostVans, setHostVans] = useState([]);
   const [loading, setLoading] = useState(false);
   const [error, setError] = useState(null);

   useEffect(() => {
      async function loadVans() {
         setLoading(true);
         try {
            const data = await getHostVans();
            setHostVans(data);
         } catch (err) {
            setError(err);
         } finally {
            setLoading(false);
         }
      }
      loadVans();
   }, []);

   const hostVansElements = hostVans.map((van) => {
      return (
         <Link to={van.id} key={van.id} className="host-van-link-wrapper">
            <div key={van.id} className="host-van-single">
               <img src={van.imageUrl} alt={`Photo of ${van.name}`} />
               <div className="host-van-info">
                  <h3>{van.name}</h3>
                  <p>
                     ${van.price}
                     <span>/day</span>
                  </p>
               </div>
            </div>
         </Link>
      );
   });

   if (loading) {
      return <h1>Loading...</h1>;
   }

   if (error) {
      return <h1>There was an error: {error.message}</h1>;
   }

   return (
      <section>
         <h1 className="host-vans-title">Your listed vans</h1>
         <div className="host-vans-list">
            {hostVans.length > 0 ? (
               <section>{hostVansElements}</section>
            ) : (
               <h2>No vans listed</h2>
            )}
         </div>
      </section>
   );
}

export default HostVans;

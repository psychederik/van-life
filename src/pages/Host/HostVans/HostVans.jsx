import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './HostVans.css';

function HostVans() {
   const [hostVans, setHostVans] = useState([]);

   useEffect(() => {
      fetch(`/api/host/vans`)
         .then((res) => res.json())
         .then((data) => setHostVans(data.vans));
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

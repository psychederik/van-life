import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Vans.css';

function Vans() {
   const [vans, setVans] = useState([]);

   useEffect(() => {
      fetch('/api/vans')
         .then((res) => res.json())
         .then((data) => setVans(data.vans));
   }, []);

   const vanElements = vans.map((van) => {
      return (
         <div key={van.id} className="van-tile">
            <Link to={`/vans/${van.id}`}>
               <img src={van.imageUrl} alt={`Image for ${van.name}`} />
               <div className="van-info">
                  <h3>{van.name}</h3>
                  <div className="van-price">
                     <h3>${van.price}</h3>
                     <span>/day</span>
                  </div>
               </div>
               <button className={`van-type ${van.type} selected`}>
                  {van.type.toUpperCase()}
               </button>
            </Link>
         </div>
      );
   });

   return (
      <div className="van-list-container">
         <h1>Explore our van options</h1>
         <div className="van-list">{vanElements}</div>
      </div>
   );
}

export default Vans;

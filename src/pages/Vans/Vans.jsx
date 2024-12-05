import { useState, useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { getVans } from '../../api';
import './Vans.css';

function Vans() {
   const [searchParams, setSearchParams] = useSearchParams();
   const [vans, setVans] = useState([]);
   const [loading, setLoading] = useState(false);
   const [error, setError] = useState(null);

   const typeFilter = searchParams.get('type');

   // useEffect(() => {
   //    fetch('/api/vans')
   //       .then((res) => res.json())
   //       .then((data) => setVans(data.vans));
   // }, []);
   useEffect(() => {
      async function loadVans() {
         setLoading(true);
         try {
            const data = await getVans();
            setVans(data);
         } catch (err) {
            setError(err);
         } finally {
            setLoading(false);
         }
      }

      loadVans();
   }, []);

   const displayedVans = typeFilter
      ? vans.filter((van) => van.type.toLowerCase() === typeFilter)
      : vans;

   // function genNewSearchParamString(key, value) {
   //    const sp = new URLSearchParams(searchParams);
   //    if (value === null) {
   //       sp.delete(key);
   //    } else {
   //       sp.set(key, value);
   //    }
   //    return `?${sp.toString()}`;
   // }

   function handleFilterChange(key, value) {
      setSearchParams((prevParams) => {
         if (value === null) {
            prevParams.delete(key);
         } else {
            prevParams.set(key, value);
         }
         return prevParams;
      });
   }

   const vanElements = displayedVans.map((van) => {
      return (
         <div key={van.id} className="van-tile">
            <Link
               to={van.id}
               state={{
                  search: `?${searchParams.toString()}`,
                  type: typeFilter,
               }}
            >
               <img src={van.imageUrl} alt={`Image for ${van.name}`} />
               <div className="van-info">
                  <h3>{van.name}</h3>
                  <div className="van-price">
                     <h3>${van.price}</h3>
                     <span>/day</span>
                  </div>
               </div>
               <button className={`van-type ${van.type} selected`}>
                  {van.type}
               </button>
            </Link>
         </div>
      );
   });

   if (loading) {
      return <h1 aria-live="polite">Loading...</h1>;
   }

   if (error) {
      return <h1 aria-live="assertive">There was an error: {error.message}</h1>;
   }

   return (
      <div className="van-list-container">
         <h1>Explore our van options</h1>
         <div className="van-list-filter-buttons">
            <button
               onClick={() => handleFilterChange('type', 'simple')}
               className={`van-type simple ${
                  typeFilter === 'simple' ? 'selected' : ''
               }`}
            >
               Simple
            </button>
            <button
               onClick={() => handleFilterChange('type', 'luxury')}
               className={`van-type luxury ${
                  typeFilter === 'luxury' ? 'selected' : ''
               }`}
            >
               Luxury
            </button>
            <button
               onClick={() => handleFilterChange('type', 'rugged')}
               className={`van-type rugged ${
                  typeFilter === 'rugged' ? 'selected' : ''
               }`}
            >
               Rugged
            </button>

            {typeFilter ? (
               <button
                  onClick={() => handleFilterChange('type', null)}
                  className="van-type clear-filters"
               >
                  Clear filter
               </button>
            ) : null}
         </div>
         <div className="van-list">{vanElements}</div>
      </div>
   );
}

export default Vans;

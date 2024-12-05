import { useParams, Link, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getVans } from '../../api';
import './VanDetails.css';

function VanDetails() {
   const [vanDetails, setVanDetails] = useState([]);
   const [loading, setLoading] = useState(false);
   const [error, setError] = useState(null);
   const { id } = useParams();
   const location = useLocation();

   useEffect(() => {
      async function loadVans() {
         setLoading(true);
         try {
            const data = await getVans(id);
            setVanDetails(data);
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

   const search = location.state?.search || '';
   const type = location.state?.type || 'all';

   return (
      <div className="van-details-container">
         <Link to={`..${search}`} relative="path" className="back-button">
            ↩ Back to {type} vans
         </Link>
         <div className="van-details">
            <img src={vanDetails.imageUrl} alt="" />
            <i className={`van-type ${vanDetails.type} selected`}>
               {vanDetails.type}
            </i>
            <h1>{vanDetails.name}</h1>
            <p className="van-price">
               <span>${vanDetails.price}</span>
               /day
            </p>
            <p>{vanDetails.description}</p>
            <button className="link-button">Rent this van</button>
         </div>
      </div>
   );
}

export default VanDetails;

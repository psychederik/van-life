import { useParams, Link, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import './VanDetails.css';

function VanDetails() {
   const [vanDetails, setVanDetails] = useState([]);
   const params = useParams();
   const location = useLocation();

   useEffect(() => {
      fetch(`/api/vans/${params.id}`)
         .then((res) => res.json())
         .then((data) => setVanDetails(data.vans));
   }, [params.id]);

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

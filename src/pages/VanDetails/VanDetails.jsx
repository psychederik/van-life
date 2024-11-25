import { useParams, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import './VanDetails.css';

function VanDetails() {
   const [vanDetails, setVanDetails] = useState([]);
   const params = useParams();

   useEffect(() => {
      fetch(`/api/vans/${params.id}`)
         .then((res) => res.json())
         .then((data) => setVanDetails(data.vans));
   }, [params.id]);

   return (
      <div className="van-details-container">
         <Link to="/vans" className="back-button">
            ↩ Back to all vans
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

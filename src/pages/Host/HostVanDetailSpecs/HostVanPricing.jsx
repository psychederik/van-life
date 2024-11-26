import { useOutletContext } from 'react-router-dom';
import './HostVanDetailSpecs.css';

function HostVanPricing() {
   const { hostVanDetails } = useOutletContext();

   return (
      <h3 className="host-van-price">
         ${hostVanDetails.price}
         <span>/day</span>
      </h3>
   );
}

export default HostVanPricing;

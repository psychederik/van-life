import { useOutletContext } from 'react-router-dom';
import './HostVanDetailSpecs.css';

function HostVanInfo() {
   const { hostVanDetails } = useOutletContext();

   return (
      <section className="host-van-detail-info">
         <h4>
            Name: <span>{hostVanDetails.name}</span>
         </h4>
         <h4>
            Category: <span>{hostVanDetails.type}</span>
         </h4>
         <h4>
            Description: <span>{hostVanDetails.description}</span>
         </h4>
         <h4>
            Visibility: <span>public</span>
         </h4>
      </section>
   );
}

export default HostVanInfo;

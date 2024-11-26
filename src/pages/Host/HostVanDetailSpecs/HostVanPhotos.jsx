import { useOutletContext } from 'react-router-dom';
import './HostVanDetailSpecs.css';

function HostVanPhotos() {
   const { hostVanDetails } = useOutletContext();

   return (
      <img
         src={hostVanDetails.imageUrl}
         className="host-van-detail-image"
         alt=""
      />
   );
}

export default HostVanPhotos;

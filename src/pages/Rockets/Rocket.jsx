import React from 'react';
import { bookRockets, cancelBooking } from '../../redux/Rockets/RocketsSlice';
import { useDispatch } from 'react-redux';

const Rocket = (props) => {
  const rocket = props;
  const dispatch = useDispatch();

  const bookRocket = (id) => {
    dispatch(bookRockets(id));
  }

  const cancelRocket = (id) => {
    dispatch(cancelBooking(id));
  }

 return (
   <section className='container text-center rocket-container'>
     <div className='row justify-content-center'>
       <div className='col-3'>
         <img
           src={rocket.flickr_images}
           alt='rocket photo'
           className='rocket-img'
         />
       </div>
       <div className='col-6 info'>
         <h1>{rocket.rocket_name}</h1>
         <p>
           {rocket.reserved && (
             <span className='btn btn-primary btn-sm m-1'>Reserved</span>
           )}
           {rocket.description}
         </p>
         {rocket.reserved ? (
           <button
             onClick={() => cancelRocket(rocket.id)}
             className='btn btn-light btn-lg btn-outline-dark'
           >
             Cancel Reservation
           </button>
         ) : (
           <button
             onClick={() => bookRocket(rocket.id)}
             className='btn btn-primary btn-lg'
           >
             Reserve Rocket
           </button>
         )}
       </div>
     </div>
   </section>
 );
}
 
export default Rocket;
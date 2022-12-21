import React from 'react';

const Rocket = (props) => {
  const rocket = props;
  console.log(rocket);
 return (
   <section>
     <div>
       <img src={rocket.flickr_images} alt='rocket photo' />
     </div>
     <div className='info'>
       <h1>{rocket.rocket_name}</h1>
       <p>{rocket.description}</p>
       <button>Reserve Rocket</button>
     </div>
   </section>
 );
}
 
export default Rocket;
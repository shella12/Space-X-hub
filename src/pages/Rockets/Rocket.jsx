import React from 'react';

const Rocket = ({rocket}) => {
 return (
   <section>
     <div>
       <img src={rocket.flickr_images} alt='rocket photo' />
     </div>
     <div className='info'>
       <h1>{book.rocket_name}</h1>
       <p>{book.description}</p>
       <button >Reserve Rocket</button>
     </div>
   </section>
 );
}
 
export default Rocket;
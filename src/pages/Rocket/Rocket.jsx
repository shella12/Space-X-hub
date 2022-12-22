import React from 'react';
import { useDispatch } from 'react-redux';
import { bookRockets, cancelBooking } from '../../redux/Rockets/Rockets';

const Rocket = (props) => {
  const rocket = props;
  const dispatch = useDispatch();

  const bookRocket = (id) => {
    console.log(id);
    dispatch(bookRockets(id));
  };

  const cancelRocket = (id) => {
    console.log(id);
    dispatch(cancelBooking(id));
  };

  return (
    <section className='container text-center rocket-container'>
      <div className='col-4'>
        <img
          src={rocket.flickr_images}
          alt='rocket images'
          className='rocket-img'
        />
      </div>
      <div className='col-6 info'>
        <h1>{rocket.rocket_name}</h1>
        <p>
          {rocket.reserved && (
            <p className='btn btn-primary btn-sm m-1'>Reserved</p>
          )}
          {rocket.description}
        </p>
        {rocket.reserved ? (
          <button
            type='button'
            className='btn btn-light btn-lg btn-outline-dark'
            onClick={() => cancelRocket(rocket.id)}
          >
            Cancel Reservation
          </button>
        ) : (
          <button
            type='button'
            onClick={() => bookRocket(rocket.id)}
            className='btn btn-primary btn-lg'
          >
            Reserve Rocket
          </button>
        )}
      </div>
    </section>
  );
};
export default Rocket;

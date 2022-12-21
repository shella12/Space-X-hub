import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getRocketData } from '../../redux/Rockets/Rockets';
import Rocket from './Rocket';

const RocketsContainer = () => {
  const { rockets } = useSelector((store) => store.rockets);
  console.log({ rockets });

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getRocketData());
  }, []);

  return (
    <section className='container'>
      <ul>
        {rockets.map((rocket) => (
          <Rocket
            key={rocket.id}
            name={rocket.rocket_name}
            flickr_images={rocket.flickr_images}
            description={rocket.description}
          />
        ))}
      </ul>
    </section>
  );
};

export default RocketsContainer;

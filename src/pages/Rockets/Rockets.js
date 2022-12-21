import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getRocketData } from '../../redux/Rockets/RocketsSlice';
import Rocket from './Rocket';

const RocketsContainer = () => {
  const { rockets } = useSelector((store) => store.rockets);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getRocketData());
  });

  return (
    <section className="container m-2">
      <ul className="d-flex flex-column align-items">
        {rockets.map((rocket) => (
          <Rocket
            key={rocket.id}
            reserved={rocket?.reserved}
            id={rocket.id}
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

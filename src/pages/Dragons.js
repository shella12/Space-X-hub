import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchDragons } from '../redux/Dragon/Dragon';
import dragonItem from '../components/DragonItem';

const Dragons = () => {
  const dragons = useSelector((state) => state.dragons);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchDragons());
  }, []);

  return (
    <div className="list-container">
      {dragons.map((dragon) => (
        <dragonItem
          key={dragon.id}
          name={dragon.name}
          type={dragon.type}
          flickr_images={dragon.flickr_images}
        />
      ))}
    </div>
  );
};

export default Dragons;

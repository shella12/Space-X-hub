import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchDragons, reserveDragon } from '../redux/Dragon/Dragon';
import DragonItem from '../components/DragonItem';

const Dragons = () => {
  const dragons = useSelector((state) => state.dragons);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchDragons());
  }, [dispatch]);

  const onReserve = (e) => {
    dispatch(reserveDragon(e.target.id));
  };

  return (
    <div className="list-container">
      {dragons.map((dragon) => (
        <DragonItem
          reserve={onReserve}
          id={dragon.id}
          key={dragon.id}
          name={dragon.name}
          type={dragon.type}
          img={dragon.img}
        />
      ))}
    </div>
  );
};

export default Dragons;

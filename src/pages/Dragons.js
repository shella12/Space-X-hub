import React, { useEffect } from 'react';
import { ListGroup } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { fetchDragons, reserveDragon, cancelDragon } from '../redux/Dragon/Dragon';
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

  const onCancel = (e) => {
    dispatch(cancelDragon(e.target.id));
  };

  return (
    <ListGroup className="pb-4 pt-2 ms-4 me-4 border-top rounded-0 border-2">
      {dragons.map((dragon) => (
        <DragonItem
          cancel={onCancel}
          reserve={onReserve}
          key={dragon.id}
          dragon={dragon}
        />
      ))}
    </ListGroup>
  );
};

export default Dragons;

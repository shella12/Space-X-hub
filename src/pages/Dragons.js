import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchDragons } from '../redux/Dragon/Dragon';

const Dragons = () => {
  const state = useSelector((state) => state.dragons);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchDragons());
  }, []);

  return (
    <>
      <div className="list-container">

      </div>
    </>
  );
};

export default Dragons;

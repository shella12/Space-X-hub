import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchDragons } from '../redux/Dragon/Dragon';

const Dragons = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchDragons());
  }, []);
  return (
    <>

    </>
  );
};

export default Dragons;

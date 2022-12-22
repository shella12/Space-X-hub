import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';

const MyProfile = () => {
  let dragons = useSelector((state) => state.dragons);
  dragons = dragons.filter((dragon) => dragon.reserved);

  return (
    <>
    </>
  );
};

export default MyProfile;

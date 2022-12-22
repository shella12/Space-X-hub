import React from 'react';
import PropTypes from 'prop-types';

const dragonItem = (props) => {
  const { name, type, img } = props;

  return (
    <>
      <div className="dragon-item">
        <img alt="DragonPicture" src={img} />
        <div>
          <p>{name}</p>
          <p>{type}</p>
          <button type="submit">Reserve Dragon</button>
        </div>
      </div>
    </>
  );
};

dragonItem.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
};

export default dragonItem;

import React from 'react';
import PropTypes from 'prop-types';

const dragonItem = (props) => {
  /* eslint-disable */
  const { name, type, flickr_images  } = props;
  /* eslint-enable */

  return (
    <>
      <div className="dragon-item">
        {/* eslint-disable */}
        <img alt="DragonPicture" src={flickr_images} />
        {/* eslint-enable */}
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
  flickr_images: PropTypes.string.isRequired,
};

export default dragonItem;

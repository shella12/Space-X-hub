import React from 'react';

const dragonItem = (props) => {
    const { id, name, type, flickr_images } = props;

    return (
      <>
        <div className="dragon-item">
        <img alt="DragonPicture" src={flickr_images}/>
        <div>
            <p>{name}</p>
            <p>{type}</p>
            <button type="submit">Reserve Dragon</button>
        </div>
        </div>
      </>
    );
  };
  
  export default Book;
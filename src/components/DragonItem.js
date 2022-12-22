import React from 'react';
import PropTypes from 'prop-types';
import { ListGroup, Button, Badge } from 'react-bootstrap';

const dragonItem = ({ dragon, reserve, cancel }) => {
  const {
    id, name, type, img, description, reserved,
  } = dragon;

  return (
    <ListGroup.Item className="d-flex gap-4 border-0" key={id}>
      <div
        className="dragon col-3"
        style={{
          backgroundImage: `url(${img})`,
        }}
      />
      <div className="col-9`">
        <p className="name">{name}</p>
        <p className="type">
          Type:
          &nbsp;
          {type}
        </p>
        <p>
          {reserved && <Badge bg="info" className="me-2 reserved">Reserved</Badge>}
          {description}
        </p>
        {!reserved && (
          <Button id={id} variant="primary" type="button" onClick={reserve}>
            Reserve Dragon
          </Button>
        )}
        {reserved && (
          <Button
            id={id}
            variant="secondary"
            className="bg-light text-secondary"
            type="button"
            onClick={cancel}
          >
            Cancel Reservation
          </Button>
        )}
      </div>
    </ListGroup.Item>
  );
};

dragonItem.propTypes = {
  dragon: PropTypes.shape({
    img: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    reserved: PropTypes.bool,
  }).isRequired,
  reserve: PropTypes.func.isRequired,
  cancel: PropTypes.func.isRequired,
};

export default dragonItem;

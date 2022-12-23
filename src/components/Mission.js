import PropTypes from 'prop-types';

const Mission = (props) => {
  const { mission, onClickHandler } = props;
  return (
    <>
      <tr>
        <td>
          {mission.mission_name}
        </td>
        <td>
          {mission.description}
        </td>
        <td>
          {!mission.reserverd ? (<span className="not-member"> Not A Member</span>) : (<span className="member"> Active Member</span>)}
        </td>
        <td>
          {!mission.reserverd ? (
            <button
              type="button"
              onClick={() => onClickHandler(mission.mission_id)}
              className="reservation"
            >
              Join Mission
            </button>
          )
            : (
              <button
                type="button"
                onClick={() => onClickHandler(mission.mission_id)}
                className="canel-reservation"
              >
                Leave Mission
              </button>
            )}
        </td>
      </tr>
    </>
  );
};

Mission.propTypes = {
  mission: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.object,
  ]).isRequired,
  onClickHandler: PropTypes.func.isRequired,
};
export default Mission;

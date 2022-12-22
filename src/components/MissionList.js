import { PropTypes } from 'prop-types';
import Mission from './Mission';

const MissionList = (props) => {
  const { missions, onClickHandler } = props;
  return (
    <>
      <thead>
        <tr>
          <th>Mission</th>
          <th>Description</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        {missions ? (missions).map((mission) => (
          <Mission
            key={mission[1].mission_id}
            mission={mission[1]}
            onClickHandler={onClickHandler}
          />
        )) : <h1>Loadinng...</h1>}
      </tbody>
    </>
  );
};

MissionList.propTypes = {
  missions: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.object,
  ]).isRequired,
  onClickHandler: PropTypes.func.isRequired,
};
export default MissionList;

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMissions } from '../redux/Missions/Missions';

const Missions = () => {
  const dispatch = useDispatch();
  const missions = useSelector((state) => state.missionReducer);
  useEffect(() => {
    dispatch(fetchMissions()).unwrap();
  });
  return (
    <table>
      <tr>
        <th>Mission</th>
        <th>Description</th>
        <th>Status</th>
      </tr>
      {missions ? Object.entries(missions).map((mission) => (
        <tr key={mission[1].mission_id}>
          <td>
            {mission[1].mission_name}
          </td>
          <td>
            {mission[1].description}
          </td>
          <td>
            <span><span>Not A Member</span></span>
          </td>
          <td>
            <button type="button">Join Mission</button>
          </td>
        </tr>
      )) : <h1>Loadinng</h1>}

    </table>

  );
};
export default Missions;

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import MissionList from '../components/MissionList';
import { fetchMissions, reserveButton } from '../redux/Missions/Missions';

const Missions = () => {
  const dispatch = useDispatch();
  const missions = useSelector((state) => state.missionReducer.missions);
  useEffect(() => {
    dispatch(fetchMissions()).unwrap();
  }, []);

  const onClickHandler = (id) => {
    dispatch(reserveButton(id));
  };

  return (
    <table>
      <MissionList missions={Object.entries(missions)} onClickHandler={onClickHandler} />
    </table>

  );
};
export default Missions;

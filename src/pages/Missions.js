import { useDispatch, useSelector } from 'react-redux';
import MissionList from '../components/MissionList';
import { reserveButton } from '../redux/Missions/Missions';

const Missions = () => {
  const dispatch = useDispatch();
  const missions = useSelector((state) => state.missionReducer.missions);
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

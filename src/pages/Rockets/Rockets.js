import React, {useEffect} from 'react';
import { useSelector , useDispatch} from 'react-redux';
import { getRocketData } from '../../redux/Rockets/Rockets';

const RocketsContainer = () => {
  const  rocket  = useSelector((state) => state.rocket);
  console.log(rocket);
  const dispatch = useDispatch();
   
  useEffect(() => {
    dispatch(getRocketData());
  },[]);

  return ( 
    <section className="container">
      <ul>
        {rocket}
      </ul>
    </section>
   );
}
 
export default RocketsContainer;
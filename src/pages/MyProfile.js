import React from 'react';
import { useSelector } from 'react-redux';
import { Table } from 'react-bootstrap';

const MyProfile = () => {
  const dragons = useSelector((state) => state.dragons);
  const reservedDragons = dragons.filter((dragon) => dragon.reserved);
  const missions = Object.entries(useSelector((state) => state.missionReducer));
  const joinedMissions = missions[0][1].filter((mission) => mission.reserverd);
  return (
    <section className="container border-top rounded-0 border-2 d-flex justify-content-between gap-5">
      <div className="col-3">
        <h2>My Missions</h2>
        {!joinedMissions.length && <p>No missions joined</p>}
        <Table bordered>
          <tbody>
            {joinedMissions.map((mission) => (
              <tr key={mission.mission_id}>
                <td className="p-3">{mission.mission_name}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
      <div className="col-3">
        <h2>My Dragons</h2>
        {!reservedDragons.length && <p>No Dragons Reserved</p>}
        <Table bordered>
          <tbody>
            {reservedDragons.map((dragon) => (
              <tr key={dragon.id}>
                <td className="p-3">{dragon.name}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </section>
  );
};

export default MyProfile;

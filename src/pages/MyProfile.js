import React from 'react';
import { useSelector } from 'react-redux';
import { Table } from 'react-bootstrap';

const MyProfile = () => {
  const dragons = useSelector((state) => state.dragons);
  const reservedDragons = dragons.filter((dragon) => dragon.reserved);

  return (
    <section className="container border-top rounded-0 border-2 d-flex justify-content-between gap-5">
      <div className="col-6">
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

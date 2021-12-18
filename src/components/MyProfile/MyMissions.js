import React from 'react';
import { useSelector } from 'react-redux';

const MyMissions = function () {
  const myMissions = useSelector((state) => state.missions.filter((mission) => mission.joined));
  return (
    <div className="col-6">
      <h3>My Missions</h3>
      <table className="border width-100%">
        <tbody>
          {
            myMissions.map((mission) => (
              <tr key={mission.id} className="bg-white">
                <td>{mission.name}</td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  );
};

export default MyMissions;

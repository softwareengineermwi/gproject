import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Mission from './Mission';
import { getListOfMissions } from '../../redux/missions/missions';
import Styles from './mission.module.scss';

const Missions = () => {
  const missions = useSelector((state) => state.missions);
  const dispatch = useDispatch();

  useEffect(() => {
    if (missions.length === 0) dispatch(getListOfMissions());
  }, [dispatch, missions.length]);

  return (
    <div className="container margin-y-sm">
      <table className={Styles.missionsTable}>
        <thead>
          <tr>
            <td>Mission</td>
            <td>Description</td>
            <td>Status</td>
            <td>Join</td>
          </tr>
        </thead>
        <tbody className="tbody">
          {
            missions.map((mission) => (<Mission key={mission.id} missionInfo={mission} />))
          }
        </tbody>
      </table>
    </div>
  );
};

export default Missions;

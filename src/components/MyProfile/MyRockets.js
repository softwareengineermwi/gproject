import React from 'react';
import { useSelector } from 'react-redux';

const filtrate = (item) => item.reserved === true;
const MyRockets = function () {
  const t = useSelector((state) => state.rockets).filter(filtrate);
  return (
    <div className="col-6">
      <h3>My Rockets</h3>

      <table className="border width-100%">
        <tbody>
          {
            t.map((rocket) => (
              <tr className="padding-lg" key={rocket.id}>
                <td>{rocket.name}</td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  );
};

export default MyRockets;

import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Rocket from './rocket';
import { getRockets } from '../../redux/rockets/rockets';

const Rockets = function () {
  const rockets = useSelector((state) => state.rockets);

  const dispatch = useDispatch();

  useEffect(() => {
    if (rockets.length === 0) {
      dispatch(getRockets());
    }
  }, [dispatch, rockets.length]);

  return (
    <div className="container margin-y-sm">
      {
        rockets.map((rocket) => (
          <Rocket
            key={rocket.id}
            id={rocket.id}
            name={rocket.name}
            description={rocket.description}
            image={rocket.image}
            reserve={rocket.reserved}
          />
        ))
      }
    </div>
  );
};

export default Rockets;

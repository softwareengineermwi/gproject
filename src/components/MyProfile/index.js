import React from 'react';
import MyMissions from './MyMissions';
import MyRockets from './MyRockets';

const MyProfile = () => (
  <div className="container">
    <div className="grid gap-lg">
      <MyMissions />
      <MyRockets />
    </div>
  </div>
);

export default MyProfile;

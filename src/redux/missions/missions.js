const TOGGLE_MESSION_JOIN = 'TOGGLE_MESSION_JOIN';
const ADD_LIST_OF_MISSIONS_TO_STORE = 'ADD_LIST_OF_MISSIONS_TO_STORE';

const url = 'https://api.spacexdata.com/v3/missions';

const toggleMissionJoin = (payload) => ({
  type: TOGGLE_MESSION_JOIN,
  payload,
});

const addListOfMissionsToStore = (payload) => ({
  type: ADD_LIST_OF_MISSIONS_TO_STORE,
  payload,
});

const filterMissionsData = (data) => data.map((mission) => ({
  id: mission.mission_id,
  name: mission.mission_name,
  description: mission.description,
  joined: false,
}));

const getListOfMissions = () => (dispatch) => {
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const missions = filterMissionsData(data);
      dispatch(addListOfMissionsToStore(missions));
    });
};

const missionsReducer = (state = [], { type, payload } = {}) => {
  switch (type) {
    case TOGGLE_MESSION_JOIN: return state.map((mission) => {
      if (mission.id !== payload) return mission;
      return { ...mission, joined: !mission.joined };
    });
    case ADD_LIST_OF_MISSIONS_TO_STORE: return payload;
    default: return state;
  }
};

export {
  toggleMissionJoin,
  getListOfMissions,
};

export default missionsReducer;

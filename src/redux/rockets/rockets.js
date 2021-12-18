const GET_ROCKETS = 'space/rockets/GET_ROCKETS';
const RESERVE_ROCKET = 'space/rockets/RESERVE_ROCKET';
const CANCEL_RESERVATION = 'space/rockets/CANCEL_RESERVATION';
const GET_RESERVED_ROCKETS = 'space/rockets/GET_RESERVED_ROCKETS';

const rocketsReducer = (state = [], { type, rockets, id } = {}) => {
  switch (type) {
    case GET_ROCKETS:
      return rockets;
    case RESERVE_ROCKET: {
      const newSt = state.map((rocket) => {
        if (rocket.id !== id) return rocket;
        return { ...rocket, reserved: true };
      });
      return newSt;
    }
    case CANCEL_RESERVATION: {
      const afetrCancelState = state.map((rocket) => {
        if (rocket.id !== id) return rocket;

        return { ...rocket, reserved: false };
      });
      return afetrCancelState;
    }
    case GET_RESERVED_ROCKETS:
      return state.filter((rocket) => rocket.reserved);
    default: return state;
  }
};

const getRockets = () => (dispatch) => {
  const rocketsBag = [];

  fetch(
    'https://api.spacexdata.com/v3/rockets',
    {
      method: 'GET',
    },
  )
    .then((res) => res.json())
    .then(async (data) => {
      const result = data;

      Object.entries(result).forEach((rocket) => {
        const foo = rocket[1];
        rocketsBag.push({
          id: foo.id,
          name: foo.rocket_name,
          description: foo.description,
          image: foo.flickr_images[0],
          reserved: false,
        });
      });

      dispatch({
        type: GET_ROCKETS,
        rockets: rocketsBag,
      });
    });
};

const reserveRocket = (id) => ({
  type: RESERVE_ROCKET,
  id,
});

const fooBar = (id) => ({
  type: CANCEL_RESERVATION,
  id,
});

const getReservedRockets = () => ({
  type: GET_RESERVED_ROCKETS,
});

export {
  getRockets, reserveRocket, fooBar, getReservedRockets,
};

export default rocketsReducer;

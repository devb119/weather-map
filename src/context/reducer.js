export const actionType = {
  SET_MAP_MODE: "SET_MAP_MODE",
  SET_LAT_LNG: "SET_LAT_LNG",
};

const reducer = (state, action) => {
  switch (action.type) {
    case actionType.SET_MAP_MODE:
      return { ...state, mapModes: action.mapModes };
    case actionType.SET_LAT_LNG:
      return { ...state, latlng: action.latlng };
    default:
      return state;
  }
};

export default reducer;

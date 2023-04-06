export const actionType = {
  SET_MAP_MODE: "SET_MAP_MODE",
  SET_LAT_LNG: "SET_LAT_LNG",
  SET_ADDRESS: "SET_ADDRESS",
  SET_IS_OPEN_INFO: "SET_IS_OPEN_INFO",
};

const reducer = (state, action) => {
  switch (action.type) {
    case actionType.SET_MAP_MODE:
      return { ...state, mapMode: action.mapMode };
    case actionType.SET_LAT_LNG:
      return { ...state, latlng: action.latlng };
    case actionType.SET_ADDRESS:
      return { ...state, address: action.address };
    case actionType.SET_IS_OPEN_INFO:
      return { ...state, isOpenInfo: action.isOpenInfo };
    default:
      return state;
  }
};

export default reducer;

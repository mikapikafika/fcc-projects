const initialState = {
    sign: "",
    number: 0,
    result: 0,
};

const equationReducer = (state = initialState, action) => {
  switch (action.type) {
      case "UPDATE_EQUATION":
          return {...state, ...action.payload};
      default:
          return state;
  }
};

export default equationReducer;
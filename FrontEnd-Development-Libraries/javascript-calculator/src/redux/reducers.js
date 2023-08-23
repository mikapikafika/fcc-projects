const initialState = {
    displayedValue: "0",
    equation: "",
    result: false
};

const calculatorReducer = (state = initialState, action) => {
  switch (action.type) {
      case "SET_DISPLAYED_VALUE":
          return {...state, displayedValue: action.payload};
      case "SET_EQUATION":
          return {...state, equation: action.payload};
      case "SET_RESULT":
          return {...state, result: action.payload};
      default:
          return state;
  }
};

export default calculatorReducer;
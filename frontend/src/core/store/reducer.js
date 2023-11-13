const initialState = {
  user: null,
  events: null,
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "setUser": {
      return { ...state, user: action.payload };
    }
    case "setEvents": {
      return { ...state, user: action.payload };
    }
    
    default:
      return state;
  }
};

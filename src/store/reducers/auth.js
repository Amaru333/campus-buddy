import { AUTHENTICATION } from "../actions/auth";

const initialAuthState = {
  auth: false,
};

const authReducer = (state = initialAuthState, action) => {
  switch (action.type) {
    case AUTHENTICATION:
      return {
        ...state,
      };
    default:
      return state;
  }
};

export default authReducer;

import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";

// import new reducer
import { signupReducer } from "./components/signup/SignupReducer";

const createRootReducer = history =>
  combineReducers({
    router: connectRouter(history),
    createUser: signupReducer // <--- buraya ekle
  });

export default createRootReducer;


// SUNUCUYA İSTEK GÖNDERMEK İÇİN AXIOS KULLANACAĞIZ..
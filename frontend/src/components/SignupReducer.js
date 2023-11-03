
// GEREKLİ EYLEMLERİ İÇE AKTAR:
import {
    CREATE_USER_ERROR,
    CREATE_USER_SUBMITTED,
    CREATE_USER_SUCCESS
  } from "./SignupTypes";
  
  // KAYDIN BAŞLANGIÇ DURUMU: -- email vs eklenebilir ama şuanlık gerek yok
  const initialState = {
    usernameError: "",
    passwordError: "",
    isSubimtted: false
  };
  
  // DURUMUN NASIL DEĞİŞTİRİLECEĞİ:
  export const signupReducer = (state = initialState, action) => {
    switch (action.type) {
      case CREATE_USER_SUBMITTED:
        return {
          usernameError: "",
          passwordError: "",
          isSubimtted: true
        };
      case CREATE_USER_ERROR:
        const errorState = {
          usernameError: "",
          passwordError: "",
          isSubimtted: false
        };
        if (action.errorData.hasOwnProperty("username")) {
          errorState.usernameError = action.errorData["username"];
        }
        if (action.errorData.hasOwnProperty("password")) {
          errorState.passwordError = action.errorData["password"];
        }
        return errorState;
      case CREATE_USER_SUCCESS:
        return {
          usernameError: "",
          passwordError: "",
          isSubimtted: false
        };
      default:
        return state;
    }
  }
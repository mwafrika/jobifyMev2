import React, { useReducer, useContext, useState } from "react";
import reducer from "./reducer";
import {
  DISPLAY_ALERT,
  CLEAR_ALERT,
  REGISTER_USER_ERROR,
  REGISTER_USER_START,
  REGISTER_USER_SUCCESS,
} from "./actions";
import axios from "axios";

const initialState = {
  isLoading: false,
  showAlert: false,
  alertText: "",
  alertType: "",
  user: null,
  userLocation: "",
  token: null,
  jobLocation: "",
};

const AppContext = React.createContext();
const baseUrl = "http://localhost:7000/";

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const displayAlert = () => {
    dispatch({
      type: DISPLAY_ALERT,
    });
    handleClearAlert();
  };

  const handleClearAlert = () => {
    setTimeout(() => {
      dispatch({
        type: CLEAR_ALERT,
      });
    }, 3000);
  };

  const registerUser = async (currentUser) => {
    dispatch({
      type: REGISTER_USER_START,
    });
    try {
      const response = await axios.post(
        `${baseUrl}api/v1/auth/register`,
        currentUser
      );
      const { token, user, location } = response.data;
      dispatch({
        type: REGISTER_USER_SUCCESS,
        payload: {
          user,
          location,
          token,
        },
      });
      handleClearAlert();
      console.log(response.data, "check user");
      // localStorage to be set
    } catch (error) {
      dispatch({
        type: REGISTER_USER_ERROR,
        payload: {
          message: error.response.data.message,
        },
      });
      handleClearAlert();
    }
  };

  return (
    <AppContext.Provider value={{ ...state, displayAlert, registerUser }}>
      {children}
    </AppContext.Provider>
  );
};

const useAppContext = () => {
  return useContext(AppContext);
};

export { AppProvider, initialState, useAppContext };

import React, { useReducer, useContext } from "react";
import reducer from "./reducer";
import {
  DISPLAY_ALERT,
  CLEAR_ALERT,
  REGISTER_USER_ERROR,
  REGISTER_USER_START,
  REGISTER_USER_SUCCESS,
  LOGIN_USER_ERROR,
  LOGIN_USER_START,
  LOGIN_USER_SUCCESS,
  TOGGLE_SIDEBAR,
  LOGOUT_USER,
  UPDATE_USER_START,
  UPDATE_USER_SUCCESS,
  UPDATE_USER_ERROR,
  HANDLE_CHANGE,
  CLEAR_VALUES,
  CREATE_JOB_ERROR,
  CREATE_JOB_START,
  CREATE_JOB_SUCCESS,
  GET_JOBS_START,
  GET_JOBS_SUCCESS,
  SET_EDIT_JOB,
  DELETE_JOB_START,
  EDIT_JOB_START,
  EDIT_JOB_SUCCESS,
  EDIT_JOB_ERROR,
  SHOW_STATS_START,
  SHOW_STATS_SUCCESS,
} from "./actions";
import axios from "axios";

const token = localStorage.getItem("token");
const user = localStorage.getItem("user");
const location = localStorage.getItem("location");

const initialState = {
  stats: {},
  isLoading: false,
  showAlert: false,
  alertText: "",
  alertType: "",
  user: user ? JSON.parse(user) : null,
  userLocation: location || "",
  token: token,
  showSidebar: false,
  jobLocation: location || "",
  isEditing: false,
  editJobId: "",
  position: "",
  company: "",
  jobTypeOptions: ["full-time", "part-time", "remote", "internship"],
  jobType: "full-time",
  statusOptions: ["interview", "declined", "pending"],
  status: "pending",
  jobs: [],
  totalJobs: 0,
  numOfPages: 1,
  page: 1,
  monthlyApplications: [],
};

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const url =
    process.env.NODE_ENV === "production" ? "/" : "http://localhost:7000/";

  const authFetch = axios.create({
    baseURL: `${url}api/v1`,
    headers: {
      Authorization: `Bearer ${state.token}`,
    },
  });

  authFetch.interceptors.request.use(
    (config) => {
      // config.headers.common["Authorization"] = `Bearer ${state.token}`;
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  authFetch.interceptors.response.use(
    (response) => {
      return response;
    },
    (error) => {
      if (error.response.status === 401) {
        logoutUser();
      }
      return Promise.reject(error);
    }
  );

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

  const addUserToLocalStorage = ({ user, location, token }) => {
    localStorage.setItem("user", JSON.stringify(user));
    localStorage.setItem("token", token);
    localStorage.setItem("location", location);
  };

  const removeUserFromLocalStorage = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    localStorage.removeItem("location");
  };

  const registerUser = async (currentUser) => {
    dispatch({
      type: REGISTER_USER_START,
    });
    try {
      const { data } = await authFetch.post(`/auth/register`, currentUser);
      const { token, user, location } = data;
      dispatch({
        type: REGISTER_USER_SUCCESS,
        payload: {
          user,
          location,
          token,
        },
      });

      addUserToLocalStorage({
        user,
        location,
        token,
      });
    } catch (error) {
      dispatch({
        type: REGISTER_USER_ERROR,
        payload: {
          message: error.response.data.message,
        },
      });
    }
    handleClearAlert();
  };

  const loginUser = async (currentUser) => {
    dispatch({
      type: LOGIN_USER_START,
    });
    try {
      const { data } = await authFetch.post(`/auth/login`, currentUser);
      const { token, user, location } = data;
      dispatch({
        type: LOGIN_USER_SUCCESS,
        payload: {
          user,
          location,
          token,
        },
      });

      addUserToLocalStorage({
        user,
        location,
        token,
      });
    } catch (error) {
      dispatch({
        type: LOGIN_USER_ERROR,
        payload: {
          message: error?.response?.data?.message,
        },
      });
    }
    handleClearAlert();
  };

  const toggleSidebar = () => {
    dispatch({
      type: TOGGLE_SIDEBAR,
    });
  };
  const logoutUser = () => {
    dispatch({
      type: LOGOUT_USER,
    });

    removeUserFromLocalStorage();
  };

  const updateUser = async (currentUser) => {
    dispatch({
      type: UPDATE_USER_START,
    });
    try {
      const { data } = await authFetch.patch(`/auth/updateUser`, currentUser);
      const { user, token, location } = data;
      dispatch({
        type: UPDATE_USER_SUCCESS,
        payload: {
          user,
          location,
          token,
        },
      });
      addUserToLocalStorage({
        user,
        location,
        token,
      });
    } catch (error) {
      if (error.response.status !== 401) {
        dispatch({
          type: UPDATE_USER_ERROR,
          payload: {
            message: error.response.data.message,
          },
        });
      }
    }
    handleClearAlert();
  };

  const handleChange = ({ name, value }) => {
    dispatch({
      type: HANDLE_CHANGE,
      payload: {
        name,
        value,
      },
    });
  };

  const clearValues = () => {
    dispatch({
      type: CLEAR_VALUES,
    });
  };

  const createJob = async () => {
    dispatch({
      type: CREATE_JOB_START,
    });

    try {
      const { jobLocation, jobType, status, position, company } = state;
      await authFetch.post("/jobs", {
        jobLocation,
        jobType,
        status,
        position,
        company,
      });

      dispatch({
        type: CREATE_JOB_SUCCESS,
      });
      dispatch({
        type: CLEAR_VALUES,
      });
    } catch (error) {
      if (error.response.status === 401) return;
      dispatch({
        type: CREATE_JOB_ERROR,
        payload: {
          message: error.response.data.message,
        },
      });
    }
    handleClearAlert();
  };

  const getJobs = async () => {
    dispatch({
      type: GET_JOBS_START,
    });

    try {
      const { data } = await authFetch.get("/jobs");
      const { jobs, numOfPages, totalJobs } = data;
      dispatch({
        type: GET_JOBS_SUCCESS,
        payload: { jobs, numOfPages, totalJobs },
      });
    } catch (error) {
      logoutUser();
    }
    handleClearAlert();
  };

  const setEditJob = (id) => {
    dispatch({
      type: SET_EDIT_JOB,
      payload: { id },
    });
  };

  const editJob = async () => {
    dispatch({
      type: EDIT_JOB_START,
    });

    try {
      const { jobLocation, jobType, status, position, company, editJobId } =
        state;

      await authFetch.patch(`/jobs/${editJobId}`, {
        jobLocation,
        jobType,
        status,
        position,
        company,
      });

      dispatch({
        type: EDIT_JOB_SUCCESS,
      });
      dispatch({
        type: CLEAR_VALUES,
      });
    } catch (error) {
      if (error.response.status === 401) return;
      dispatch({
        type: EDIT_JOB_ERROR,
        payload: {
          message: error.response.data.message,
        },
      });
    }
    handleClearAlert();
  };

  const deleteJob = async (jobId) => {
    dispatch({
      type: DELETE_JOB_START,
    });
    try {
      await authFetch.delete(`/jobs/${jobId}`);
      getJobs();
    } catch (error) {
      logoutUser();
    }
  };

  const showStats = async () => {
    dispatch({
      type: SHOW_STATS_START,
    });
    try {
      const { data } = await authFetch("/jobs/stats");

      dispatch({
        type: SHOW_STATS_SUCCESS,
        payload: {
          stats: data.defaultValues,
          monthlyApplications: data.monthlyApplications,
        },
      });
    } catch (error) {
      logoutUser();
    }
    handleClearAlert();
  };

  return (
    <AppContext.Provider
      value={{
        ...state,
        displayAlert,
        registerUser,
        loginUser,
        toggleSidebar,
        logoutUser,
        updateUser,
        handleChange,
        clearValues,
        createJob,
        getJobs,
        setEditJob,
        deleteJob,
        editJob,
        showStats,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

const useAppContext = () => {
  return useContext(AppContext);
};

export { AppProvider, initialState, useAppContext };

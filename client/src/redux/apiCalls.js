import axios from "axios";

import {
  loginFailure,
  loginStart,
  loginSuccess,
  logoutStart,
  logoutFailure,
  logoutSuccess,
} from "./userRedux";

import {
  OutletLoginStart,
  OutletLoginSuccess,
  OutletLoginFailure,
  OutletLogoutSuccess,
  OutletLogoutStart,
  OutletLogoutFailure,
} from "./outletRedux";

export const login = async (dispatch, user) => {
  dispatch(loginStart());
  let student = null;
  let teacher = null;
  let foundUser = null;
  let isError = false;
  try {
    const res = await axios.post("http://localhost:3000/login", user);
    foundUser = res.data;
  } catch (err) {
    isError = true;
    dispatch(loginFailure());
  }

  console.log(foundUser);

  if (foundUser && foundUser._doc.studentId) {
    try {
      const res = await axios.get(
        `http://localhost:3000/students/${foundUser._doc.studentId}`
      );
      student = res.data;
    } catch (err) {
      isError = true;
      dispatch(loginFailure());
    }
  } else if (foundUser && foundUser._doc.teacherId) {
    try {
      const res = await axios.get(
        `http://localhost:3000/teachers/${foundUser._doc.teacherId}`
      );
      teacher = res.data;
    } catch (err) {
      isError = true;
      dispatch(loginFailure());
    }
  }

  if (!isError) {
    dispatch(loginSuccess({ user: foundUser, student, teacher }));
  }
};

export const logout = async (dispatch, user, outlet) => {
  dispatch(logoutStart());

  try {
    await axios.get("http://localhost:3000/logout", {
      headers: { token: `Bearer ${user.currentUser.accessToken}` },
    });
    dispatch(logoutSuccess());
  } catch (err) {
    dispatch(logoutFailure());
  }
  try {
    await axios.get("http://localhost:3000/outlets/logout", {
      headers: { token: `Bearer ${outlet.currentOutlet.accessToken}` },
    });
    dispatch(OutletLogoutSuccess());
  } catch (err) {
    console.log(err);
    dispatch(OutletLogoutFailure());
  }
};

export const outletLogin = async (dispatch, outlet) => {
  dispatch(OutletLoginStart());
  try {
    const res = await axios.post("http://localhost:3000/outlets/login", {
      username: outlet.name,
      password: outlet.password,
    });
    console.log(res.data);
    dispatch(OutletLoginSuccess({ outlet: res.data._doc }));
  } catch (err) {
    dispatch(OutletLoginFailure());
  }
};

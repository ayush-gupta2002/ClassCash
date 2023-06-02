import axios from "axios";

import { loginFailure, loginStart, loginSuccess } from "./userRedux";

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

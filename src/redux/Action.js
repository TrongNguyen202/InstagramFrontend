import { SIGN_IN, SIGN_UP } from "./ActionType";

export const signinAction = (data) => async (dispatch) => {
    try {
      const res = await fetch("http://localhost:5454/signin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Basic " + btoa(data.email + ":" + data.password),
        }
      })
      const userData = await res.json();
      const token = res.headers.get('Authorization')
     
    // lấy dữ liệu JSON từ phản hồi
   
    console.log("User data: ", userData);
    
    localStorage.setItem("token", token);
    console.log("signin token" + token);
    console.log("data nhan ve la:", res);
    dispatch({ type: SIGN_IN, payload: token });
    } catch (error) {
      console.log(error.message);
    }
  };
  export const signupAction = (data) => async (dispatch) => {
    try {
      const res = await fetch("http://localhost:5454/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data), // bổ sung dữ liệu người dùng vào body của yêu cầu POST
      });
      const user = await res.json();
      console.log("signup user" , user);
      dispatch({ type: SIGN_UP, payload: user });
    } catch (error) {
      console.log(error.message);
    }
  };
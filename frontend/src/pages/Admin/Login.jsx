/* eslint-disable no-cond-assign */
import { useNavigate } from "react-router";
import Backdrop from "@mui/material/Backdrop";
import { useState } from "react";
import axios from "axios";
import Cookies from "universal-cookie";
import { useInterseptor } from "../utils/Interceptor";
function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useNavigate();
  const [errorMessage, setErrorMessage] = useState("");
  const { logIn } = useInterseptor();

  const emailHandler = (e) => {
    setEmail(e.target.value);
  };

  const passwordHandler = (e) => {
    setPassword(e.target.value);
  };

  async function onSubmitHandler(e) {
    e.preventDefault();
    const cookies = new Cookies();
    try {
      //TODO : SAVE THE ACCESS TOKEN IN LOCAL STORAGE, AND ALWAYS SEND IT AS AUTHERIZATION HEADER WITH EVERY REQUEST
      await axios
        .post("http://116.203.117.190:3000/v1/auth/login", {
          email,
          password,
        })
        .then((res) => {
          if (res) {
            logIn();
            // lets set the cookie
            const token = res.data.tokens.access.token;
            const refresh_token = res.data.tokens.refresh.token;
            // set the access token in the cookie
            cookies.set("access_token", token, {
              path: "/",
              httpOnly: false,
              secure: false,
            });
            cookies.set("refresh_token", refresh_token, {
              path: "/",
              httpOnly: false,
              secure: false,
            });
            localStorage.setItem("token", res.data.token);
            console.log(cookies.get("access_token"));
            history("/takemetomyadmin/dashboard");
          }
        })
        .catch((err) => {
          console.log(err);
          const msg = err.response
            ? err.response.data.message
              ? err.response.data.message
              : err.response.data
            : err.message;
          // ==========================================
          if (err.response) {
            setErrorMessage(err.response.data.message);
          } else {
            setErrorMessage("Connection error. Please try again later.");
          }
          console.log("inside axios", msg);
        });
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <form
      action="POST"
      className="h-screen flex flex-col md:flex-row justify-center space-y-10 md:space-y-0 md:space-x-16 items-center my-2 mx-5 md:mx-0 md:my-0"
    >
      <div className="md:w-1/3 max-w-sm">
        <img
          src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
          alt="Sample image"
        />
      </div>
      <div className="md:w-1/3 max-w-sm">
        <div className="text-center md:text-left">
          <p className="mx-4 mb-0 text-center font-semibold text-slate-600 text-3xl">
            {" "}
            Hulum Admin
          </p>
        </div>
        <div className="my-5 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300">
          <p className="mx-4 mb-0 text-center font-semibold text-slate-500">
            Login
          </p>
        </div>
        <input
          className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded"
          type="email"
          placeholder="Email Address"
          onChange={emailHandler}
          value={email}
        />
        <input
          className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded mt-4"
          type="password"
          placeholder="Password"
          onChange={passwordHandler}
          value={password}
        />
        <div className="mt-4 flex justify-between font-semibold text-sm">
          <label className="flex text-slate-500 hover:text-slate-600 cursor-pointer">
            <input className="mr-1" type="checkbox" />
            <span>Remember Me</span>
          </label>
          <a
            className="text-blue-600 hover:text-blue-700 hover:underline hover:underline-offset-4"
            href="#"
          >
            Forgot Password?
          </a>
        </div>
        <div className="text-center md:text-left">
          <button
            className="mt-4 bg-blue-600 hover:bg-blue-700 px-4 py-2 text-white uppercase rounded text-xs tracking-wider"
            type="submit"
            onClick={onSubmitHandler}
          >
            Login
          </button>
        </div>
        <div className="mt-4 font-semibold text-sm text-slate-500 text-center md:text-left"></div>
        <div className="text-center md:text-left">
          {errorMessage && <p className="text-red-500">{errorMessage}</p>}
        </div>
      </div>
    </form>
  );
}

export default Login;

/* eslint-disable react/prop-types */
import Cookies from "universal-cookie";
import { useNavigate } from "react-router";
import { useInterseptor } from "../utils/Interceptor";

import axios from "axios";
import moment from "moment";

const Logout = ({ onConfirm, onCancel }) => {
  const { logOut } = useInterseptor();
  const history = useNavigate();
  async function logout() {
    let cookies = new Cookies();

    const token = cookies.get("access_token");
    const refresh = cookies.get("refresh_token");
    await axios
      .post("http://116.203.117.190:3000/v1/auth/logout/",
        {
          refreshToken: refresh,
        },
        { headers: { Authorization: "Bearer " + token } }
      )
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
    localStorage.removeItem("access_token");
    cookies.remove("access_token");
    cookies.remove("refresh_token");
    logout();
    history("/takemetomyadmin/login");
  }
  return (
    <div className="fixed top-0 left-0 w-full h-screen bg-gray-900 bg-opacity-50 z-50 flex items-center justify-center">
      <div className="bg-white p-4 rounded shadow-md">
        <h3 className="text-lg font-medium mb-3">
          Are you sure you want to log out?
        </h3>
        <div className="flex justify-between">
          <button
            className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-700"
            onClick={onCancel}
          >
            Cancel
          </button>
          <button
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
            onClick={() => {
              logout();
            }}
          >
            Log Out
          </button>
        </div>
      </div>
    </div>
  );
};

export default Logout;

import { Link } from "react-router-dom";
import NavBar from "../../components/Admin/Navbar";
const Setting = () => {
  return (
    <NavBar>
      <div>
        <h1 className="mx-auto text-center pb-14 text-2xl font-semibold text-blue-900">
          Settings
        </h1>
        <div className="flex flex-row ">
          <Link to={"/takemetomyadmin/languageSetting"}>
            <a
              href=""
              className="p-4 bg-blue-600 hover:bg-brightRed rounded-xl text-white ml-4"
            >
              <span>Languages</span>
            </a>
          </Link>
        </div>
      </div>
    </NavBar>
  );
};

export default Setting;

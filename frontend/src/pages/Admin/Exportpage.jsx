import NavBar from "../../components/Admin/Navbar";
import Cookies from "universal-cookie";
import axios from "axios";
import moment from "moment";

const Exportpage = () => {
  let cookies = new Cookies();
  async function exportData() {
    const token = cookies.get("access_token");
    await axios
      .get("http://116.203.117.190:3000/v1/person/export/", {
        headers: { Authorization: "Bearer " + token },
        responseType: "blob",
      })
      .then((res) => {
        let x = moment().format("ddd_MMM_YY_h_mm");
        const url = window.URL.createObjectURL(new Blob([res.data]));
        const link = document.createElement("a");
        link.href = url;
        link.setAttribute("download", `Exported_Data-${x}.csv`);
        document.body.appendChild(link);
        link.click();

        document.body.removeChild(link);
        window.URL.revokeObjectURL(url);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  return (
    <div>
      <NavBar>
        <h1 className="text-center text-darkBlue text-2xl font-semibold pb-10">
          Exports page
        </h1>
        <button
          onClick={() => exportData()}
          className="p-4 bg-blue-600 hover:bg-brightRed rounded-xl text-white ml-4"
        >
          Export CSV
        </button>
      </NavBar>
    </div>
  );
};

export default Exportpage;

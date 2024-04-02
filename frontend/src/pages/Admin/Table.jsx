import { useState, useEffect } from "react";
import Cookies from "universal-cookie";
import axios from "axios";
const Table = () => {
  const [tableData, setTableData] = useState([]);

  let cookies = new Cookies();
  useEffect(() => {
    async function fetchdata() {
      try {
        //TODO : SAVE THE ACCESS TOKEN IN LOCAL STORAGE, AND ALWAYS SEND IT AS AUTHERIZATION HEADER WITH EVERY REQUEST
        const token = cookies.get("access_token");
        await axios
          .get("https://116.203.117.190:3000/v1/person", {
            headers: { Authorization: "Bearer " + token },
          })
          .then((res) => {
            if (res) {
              setTableData(res.data.results);
            }
          })
          .catch((err) => {
            console.log(err);
            const msg = err.response
              ? err.response.data.message
                ? err.response.data.message
                : err.response.data
              : err.message;
            const code = err.response.data.code;
            if (code == 401) {
              alert("You are not authorized to view this page");
              //TODO: REDIRECT TO LOGIN PAGE
            }
          });
      } catch (error) {
        console.log(error);
      }
    }
    fetchdata();
  }, []);

  async function downloadCV(id, firstName, lastName) {
    const token = cookies.get("access_token");
    await axios
      .get("https://116.203.117.190:3000/v1/person/file/" + id, {
        headers: { Authorization: "Bearer " + token },
        responseType: "blob",
      })
      .then((res) => {
        const url = window.URL.createObjectURL(new Blob([res.data]));
        const link = document.createElement("a");
        link.href = url;
        link.setAttribute("download", `${firstName}_${lastName}.pdf`);
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
    <div className="flex flex-col ">
      <div className="sm:-mx-5 lg:-mx-8">
        <div className="inline-block min-w-full py-2 sm:px-5 lg:px-8">
          <div className="overflow-x-auto">
            <table className="min-w-full text-left text-sm font-light">
              <thead className="border-b bg-brightGreen text-white  font-medium dark:border-neutral-500">
                <tr>
                  {/* <th scope="col" className="px-6 py-4">ID</th> */}
                  <th scope="col" className="px-6 py-4">
                    First Name
                  </th>
                  <th scope="col" className="px-6 py-4">
                    Second name
                  </th>
                  <th scope="col" className="px-6 py-4">
                    Gender
                  </th>
                  <th scope="col" className="px-6 py-4">
                    Email
                  </th>
                  <th scope="col" className="px-6 py-4">
                    Phone
                  </th>
                  <th scope="col" className="px-6 py-4">
                    Language
                  </th>
                  <th scope="col" className="px-6 py-4">
                    Current Job
                  </th>
                  <th scope="col" className="px-6 py-4">
                    Experience
                  </th>
                  <th scope="col" className="px-6 py-4">
                    City
                  </th>
                  <th scope="col" className="px-6 py-4">
                    Street Ad.
                  </th>
                  <th scope="col" className="px-6 py-4">
                    Post No
                  </th>
                  <th scope="col" className="px-6 py-4">
                    Cv
                  </th>
                </tr>
              </thead>
              <tbody>
                {tableData.map((row) => (
                  <tr key={row.id} className="border-b dark:border-neutral-500">
                    {/* <td className="whitespace-nowrap px-6 py-4 font-medium">{row.id}</td> */}
                    <td className="whitespace-nowrap px-6 py-4">
                      {row.firstName}
                    </td>
                    <td className="whitespace-nowrap px-6 py-4">
                      {row.lastName}
                    </td>
                    <td className="whitespace-nowrap px-6 py-4">
                      {row.gender}
                    </td>
                    <td className="whitespace-nowrap px-6 py-4">{row.email}</td>
                    <td className="whitespace-nowrap px-6 py-4">
                      {row.phoneNumber}
                    </td>
                    <td className="whitespace-nowrap px-6 py-4">
                      {row.language}
                    </td>
                    <td className="whitespace-nowrap px-6 py-4">
                      {row.currentJob}
                    </td>
                    <td className="whitespace-nowrap px-6 py-4">
                      {row.teachingExperience}
                    </td>
                    <td className="whitespace-nowrap px-6 py-4">{row.city}</td>
                    <td className="whitespace-nowrap px-6 py-4">
                      {row.streetAddress}
                    </td>
                    <td className="whitespace-nowrap px-6 py-4">
                      {row.postNo}
                    </td>
                    <td className="cursor-pointer">
                      {" "}
                      <button
                        onClick={() => {
                          downloadCV(row.id, row.firstName, row.lastName);
                        }}
                        download={`${row.firstName}_${row.lastName}.pdf`}
                      >
                        Download CV
                      </button>{" "}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            {/* <div className="flex ml-96 mt-4">
        <button
          className="mr-2 px-4 py-2 bg-blue-500 text-white rounded"
          // onClick={prevPage}
          // disabled={currentPage === 1}
        >
          Prev
        </button>
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded"
          // onClick={nextPage}
          // disabled={currentRows.length < pageSize}
        >
          Next
        </button>
      </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Table;

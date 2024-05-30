import { Pagination } from "@mui/material";
import { useEffect, useState } from "react";
import Status from "./Status";
import { useNavigate } from "react-router-dom";

const Table = ({ data }) => {
  const navigate = useNavigate();
  const [entries, setEntries] = useState(6);
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const handleChangePage = (event, newPage) => {
    setCurrentPage(newPage);
    // console.log("Current page:", newPage);
  };

  function handleClick(serialNo) {
    navigate(`/appliance/${serialNo}`);
  }

  useEffect(() => {
    currentPage > totalPages ? setCurrentPage(1) : "";
  }, [entries, search]);

  const datacopy = data.filter((item) => {
    return search.toLowerCase() === ""
      ? item
      : item.serialNo.toLowerCase().includes(search.toLowerCase()) ||
          item.theatreName.toLowerCase().includes(search.toLowerCase());
  });

  const totalPages = Math.ceil(datacopy.length / entries);

  return (
    <div className="bg-white">
      <div className="bg-white h-fit w-full rounded-t-lg p-4 flex justify-between">
        <div className="flex gap-4 items-center">
          <div className="relative border border-gray-200 rounded-lg w-full max-w-56">
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              type="text"
              className="rounded-md p-1 w-full"
              placeholder="Search"
            />

            <button type="submit" className="absolute right-2 top-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-4 h-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                />
              </svg>
            </button>
          </div>
          <div className="flex gap-1 items-center bg-gray-300 px-2 py-0.5 rounded-lg">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 13.5V3.75m0 9.75a1.5 1.5 0 0 1 0 3m0-3a1.5 1.5 0 0 0 0 3m0 3.75V16.5m12-3V3.75m0 9.75a1.5 1.5 0 0 1 0 3m0-3a1.5 1.5 0 0 0 0 3m0 3.75V16.5m-6-9V3.75m0 3.75a1.5 1.5 0 0 1 0 3m0-3a1.5 1.5 0 0 0 0 3m0 9.75V10.5"
              />
            </svg>
            Filter
          </div>
        </div>
        <div className="flex gap-4">
          <div className="flex items-center gap-2">
            Show
            <select
              className="w-16 outline outline-slate-200 p-1 rounded-md"
              onChange={(e) => setEntries(e.target.value)}
              name="dropdown"
              type="dropdown"
              value={entries}
              id="dropdown"
            >
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
            </select>
          </div>
          <Pagination
            shape="rounded"
            count={totalPages}
            page={currentPage}
            onChange={handleChangePage}
          />
        </div>
      </div>
      <table className="w-full table-auto shadow-md rounded-lg ">
        <thead>
          <tr className="border-b border-gray-700 text-left">
            <th className="px-6 py-3">Device Serial</th>
            <th className="px-6 py-3">Location</th>
            <th className="px-6 py-3">Bandwidth</th>
            <th className="px-6 py-3">Status</th>
            <th className="px-6 py-3">Download Status</th>
            <th className="px-6 py-3">OS Version</th>
            <th className="px-6 py-3"></th>
          </tr>
        </thead>
        <tbody className="align-text-top">
          {datacopy
            .slice(currentPage * entries - entries, currentPage * entries)
            .map((el, index) => (
              <tr key={index} className=" hover:bg-gray-100 text-gray-900">
                <td className="px-6 py-2">{el.serialNo}</td>
                <td className="px-6 py-2">
                  <div>{el.theatreName}</div>
                  <div className="text-[#084782]">
                    {el.location.city}, {el.location.state},{" "}
                    {el.location.country}
                  </div>
                </td>
                <td className="px-6 py-2">
                  <div>{el.bandwidth}</div>
                  <div className="text-[#778496]">{el.avgBandwidth}</div>
                </td>
                <td className="px-6 py-2">
                  <Status status={el.deviceStatus} />
                </td>
                <td className="px-6 py-2">
                  <Status status={el.downloadStatus} />
                </td>
                <td className="px-6 py-2">{el.osVersion}</td>
                <td className="px-6 py-2 text-center">
                  <span
                    onClick={() => handleClick(el.serialNo)}
                    className="bg-gray-200 py-0.5 px-2 rounded-lg font-semibold cursor-pointer"
                  >
                    View
                  </span>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;

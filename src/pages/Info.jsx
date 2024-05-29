import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const Info = () => {
  const navigate = useNavigate();
  const { serialNo } = useParams();
  const [appliance, setAppliance] = useState({
    serialNo: "",
    theatreName: "",
    location: {
      city: "",
      state: "",
      country: "",
    },
    ispPaymentResponsibility: "",
    bandwidth: "",
    avgBandwidth: "",
    planStartDate: "",
    billingCycle: "",
    deviceStatus: "",
    downloadStatus: "",
    osVersion: "",
    storage: "",
  });

  function handleClick() {
    navigate("/");
  }

  useEffect(() => {
    fetch(`http://localhost:3001/api/v1/appliance/${serialNo}/info`)
      .then((res) => res.json())
      .then((data) => setAppliance(data));
  }, []);

  return (
    <div className="h-screen w-screen bg-[#f5f8fa]">
      <div className="text-lg p-4">
        <span onClick={handleClick} className="cursor-pointer">
          Devices
        </span>{" "}
        &gt; {appliance.serialNo}
      </div>
      <div className="w-full h-[192px] bg-white px-8 py-4">
        <div className="flex items-center justify-between ">
          <h1 className="text-2xl font-semibold">{appliance.serialNo}</h1>
          <div className="flex gap-1">
            <button className="bg-[#e6ecf0] py-1 px-2 m-2 rounded-md flex items-center gap-2">
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
                  d="M2.25 18 9 11.25l4.306 4.306a11.95 11.95 0 0 1 5.814-5.518l2.74-1.22m0 0-5.94-2.281m5.94 2.28-2.28 5.941"
                />
              </svg>
              SpeedTest
            </button>
            <button className="bg-[#e6ecf0] py-1 px-2 m-2 rounded-md flex items-center gap-2">
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
                  d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z"
                />
              </svg>
              Logs
            </button>
          </div>
        </div>
        <h2>{appliance.theatreName}</h2>
        <h3>
          {appliance.location.city},{appliance.location.state},
          {appliance.location.country}
        </h3>
        <div className="my-2 flex gap-2">
          <div className="flex gap-2 items-center bg-gray-300 rounded-2xl w-fit px-2 py-0.5 text-sm font-semibold">
            <div
              className={`${
                appliance.deviceStatus === "Online"
                  ? "bg-green-600"
                  : "bg-red-600"
              } h-3 w-3 rounded-full`}
            ></div>
            {appliance.deviceStatus}
          </div>
          <div className="flex gap-2 items-center bg-gray-300 rounded-2xl w-fit px-2 py-0.5 text-sm font-semibold">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="size-4"
            >
              <path
                fillRule="evenodd"
                d="M2.25 13.5a8.25 8.25 0 0 1 8.25-8.25.75.75 0 0 1 .75.75v6.75H18a.75.75 0 0 1 .75.75 8.25 8.25 0 0 1-16.5 0Z"
                clipRule="evenodd"
              />
              <path
                fillRule="evenodd"
                d="M12.75 3a.75.75 0 0 1 .75-.75 8.25 8.25 0 0 1 8.25 8.25.75.75 0 0 1-.75.75h-7.5a.75.75 0 0 1-.75-.75V3Z"
                clipRule="evenodd"
              />
            </svg>
            {appliance.storage}
          </div>
        </div>
        <hr className="border-slate-200 border-1 w-full" />
        <div className="px-1 py-2 text-[#69788c] flex gap-3">
          <div>Details</div>
          <div>Content</div>
          <div>Bandwidth</div>
        </div>

        <div className=" m-4 h-[228px] bg-white flex p-4 flex-wrap font-medium">
          <div className="w-1/4">
            <div>Device Serial</div>
            <div>{appliance.serialNo}</div>
          </div>
          <div className="w-1/4">
            <div>Location</div>
            <div>{appliance.theatreName}</div>
          </div>
          <div className="w-1/4">
            <div>City</div>
            <div>
              {appliance.location.city},{appliance.location.state},
              {appliance.location.country}
            </div>
          </div>
          <div className="w-1/4">
            <div>ISP Payment Responsibility</div>
            <div>{appliance.ispPaymentResponsibility}</div>
          </div>
          <div className="w-1/4">
            <div>Bandwidth</div>
            <div>{appliance.bandwidth}</div>
          </div>
          <div className="w-1/4">
            <div>Avg Bandwidth</div>
            <div>{appliance.avgBandwidth}</div>
          </div>
          <div className="w-1/4">
            <div>Plan Start Date</div>
            <div>{appliance.planStartDate}</div>
          </div>
          <div className="w-1/4">
            <div>Billing Cycle</div>
            <div>{appliance.billingCycle}</div>
          </div>
          <div className="w-1/4">
            <div>Download Status</div>
            <div>{appliance.downloadStatus}</div>
          </div>
          <div className="w-1/4">
            <div>OS Version</div>
            <div>{appliance.osVersion}</div>
          </div>
          <div className="w-1/4">
            <div>Storage Available</div>
            <div>{appliance.storage}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Info;

import { useEffect, useState } from "react";
import Table1 from "../Components/Table";

const Appliances = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/api/v1/appliances")
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => console.error(error));
  }, []);

  const statusCounts = data.reduce((counts, obj) => {
    counts[obj.downloadStatus] = (counts[obj.downloadStatus] || 0) + 1;
    return counts;
  }, {});

  const {
    Failed = 0,
    Cancelled = 0,
    Scheduled = 0,
    Downloading = 0,
    Downloaded = 0,
  } = statusCounts;

  return (
    <div className="h-screen w-screen bg-[#f5f8fa]">
      <h1 className="w-full text-2xl bg-white py-3 px-4 font-semibold">
        Devices
      </h1>
      <div className="mx-6">
        <div className="bg-white w-full rounded-lg p-4 flex gap-10 my-6">
          <div className="flex items-center gap-2">
            <div className="h-3 w-3 rounded-[0.2rem] bg-[#cf1322]"></div>
            {Failed}
            &nbsp; Failed
          </div>
          <div className="flex items-center gap-2">
            <div className="h-3 w-3 rounded-[0.2rem] bg-[#f0a203]"></div>
            {Cancelled}
            &nbsp; Cancelled
          </div>
          <div className="flex items-center gap-2">
            <div className="h-3 w-3 rounded-[0.2rem] bg-[#b2b2b2]"></div>
            {Scheduled}
            &nbsp; Scheduled
          </div>
          <div className="flex items-center gap-2">
            <div className="h-3 w-3 rounded-[0.2rem] bg-[#1d81e3]"></div>
            {Downloading}
            &nbsp; Downloading
          </div>
          <div className="flex items-center gap-2">
            <div className="h-3 w-3 rounded-[0.2rem] bg-[#0d7c2d]"></div>
            {Downloaded}
            &nbsp; Downloaded
          </div>
        </div>

        <Table1 data={data} />
      </div>
    </div>
  );
};

export default Appliances;

const Status = ({ status }) => {
  switch (status) {
    case "Failed":
      return (
        <div className="flex items-center gap-2">
          <div className="h-3 w-3 rounded-[0.2rem] bg-[#cf1322]"></div> {status}
        </div>
      );

    case "Cancelled":
      return (
        <div className="flex items-center gap-2">
          <div className="h-3 w-3 rounded-[0.2rem] bg-[#f0a203]"></div> {status}
        </div>
      );
    case "Downloading":
      return (
        <div className="flex items-center gap-2">
          <div className="h-3 w-3 rounded-[0.2rem] bg-[#1d81e3]"></div> {status}
        </div>
      );
    case "Offline":
      return (
        <div className="flex items-center gap-2">
          <div className="h-3 w-3 rounded-[0.2rem] bg-[#cf1322]"></div> {status}
        </div>
      );
    case "Online":
      return (
        <div className="flex items-center gap-2">
          <div className="h-3 w-3 rounded-[0.2rem] bg-[#0d7c2d]"></div> {status}
        </div>
      );
    case "Scheduled":
      return (
        <div className="flex items-center gap-2">
          <div className="h-3 w-3 rounded-[0.2rem] bg-[#b2b2b2]"></div> {status}
        </div>
      );
    case "Downloaded":
      return (
        <div className="flex items-center gap-2">
          <div className="h-3 w-3 rounded-[0.2rem] bg-[#0d7c2d]"></div> {status}
        </div>
      );

    default:
      break;
  }
};

export default Status;

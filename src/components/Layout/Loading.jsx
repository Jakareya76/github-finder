import { AiOutlineLoading3Quarters } from "react-icons/ai";

function Loading() {
  return (
    <div className="grid place-items-center">
      <button className="btn animate-pulse">
        <AiOutlineLoading3Quarters className="mr-3 animate-spin"/> Loading...
      </button>
    </div>
  );
}

export default Loading;

import { useState } from "react";

const Dropdown = ({ options, onChange, selectedOptions }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleCheckboxChange = (option) => {
    onChange(option);
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex gap-1 items-center bg-gray-300 px-2 py-0.5 rounded-lg"
      >
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
      </button>
      {isOpen && (
        <div className="absolute shadow-3xl border-gray-300 border-1 top-8 bg-gray-200 flex flex-col px-2 py-1 gap-2 rounded-lg w-28">
          {options.map((option) => (
            <label key={option}>
              <input
                className="mx-2"
                type="checkbox"
                checked={
                  (option === "Online" && selectedOptions.includes("Online")) ||
                  (option === "Offline" && selectedOptions.includes("Offline"))
                }
                value={option}
                onChange={() => handleCheckboxChange(option)}
              />
              {option}
            </label>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;

import { useState } from "react";
import { UserInputModal } from "../components/user-input-modal";

const RootPage = () => {
  const [start, setStart] = useState(false);

  return (
    <>
      {start && (
        <UserInputModal closeModal={() => setStart(false)} start={start} />
      )}

      <img
        src="images/fourTUNE.png"
        alt="Logo"
        className={`${
          start ? "opacity-0" : "opacity-100"
        } hover:scale-110 duration-500 ease-in-out`}
      />
      <button
        onClick={() => setStart(true)}
        className="text-white text-4xl font-bold z-20"
      >
        {!start && "Press Enter to Start"}
      </button>
    </>
  );
};

export default RootPage;

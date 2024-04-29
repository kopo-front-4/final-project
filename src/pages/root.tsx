import { Link } from "react-router-dom";
import styles from "./root.module.css";
import { useState } from "react";
import { UserInputModal } from "../components/user-input-modal";

const RootPage = () => {
  const [start, setStart] = useState(false);

  return (
    <main className={styles.imageContainer}>
      <div className={styles.ripples}></div>
      {start && (
        <UserInputModal closeModal={() => setStart(false)} start={start} />
      )}

      <img
        src="fourTUNE.png"
        alt="Logo"
        className={`${start ? "opacity-0" : "opacity-100"}`}
      />
      <button onClick={() => setStart(true)}>
        {!start && "Press Enter to Start"}
      </button>
    </main>
  );
};

export default RootPage;

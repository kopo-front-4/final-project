import { Dispatch, SetStateAction } from "react";
import "./side-nav.module.css";
interface SideNavProps {
  setIdx: Dispatch<SetStateAction<number>>;
  isMoving: boolean;
  setIsMoving: Dispatch<SetStateAction<boolean>>;
  visited: Array<boolean>;
}

export const Sidenav: React.FC<SideNavProps> = ({
  setIdx,
  isMoving,
  setIsMoving,
  visited,
}) => {
  const handleClick = (idx: number) => {
    if (isMoving) return;
    console.log(visited);

    setIdx(idx);
    setIsMoving(true);
  };

  return (
    <aside className="side-nav">
      <div
        title="총운"
        onClick={() => handleClick(0)}
        className={`${visited[0] ? "bg-green-400" : "bg-white"}`}
      />

      <div
        onClick={() => handleClick(1)}
        className={`${visited[1] ? "bg-green-400" : "bg-white"}`}
      />

      <div
        onClick={() => handleClick(2)}
        className={`${visited[2] ? "bg-green-400" : "bg-white"}`}
      />

      <div
        onClick={() => handleClick(3)}
        className={`${visited[3] ? "bg-green-400" : "bg-white"}`}
      />

      <div
        onClick={() => handleClick(4)}
        className={`${visited[4] ? "bg-green-400" : "bg-white"}`}
      />

      <div
        onClick={() => handleClick(5)}
        className={`${visited[5] ? "bg-green-400" : "bg-white"}`}
      />
    </aside>
  );
};

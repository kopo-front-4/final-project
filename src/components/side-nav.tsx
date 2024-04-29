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
    setIdx(idx);
    setIsMoving(true);
  };

  return (
    <aside className="side-nav">
      <div>
        <input
          type="radio"
          id="f1"
          name="sidenav"
          onClick={() => handleClick(0)}
          disabled={isMoving}
          className={`${visited[0] ? "bg-green-400" : "bg-white"}`}
        />
        <label htmlFor="f1">총운</label>
      </div>
      <div>
        <input
          type="radio"
          id="f2"
          name="sidenav"
          onClick={() => handleClick(1)}
          disabled={isMoving}
          className={`${visited[1] ? "bg-green-400" : "bg-white"}`}
        />
        <label htmlFor="f2">재물운</label>
      </div>
      <div>
        <input
          type="radio"
          id="f3"
          name="sidenav"
          onClick={() => handleClick(2)}
          disabled={isMoving}
          className={`${visited[2] ? "bg-green-400" : "bg-white"}`}
        />
        <label htmlFor="f3">연애운</label>
      </div>
      <div>
        <input
          type="radio"
          id="f4"
          name="sidenav"
          onClick={() => handleClick(3)}
          disabled={isMoving}
          className={`${visited[3] ? "bg-green-400" : "bg-white"}`}
        />
        <label htmlFor="f4">건강운</label>
      </div>
      <div>
        <input
          type="radio"
          id="f5"
          name="sidenav"
          onClick={() => handleClick(4)}
          disabled={isMoving}
          className={`${visited[4] ? "bg-green-400" : "bg-white"}`}
        />
        <label htmlFor="f5">사업운</label>
      </div>
      <div>
        <input
          type="radio"
          id="f6"
          name="sidenav"
          onClick={() => handleClick(5)}
          disabled={isMoving}
          className={`${visited[5] ? "bg-green-400" : "bg-white"}`}
        />
        <label htmlFor="f6">학업운</label>
      </div>
    </aside>
  );
};

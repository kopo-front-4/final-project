import { useRef } from "react";
import { Fortune } from "../types";
import styles from "./description.module.css";

interface DescriptionProps {
  hover: number;
  fortunes: Array<Fortune>;
}

export const Description: React.FC<DescriptionProps> = ({
  hover,
  fortunes,
}) => {
  return (
    <section className={styles.desc}>
      <div>
        {fortunes.map((item, idx) => {
          return (
            <article
              key={item.title}
              className={`${
                hover == idx
                  ? "right-0 duration-300"
                  : "-right-[500px] duration-300"
              }

              ${hover == -1 ? "delay-300" : "delay-0"}
              
              `}
            >
              <h2>{item.title}</h2>
              <div>
                <div>{item.score}%</div>
              </div>
              <p>{item.message}</p>
            </article>
          );
        })}
      </div>
    </section>
  );
};

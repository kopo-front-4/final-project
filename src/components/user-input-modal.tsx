import { Dispatch, SetStateAction, useState } from "react";
import styles from "./userInputModal.module.css";
import { Link } from "react-router-dom";

interface UserInputModalProps {
  start: boolean;
  closeModal: Dispatch<SetStateAction<boolean>>;
}

export const UserInputModal = ({ closeModal, start }) => {
  const [flipped, setFlipped] = useState(false);
  const [username, setUsername] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [birthTime, setBirthTime] = useState("");
  const [isSolar, setIsSolar] = useState(true);

  return (
    <section
      className={`${styles.userInput} ${start ? "opacity-100" : "opacity-0"}`}
    >
      <article>
        <div
          className={`${styles.cardFront} ${
            !flipped ? styles.flipped0 : styles.flipped180
          }`}
        >
          <h1>
            FOURTUNE
            <br />
            성명 입력란
          </h1>
          <div>이름을 입력해주세요:)</div>
          <div className="flex flex-col">
            <label htmlFor="nameInput" className="mb-1 text-sm">
              입력란
            </label>
            <input
              type="text"
              id="nameInput"
              placeholder="이름을 입력해주세요"
              onChange={(e) => {
                setUsername(e.target.value);
              }}
            />
          </div>
          <div className="w-full flex justify-between">
            <button onClick={closeModal}>Back</button>
            <button onClick={() => setFlipped(true)}>Next</button>
          </div>
        </div>
        <div
          className={`${styles.cardBack}  ${
            flipped ? styles.flipped0 : styles.flipped180
          }`}
        >
          <hgroup>
            <h2>Fortune</h2>
            <h2>{username}님의 기본 정보를 선택해주세요:</h2>
          </hgroup>

          <div>선택란</div>
          <div>
            <label htmlFor="birthDate">생년월일:</label>
            <input type="date" id="birthDate" />
          </div>
          <div>
            <div className="w-full flex flex-col items-center justify-center">
              <label htmlFor="birthTime">태어난 시간:</label>
              <select className="text-black py-2 rounded-lg w-full">
                <option value="미응답">선택하기</option>
                <option value="미입력">태어난 시간 모름</option>
                <option value="자시">밤 11시 30분 ~ 새벽 1시 30분</option>
                <option value="축시">새벽 1시 30분 ~ 새벽 3시 30분</option>
                <option value="인시">새벽 3시 30분 ~ 새벽 5시 30분</option>
                <option value="묘시">새벽 5시 30분 ~ 오전 7시 30분</option>
                <option value="진시">오전 7시 30분 ~ 오전 9시 30분</option>
                <option value="사시">오전 9시 30분 ~ 오전 11시 30분</option>
                <option value="오시">오전 11시 30분 ~ 오후 1시 30분</option>
                <option value="미시">오후 1시 30분 ~ 오후 3시 30분</option>
                <option value="신시">오후 3시 30분 ~ 오후 5시 30분</option>
                <option value="유시">오후 5시 30분 ~ 저녁 7시 30분</option>
                <option value="술시">저녁 7시 30분 ~ 밤 9시 30분</option>
                <option value="해시">밤 9시 30분 ~ 밤 11시 30분</option>
              </select>
            </div>
          </div>
          <div>
            <input
              type="radio"
              id="solar"
              name="calendar"
              value="양력"
              checked
            />
            <label htmlFor="solar">양력</label>
            <input type="radio" id="lunar" name="calendar" value="음력" />
            <label htmlFor="lunar">음력</label>
          </div>

          <div className="w-full flex justify-between">
            <button onClick={() => setFlipped(false)} className="">
              Return
            </button>
            <button onClick={() => setFlipped(true)} className="">
              <Link to="/loading">Next</Link>
            </button>
          </div>
        </div>
      </article>
    </section>
  );
};

{
  /* <div className="card-back">
<div className="card-heading">
  <br />
  FOURTUNE
  <br />
  <span id="userName"></span>
</div>
<div className="card-content">선택란</div>
<div>
  <label htmlFor="birthDate">생년월일:</label>
  <input type="date" id="birthDate" />
</div>
<div className="birth">
  <label htmlFor="birthTime">태어난 시간:</label>
  <br />
  <select id="birthTime">
    <option value="미응답">선택하기</option>
    <option value="미입력">태어난 시간 모름</option>
    <option value="자시">밤 11시 30분 ~ 새벽 1시 30분</option>
    <option value="축시">새벽 1시 30분 ~ 새벽 3시 30분</option>
    <option value="인시">새벽 3시 30분 ~ 새벽 5시 30분</option>
    <option value="묘시">새벽 5시 30분 ~ 오전 7시 30분</option>
    <option value="진시">오전 7시 30분 ~ 오전 9시 30분</option>
    <option value="사시">오전 9시 30분 ~ 오전 11시 30분</option>
    <option value="오시">오전 11시 30분 ~ 오후 1시 30분</option>
    <option value="미시">오후 1시 30분 ~ 오후 3시 30분</option>
    <option value="신시">오후 3시 30분 ~ 오후 5시 30분</option>
    <option value="유시">오후 5시 30분 ~ 저녁 7시 30분</option>
    <option value="술시">저녁 7시 30분 ~ 밤 9시 30분</option>
    <option value="해시">밤 9시 30분 ~ 밤 11시 30분</option>
  </select>
</div>
<div>
  <input type="radio" id="solar" name="calendar" value="양력" />
  <label htmlFor="solar">양력</label>
  <input type="radio" id="lunar" name="calendar" value="음력" />
  <label htmlFor="lunar">음력</label>
</div>
<div className="card-buttons">
  <button id="goHomeButton">
    <a href="#">Return</a>
  </button>
  <button id="finalCompleteButton">
    <a href="loading.html">Submit</a>
  </button>
</div>
</div> */
}

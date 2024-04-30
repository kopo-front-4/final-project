import { useState } from "react";
import styles from "./userInputModal.module.css";
import { useNavigate } from "react-router-dom";
import { MdSunny } from "react-icons/md";
import { FaMoon } from "react-icons/fa6";

interface UserInputModalProps {
  start: boolean;
  closeModal: () => void;
}

export const UserInputModal: React.FC<UserInputModalProps> = ({
  closeModal,
  start,
}) => {
  const navigate = useNavigate();
  const [flipped, setFlipped] = useState(false);
  const [name, setName] = useState<string | null>(null);
  const [birthDate, setBirthDate] = useState<string | null>(null);
  const [birthTime, setBirthTime] = useState<string | null>(null);
  const [isSolar, setIsSolar] = useState(true);

  const [errorMessage, setErrorMessage] = useState(false);
  const [errorMessageDate, setErrorMessageDate] = useState(false);
  const [errorMessageTime, setErrorMessageTime] = useState(false);

  const handleSubmit = () => {
    let isValid = true;
    if (birthDate == null || birthDate.trim() == "") {
      setErrorMessageDate(true);
      isValid = false;
    }
    if (birthTime == null || birthTime.trim() == "") {
      setErrorMessageTime(true);
      isValid = false;
    }

    if (!isValid) return;

    const obj = {
      name,
      birthDate,
      birthTime,
      isSolar,
    };
    localStorage.setItem("userInfo", JSON.stringify(obj));
    return navigate("/loading");
  };

  const handleClose = () => {
    setName(null);
    setBirthDate(null);
    setBirthTime(null);
    setIsSolar(true);
    closeModal();
  };

  const handleNext = () => {
    if (name == null || name.trim() == "") {
      setErrorMessage(true);
      return;
    }

    setErrorMessage(false);
    setFlipped(true);
  };

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
                setName(e.target.value);
              }}
            />
            {errorMessage && "이름을 비워두실 수 없습니다."}
          </div>
          <div className="w-full flex justify-between">
            <button onClick={() => handleClose()}>Back</button>
            <button onClick={() => handleNext()}>Next</button>
          </div>
        </div>
        <div
          className={`${styles.cardBack}  ${
            flipped ? styles.flipped0 : styles.flipped180
          }`}
        >
          <hgroup>
            <h2>Fortune</h2>
            <h2>{name}님의 기본 정보를 선택해주세요:</h2>
          </hgroup>

          <div>선택란</div>
          <div className="flex flex-col">
            <label htmlFor="birthDate">생년월일:</label>
            <input
              type="date"
              id="birthDate"
              onChange={(e) => {
                setBirthDate(e.target.value);
              }}
            />
            <span>{errorMessageDate && "항목을 비워두실 수 없습니다."}</span>
          </div>
          <div>
            <div className="w-full flex flex-col items-center justify-center">
              <label htmlFor="birthTime">태어난 시간:</label>
              <select
                className="text-black py-2 rounded-lg w-full"
                onChange={(e) => setBirthTime(e.target.value)}
              >
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
              <span>{errorMessageTime && "항목을 비워두실 수 없습니다."}</span>
            </div>
          </div>
          <div className="w-full flex gap-20 justify-center">
            <div className="flex items-center">
              <input
                type="radio"
                id="solar"
                name="calendar"
                value="양력"
                checked={isSolar}
                className="hidden"
                onChange={() => {
                  setIsSolar(true);
                }}
              />
              <label
                htmlFor="solar"
                className="flex items-center gap-2 cursor-pointer"
              >
                <div
                  className={`h-7 w-7 flex items-center justify-center rounded-full ${
                    isSolar ? "bg-green-400" : "bg-white"
                  }`}
                >
                  <MdSunny className="text-black text-2xl" />
                </div>
                양력
              </label>
            </div>
            <div className="flex items-center">
              <input
                type="radio"
                id="lunar"
                name="calendar"
                value="음력"
                className="hidden"
                onChange={() => {
                  setIsSolar(false);
                }}
                checked={!isSolar}
              />
              <label
                htmlFor="lunar"
                className="flex items-center gap-2 cursor-pointer"
              >
                <div
                  className={`h-7 w-7  flex items-center justify-center rounded-full  ${
                    isSolar ? "bg-white" : "bg-green-400"
                  }`}
                >
                  <FaMoon className="text-black text-xl" />
                </div>
                음력
              </label>
            </div>
          </div>

          <div className="w-full flex justify-between">
            <button onClick={() => setFlipped(false)}>Return</button>
            <button onClick={() => handleSubmit()}>Next</button>
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
  <span id="name"></span>
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

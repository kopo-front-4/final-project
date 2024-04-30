import styles from "./loading.module.css";
import {
  daily,
  fortune1,
  fortune2,
  fortune3,
  fortune4,
  fortune5,
} from "../constants";
import { useNavigate } from "react-router-dom";
import { useEffect, useRef, useState } from "react";

const LoadingPage = () => {
  const [loaded, setLoaded] = useState(false);
  const [progress, setProgress] = useState(1);
  const today = new Date();
  const currentYear = today.getFullYear(); // 현재 년
  const currentMonth = today.getMonth(); // 현재 월
  const currentDay = today.getDay(); // 현재 일
  const divideSeed = 40;

  const storedInfo = localStorage.getItem("userInfo"); // 로컬 스토리지 받아옴
  const userInfo = JSON.parse(storedInfo!);
  const userName = userInfo.name;

  var current = "" + currentYear;
  if (currentMonth < 10) {
    current = current + "0" + currentMonth;
  } else {
    current = current + currentMonth;
  }
  if (currentDay < 10) {
    current = current + "0" + currentDay;
  } else {
    current = current + currentDay;
  }
  const todaySeed = parseInt(current);

  const userBirth = userInfo.birthDate;
  console.log(userBirth);

  const userBirthSplit = String(userBirth).split("-");
  const userYear = userBirthSplit[0];
  const userMonth = userBirthSplit[1];
  const userDay = userBirthSplit[2];

  // @ts-ignore
  const seed = todaySeed * userYear * userMonth * userDay;
  // 재물, 연애, 사업, 건강, 학업 인덱스

  let wealthIdx = seed % divideSeed;
  let loveIdx = Math.floor(seed / divideSeed) % divideSeed;
  let businessIdx = Math.floor(seed / divideSeed / divideSeed) % divideSeed;
  let healthIdx =
    Math.floor(seed / divideSeed / divideSeed / divideSeed) % divideSeed;
  let studyIdx =
    Math.floor(seed / divideSeed / divideSeed / divideSeed / divideSeed) %
    divideSeed;

  let wealthScore = fortune1[wealthIdx].score;
  let lovedScore = fortune2[loveIdx].score;
  let businessScore = fortune3[businessIdx].score;
  let healthScore = fortune4[healthIdx].score;
  let studyScore = fortune5[studyIdx].score;

  let totalScore = Math.floor(
    // 총운 점수
    (wealthScore + lovedScore + businessScore + healthScore + studyScore) / 5
  );

  var tempMessArr = []; // 비슷한 점수대 총운 메시지 후보를 담는 배열
  for (var i = 0; i < daily.length; i++) {
    if (Math.floor(totalScore / 10) == Math.floor(daily[i].score / 10)) {
      // 앞자리 수가 같으면 추가함
      tempMessArr.push(daily[i].message);
    }
  }
  const totalIdx = Math.floor(Math.random() * tempMessArr.length);

  function calculateIdx(idx: number) {
    if (idx < 10) {
      return String(idx);
    } else if (idx >= 10 && idx < 36) {
      return String.fromCharCode("a".charCodeAt(0) + idx - 10);
    } else {
      return String.fromCharCode("A".charCodeAt(0) + idx - 36);
    }
  }

  var result = "";
  result =
    result +
    calculateIdx(totalIdx) +
    calculateIdx(wealthIdx) +
    calculateIdx(loveIdx) +
    calculateIdx(businessIdx) +
    calculateIdx(healthIdx) +
    calculateIdx(studyIdx);
  console.log(result);

  var tempMessArr = []; // 비슷한 점수대 총운 메시지 후보를 담는 배열
  for (var i = 0; i < daily.length; i++) {
    if (Math.floor(totalScore / 10) == Math.floor(daily[i].score / 10)) {
      // 앞자리 수가 같으면 추가함
      tempMessArr.push(daily[i].message);
    }
  }

  let navigate = useNavigate();

  if (result.length < 6) {
    return navigate("/error");
  }

  setTimeout(() => {
    return navigate("/result?code=" + result);
  }, 5000);

  const progressRef = useRef<HTMLProgressElement>(null);

  useEffect(() => {
    setLoaded(true);
  }, []);

  if (loaded)
    setTimeout(() => {
      setProgress((cur) => cur + 1);
    }, 2);

  if (loaded)
    return (
      <>
        <progress
          max={5000}
          value={progress}
          ref={progressRef}
          className="fixed top-0 w-full bg-white"
        ></progress>
        <div className="glassbc rounded-2xl h-[500px] w-[400px] flex items-center justify-center">
          <section className="h-[90%] w-[90%] rounded-2xl  flex items-center justify-center p-10">
            <div id="loader-container" className="text-center w-4/5">
              <div className={styles.loader}>
                <div className={styles.loaderInside}>
                  <div className={styles.loaderReverse}></div>
                </div>
              </div>
              {userName != null && (
                <p className="text-center mt-20  text-2xl text-white">
                  {userName} 님의 운세를 분석 중입니다...
                </p>
              )}
            </div>
          </section>
        </div>
      </>
    );
};

export default LoadingPage;

import styles from './loading.module.css';
import { daily, fortune1, fortune2, fortune3, fortune4, fortune5 } from '../constants';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useFortune } from '../context/fortune-context';

const LoadingPage = () => {
  const navigate = useNavigate();
  const fortuneContext = useFortune();
  const [progress, setProgress] = useState(1);
  const [name, setName] = useState('');

  useEffect(() => {
    const storedInfo = localStorage.getItem('userInfo'); // 로컬 스토리지 받아옴
    if (storedInfo == null) navigate('/');
    const userInfo = JSON.parse(storedInfo!);
    const userName = userInfo.name;
    if (userName == null) navigate('/');
    setName(userName);

    function calculateIdx(idx: number) {
      if (idx < 10) {
        return String(idx);
      } else if (idx >= 10 && idx < 36) {
        return String.fromCharCode('a'.charCodeAt(0) + idx - 10);
      } else {
        return String.fromCharCode('A'.charCodeAt(0) + idx - 36);
      }
    }

    const today = new Date();
    const currentYear = today.getFullYear(); // 현재 년
    const currentMonth = today.getMonth(); // 현재 월
    const currentDay = today.getDay(); // 현재 일
    let current = currentYear.toString();
    const divideSeed = 40;

    if (currentMonth < 10) current = current + '0' + currentMonth;
    else current = current + currentMonth;

    if (currentDay < 10) current = current + '0' + currentDay;
    else current = current + currentDay;

    const todaySeed = parseInt(current);

    const userBirth = userInfo.birthDate;

    const userBirthSplit = String(userBirth).split('-');
    const userYear = parseInt(userBirthSplit[0]);
    const userMonth = parseInt(userBirthSplit[1]);
    const userDay = parseInt(userBirthSplit[2]);

    const seed = todaySeed * userYear * userMonth * userDay;
    // 재물, 연애, 사업, 건강, 학업 인덱스

    const wealthIdx = seed % divideSeed;
    const loveIdx = Math.floor(seed / divideSeed) % divideSeed;
    const businessIdx = Math.floor(seed / divideSeed / divideSeed) % divideSeed;
    const healthIdx = Math.floor(seed / divideSeed / divideSeed / divideSeed) % divideSeed;
    const studyIdx = Math.floor(seed / divideSeed / divideSeed / divideSeed / divideSeed) % divideSeed;

    const wealthScore = fortune1[wealthIdx].score;
    const lovedScore = fortune2[loveIdx].score;
    const businessScore = fortune3[businessIdx].score;
    const healthScore = fortune4[healthIdx].score;
    const studyScore = fortune5[studyIdx].score;

    // 총운 점수
    const totalScore = Math.floor((wealthScore + lovedScore + businessScore + healthScore + studyScore) / 5);

    const tempMessArr = []; // 비슷한 점수대 총운 메시지 후보를 담는 배열
    for (let i = 0; i < daily.length; i++) {
      if (Math.floor(totalScore / 10) == Math.floor(daily[i].score / 10)) {
        // 앞자리 수가 같으면 추가함
        tempMessArr.push(daily[i].message);
      }
    }
    const totalIdx = Math.floor(Math.random() * tempMessArr.length);

    const code =
      '' +
      calculateIdx(totalIdx) +
      calculateIdx(wealthIdx) +
      calculateIdx(loveIdx) +
      calculateIdx(businessIdx) +
      calculateIdx(healthIdx) +
      calculateIdx(studyIdx);

    setTimeout(() => {
      const result = fortuneContext.code != null ? fortuneContext.code : code;
      if (fortuneContext.code == null) fortuneContext.setCode(result);
      navigate('/result?code=' + result);
    }, 5000);
  }, []);

  setTimeout(() => {
    setProgress((cur) => cur + 1);
  }, 1.5);

  return (
    <>
      <progress max={5000} value={progress} className='fixed top-0 w-full bg-white'></progress>
      <section className='h-full w-full flex2'>
        <article className='h-96 p-10 glass-black rounded-2xl flex2 flex-col'>
          <div className={styles.loader}>
            <div className={styles.loaderInside}>
              <div className={styles.loaderReverse} />
            </div>
          </div>
          <p className='px-5 text-sm sm:text-2xl text-center mt-20 text-white'>
            {name}
            <br /> 님의 운세를 분석 중입니다...
          </p>
        </article>
      </section>
    </>
  );
};

export default LoadingPage;

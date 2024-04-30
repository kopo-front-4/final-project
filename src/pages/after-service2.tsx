import { useEffect, useRef, useState } from "react";
import { FiCopy, FiCheckCircle } from "react-icons/fi";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

import bujeok1 from "../assets/images/bujeok1.jpg";
import bujeok2 from "../assets/images/bujeok2.jpg";
import bujeok3 from "../assets/images/bujeok3.jpg";
import bujeok4 from "../assets/images/bujeok4.jpg";
import bujeok5 from "../assets/images/bujeok5.jpg";
import bujeok6 from "../assets/images/bujeok6.jpg";
import fighting from "../assets/images/fighting.png";
import guwonisthis from "../assets/images/guwonisthis.png";
import happy from "../assets/images/happy.png";
import laugh from "../assets/images/laugh.png";
import livelikethis from "../assets/images/livelikethis.png";
import luckyday from "../assets/images/luckyday.png";
import matbab from "../assets/images/matbab.png";
import { useNavigate, useSearchParams } from "react-router-dom";
import { duckdamMessages } from "../constants/colors";

const AfterServicePage = () => {
  const navigate = useNavigate();
  let [searchParams] = useSearchParams();
  const code = searchParams.get("code");

  // 운세 코드가 없을 경우 에러 페이지로 리다이렉트
  if (code == null || code.length != 6) {
    return navigate("/error");
  }

  const [copy, setCopy] = useState(false);
  const [toast, setToast] = useState(false);
  const [flip, setFlip] = useState(false);
  const [curImg, setCurImg] = useState(0);
  const [buJukIdx, setBuJukIdx] = useState(0);

  const [dukdamIdx] = useState(
    Math.floor(Math.random() * duckdamMessages.length)
  );
  const [luckyNumber] = useState([
    Math.floor(Math.random() * 45) + 1,
    Math.floor(Math.random() * 45) + 1,
  ]);

  const [luckyImg] = useState([
    Math.floor(Math.random() * 25) + 1,
    Math.floor(Math.random() * 25) + 1,
    Math.floor(Math.random() * 25) + 1,
    Math.floor(Math.random() * 25) + 1,
  ]);

  const itemsRef = useRef<HTMLDivElement>(null);

  const images = [
    bujeok1,
    bujeok2,
    bujeok3,
    bujeok4,
    bujeok5,
    bujeok6,
    fighting,
    guwonisthis,
    happy,
    laugh,
    livelikethis,
    luckyday,
    matbab,
  ];

  const handleCopy = () => {
    if (copy) return;
    setCopy(true);
    setToast(true);
    navigator.clipboard.writeText(
      window.location.hostname + "/result?code=" + code
    );
  };

  const handleFlip = (val: boolean) => {
    setFlip(val);
  };

  const handleItem = (action: number) => {
    let _cur = curImg;
    if (action == -1 && _cur > 0) _cur--;
    if (action == 1 && _cur < 3) _cur++;
    setCurImg(_cur);
    itemsRef.current!.style.marginLeft = "-" + _cur * 20 + "rem";
  };

  useEffect(() => {
    setTimeout(() => setToast(false), 2000);
  }, [toast]);

  useEffect(() => {
    setBuJukIdx(Math.floor(Math.random() * 13));
  }, []);

  return (
    <>
      <div className="flex justify-center gap-5 min-h-[600px] text-white">
        <div className="flex flex-col justify-between">
          <article className="glass h-[550px]">
            <h2 className="font-semibold text-3xl text-center">행운의 부적</h2>
            <div
              className="w-72 relative mt-10 group max-h-[420px]"
              onMouseEnter={() => handleFlip(true)}
              onMouseLeave={() => handleFlip(false)}
            >
              <img
                src={images[buJukIdx]}
                className={`absolute top-0 bfv duration-1000 rounded-2xl ${
                  flip && "flipped"
                }`}
              />
              <div
                className={`absolute top-0 bfv duration-1000 flex items-center justify-center ${
                  !flip && "flipped"
                }`}
              >
                <img
                  src="https://syg171047-syg171047.ktcdn.co.kr/Production/preview/2011/05/25/d8105968.png"
                  className="rounded-2xl"
                />
                <hgroup className="absolute text-zinc-700">
                  <h2 className="text-2xl text-center">오늘의 한마디</h2>
                  <p className="mt-10 px-10 text-center">
                    {duckdamMessages[dukdamIdx]}
                  </p>
                </hgroup>
              </div>
            </div>
          </article>
          <article className="glass py-2 w-full text-3xl flex items-center justify-center mt-5">
            <h2 className="font-semibold text-center py-3">공유하기</h2>
            <div onClick={() => handleCopy()}>
              {copy ? (
                <FiCheckCircle className="ml-5 cursor-pointer" />
              ) : (
                <FiCopy className="ml-5 cursor-pointer" />
              )}
            </div>
          </article>
        </div>
        <section className="flex flex-col gap-5 justify-center">
          <article className="glass flex flex-col gap-10">
            <h2 className="font-semibold text-3xl text-center">
              행운의 아이템
            </h2>
            <div className="flex items-center justify-center gap-5">
              <div onClick={() => handleItem(-1)} className="cursor-pointer">
                <FaChevronLeft />
              </div>
              <div className="h-80 w-80  overflow-hidden relative rounded-lg">
                <div
                  ref={itemsRef}
                  className="flex h-80 w-[100rem] duration-500"
                >
                  <img
                    src={`images/luckyitem/${luckyImg[0]}.png`}
                    className="w-80 h-80"
                  />
                  <img
                    src={`images/luckyitem/${luckyImg[1]}.png`}
                    className="w-80 h-80"
                  />
                  <img
                    src={`images/luckyitem/${luckyImg[2]}.png`}
                    className="w-80 h-80"
                  />
                  <img
                    src={`images/luckyitem/${luckyImg[3]}.png`}
                    className="w-80 h-80"
                  />
                </div>
              </div>
              <div onClick={() => handleItem(1)} className="cursor-pointer">
                <FaChevronRight />
              </div>
            </div>
          </article>
          <article className="glass w-full flex flex-col items-center justify-start gap-10">
            <h2 className="font-semibold text-3xl text-center">행운의 숫자</h2>
            <div className="flex gap-10 items-center justify-center text-5xl">
              <span className="h-24 w-24 rounded-full bg-rose-300 text-zinc-700 flex2 hover:bg-rose-300/70 duration-300">
                <span className="mt-2">{luckyNumber[0]}</span>
              </span>
              <span className="h-24 w-24 rounded-full bg-blue-300 text-zinc-700 flex2 hover:bg-blue-300/70 duration-300">
                <span className="mt-2">{luckyNumber[1]}</span>
              </span>
            </div>
          </article>
        </section>
      </div>

      <div
        className={`glass fixed text-white tracking-wide right-[10%] duration-300 ${
          toast ? "bottom-[10%]  opacity-100 " : "-bottom-10  opacity-0 "
        }`}
      >
        복사되었습니다
      </div>
    </>
  );
};

export default AfterServicePage;

import { Canvas } from '@react-three/fiber';
import { Suspense, useEffect, useState } from 'react';
import { CustomOrbitControls } from '../model/custom-orbit-controls';
import { OrbitControls, Stars } from '@react-three/drei';
import { World } from '../model/world';
import { Sidenav } from '../components/side-nav';
import { Background } from '../model/background';
import { Description } from '../components/description';
import { Header } from '../components/header';
import { Link, useNavigate, useSearchParams } from 'react-router-dom';
import { customDecodeUrl } from '../hooks/decodeUrl';
import { daily, fortune1, fortune2, fortune3, fortune4, fortune5 } from '../constants';

import { Fortune } from '../types';

const ResultPage = () => {
  const navigate = useNavigate();
  const [mounted, setMounted] = useState(false);
  const [mouseMoved, setMouseMoved] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [idx, setIdx] = useState(0);
  const [hover, setHover] = useState(-1);
  const [visited, setVisited] = useState([false, false, false, false, false, false]);

  const [isMoving, setIsMoving] = useState(false);
  const [fortune, setFortune] = useState<Fortune[]>([]);
  const [searchParams] = useSearchParams();
  const code = searchParams.get('code');

  useEffect(() => {
    // 운세 코드가 없을 경우 에러 페이지로 리다이렉트
    if (code == null || code.length != 6) navigate('/error');
    const _code = customDecodeUrl(code!);

    // 운세 코드가 잘못 되었을 경우 에러 페이지로 리다이렉트
    _code.map((e) => {
      if (e == -1) navigate('/error');
    });

    const d = daily[_code[0]];
    const f1 = fortune1[_code[1]];
    const f2 = fortune2[_code[2]];
    const f3 = fortune3[_code[3]];
    const f4 = fortune4[_code[4]];
    const f5 = fortune5[_code[5]];
    setFortune([
      {
        title: '총운',
        score: d.score,
        message: d.message,
        phi: 0.95,
        theta: -0.54,
      },
      {
        title: '재물운',
        score: f1.score,
        message: f1.message,
        phi: 1.01,
        theta: 1.451,
      },
      {
        title: '연애운',
        score: f2.score,
        message: f2.message,
        phi: 1.6,
        theta: -1.616,
      },
      {
        title: '사업운',
        score: f3.score,
        message: f3.message,
        phi: 1.647,
        theta: 2.623,
      },
      {
        title: '건강운',
        score: f4.score,
        message: f4.message,
        phi: 2.223,
        theta: -0.07,
      },
      {
        title: '학업운',
        score: f5.score,
        message: f5.message,
        phi: 1.792,
        theta: -0.19,
      },
    ]);
    setMounted(true);
  }, []);

  if (!mounted) {
    return <main className='bg2'>로딩중</main>;
  }

  document.addEventListener('mousemove', () => {
    setTimeout(() => {
      setMouseMoved(true);
    }, 700);
    setTimeout(() => {
      setIsVisible(false);
    }, 1300);
  });

  document.addEventListener('click', () => {
    setTimeout(() => {
      setMouseMoved(true);
    }, 700);
    setTimeout(() => {
      setIsVisible(false);
    }, 1300);
  });

  return (
    <main className='relative'>
      {isVisible && (
        <section
          className={`fixed h-full w-full flex2 inset-0 cursor-pointer z-50 duration-700 ${
            mouseMoved ? 'bg-transparent' : 'bg-black/50'
          }`}
        >
          <article
            className={`text-white text-4xl font-bold leading-10 duration-700 ${
              mouseMoved ? 'text-transparent' : 'text-white'
            } `}
          >
            지구에 있는 운세에
            <br /> 마우스를 올려보세요
          </article>
        </section>
      )}
      <Header />
      <Sidenav setIdx={setIdx} isMoving={isMoving} setIsMoving={setIsMoving} visited={visited} />
      <div className='w-[100vw] sm:w-[50vw] h-screen absolute z-30 right-0'>
        <Canvas>
          <directionalLight />
          <ambientLight />
          <hemisphereLight />

          <CustomOrbitControls
            phi={fortune[idx].phi}
            theta={fortune[idx].theta}
            isMoving={isMoving}
            setIsMoving={setIsMoving}
          />
          <World setHover={setHover} hover={hover} setVisited={setVisited} />
        </Canvas>
      </div>
      <section className='w-[50vw] h-screen absolute z-20 left-0'>
        <Description hover={hover} fortunes={fortune} />
      </section>

      <div className='absolute top-0 h-screen w-screen z-10'>
        <Canvas camera={{ near: 0.1, far: 1000 }}>
          <Suspense fallback={null}>
            <directionalLight />
            <OrbitControls autoRotate={true} enableRotate={!isMoving} autoRotateSpeed={0.2} />
            <ambientLight />
            <hemisphereLight />
            <Background />
            <Stars />
          </Suspense>
        </Canvas>
      </div>

      <Link
        to={`/after-service?code=${code}`}
        className='p-3 glass text-zinc-700 tracking-wide fixed right-20 bottom-20 rounded-full cursor-pointer z-40 hover:text-zinc-700/70 duration-150'
      >
        행운 만들기
      </Link>
    </main>
  );
};

export default ResultPage;

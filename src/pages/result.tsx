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

import { Fortune } from '../types';
import axios from 'axios';

const ResultPage = () => {
  const navigate = useNavigate();
  const [mouseMoved, setMouseMoved] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [idx, setIdx] = useState(0);
  const [hover, setHover] = useState(-1);
  const [visited, setVisited] = useState([false, false, false, false, false, false]);

  const [isMoving, setIsMoving] = useState(false);
  const [fortune, setFortune] = useState<Fortune[] | null>(null);
  const [searchParams] = useSearchParams();
  const code = searchParams.get('code');

  const fetchResult = async () => {
    const result = await axios.get('http://localhost:8080/api/fortune?code=' + code);

    if (result.status == 200) {
      setFortune([
        {
          title: '총운',
          score: result.data[0].fortune_score,
          message: result.data[0].fortune_message,
          phi: 0.95,
          theta: -0.54,
        },
        {
          title: '재물운',
          score: result.data[1].fortune_score,
          message: result.data[1].fortune_message,
          phi: 1.01,
          theta: 1.451,
        },
        {
          title: '연애운',
          score: result.data[2].fortune_score,
          message: result.data[2].fortune_message,
          phi: 1.6,
          theta: -1.616,
        },
        {
          title: '사업운',
          score: result.data[3].fortune_score,
          message: result.data[3].fortune_message,
          phi: 1.647,
          theta: 2.623,
        },
        {
          title: '건강운',
          score: result.data[4].fortune_score,
          message: result.data[4].fortune_message,
          phi: 2.223,
          theta: -0.07,
        },
        {
          title: '학업운',
          score: result.data[5].fortune_score,
          message: result.data[5].fortune_message,
          phi: 1.792,
          theta: -0.19,
        },
      ]);
    }
  };

  useEffect(() => {
    if (code == null || code.length != 6) navigate('/error');
    fetchResult();
  }, []);

  if (fortune == null) {
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

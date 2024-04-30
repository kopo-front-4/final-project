import { Canvas } from "@react-three/fiber";
import { Suspense, useState } from "react";
import * as THREE from "three";
import { CustomOrbitControls } from "../model/custom-orbit-controls";
import {
  DragControls,
  OrbitControls,
  OrthographicCamera,
  PerspectiveCamera,
  PivotControls,
  PresentationControls,
  Stars,
} from "@react-three/drei";
import { World } from "../model/world";
import { Sidenav } from "../components/side-nav";
import { Background } from "../model/background";
import { Description } from "../components/description";
import { Header } from "../components/header";
import {
  Link,
  useNavigate,
  useParams,
  useSearchParams,
} from "react-router-dom";
import { customDecodeUrl } from "../hooks/decodeUrl";
import {
  daily,
  fortune1,
  fortune2,
  fortune3,
  fortune4,
  fortune5,
} from "../constants";
import { MdFlipCameraAndroid } from "react-icons/md";

const ResultPage = () => {
  const navigate = useNavigate();
  const [idx, setIdx] = useState(0);
  const [hover, setHover] = useState(-1);
  const [visited, setVisited] = useState([
    false,
    false,
    false,
    false,
    false,
    false,
  ]);
  const [isSouthHemisphere, setIsSouthHemisphere] = useState(false);
  const [isMoving, setIsMoving] = useState(false);

  let [searchParams] = useSearchParams();
  const code = searchParams.get("code");

  // 운세 코드가 없을 경우 에러 페이지로 리다이렉트
  if (code == null || code.length != 6) {
    return navigate("/error");
  }

  const decodedCode = customDecodeUrl(code);

  // 운세 코드가 잘못 되었을 경우 에러 페이지로 리다이렉트
  if (decodedCode == null || decodedCode.length != 6) {
    return navigate("/error");
  }

  const d = daily[decodedCode![0]];
  const f1 = fortune1[decodedCode![1]];
  const f2 = fortune2[decodedCode![2]];
  const f3 = fortune3[decodedCode![3]];
  const f4 = fortune4[decodedCode![4]];
  const f5 = fortune5[decodedCode![5]];

  const rs = [
    {
      title: "총운",
      score: d.score,
      message: d.message,
      phi: 0,
      theta: 0,
    },
    {
      title: "재물운",
      score: f1.score,
      message: f1.message,
      phi: 0,
      theta: 0,
    },
    {
      title: "연애운",
      score: f2.score,
      message: f2.message,
      phi: 0,
      theta: 0,
    },
    {
      title: "사업운",
      score: f3.score,
      message: f3.message,
      phi: 0,
      theta: 0,
    },
    {
      title: "건강운",
      score: f4.score,
      message: f4.message,
      phi: 0,
      theta: 0,
    },
    {
      title: "학업운",
      score: f5.score,
      message: f5.message,
      phi: 0,
      theta: 0,
    },
  ];

  return (
    <main className="relative">
      <Header />
      <Sidenav
        setIdx={setIdx}
        isMoving={isMoving}
        setIsMoving={setIsMoving}
        visited={visited}
      />
      <div className="w-[50vw] h-screen absolute z-20 right-0">
        <Canvas>
          <directionalLight />
          <ambientLight />
          <hemisphereLight />

          <CustomOrbitControls
            phi={rs[idx].phi}
            theta={rs[idx].theta}
            isMoving={isMoving}
            setIsMoving={setIsMoving}
          />
          <World
            setHover={setHover}
            isSouthHemisphere={isSouthHemisphere}
            hover={hover}
            setVisited={setVisited}
          />
        </Canvas>
      </div>
      <section className="w-[50vw] h-screen absolute z-20 left-0">
        <Description hover={hover} fortunes={rs} />
      </section>

      <div className="absolute top-0 h-screen w-screen z-10">
        <Canvas camera={{ near: 0.1, far: 1000 }}>
          <Suspense fallback={null}>
            <directionalLight />
            <OrbitControls
              autoRotate={true}
              enableRotate={!isMoving}
              autoRotateSpeed={0.2}
            />
            <ambientLight />
            <hemisphereLight />
            <Background />
            <Stars />
          </Suspense>
        </Canvas>
      </div>
      <button
        onClick={() => setIsSouthHemisphere((cur) => !cur)}
        className="fixed left-20 bottom-20 duration-300 p-5 z-30"
      >
        <MdFlipCameraAndroid className="text-4xl font-bold text-white hover:rotate-90 duration-300" />
      </button>
      <Link
        to={`/after-service?code=${code}`}
        className="p-3 glass text-zinc-700 tracking-wide fixed right-20 bottom-20 rounded-full cursor-pointer z-20 hover:text-zinc-700/70 duration-150"
      >
        행운의 아이템 보러가기
      </Link>
    </main>
  );
};

export default ResultPage;

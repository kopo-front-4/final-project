import { Canvas } from "@react-three/fiber";
import { Suspense, useState } from "react";
import { CustomOrbitControls } from "../model/custom-orbit-controls";
import { Stars } from "@react-three/drei";
import { World } from "../model/world";
import { Sidenav } from "../components/side-nav";
import { Background } from "../model/background";
import { Description } from "../components/description";
import { Header } from "../components/header";
import { useParams, useSearchParams } from "react-router-dom";
import { customDecodeUrl } from "../hooks/decodeUrl";
import {
  daily,
  fortune1,
  fortune2,
  fortune3,
  fortune4,
  fortune5,
} from "../constants";

const ResultPage = () => {
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

  let [searchParams, setSearchParams] = useSearchParams();
  const code = searchParams.get("code");
  const decodedCode = customDecodeUrl(code);
  if (decodedCode == null) {
    //404로 보내버림
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
    <main className="h-screen w-screen bg-black">
      <Header />
      <Sidenav
        setIdx={setIdx}
        isMoving={isMoving}
        setIsMoving={setIsMoving}
        visited={visited}
      />
      <button
        className="absolute top-10 text-white z-20"
        onClick={() => setIsSouthHemisphere((cur) => !cur)}
      >
        {`${isSouthHemisphere ? "북반구" : "남반구"}`} 보기
      </button>
      <Description hover={hover} fortunes={rs} />
      <Canvas camera={{ near: 1, far: 1000 }}>
        <Suspense fallback={null}>
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
          <Background />
          {/* <Stars /> */}
        </Suspense>
      </Canvas>
    </main>
  );
};

export default ResultPage;

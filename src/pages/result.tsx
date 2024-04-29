import { Canvas } from "@react-three/fiber";
import { Suspense, useState } from "react";
import { CustomOrbitControls } from "../model/custom-orbit-controls";
import { Stars } from "@react-three/drei";
import { World } from "../model/world";
import { Sidenav } from "../components/side-nav";
import { Background } from "../model/background";
import { Description } from "../components/description";
import { Header } from "../components/header";

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

  const rs = [
    {
      title: "총운",
      message:
        "긍정적인 생각이 좋은 기운을 부르는 하루입니다. 작은 빗방울이 모여 큰 비를 만들 듯, 조금 더디더라도 꾸준히 노력한다면 애쓴 만큼의 결과를 얻을 수 있을 것입니다. 목표의식을 상기하고 조금씩 조금씩 나아가시기 바랍니다. 여정의 고단함에 발검음을 멈춘다면 아무 소득 없이 지나온 길을 되돌아갈 뿐입니다. 심기일전하여 차분히 걸어가면 기대하던 목적지에 다다를 수 있을 것입니다. 눈에 보이는 이익을 좇기보다는 마음의 건강에 집중해보십시오. 단, 오늘은 생활반경에서 벗어나 멀리 이동하는 것이 바람직하지 않습니다. 가급적이면 먼 곳으로 떠나는 일을 피해야 하고 어쩔 수 없는 경우라면 발생 가능한 문제들에 미리 대비해야겠습니다.",
      phi: 0,
      theta: 0,
    },
    {
      title: "재물운",
      message:
        "긍정적인 생각이 좋은 기운을 부르는 하루입니다. 작은 빗방울이 모여 큰 비를 만들 듯, 조금 더디더라도 꾸준히 노력한다면 애쓴 만큼의 결과를 얻을 수 있을 것입니다. 목표의식을 상기하고 조금씩 조금씩 나아가시기 바랍니다. 여정의 고단함에 발검음을 멈춘다면 아무 소득 없이 지나온 길을 되돌아갈 뿐입니다. 심기일전하여 차분히 걸어가면 기대하던 목적지에 다다를 수 있을 것입니다. 눈에 보이는 이익을 좇기보다는 마음의 건강에 집중해보십시오. 단, 오늘은 생활반경에서 벗어나 멀리 이동하는 것이 바람직하지 않습니다. 가급적이면 먼 곳으로 떠나는 일을 피해야 하고 어쩔 수 없는 경우라면 발생 가능한 문제들에 미리 대비해야겠습니다.",
      phi: 0,
      theta: 0,
    },
    {
      title: "연애운",
      message:
        "긍정적인 생각이 좋은 기운을 부르는 하루입니다. 작은 빗방울이 모여 큰 비를 만들 듯, 조금 더디더라도 꾸준히 노력한다면 애쓴 만큼의 결과를 얻을 수 있을 것입니다. 목표의식을 상기하고 조금씩 조금씩 나아가시기 바랍니다. 여정의 고단함에 발검음을 멈춘다면 아무 소득 없이 지나온 길을 되돌아갈 뿐입니다. 심기일전하여 차분히 걸어가면 기대하던 목적지에 다다를 수 있을 것입니다. 눈에 보이는 이익을 좇기보다는 마음의 건강에 집중해보십시오. 단, 오늘은 생활반경에서 벗어나 멀리 이동하는 것이 바람직하지 않습니다. 가급적이면 먼 곳으로 떠나는 일을 피해야 하고 어쩔 수 없는 경우라면 발생 가능한 문제들에 미리 대비해야겠습니다.",
      phi: 0,
      theta: 0,
    },
    {
      title: "사업운",
      message:
        "긍정적인 생각이 좋은 기운을 부르는 하루입니다. 작은 빗방울이 모여 큰 비를 만들 듯, 조금 더디더라도 꾸준히 노력한다면 애쓴 만큼의 결과를 얻을 수 있을 것입니다. 목표의식을 상기하고 조금씩 조금씩 나아가시기 바랍니다. 여정의 고단함에 발검음을 멈춘다면 아무 소득 없이 지나온 길을 되돌아갈 뿐입니다. 심기일전하여 차분히 걸어가면 기대하던 목적지에 다다를 수 있을 것입니다. 눈에 보이는 이익을 좇기보다는 마음의 건강에 집중해보십시오. 단, 오늘은 생활반경에서 벗어나 멀리 이동하는 것이 바람직하지 않습니다. 가급적이면 먼 곳으로 떠나는 일을 피해야 하고 어쩔 수 없는 경우라면 발생 가능한 문제들에 미리 대비해야겠습니다.",
      phi: 0,
      theta: 0,
    },
    {
      title: "건강운",
      message:
        "긍정적인 생각이 좋은 기운을 부르는 하루입니다. 작은 빗방울이 모여 큰 비를 만들 듯, 조금 더디더라도 꾸준히 노력한다면 애쓴 만큼의 결과를 얻을 수 있을 것입니다. 목표의식을 상기하고 조금씩 조금씩 나아가시기 바랍니다. 여정의 고단함에 발검음을 멈춘다면 아무 소득 없이 지나온 길을 되돌아갈 뿐입니다. 심기일전하여 차분히 걸어가면 기대하던 목적지에 다다를 수 있을 것입니다. 눈에 보이는 이익을 좇기보다는 마음의 건강에 집중해보십시오. 단, 오늘은 생활반경에서 벗어나 멀리 이동하는 것이 바람직하지 않습니다. 가급적이면 먼 곳으로 떠나는 일을 피해야 하고 어쩔 수 없는 경우라면 발생 가능한 문제들에 미리 대비해야겠습니다.",
      phi: 0,
      theta: 0,
    },
    {
      title: "학업운",
      message:
        "긍정적인 생각이 좋은 기운을 부르는 하루입니다. 작은 빗방울이 모여 큰 비를 만들 듯, 조금 더디더라도 꾸준히 노력한다면 애쓴 만큼의 결과를 얻을 수 있을 것입니다. 목표의식을 상기하고 조금씩 조금씩 나아가시기 바랍니다. 여정의 고단함에 발검음을 멈춘다면 아무 소득 없이 지나온 길을 되돌아갈 뿐입니다. 심기일전하여 차분히 걸어가면 기대하던 목적지에 다다를 수 있을 것입니다. 눈에 보이는 이익을 좇기보다는 마음의 건강에 집중해보십시오. 단, 오늘은 생활반경에서 벗어나 멀리 이동하는 것이 바람직하지 않습니다. 가급적이면 먼 곳으로 떠나는 일을 피해야 하고 어쩔 수 없는 경우라면 발생 가능한 문제들에 미리 대비해야겠습니다.",
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

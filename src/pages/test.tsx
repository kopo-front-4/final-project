// /* eslint-disable react/no-unknown-property */
// import { Canvas } from '@react-three/fiber';
// import { Suspense, useEffect, useRef, useState } from 'react';
// import { World } from './model/World';
// import { Background } from './model/Background';
// import { CustomOrbitControls } from './model/CustomOrbitControls';
// import { KeyboardControls, Stars } from '@react-three/drei';

// function App() {
//   const [pos, setPos] = useState(0);
//   const [hovered, setHover] = useState(-1);
//   const [isOpen, setIsOpen] = useState(0);
//   const [side, setSide] = useState(0);

//   const refs = [useRef(), useRef(), useRef(), useRef(), useRef()];
//   const handleClick = (val) => {
//     setPos(val);
//   };

//   useEffect(() => {
//     if (hovered == -1) {
//       refs[isOpen].current.style.marginRight = '-600px';
//       refs[isOpen].current.style.transitionDelay = '500ms';
//     } else {
//       refs[hovered].current.style.transition = '300ms';
//       refs[hovered].current.style.marginRight = '0';
//       refs[hovered].current.style.transitionDelay = '0ms';
//       setIsOpen(hovered);
//     }
//   }, [hovered]);

//   // useFrame((state, delta) => {
//   //   console.log(orbitRef.current);
//   // });

//   const arr = [
//     {
//       title: '연애운',
//     },
//     {
//       title: '사업운',
//     },
//     {
//       title: '재물운',
//     },
//     {
//       title: '건강운',
//     },
//     {
//       title: '건강운',
//     },
//   ];

//   return (
//     <main className={`h-full flex ${hovered && 'cursor-pointer'}`}>
//       <h1 className='fixed w-full text-center top-10 text-6xl text-zinc-200 z-30 font-bold'>오늘의 운세</h1>
//       <h1
//         className='fixed w-full top-10 left-10 text-6xl text-zinc-200 z-30 font-bold'
//         onClick={() => setSide((cur) => (cur + 1) % 2)}
//       >
//         {side == 0 ? '남반구' : '북반구'} 살펴보기
//       </h1>
//       {arr.map((item, idx) => {
//         return (
//           <article
//             className='fixed right-16 top-32 text-white space-y-5 duration-300 -mr-[600px]'
//             ref={refs[idx]}
//             key={idx}
//           >
//             <h2 className='text-6xl font-semibold'>{item.title}</h2>
//             <div className='relative bg-white w-full h-10'>
//               <div className='absolute w-4/5 h-10 bg-rose-400 flex items-center font-semibold pl-5'> 70점</div>
//             </div>

//             <p className='w-[450px] mt-5 text-sm'>
//               긍정적인 생각이 좋은 기운을 부르는 하루입니다. 작은 빗방울이 모여 큰 비를 만들 듯, 조금 더디더라도 꾸준히
//               노력한다면 애쓴 만큼의 결과를 얻을 수 있을 것입니다. 목표의식을 상기하고 조금씩 조금씩 나아가시기
//               바랍니다. 여정의 고단함에 발검음을 멈춘다면 아무 소득 없이 지나온 길을 되돌아갈 뿐입니다. 심기일전하여
//               차분히 걸어가면 기대하던 목적지에 다다를 수 있을 것입니다. 눈에 보이는 이익을 좇기보다는 마음의 건강에
//               집중해보십시오. 단, 오늘은 생활반경에서 벗어나 멀리 이동하는 것이 바람직하지 않습니다. 가급적이면 먼
//               곳으로 떠나는 일을 피해야 하고 어쩔 수 없는 경우라면 발생 가능한 문제들에 미리 대비해야겠습니다.
//             </p>
//           </article>
//         );
//       })}

//       <section className=' h-[1200px] w-screen fixed'>
//         <Canvas className='h-screen' camera={{ near: 1, far: 1000 }}>
//           <Suspense fallback={null}>
//             <directionalLight />
//             <ambientLight />
//             <hemisphereLight />
//             <KeyboardControls
//               map={[
//                 { name: 'forward', keys: ['ArrowUp', 'w', 'W'] },
//                 { name: 'backward', keys: ['ArrowDown', 's', 'S'] },
//                 { name: 'left', keys: ['ArrowLeft', 'a', 'A'] },
//                 { name: 'right', keys: ['ArrowRight', 'd', 'D'] },
//               ]}
//             >
//               <CustomOrbitControls />

//               <World rotation={list[pos]} setHover={setHover} side={side} setSide={setSide} />
//             </KeyboardControls>

//             {/* <Background /> */}
//             <Stars />
//           </Suspense>
//         </Canvas>
//       </section>
//     </main>
//   );
// }

// export default App;

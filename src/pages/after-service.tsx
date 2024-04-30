// import { useNavigate } from "react-router-dom";
// import {
//   duckdamMessages,
//   luckyColors,
//   luckyImageFiles,
//   luckyItems,
// } from "../constants/colors";
// import styles from "./after-service.module.css";

// import bujeok1 from "../assets/images/bujeok1.jpg";
// import bujeok2 from "../assets/images/bujeok2.jpg";
// import bujeok3 from "../assets/images/bujeok3.jpg";
// import bujeok4 from "../assets/images/bujeok4.jpg";
// import bujeok5 from "../assets/images/bujeok5.jpg";
// import bujeok6 from "../assets/images/bujeok6.jpg";
// import fighting from "../assets/images/fighting.png";
// import guwonisthis from "../assets/images/guwonisthis.png";
// import happy from "../assets/images/happy.png";
// import laugh from "../assets/images/laugh.png";
// import livelikethis from "../assets/images/livelikethis.png";
// import luckyday from "../assets/images/luckyday.png";
// import matbab from "../assets/images/matbab.png";

// const AfterServicePage = () => {
//   function getRandomItems(items: string[], count: number) {
//     let selectedItem = [];
//     while (selectedItem.length < count) {
//       let randomIdx = Math.floor(Math.random() * items.length);
//       let selected = items[randomIdx];
//       if (!selectedItem.includes(selected)) {
//         selectedItem.push(selected);
//       }
//     }
//     return selectedItem;
//   }

//   const images = [
//     bujeok1,
//     bujeok2,
//     bujeok3,
//     bujeok4,
//     bujeok5,
//     bujeok6,
//     fighting,
//     guwonisthis,
//     happy,
//     laugh,
//     livelikethis,
//     luckyday,
//     matbab,
//   ];

//   // 이미지를 랜덤하게 선택
//   const randomImageFile = images[Math.floor(Math.random() * 13)];

//   const navigate = useNavigate();

//   return (
//     <div className="flex">
//       <section className="glass h-4/5 w-2/5 rounded-2xl shadow-xl flex2 flex-col mr-10 relative">
//         <h2 className="text-4xl mb-10">행운 이미지</h2>
//         <article className="w-96 h-[500px] relative flip-card">
//           <div className="w-full h-full absolute z-20 duration-300 front rounded-2xl shadow-lg">
//             <figure>
//               <img
//                 id="randomImage"
//                 alt="lucky-image"
//                 src={randomImageFile}
//                 width={384}
//                 className="rounded-2xl shadow-xl"
//               />
//             </figure>
//           </div>
//           <div className="w-full h-full absolute z-10 duration-300 back">
//             <figure className="relative rounded-2xl  shadow-2xl">
//               <img
//                 src="https://syg171047-syg171047.ktcdn.co.kr/Production/preview/2011/05/25/d8105968.png"
//                 width={384}
//                 className=" rounded-2xl"
//               />
//               <figcaption className="absolute top-[20%] px-10">
//                 <h3 className="text-3xl font-semibold text-center">
//                   오늘의 한마디
//                 </h3>
//                 <p className="text-[25px] mt-10 text-center">
//                   {
//                     duckdamMessages[
//                       Math.floor(Math.random() * duckdamMessages.length)
//                     ]
//                   }
//                 </p>
//               </figcaption>
//             </figure>
//           </div>
//         </article>

//         <button
//           onClick={() => navigate(-1)}
//           className="absolute bottom-5 right-5 py-2 px-5 text-white bg-[#f43f5e] border-none rounded-md"
//         >
//           돌아가기
//         </button>
//       </section>

//       <div className="right-section h-4/5">
//         <section className="glass h-[45%] w-4/5 rounded-2xl shadow-xl flex2 flex-wrap">
//           <div className="right-up-container w-full h-full">
//             <div className="w-full h-1/5 flex2">
//               <h2 className="glass w-4/5 mt-10 rounded-2xl flex2 flex-wrap shadow-xl text-2xl">
//                 행운의 아이템
//               </h2>
//             </div>
//             <div
//               id="lucky-item-container"
//               className="item-container w-full h-4/5 flex flex-wrap items-center justify-evenly"
//             >
//               {getRandomItems(luckyItems, 5).map((item, idx) => {
//                 return (
//                   <div
//                     className="glass-word px-5 py-2 shadow-xl rounded-2xl m-5 flex2 text-2xl"
//                     key={idx}
//                   >
//                     {item}
//                   </div>
//                 );
//               })}

//               <div className="glass-word px-5 py-2 shadow-xl rounded-2xl m-5 flex2 text-2xl">
//                 {luckyColors[Math.floor(Math.random() * luckyColors.length)]}
//               </div>
//             </div>
//           </div>
//         </section>

//         <section className="glass h-[45%] w-[80%] rounded-2xl shadow-xl flex2">
//           <div className="right-down-container w-full h-full flex-col items-center justify-center">
//             <div className="w-full h-1/5 flex2">
//               <h2 className="glass w-4/5 mt-10 rounded-2xl flex2 shadow-xl text-2xl">
//                 행운의 숫자
//               </h2>
//             </div>
//             <div
//               id="lucky-num-container"
//               className="item-container w-full h-4/5 flex items-center justify-evenly"
//             >
//               {
//                 <>
//                   <div className="glass-word h-20 w-1/5 shadow-xl rounded-2xl m-5 flex2 text-2xl">
//                     {Math.floor(Math.random() * 45) + 1}
//                   </div>
//                   <div className="glass-word h-20 w-1/5 shadow-xl rounded-2xl m-5 flex2 text-2xl">
//                     {Math.floor(Math.random() * 45) + 1}
//                   </div>
//                 </>
//               }
//             </div>
//           </div>
//         </section>
//       </div>
//     </div>
//   );
// };

// export default AfterServicePage;

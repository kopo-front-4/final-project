/////////////////////////// constants///////////////////////////////////
/////////////////////////// constants///////////////////////////////////
/////////////////////////// constants///////////////////////////////////
//지표 1 애정운
const fortune1 = [
  {
    point: 40,
    message: "40점",
  },
  {
    point: 50,
    message: "50점",
  },
  {
    point: 60,
    message: "60점",
  },
  {
    point: 70,
    message: "70점",
  },
];
//지표 1 애정운
const fortune2 = [
  {
    point: 40,
    message: "40점",
  },
  {
    point: 50,
    message: "50점",
  },
  {
    point: 60,
    message: "60점",
  },
  {
    point: 70,
    message: "70점",
  },
];
//지표 1 애정운
const fortune3 = [
  {
    point: 40,
    message: "40점",
  },
  {
    point: 50,
    message: "50점",
  },
  {
    point: 60,
    message: "60점",
  },
  {
    point: 70,
    message: "70점",
  },
];
//지표 1 애정운
const fortune4 = [
  {
    point: 40,
    message: "40점",
  },
  {
    point: 50,
    message: "50점",
  },
  {
    point: 60,
    message: "60점",
  },
  {
    point: 70,
    message: "70점",
  },
];
//지표 1 애정운
const fortune5 = [
  {
    point: 40,
    message: "40점",
  },
  {
    point: 50,
    message: "50점",
  },
  {
    point: 60,
    message: "60점",
  },
  {
    point: 70,
    message: "70점",
  },
];
//지표 1 애정운
const fortune6 = [
  {
    point: 40,
    message: "40점",
  },
  {
    point: 50,
    message: "50점",
  },
  {
    point: 60,
    message: "60점",
  },
  {
    point: 70,
    message: "70점",
  },
];
/////////////////////////// constants///////////////////////////////////
/////////////////////////// constants///////////////////////////////////
/////////////////////////// constants///////////////////////////////////

const root = document.getElementById("root");
const progressBar = document.getElementById("progress");

let params = new URL(document.location).searchParams;
let t1 = params.get("t1");
let f1 = params.get("f1");
let f2 = params.get("f2");
let f3 = params.get("f3");
let f4 = params.get("f4");
let f5 = params.get("f5");
let f6 = params.get("f6");

// if (
//   t1 == null ||
//   f1 == null ||
//   f2 == null ||
//   f3 == null ||
//   f4 == null ||
//   f5 == null ||
//   f6 == null
// ) {
//   console.log("ANG");
//   window.location.replace("error.html");
// }

window.addEventListener("scroll", () => {
  //   const viewport = root.getBoundingClientRect();
  //   const curHeight =;
  //   const totalHeight = document.body.scrollHeight;
  //   const tb = document.body.clientHeight;
  //   console.log(curHeight, totalHeight, tb);
  const totalHeight = document.body.scrollHeight - document.body.offsetHeight;
  const curHeight = window.scrollY;
  progressBar.value = curHeight / totalHeight;

  console.log();
  //   console.log(
  //     window.innerHeight + Math.round(window.scrollY) >=
  //       document.body.offsetHeight
  //   );
});

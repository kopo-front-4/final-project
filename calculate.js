const today = new Date();
const currentYear = today.getFullYear(); // 현재 년
const currentMonth = today.getMonth(); // 현재 월
const currentDay = today.getDay(); // 현재 일
const divideSeed = 40;

var current = "" + currentYear;
if (currentMonth < 10) {
    current = current + "0" + currentMonth;
} else {
    current = current + currentMonth;
}
if (currentDay < 10) {
    current = current + "0" + currentDay;
} else {
    current = current + currentDay;
}
current = parseInt(current);

// 로컬 스토리지 받아옴
// const storedInfo = localStorage.getItem("userInfo");    
// const userInfo = JSON.parse(storedInfo);
// console.log(userInfo);

// const userName = userInfo.name;
// console.log(userName, 34);

// const userBirth = userInfo.birthDate;
const userName = "son";
const userBirth = "1997-02-02"
console.log(userBirth);

const userBirthSplit = String(userBirth).split('-');
console.log(userBirthSplit);
const userYear = userBirthSplit[0];
const userMonth = userBirthSplit[1];
const userDay = userBirthSplit[2];
console.log(userYear, userMonth, userDay);

const seed = current * userYear * userMonth * userDay;
console.log(seed);
// 재물, 연애, 사업, 건강, 학업 인덱스

wealthIdx = seed % divideSeed;
loveIdx = Math.floor(seed / divideSeed) % divideSeed;
businessIdx = Math.floor(seed / divideSeed / divideSeed) % divideSeed;
healthIdx =
    Math.floor(seed / divideSeed / divideSeed / divideSeed) % divideSeed;
studyIdx =
    Math.floor(seed / divideSeed / divideSeed / divideSeed / divideSeed) %
    divideSeed;

console.log(wealthIdx, loveIdx,businessIdx,healthIdx,studyIdx);




console.log(result2)

wealthScore = fortune1[wealthIdx].score;
wealthMessage = fortune1[wealthIdx].message;

lovedScore = fortune2[loveIdx].score;
lovedMessage = fortune2[loveIdx].message;

businessScore = fortune3[businessIdx].score;
businessMessage = fortune3[businessIdx].message;

healthScore = fortune4[healthIdx].score;
healthMessage = fortune4[healthIdx].message;

studyScore = fortune5[studyIdx].score;
studyMessage = fortune5[studyIdx].message;

console.log(wealthScore, lovedScore, businessScore, healthScore, studyScore);

totalScore = Math.floor(
    // 총운 점수
    (wealthScore + lovedScore + businessScore + healthScore + studyScore) / 5
);
var tempMessArr = []; // 비슷한 점수대 총운 메시지 후보를 담는 배열
for (var i = 0; i < daily.length; i++) {
    if (Math.floor(totalScore / 10) == Math.floor(daily[i].score / 10)) {
        // 앞자리 수가 같으면 추가함
        tempMessArr.push(daily[i].message);
    }
}
totalIdx = Math.floor(Math.random() * tempMessArr.length);
totalMessage = tempMessArr[totalIdx]; // 총운 메시지 선택


// var queryString = `?wealthScore=${wealthScore}&wealthMessage=${encodeURIComponent(
//   wealthMessage
// )}`;
// var url = `result.html${queryString}`;
// window.location.href = url;

// console.log(wealthIdx, loveIdx, businessIdx, healthIdx, studyIdx);
// console.log(fortune1[wealthIdx].score, fortune1[wealthIdx].message);



function calculateIdx(idx) {
  if (idx < 10) {
    return String(idx);
  } else if (idx >= 10 && idx < 36) {
    return String.fromCharCode("a".charCodeAt(0) + idx - 10);
  } else {
    return String.fromCharCode("A".charCodeAt(0) + idx - 36);
  }
}
console.log(calculateIdx(totalIdx));
console.log(calculateIdx(wealthIdx));
console.log(calculateIdx(loveIdx));
console.log(calculateIdx(businessIdx));
console.log(calculateIdx(healthIdx));
console.log(calculateIdx(studyIdx));

var result = "";
result = result + calculateIdx(totalIdx) + calculateIdx(wealthIdx) + calculateIdx(loveIdx)+calculateIdx(businessIdx) + calculateIdx(healthIdx)+calculateIdx(studyIdx);
console.log(result);
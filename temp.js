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
result =
  result +
  calculateIdx(totalIdx) +
  calculateIdx(wealthIdx) +
  calculateIdx(loveIdx) +
  calculateIdx(businessIdx) +
  calculateIdx(healthIdx) +
  calculateIdx(studyIdx);
console.log(result);

function totalScore (scoreCard) {
  const totBowlCount = scoreCard.length;
  //    const curBowlCount = 1;
  let i = 0;
  let frame = 1;
  let score = 0;
  while (frame <= 10) {
    //  If it is not the 10th frame
    if (frame !== 10) {
      //    STRIKE
      if (scoreCard[i] === 10) {
        score = score + 10 + scoreCard[i + 1] + scoreCard[i + 2];
        frame = frame + 1;
        i = i + 1;
      }
      //    SPARE
      else if (scoreCard[i] + scoreCard[i + 1] === 10) {
        score = score + 10 + scoreCard[i + 2];
        frame = frame + 1;
        i = i + 2;
      }
      //    OPEN
      else {
        score = score + scoreCard[i] + scoreCard[i + 1];
        frame = frame + 1;
        i = i + 2;
      }
    } else {
      //    STRIKE
      if (scoreCard[i] === 10) {
        score = score + 10 + scoreCard[i + 1] + scoreCard[i + 2];
        frame = frame + 1;
        i = i + 1;
      }
      //    SPARE
      else if (scoreCard[i] + scoreCard[i + 1] === 10) {
        score = score + 10 + scoreCard[i + 2];
        frame = frame + 1;
        i = i + 2;
      }
      //    OPEN
      else {
        score = score + scoreCard[i] + scoreCard[i + 1];
        frame = frame + 1;
        i = i + 2;
      }
    }
  }
  return score;
}

function bestScore(scoreCards){
    let totalScores=[];
    for(let i in scoreCards){
        //console.log(totalScore(scoreCards[i]));
        totalScores.push(totalScore(scoreCards[i]));
    }
    return (Math.max.apply(Math, totalScores));
}

module.exports = totalScore;

const scoreCards = [[3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6],
                    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 10, 10],
                    [6, 4, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
                ]

let totalScores = []                    
for(let i in scoreCards){
    //console.log(totalScore(scoreCards[i]));
    totalScores.push(totalScore(scoreCards[i]));
}

console.log(totalScores)
console.log(bestScore(scoreCards))

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

module.exports = totalScore;

const scoreCard = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 10, 10];
console.log(totalScore(scoreCard));

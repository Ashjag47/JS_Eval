const totalScore = require("./BowlingScoreTracker");
const bestScore = require("./BowlingScoreTracker");

const cases = {
    quest1:[
  [[3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6], 90],
  [[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 10, 10], 30],
  [[6, 4, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 16]],
  quest2:[
    [[3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 10, 10],
  [6, 4, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]], 90]
};

test.each(cases.quest1)("Total score of %p is %d", (input, output) => {
  expect(totalScore(input)).toBe(output);
});
console.log(cases.quest2[0])

test("Best score is", () => {
    expect(bestScore(cases.quest2[0])).toBe(cases.quest2[1]);
  });

// eslint-disable-next-line no-unused-vars
function addPower(p, ...numsToAdd) {
  let answer = 0;
  for (let i = 0; i < numsToAdd.length; i++) {
    answer += numsToAdd[i] ** p;
  }
  return answer;
}

export { };

function solution(citations) {
  const newCitations = citations.sort();
  const total = citations.length;

  return newCitations.filter(num => num >= total).length;
}

console.log(solution([3, 0, 6, 1, 5]))
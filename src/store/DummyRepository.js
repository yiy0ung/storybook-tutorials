
export function sleep (delay) {
  var start = new Date().getTime();
  while (new Date().getTime() < start + delay);
}

export const dummyTask = [
  { idx: 1, content: '영어 단어 외우기', archive: false, pinned: true },
  { idx: 2, content: '알고리즘 문제 풀기', archive: false, pinned: false },
  { idx: 3, content: '수열 공부하기', archive: false, pinned: false },
]
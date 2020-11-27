function twoSum(numbers = [], target = 0) {
  numbers = numbers.sort(ascending)
  for (let i = 0; i < numbers.length; i++) {
    let j = bsearch(numbers, target - numbers[i], i + 1)
    if (j !== -1) {
      return [numbers[i], numbers[j]]
    }
  }
  throw new Error('no two sum solution')
}

function ascending(a, b) {
  return a < b ? -1 : a > b ? 1 : 0
}

function bsearch(A = [], key = 0, start = 0) {
  let L = start
  let R = A.length - 1
  while (L < R) {
    let M = Math.floor((L + R) / 2)
    if (A[M] < key) {
      L = M + 1
    } else {
      R = M
    }
  }
  return L === R && A[L] === key ? L : -1
}

console.log(twoSum([3, 4, 1, 2, 5, 6, 9, 8, 7], 6))

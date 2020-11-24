function twoSum(numbers = [], target = 0) {
  let map = {}
  for (let i = 0; i < numbers.length; i++) {
    const x = numbers[i]
    if (`${target - x}` in map) {
      return numbers[i] > target - x ? [target - x, numbers[i]] : [numbers[i], target - x]
    }
    map[x] = i
  }
  throw new Error('no two sum solution')
}

console.log(twoSum([3, 4, 1, 2, 5, 6, 9, 8, 7], 6))

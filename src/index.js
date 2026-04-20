function twoSum(nums, target) {
    let hashmap = {};
    for (let i = 0; i < nums.length; i++) {
        let complement = target - nums[i];
        if (complement in hashmap) {
            return [hashmap[complement], i];
        }
        hashmap[nums[i]] = i;
    }
    return [];
}
```

Kodni ishlatish uchun misol:
```javascript
let nums = [2, 7, 11, 15];
let target = 9;
console.log(twoSum(nums, target)); // [0, 1]

let A = [1, 2, 2, 3, 4, 4, ];
let B = [6,4,5];
let merged = [...A, ...B];
console.log('Merged array', merged);// 1. Merging two arrays
merged.sort()  // 2.Array Sorting - sort()
console.log('Merged array sorted', merged);
merged.reverse()   // 2.Array Sorting - reverse()
console.log('Merged array reversed', merged);
let deduplicated=[...new Set(A)];
console.log('Deduplication of Array',deduplicatedArr)  //3. Deplicated Array

function rotating_An_Array(A, k) {
    k = k % A.length;
    return A.slice(-k).concat(A.slice(0, -k));
}
console.log('Rotating an Array', rotating_An_Array(A, 2)); //4. Rotating an array

function isequals(arr1, arr2) {
    if (arr1.length !== arr2.length) return false;
    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i]) return false;
    }
    return true;
}

console.log(isequals(A, B));  // 5. Check Equals from A B 


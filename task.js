let A = [1, 2, 2, 3, 4, 4, ];
let B = [6,4,5];
k=5
let merged = [...A, ...B];
console.log('Merged array', merged);// 1. Merging two arrays
merged.sort()  // 2.Array Sorting - sort()
console.log('Merged array sorted', merged);
merged.reverse()   // 2.Array Sorting - reverse()
console.log('Merged array reversed', merged);
let deduplicated=[...new Set(A)];
console.log('Deduplication of Array',deduplicated)  //3. Deplicated Array
k = k % A.length;
console.log('Rotating an Array', A.slice(-k).concat(A.slice(0, -k))); //4. Rotating an array
function isequals(arr1, arr2) {
    if (arr1.length !== arr2.length) return false;
    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i]) return false;
    }
    return true;
}
console.log("Check Equals from A B ",isequals(A, B));  // 5. Check Equals from A B 


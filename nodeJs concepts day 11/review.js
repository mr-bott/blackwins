const arr1 = [1, [5, [[2, 3], 8], 7], 12];

// const arr2=arr1.flatMap();
// console.log(arr2);

//o(n2) time complexity

let arr2 = [];
for (let i = 0; i < arr1.length; i++) {
  if (typeof (arr1[i]) ===typeof(1)) {
    arr2.push(arr1[i]);

  } else {
    for (let j = 0; j < arr1[i].length; j++) {
        console.log(typeof(arr1[i][j]));
      arr2.push(arr1[i][j]);
    }
}
}

// console.log(arr1[i]);

console.log(arr2);
// console.log(typeof 1);

// console.log(arr1.length);

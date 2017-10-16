var arrays = [[1, 2, 3], [4, 5], [6]];

function flatten(arrays) {
  var out = [];
  arrays.forEach (function(arr){
    for (i = 0; i < arr.length; i++) {
      out.push(arr[i]);
    }
  });
  return out;
  //console.log(reduce(arrays[0]));
}

console.log(arrays.reduce(
  function(flat, current) {
  	return flat.concat(current);
},[]));

// → [1, 2, 3, 4, 5, 6]

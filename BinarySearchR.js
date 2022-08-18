console.log("You are doing great Saurabh");

let arr = [4, 7, 8, 9, 45, 58, 87, 165, 365, 584, 987];

function BinarySearchR(arr, start, end, find) {
  if (end >= start) {
    let mid = Math.floor((start + end) / 2);
    if (arr[mid] == find) {
      position = mid;
      return mid;
    } else if (arr[mid] > find) {
      return BinarySearchR(arr, start, mid - 1, find);
    } else {
      return BinarySearchR(arr, mid + 1, end, find);
    }
  }
  return -1;
}

function BinarySearchRC() {
  let inp = parseInt(document.querySelector("#inp").value);
  console.log(BinarySearchR(arr, 0, arr.length - 1, inp));
  document.querySelector("#inp").value = "";
}

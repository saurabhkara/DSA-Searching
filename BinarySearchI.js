console.log("Saurabh, you are going earn huge money.");

//Array must be sorted for binary search


let arr = [1, 5, 7, 9, 45, 65, 87];

function BinarySearchI() {
  let find = parseInt(document.querySelector("#inp").value);
  let start = 0;
  let end = arr.length - 1;
  let position = undefined;

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    if (arr[mid] == find) {
      position = mid;
      break;
    } else if (arr[mid]>find) {
        end=mid-1;
    }else{
        start=mid+1;
    }
  }

  if(position==undefined){
    alert('Item is not present in Array');
    return;
  }

  console.log('Element is present at index number',position)
  return position;
}

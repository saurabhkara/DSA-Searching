console.log('Saurabh, You gonna rock this world');

let arr=[1,2,3,4,5,6,7,8,9,10];
function linearSearch(){
    let input =document.querySelector('#number').value;
    let pos;
    for(let i =0; i<arr.length; i++){
        if(input == arr[i]){
            pos = i;
            console.log('Number found at position '+pos);
            break;
        }
    }
    if(pos == undefined){
        return;
    }
    return pos;
}
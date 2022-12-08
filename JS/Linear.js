// search = (array, num) =>{
// // let arr = document.getElementById("array[]");
// let length = array.length;
// let left = 0;
// let right = length - 1; 
// let position = -1;

// while(left <= right){
//     if (array[left] == num) {
//         position = left;

//         console.log(`${num} element found at index ${position}`);
//         document.write(`${num} element found at index ${position}`);
        
//         console.log(`Attempts ${left + 1}`);
//         document.write(`Attempts ${left + 1}`);
//         break;
//     }
//     if (array[right] == num) {
//         position = right;
//         console.log(`${num} element found at index ${position}`);
//         console.log(`Attempts ${length - right}`);
//         break;
        
//     }
//     left++;
//     right--;
// }
// if (position == -1) {
//     console.log('element not found');
    
// }
// }
// store = () => {
// var input = document.getElementById("items");

// }

// search(numbers, 45);

// store = () =>{
//     var input = document.getElementsByName('array[]');

//     for (var i = 0; i < input.length; i++) {
//         var a = input[i];
//         k = k + "array[" + i + "].value= "
//                            + a.value + " ";
//     }

//     document.getElementById("par").innerHTML = k;
//     document.getElementById("po").innerHTML = "Output";
// }

function linearSearch(array, Num) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] == Num) {
        return i;                       
        }
    }
    return -1;
}
const numbers = [26,25,85,78,45,51,55];
let Num = prompt('Enter the number to be searched')
const result = linearSearch(numbers, Num);
if (result == -1) {
    document.write('element not found');
    
}
else{
    document.write(`${Num} element found at ${result}`);
}

// var ab = (array, um) =>{
// for (let index = 0; index < array.length; index++) {
//     array[index] = um;{
//         return index;
//     }
    
// }
// return -1;
// }
// const nums = [25,62,89,45,26];
// let nu = 25
// const re = ab(nums, nu);

// if (re == -1) {
//     console.log('element not found');
    
// }
// else{
//     console.log(`${nu} element found at index ${re}`);
// }
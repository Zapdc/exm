// select = (array) =>{
//     let min;
//     for (let i = 0; i < array.length; i++) {
//         min = i;

//         for (let j = i+1 ; j < array.length; j++) {
//         if (array[j] < array[min])   {
//             min = j;
            
//         } 
//     }
//     if (min !== i) {
//         [array[i], array[min]] = [array[min], array[i]];
        
//     }
// }
// return array;
// }

// document.write(select([24,54,342,435,44,30]));
// const ary = [25,62,46,987,87];
// const re = select(ary);
// document.write(`${re}`);

si = (array) =>{
    let mi;
    for (let index = 0; index < array.length; index++) {
        mi = index;
        
    for (let j = index +1 ; j < array.length; j++) {
        if (array[j] < array [mi]) {
            mi = j;
            
        }
        
    }
    if(mi !== index){
        [array[index], array[mi]] = [array[mi], array[index]];
    }
    } 
    return array;
}

document.write(si([25,92,64,8,9721,65]));
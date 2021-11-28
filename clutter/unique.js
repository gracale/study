const array = [1,5,2,3,4,2,3,1,3,4]
//循环方法
function unique(arr) {
    for(let i=0;i<arr.length;i++){
        for(let j=i+1;j<arr.length;j++){
            if(arr[i]===arr[j]){
            arr.splice(j,1)
            j--;
            }
        }
    }
    return arr;
}
console.log(unique(array))  

//set 方法
function unique(arr) {
    return Array.from(new Set(arr))    
}
console.log(unique(array))

//map has方法
function unique(arr) {
    let map = new Map();
    let array = new Array();
    for(let i = 0;i<arr.length;i++){
        if(map.has(arr[i])){
            map.set(arr[i],true)
        }else{
            map.set(arr[i],false)
            array.push(arr[i]) 
        }
    }
    return array;
}
console.log(unique(array)) 
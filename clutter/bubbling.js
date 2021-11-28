const array = [2,1,5,3,8,4,9,5]
function sort(arr) {
    for(i=0;i<arr.length;i++){
        if (arr[i]>arr[i+1]) {
            let temp = arr[i]
            arr[i] = arr[i+1]
            arr[i+1] = temp
            i--
        }
    }
    return arr
}
console.log(sort(array))
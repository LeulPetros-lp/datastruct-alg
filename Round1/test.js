const dp_r = (arr) => {

    let fixed_arr = []
    
    for(let i = 0; i < arr.length;i++) {
        console.log(arr)
        if(arr[i] !== arr[i+1]) {
            fixed_arr.push(arr[i])
        }
    }
    

    return fixed_arr


}

let response = dp_r([1,2,3,3,4,5,6])
console.log(response)
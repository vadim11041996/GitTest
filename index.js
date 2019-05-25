function max(){
    let array = [1, 2,-5, 10, -1];
    let max = array[0];

    for (let i = 0; i <array.length; i++){
        if (max < array[i]){
            max = array[i];
        }

    }

    return max;
}
console.log(max())
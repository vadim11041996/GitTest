function countPositivesSumNegatives() {
    if (input === null || input.length == 0 ){
        return [];
    }
    
    let input = [0, -3, -5, 6, 1, -2, 99, -2019, 67];
    let numberOfPositiveElementsFromInput = 0;
    let sumOfNegativeElementsFromInput = 0;

    for(let i = 0; i < input.length; i++){
        if (input[i] > 0){
            numberOfPositiveElementsFromInput++;
        }
    }

    for(let j = 0; j < input.length; j++){
        if (input[j] < 0){
            sumOfNegativeElementsFromInput += input[j];

        }
    }

   
    return [numberOfPositiveElementsFromInput, sumOfNegativeElementsFromInput];
}

countPositivesSumNegatives()
function minMaxSum(array) {
    //take the first value as start value for sum, min and max value and iterate from the second item
    var sum = array[0],
        min = array[0],
        max = array[0];
    //add the actual value and check min and max values and take adjustments    
    for (let i = 1; i < array.length; i++) {
        sum += array[i];
        if (min > array[i]) min = array[i];
        if (max < array[i]) max = array[i];
    }
//At the end return the delta of sum and max and sum and min
    return [sum - max, sum - min];
}

console.log(minMaxSum([1, 3, 5, 7, 9]));
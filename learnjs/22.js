function removeAllItem(arr, value) {
    let i = 0;
    while (i < arr.length) {
        if (arr[i] == value) {
            arr.splice(i, 1)
        } else {
            i++
        }
    }

    return arr
}

const array = [1, 4, 5, 4, 5, 3, 5, 5 ,4 ,324]

console.log(removeAllItem(array, 4))
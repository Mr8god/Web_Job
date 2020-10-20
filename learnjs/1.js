const array = [1, 43, 5, 65]

const index = array.indexOf(43)

if(index > -1){
    array.splice(index, 1)
}

console.log(array)
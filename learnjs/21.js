function removeFirstItem(arr, value){
    let index = arr.indexOf(value)
    if(index > -1){
      arr.splice(index, 1)
    }
    return arr
 }
 
 const array =[1,2,4,5,77]
 
 console.log(removeFirstItem(array, 4))
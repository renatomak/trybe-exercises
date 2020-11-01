function addOne(array){
    let newArray = array;

    newArray.forEach((element, key, arr) => {
        arr[key] += 1;
    });

    return newArray;
}
const array = [31, 57, 12, 5];
console.log(addOne(array));

module.exports = addOne;
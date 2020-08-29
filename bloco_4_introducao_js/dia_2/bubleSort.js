function bubleSort(array){
       
    for (let i = 1; i < array.length; i++) {
        for (let j = 0; j < i; j++) {
          if (array[i] > array[j]) {
            let position = array[i];
      
            array[i] = array[j];
            array[j] = position;
          }
        }
      }

      return array;
}

let numbers = [5,3,2,4,7,1,0,6];
console.log(bubleSort(numbers));

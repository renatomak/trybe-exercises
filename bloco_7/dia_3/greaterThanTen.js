const greaterThanTen = (array) => {
    let results = 0;
    for (let i = 0; i < array.length; i += 1) {
      if (array[i] > 10) {
        results += array[i];
      }
    }
    return results;
  };
  
  const parameter = [4, 10, 32, 9, 21];
  const result = [32, 21];
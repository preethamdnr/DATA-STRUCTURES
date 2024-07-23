function matrix(x, y, z) {
    let mainArray = [];
    for (let i = 0; i < x; i++) {
      let subArray = Array(y).fill(z);
      mainArray.push(subArray);
    }
  
    return mainArray;
  }
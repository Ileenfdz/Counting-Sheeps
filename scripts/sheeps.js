function counting(array) {
    let count = 0;
    
    for(let i = 0; i < array.length; i++){
      if (array[i] == true){
        count++;
      }
    }
    return(count);
}

module.exports = counting;
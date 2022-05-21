function writeCards(array, event) {
    let newArray = [];
      for (let j = 0; j < array.length; j++) {
        let message = `Thank you, ${array[j]}, for the wonderful ${event} gift!`;
        newArray.push(message);
      }
    return newArray;
  }

  function countDown(i) {
    while (i >= 0) {
        console.log(i);
        i--;
    }
}
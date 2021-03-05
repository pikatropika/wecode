let evenArray = []
function even() {
  for (let num = 1; num <= 50; num++) {
    if(num % 2  === 0){
      evenArray.push(num)  
    }
  }  return evenArray;
  }

even();
function fibonacci (result, length){

var num1 = result[0],
    num2 = result[1],
    next,
    count = 2;

    while (count < length){
      next = num1 + num2;
      num1 = num2;
      num2 = next;
      result.push(next);
      count ++;
    }
return result;
};

finbonacci (1,15);

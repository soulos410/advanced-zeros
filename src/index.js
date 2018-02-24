module.exports = function getZerosCount(number, base) {
  let exponent, inputBase = base, numberOfZeros = number,counter, preAnswer;

  for (let myBase = 2; myBase <= base; myBase++){
    if (inputBase % myBase === 0){
      exponent = 0;
      while (inputBase % myBase === 0){
        inputBase /= myBase;
        exponent++;
      } 
      counter = 0;
      numberCopy = number
      while (numberCopy / myBase > 0){
        counter += Math.floor(numberCopy / myBase);
        numberCopy /= myBase ;
      }
      preAnswer = Math.floor(counter / exponent);
      numberOfZeros = Math.min(numberOfZeros,preAnswer);
  }
}
  return numberOfZeros;
}
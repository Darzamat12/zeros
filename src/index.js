module.exports = function zeros(expression) {
  let Array=expression.split('*');
  let arrayOfNumbers=[];
  let tmp;
  let result=0;
  let counter5=0;
  let counterOdd=0;
  let anotherArray=[];

  Array.forEach(function(element) {
    if(element.includes('!!')){
      tmp=element.replace(/!!/g, "");
      for(let i=tmp;i>0;i-=2){
        arrayOfNumbers.push(i);
      }
    
    }

    else {
      tmp=element.replace(/!/g,"");
      for(let i=tmp;i>0;i--){
        arrayOfNumbers.push(i);
      }
    }
  });

  arrayOfNumbers.forEach(function(element){
    if(element%100==0){ result+=2; anotherArray.push(element/100);}
    else if(element%10==0) {result++; anotherArray.push(element/10);}
    else if(element%5==0) {counter5++; anotherArray.push(element/5);}
    else if(element%2==0) {counterOdd++; anotherArray.push(element/2);}


  });
  anotherArray.forEach(function(element){
    if(element%100==0){ result+=2;}
    else if(element%10==0) {result++;}
    else if(element%5==0) {counter5++;}
    else if(element%2==0) {counterOdd++;}


  });

  result+=Math.min(counter5,counterOdd);

  return result;
}


//console.log(zeros('10!!*20!!*30!!'));
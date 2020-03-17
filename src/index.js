const NUMBERS={
    0: "zero",
    1: "one",
    2:  "two",
    3: "three",
    4: "four",
    5: "five",
    6: "six",
    7: "seven",
    8: "eight",
    9: "nine",
    10: "ten",
    11: "eleven",
    12: "twelve",
    13: "thirteen",
    15: "fifteen",
    18: "eighteen",
    20: "twenty",
    30: "thirty",
    40: "forty",
    50: "fifty",
    80: "eighty"
};

module.exports = function toReadable (number) {
    let ost;
    let stack = new Array;
      while(number>0){
        ost = number%10;
        stack.push(ost);
        number = (number - ost)/10;
    }
    
    let str = "";
    
    if(stack.length == 0)  {str+= NUMBERS[0]; return str;}
    if(stack.length == 3) {
      str += hundreds(stack); 
      if(stack[1]!=0 || stack[0]!=0) str += " ";
    }
    if(stack.length == 2){ 
        if(stack[1]==0) stack.pop();
        else str += decimals(stack);
    }
    if(stack.length == 1 && stack[0]!=0) str += nums(stack);
    
    return str;
    }
    
    function hundreds (stack){
      let str =NUMBERS[stack[2]] + " hundred";
      stack.pop();
      return str;
    }
    
    function decimals(stack){
      let str;
      let dec = stack[1]; 
      if(dec>=2) {
          if(dec==2) str = NUMBERS[20];
          else if(dec==3) str = NUMBERS[30];
          else if(dec==4) str = NUMBERS[40];
          else if(dec==5) str = NUMBERS[50];
          else if(dec==8) str = NUMBERS[80];
          else str = NUMBERS[dec] + "ty";
          if(stack[0]!=0) str += " " 
          stack.pop();
      } else {
          let num = stack[0];
          if(num == 0) str = NUMBERS[10];
          else if(num == 1) str = NUMBERS[11];
          else if(num == 2) str = NUMBERS[12];
          else if(num == 3) str = NUMBERS[13];
          else if(num == 5) str = NUMBERS[15];
          else if(num == 8) str = NUMBERS[18];
          else str = NUMBERS[num] + "teen";
          stack.pop();
          stack.pop();
      }
      return str;
    }
    
    function nums(stack){
      let str = NUMBERS[stack[0]];
      stack.pop();
    
      return str;
    }
    
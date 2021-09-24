function convertToRoman(num) {
  /*first we have to seperate the number into unique values represnting their place on the number scale (thousandth, hundredth, etc)*/ 
  let thousandth = num % 10000
  let hundredth = num % 1000
  let tenth = num % 100
  let single = num % 10
  /* after we do this we break the numbers down even futher to get the pure value sepreate from the other numbers. IE. 1233 = 1000 + 200 + 30 + 3, which will allow us to better translate the numbers into roman numerals */
  thousandth = thousandth - hundredth
  hundredth = hundredth - tenth
  tenth = tenth - single
  /* then we estalish the numerals based on the numbers using conditionals and a new variable which will stand in for the number*/
  let one = "I".repeat(single)//the single digit slot
  if (single === 4) {
    one = "IV"
  } else if (single === 5) {
    one = "V"
  }  else if (single > 5 && single < 9) {
    one = "V" + "I".repeat(single - 5)
  } else if (single === 9) {
    one = "IX"
  }

  let ten = "X".repeat(tenth/10)//the tenth
  if (tenth === 40) {
    ten = "XL"
  } else if (tenth === 50) {
    ten = "L"
  } else if (tenth > 50 && tenth < 90) {
    ten = "L" + "X".repeat(tenth/10 - 5)
  } else if (tenth === 90) {
    ten = "XC"
  }

  let hundred = "C".repeat(hundredth/100)//the 100th
  if (hundredth === 400) {
    hundred = "CD"
  } else if (hundredth === 500) {
    hundred = "D"
  } else if (hundredth > 500 && hundredth < 900) {
    hundred = "D" + "C".repeat(hundredth/100 - 5)
  } else if (hundredth === 900) {
    hundred = "CM"
  }

  let thousand = "M".repeat(thousandth/1000)/*we could repeat the above process for the thousandth spot but for the purposes of this exercise we're not going above 3000*/

/* finally we create a new variable, roman, that combines all the new roman numeral variables into one roman numeral and returns it upon user input*/

  let roman = thousand + hundred + ten + one
  
 return roman;
}

convertToRoman(1023);

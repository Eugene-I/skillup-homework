/* #1 */
var myNum = 10;;
var myStr = 'строка';
var myBool = true;
var myArr = [1, 2, 3, 4, 5];
var myObj = { first: 'First Name', last: 'Last Name'};

/* #2 */
var decimal2 = myNum.toFixed(2);

/* #3 */
var i;
++i;
--i;
i++;
i--;

/* #4 */
var myTest = 20;
myTest += 5;
console.log(myTest);
myTest -= 5;
console.log(myTest);
myTest *= 5;
console.log(myTest);
myTest /= 5;
console.log(myTest);
myTest %= 5;
console.log(myTest);

/* #5 */
var myPi = Math.PI;
console.log(myPi);
 
console.log(myRound);
var myRandom = Math.random()*10;
console.log(myRandom);
var myPow = Math.pow(3, 5);
console.log(myPow);

/* #6 */
var strObj = {
  str: 'Мама мыла раму, рама мыла маму'
}
strObj.length = strObj.str.length;

/* #7 */
var isRamaPos = strObj.str.indexOf('рама');

/* #8 */
var strReplace = strObj.str.replace('Мама мыла раму, рама мыла маму', 'Мама моет раму, Рама держит маму');
console.log(strReplace);

/* #9 */
console.log(strObj.str.toUpperCase());
console.log(strObj.str.toLowerCase());
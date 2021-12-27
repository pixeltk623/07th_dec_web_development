//1. Prime No

const n = parseInt(prompt("Enter a positive number: "));
let isPrime = true;
if (n == 1) {
    console.log("1 is neither prime nor composite number.");
  }
  else if (n > 1) {
  for (let i = 2; i < n; i++) {
      if (n % i == 0) {
        isPrime = false;
        break;
     }
    }
    if (isPrime) {
      console.log(n, "is a prime number");
    } else {
      console.log(n, "is a not prime number");
    }
}
else {
   console.log(n, "The number is not a prime number.");
  }



//2 . List of Prime No from 1 to 100

//let count=0
//let i,j 
//for(j=2;j<=100;j++){
//  for( i=1;i<=j;i++){
//    if(j%i==0)
//    count++
//  }
//  if(count==2)
//  console.log(j)
//  count=0
//}



// 3. Reverse Number > 123 => 321

//var num = prompt("Enter the number to be reveresed :", " ");
//var n= num;
//var rev = 0, rem;
//while (n>0)
//{
//rem = n % 10;
//rev = rev * 10 + rem ;
//n = Math.floor(n/10);
//}
//console.log('The original number is ',+num);
//console.log('The reverse number is ',+rev);



// 4. Count of Digits => 123 => 3 

// function digits_count(n) {
//var count = 0;
//if (n >= 1) ++count;
//
//while (n / 10 >= 1) {
//  n /= 10;
//  ++count;
//}
//
//return count;
//}
//console.log(digits_count(515615));
//console.log(digits_count(551515151));



// 5. Palindrome No  => 313 => 313 

//var num = prompt("Enter the number :", " ");
//var Num1= num;
//var reverse = 0;
//
//while(Num1 != 0)
//{ 
//  reverse = reverse * 10;
//reverse = reverse + (Num1 % 10);
//  Num1 = Math.floor(Num1 / 10);
//}
//
//if (num == reverse)
//console.log(num +" is a palindrome number");
// else
//console.log(num +" is not a palindrome number");



// 6. Armstrong No 153 => 153

// let sum = 0;
// const num = prompt('Enter a three-digit positive integer: ');
// let temp = num;
// while (temp > 0) {
//     let remainder = temp % 10;

//     sum += remainder * remainder * remainder;
//     temp = parseInt(temp / 10);
// }
// if (sum == num) {
//     console.log( num +" is an Armstrong number");
// }
// else {
//     console.log( num +" is an not Armstrong number");
// }



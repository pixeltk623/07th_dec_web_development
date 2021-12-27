
//diffrence between two numbers

const diff = (a, b) => {
    return Math.abs(a - b);
}

console.log(diff(12, 17));

//comaprison operator

let a=20;
 
 b=30;

 console.log(a==b);

 console.log(a>=b)

 console.log(a<=b)

 //increment operator

console.log(a)

console.log(a++)

console.log(++a)

console.log(a)


//area of rectangle
  let l, w, c;
    l = 8;
    w = 6;
  console.log  (c = l * w);
    

    //area of circle
function circleArea(radius) {
    let area = Math.PI * (radius * radius);
    console.log(area);
    console.log(Math.round(area*100)/100);
}
 
circleArea(5);




//q1.prime no
function test_prime(n)
{

  if (n===1)
  {
    return false;
  }
  else if(n === 2)
  {
    return true;
  }else
  {
    for(let x = 2; x < n; x++)
    {
      if(n % x === 0)
      {
        return false;
      }
    }
    return true;  
  }
}

console.log(test_prime(37));



//  q2.prime no 1 to 100

let count=0
let i,j 
for(j=2;j<=100;j++)
{
for( i=1;i<=j;i++)
{
  if(j%i==0)
  count++
  
}

if(count==2)

console.log(j)
count=0


  
}

//q3.reverse number 

const num = 124323;
const reverse = (num) => parseInt(String(num)
.split("")
.reverse()
.join(""), 10);
console.log(reverse(num));



//q4.armstrong number
function isArmstrong (n) {
    const res = parseInt(n, 10) === String(n)
        .split('')
        .reduce((sum, n) => parseInt(sum, 10) + n ** 3, 0);
    console.log(n, 'is', res, 'Armstrong number')
    return res
}

isArmstrong(143)



//q5.count of digits
const number = 4567 ;
const digits = (number, count = 0) => {
   if(number){
      return digits(Math.floor(number / 10), ++count);
   };
   return count;
};
console.log(digits(number));



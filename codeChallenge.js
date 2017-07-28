//1
function stringy(string){
	//find the length of the string
	len = string.length
	//len will be a number
	//write a loop that will run through the string
	var output = []
	var number = 1
	for(i=0;i<len;i++){
		var compare = number%2
		//take the length and alternate 0s and 1s for each letter
		//for the first letter in the string it needs to output a 1
		if(compare==0){
			output.push(1)
			number++
		}else{
			output.push(0)
			number++
		}
	}var sequence = output.join('')
	console.log(sequence)

//2
function reverse(numbers){
	//convert numbers to string
	var string = numbers.toString()
	//make an array fort he numbers to go into
	var numbers = []
	//run through the length of the numbers 
	for(i=0; i<string.length; i++){
	//push each of the numbers into an array
		numbers.push(string[i])
	}
	//reverse the array
	var output = numbers.reverse();
	console.log(output)
}

//3
function fibonacci(number){
	//our number will be the the point that the sequence stops running
	//a will be the first number
	//b will be the second number added to it
	// and c will be the sum of the two
	var a = 1
	var b = 0
	var c = 1
	
	for(var i = 0; i<=number; i++){
		//add our numbers together
		c = a + b;
		//a becomes the first number added
		a = b;
		//b becomes the sum of the two
		b = c; 
		console.log(c)
		}
		//this will print out the sum of the sequence at the index specified
	console.log(c)

}

//4
//function needs to take in an a coupon number
function checkCoupon(coupon){
	var len = coupon.length
	//regex to check for all numbers
	var num = (/\d+/g)
	//pulls all numbers from coupon
	var numbers = coupon.match(num)
	console.log(numbers)
	//turns the numbers pulled from before and makes them integers
	var year = parseInt(numbers[1])
	console.log(year)
	if (year<=2016){
		console.log('expired')
	}else{
		console.log('valid')
	}
}

function checkEmail(email){
	//regex to look for any number or letter then it has to have an @
	//then any number or letter then a . then any number or letter
	//probably pretty basic but it works
	var check = (/(\w+)\@(\w+)\.[a-zA-Z]/g);
	//check if email matches the expression
		if(email.match(check)){
			console.log('ok')
		}else{
			console.log('invalid')
		}

}













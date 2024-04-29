/* b) make a arrow function named isGreaterThan18 , pass a value , 
    the function must return true if the given age is greater or equals to 18 otherwise false */

    let isGreaterThan18 = function(age) {

        if (age >= 18) {
            return true
        }
        else {
            return false
        }
    }

    let result = isGreaterThan18(8)
    console.log(result)

/* c) make a arrow function that take a number and return you can enter room only 
    if the enter number is less than 18 else you can not enter */

    let _result = function(number) {

        if (number >=1 && number < 18) {
            return ("You can enter the room")
        }
        else {
            return ("You cannot enter the room")
        }
    }

    let response = _result(8)
    console.log(response)

/* d) make a arrow function named isEven , pass a value, that return true 
    if the given number is even else return false */

    let isEven = function(num) {

        if (num % 2 == 0) {
            return true
        }
        else {
            return false
         }
    }
    
    let res = isEven(27)
    console.log(res)

/* f) make a function that takes one input as number and return "category1" for number range from 1 to 10,
    return "category2" for number range from 11 to 20, return "category3" for number range form 21 to 30 */

    let whichCategory = function (n1) {

        if ( n1<=1 && n1 <=10) {
            return ("Category 1")
        }
        else if (n1 > 10 && n1 < 21) {
            return("Category 2")
        }
        else if (n1>=21 && n1<=30) {
            return("Category 3")
        }
        else {
            return ("No Category")
        }
    }

    let category = whichCategory(33)

    console.log(category)

/* g) make a function that takes a input as number  that perform
		if age [upto 17],  return your ticket is free
		if age[18 to 25 ], return  your ticket cost 100
        if age===26 return your ticket is 150
		if age[>26],  return your ticket cost 200 */

    let t_cost = function(t_age){

        if (t_age >=1 && t_age <= 17){
            return ("Your ticket is free")
        }
        else if (t_age > 17 && t_age < 26) {
            return ("Your ticket cost 100")
        }
        else if (t_age === 26) {
            return ("Your ticket is 150")
        }
        else if (t_age > 25) {
            return ("Your ticket cost 200")
        }
        else {
            return ("Enter the correct age")
        }
    }

    let ticket = t_cost(26)

    console.log(ticket)

/* h)  make a function that take a number
 			if number>=3 console i am greater or equal to 3
 			if number ===3 console i am 3
 			if number<3 console i am less than3
 			else show i am other */

    let take_num = function (tNum1) {

        if (tNum1 === 3) {
            return (" I am 3")
        }
        else if ( tNum1 <3 ) {
            return ("I am less than 3")
        }
        else if ( tNum1 >=3 ) {
            return (" I am greater or equal to 3")
        }
        else {
            return ("I am other")
        }
    }

    let takeNum = take_num(33)
    console.log(takeNum)


/* i) make a function that takes input as number and return output You can watch movies
    if input is greater or equal to 18
    else return "You are not authorized to watch movies */

    let wMovies = function (wAge) {
        
        if (wAge >= 18) {
            return ("You can watch movies")
        }
        else {
            return ("You are not authorized to watch movies")
        }
    }

    let movie = wMovies(33)

    console.log(movie)
// Write a function that takes a string of parentheses, and determines if the order of the parentheses is valid. 
// The function should return true if the string is valid, and false if it's invalid.

// Examples
// "()"              =>  true
// ")(()))"          =>  false
// "("               =>  false
// "(())((()())())"  =>  true
// Constraints
// 0 <= input.length <= 100

// https://www.codewars.com/kata/52774a314c2333f0a7000688/train/javascript

validParentheses = (parens) => {
    let count = 0; //if ever negative then it isn't valid
    
    for (let i = 0; i < parens.length && count >= 0; i++)  
      count += parens.charAt(i) === '(' ? 1 : -1;

    return count === 0;
}
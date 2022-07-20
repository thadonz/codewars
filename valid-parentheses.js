validParentheses = (parens) => {
  let count = 0; //if ever negative then it isn't valid
  
  for (let i = 0; i < parens.length && count >= 0; i++) {
    let currChar = parens.charAt(i);
    if(currChar === '(')
      count++;
    else if(currChar === ')')
      count--;
  }
  return count === 0;
}
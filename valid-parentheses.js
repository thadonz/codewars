validParentheses = (parens) => {
    let count = 0; //if ever negative then it isn't valid
    
    for (let i = 0; i < parens.length && count >= 0; i++)  
      count += parens.charAt(i) === '(' ? 1 : -1;

    return count === 0;
  }
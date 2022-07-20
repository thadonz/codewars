validParentheses = (parens) => {
    let count = 0; //if ever negative then it isn't valid
    const charValues = {
      '(': 1,
      ')': -1
    };
    
    for (let i = 0; i < parens.length && count >= 0; i++) {
      let currChar = parens.charAt(i);
      count += charValues[currChar];
    }
    return count === 0;
  }
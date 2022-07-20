validParentheses = (parens) => {
    let count = 0; //if ever negative then it isn't valid
    const charValues = {
      '(': 1,
      ')': -1
    };
    
    [...parens].forEach(c => count >= 0 ? count += charValues[c] : count)
    
    return count === 0;
  }
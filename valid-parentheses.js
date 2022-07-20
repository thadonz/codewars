validParentheses = (parens) => {
    let count = 0; //if ever negative then it isn't valid
    const charValues = {
      '(': 1,
      ')': -1
    };
    
    for (let i = 0; i < parens.length && count >= 0; i++)  
      count += charValues[parens.charAt(i)];

    return count === 0;
  }
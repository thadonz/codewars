function dirReduc(arr){
  let ret = [...arr];

  const opposites = {
    'NORTH': 'SOUTH',
    'SOUTH': 'NORTH',
    'EAST': 'WEST',
    'WEST': 'EAST'
  };

  let i = 0;
  while(i < ret.length) {
    let removed = false;
    
    if(i !== ret.length-1) {
      const curr = ret[i];  
      const next = ret[i+1];

      if(opposites[curr] === next) {
        ret.splice(i, 2);
        removed = true;
      }
    }
    
    i = removed ? 0 : i + 1;
  }

  return ret;
}
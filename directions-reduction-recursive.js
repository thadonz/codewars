function dirReduc(arr){
    return reduceRecursive(arr, 0);
}

function reduceRecursive(arr, i) {
    let ret = [...arr];

    //array isn't empty and isn't at the end
    if(ret.length > 0 && i !== ret.length-1) {
        const opposites = {
            'NORTH': 'SOUTH',
            'SOUTH': 'NORTH',
            'EAST': 'WEST',
            'WEST': 'EAST'
        };  
        
        const curr  = ret[i];
        const next  = ret[i+1];
        let removed = false;
        
        if(opposites[curr] === next) {
            ret.splice(i, 2);
            removed = true;
        }
        
        return reduceRecursive(ret, removed ? 0 : ++i);
    }

    return ret;
}
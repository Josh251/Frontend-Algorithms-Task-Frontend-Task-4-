checkYuGiOh = (para) => {
    n = Number(para);

    if(isNaN(n)) {
        return `invalid parameter: "${para}"`
    }

    let result = Array(n);

    for(var i = 0; i < n; i++) {
        let pos = i + 1;
        let res = '';

        if (pos % 2 === 0) {
            res = 'yu';
        }

        if (pos % 3 === 0) {
            res = res ? res + '-gi' : 'gi';
        }

        if (pos % 5 === 0) {
            res = res ? res + '-oh' : 'oh';
        }

        result[i] = res ? res : pos
    }
    
    return result;
}
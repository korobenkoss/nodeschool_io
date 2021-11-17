var total = 0;

function longDelayInvoc(a){
    if(!a){
        var result = total;
        return result;
    } else{
        total += a;
        return longDelayInvoc;
    }
}

module.exports = longDelayInvoc;
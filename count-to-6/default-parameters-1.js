module.exports = function midpoint(low = 0, high = 1){
    if (low > high) {
        return "Error";
    }

    let mid = (high + low) / 2;

    return mid;
}
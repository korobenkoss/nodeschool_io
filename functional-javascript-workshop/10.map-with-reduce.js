module.exports = function arrayMap(arr, fn) {
    let newArray = []

    arr.forEach(element => {
        newArray.push(fn(element))
    });

    return newArray
}


// // OFFICIAL SOLUTION:
// module.exports = function arrayMap(arr, fn, thisArg) {
//     return arr.reduce((acc, item, index, arr) => {
//       acc.push(fn.call(thisArg, item, index, arr))
//       return acc
//     }, [])
//   }
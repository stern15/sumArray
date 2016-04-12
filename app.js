//function printRev(arr) {
//    for (var i = arr.length - 1; i >= 0; i--) {
//        console.log(arr[i]);
//    }
//}
//printRev([2, 3, 44, 2, 5, 7, 3, 7, 88]);




function isUniform(arr1) {
    var first = arr1[0];
    for (var i = 1; i < arr1.length; i++) {
        if (arr1[i] !== first) {
            return false;
        }
    }
    return true;
}

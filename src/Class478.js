export var Class478 = function () {
    var a = {
        member778: -2,
        member6135: -3,
        member6136: 2,
        member6137: 3,
        member7660: 4
    };
    var c = new Array(10);
    for (var d in a) {
        c[a[d]] = a[d];
    }
    var b = function (e) {
        if (c[e] === undefined) {
            return false;
        }
        return true;
    };
    a.member6140 = b;
    return a;
}();
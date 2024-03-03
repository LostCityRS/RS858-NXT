export var Class460 = function () {
    var a = {
        member778: -2,
        member6135: -3,
        member6136: 2,
        member6137: 3,
        member6838: 4,
        member7270: 5,
        member7271: 6,
        member7272: 7,
        member7273: 8
    };
    var c = new Array(20);
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
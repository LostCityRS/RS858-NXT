export var Class480 = function () {
    var a = {
        member778: -2,
        member6135: -3,
        member6136: 2,
        member6137: 3,
        member7666: 4,
        member7667: 5,
        member7668: 6,
        member7669: 7,
        member7670: 8,
        member7671: 9,
        member7672: 10,
        member6139: 20,
        member6138: 21,
        member7673: 30,
        member7674: 31,
        member7675: 32,
        member7676: 33,
        member7677: 34,
        member7678: 38
    };
    var c = new Array(40);
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
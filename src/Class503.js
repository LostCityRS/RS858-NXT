export var Class503 = function () {
    var a = {
        member8224: -1,
        member778: -2,
        member6135: -3,
        member8225: -4,
        member8226: -5,
        member6136: 2,
        member6137: 3,
        member8227: 7,
        member7671: 9,
        member8228: 37
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
export var Class757 = function () {
    var d = {};
    var e = new Array();
    var b = function (g) {
        c(g);
    };
    d.member10221 = b;
    var c = function (g) {
        e.push(g);
        if (e.length > 10) {
            e.shift();
        }
    };
    var a = function () {
        while (e.length > 0) {
            var g = e.shift();
            g.member10222();
        }
    };
    d.member78 = a;
    return d;
}();
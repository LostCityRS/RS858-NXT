export var Class284 = function () {
    var a = function (g) {
        var e = {};
        var b = g;
        var d = function (j) {
            for (var h = 0; h < b.length; h++) {
                var i = b[h];
                if (i.member2794() == j) {
                    return i;
                }
            }
            return undefined;
        };
        e.member3319 = d;
        var c = function (k) {
            var i = [];
            for (var h = 0; h < b.length; h++) {
                var j = b[h];
                if (j.member2794() == k) {
                    i.push(j);
                }
            }
            return i;
        };
        e.member3372 = c;
        return e;
    };
    return a;
}();
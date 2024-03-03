export var Class620 = function () {
    var i = 5;
    var g = {};
    var b = [];
    g.member9285 = function () {
        return b;
    };
    g.member9286 = function (k) {
        for (var j = 0; j < b.length; j++) {
            if (b[j].id === k) {
                return j;
            }
        }
        return -1;
    };
    var h = g.member9286;
    g.member3995 = function (j) {
        if (j < 0 || j >= b.length || j === undefined || j === null) {
            throw new Error('927 ');
        }
        return b[j];
    };
    var e = g.member3995;
    g.member9287 = function (k, j) {
        if (j < -1 || j > b.length) {
            throw new Error('928 ');
        }
        if (b.length === i) {
            throw new Error('929 ');
        }
        if (h(k.id) !== -1) {
            throw new Error('930 ' + k.id);
        }
        if (j === undefined || j === null || j === -1) {
            j = b.length;
        }
        b.splice(j, 0, k);
        return j;
    };
    var d = g.member9287;
    g.member9288 = function (j) {
        if (j < 0 || j >= b.length || j === undefined || j === null) {
            throw new Error('931 ');
        }
        b.splice(j, 1);
    };
    var c = g.member9288;
    g.clear = function () {
        b = [];
    };
    var a = g.member301;
    return g;
}();
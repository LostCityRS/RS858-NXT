export var Class126 = function () {
    var b = { member757: new Float32Array(3) };
    var d = new Array(4);
    for (var a = 0; a < d.length; a++) {
        d[a] = new Array(3);
        d[a][0] = b;
        for (var c = 1; c < d[a].length; c++) {
            d[a][c] = { member757: new Float32Array(3) };
        }
    }
    var e = function (g) {
        var j = {};
        var k;
        if (g.id === undefined) {
            throw new Error('1899 ');
        }
        k = j.id = g.id;
        j.member767 = function (m, o, n, l) {
            l.member764(m, o, n, 0, 0, b, m);
            if ((m.member546 & 255) === 0) {
                return undefined;
            }
            l.member765(d[0][1], o, n, o, n, m);
            l.member765(d[0][2], o + 1, n, o, n, m);
            l.member765(d[1][1], o + 1, n, o, n, m);
            l.member765(d[1][2], o + 1, n + 1, o, n, m);
            l.member765(d[2][1], o + 1, n + 1, o, n, m);
            l.member765(d[2][2], o, n + 1, o, n, m);
            l.member765(d[3][1], o, n + 1, o, n, m);
            l.member765(d[3][2], o, n, o, n, m);
            return d;
        };
        var i = j.member770;
        j.member762 = function (m, n, l) {
            return m;
        };
        var h = j.member762;
        g = undefined;
        return j;
    };
    return e;
}();
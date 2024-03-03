export var Class231 = function () {
    var d = {};
    var g = new Array(256);
    var b = 3988292384;
    var e = 0, a = 0, c = 0;
    for (a = 0; a < 256; a++) {
        e = a;
        for (c = 0; c < 8; c++) {
            if ((e & 1) === 1) {
                e = e >>> 1 ^ b;
            } else {
                e >>>= 1;
            }
        }
        g[a] = e;
    }
    d.member2769 = function (m, n, j) {
        var k = 4294967295;
        m.setPos(n);
        for (var i = 0; i < j; i++) {
            k = k >>> 8 ^ g[(k ^ m.g1()) & 255];
        }
        k ^= 4294967295;
        return k;
    };
    var h = d.member2769;
    return d;
}();
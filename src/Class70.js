export var Class70 = function () {
    var a = {};
    a.member490 = function (b, m, k, d, t, s, q, n, j) {
        if (s === undefined) {
            s = 0;
        }
        if (q === undefined) {
            q = 0;
        }
        if (n === undefined) {
            n = 1;
        }
        if (j === undefined) {
            j = 1;
        }
        var h = b.gl.createBuffer();
        var c = new ArrayBuffer(4 * (4 + 4 + 4 + 4));
        var i = new Float32Array(c);
        var o = 0;
        i[o++] = m;
        i[o++] = k;
        i[o++] = s;
        i[o++] = q;
        i[o++] = m + d;
        i[o++] = k;
        i[o++] = n;
        i[o++] = q;
        i[o++] = m + d;
        i[o++] = k + t;
        i[o++] = n;
        i[o++] = j;
        i[o++] = m;
        i[o++] = k + t;
        i[o++] = s;
        i[o++] = j;
        b.gl.bindBuffer(b.gl.ARRAY_BUFFER, h);
        b.gl.bufferData(b.gl.ARRAY_BUFFER, c, b.gl.STATIC_DRAW);
        var e = b.gl.createBuffer();
        var r = new ArrayBuffer(6 * 2);
        var g = new Uint16Array(r);
        g[0] = 0;
        g[1] = 1;
        g[2] = 3;
        g[3] = 1;
        g[4] = 2;
        g[5] = 3;
        b.gl.bindBuffer(b.gl.ELEMENT_ARRAY_BUFFER, e);
        b.gl.bufferData(b.gl.ELEMENT_ARRAY_BUFFER, r, b.gl.STATIC_DRAW);
        return {
            member491: h,
            member492: e
        };
    };
    return a;
}();
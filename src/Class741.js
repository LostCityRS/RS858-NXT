export var Class741 = function () {
    var a = 10;
    var b = 8;
    var c = -1;
    var d = function (v) {
        var z = {};
        var i = [];
        var q = [];
        var h = [];
        var o = [];
        z.id = v;
        var D = function (J, I) {
            if (I < 0 || I >= J.length || I === undefined || I === null) {
                throw new Error('1649 ');
            }
        };
        z.member9293 = function () {
            return i;
        };
        var m = z.member9293;
        z.member9289 = function () {
            return q;
        };
        var k = z.member9289;
        z.member9290 = function (I) {
            return q.indexOf(I);
        };
        var j = z.member9290;
        z.member9291 = function (I) {
            D(q, I);
            return q[I];
        };
        var g = z.member9291;
        z.member9294 = function (I) {
            return i.indexOf(I);
        };
        var e = z.member9294;
        z.member9295 = function (I) {
            D(i, I);
            return i[I];
        };
        var H = z.member9295;
        z.member10186 = function (J, I) {
            D(q, J);
            h[J] = I ? J : c;
        };
        var G = z.member10186;
        z.member9292 = function (I) {
            D(q, I);
            return h[I] !== c;
        };
        var F = z.member9292;
        z.member10187 = function (L, K) {
            if (K < -1 || K > i.length) {
                throw new Error('1650 ');
            }
            if (i.length === b) {
                throw new Error('1651 ');
            }
            if (e(L) !== -1) {
                throw new Error('1652 ' + L + '1652 ' + v);
            }
            if (K === undefined || K === null || K === -1) {
                K = i.length;
            }
            i.splice(K, 0, L);
            for (var I = 0; I < o.length; I++) {
                var J = o[I];
                J.splice(K, 0, null);
            }
            return K;
        };
        var E = z.member10187;
        z.member10188 = function (K) {
            D(i, K);
            i.splice(K, 1);
            for (var I = 0; I < o.length; I++) {
                var J = o[I];
                J.splice(K, 1);
            }
        };
        var C = z.member10188;
        z.member10189 = function (L, K) {
            D(q, L);
            D(q, K);
            if (K === q.length) {
                throw new Error('1653 ');
            }
            A(L, K);
            for (var I = 0; I < h.length; I++) {
                var J = h[I];
                if (J === c) {
                    continue;
                }
                if (J !== I) {
                    h[I] = I;
                }
            }
        };
        var B = z.member10189;
        var A = function (J, I) {
            q.splice(I, 0, q.splice(J, 1)[0]);
            h.splice(I, 0, h.splice(J, 1)[0]);
            o.splice(I, 0, o.splice(J, 1)[0]);
        };
        z.member10190 = function (L, K) {
            if (K < -1 || K > q.length) {
                throw new Error('1654 ');
            }
            if (q.length === a) {
                throw new Error('1655 ');
            }
            if (j(L) !== -1) {
                throw new Error('1656 ' + L + '1656 ' + v);
            }
            if (K === undefined || K === -1) {
                K = q.length;
            }
            n(L, K);
            for (var I = K + 1; I < q.length; I++) {
                var J = h[I];
                if (J !== c && J < I) {
                    A(I, I - 1);
                }
            }
            return j(L);
        };
        var y = z.member10190;
        var n = function (L, J) {
            q.splice(J, 0, L);
            h.splice(J, 0, c);
            var K = [];
            for (var I = 0; I < i.length; I++) {
                K[I] = null;
            }
            o.splice(J, 0, K);
        };
        z.member10191 = function (K) {
            D(q, K);
            u(K);
            var J = K;
            for (var I = K; I < q.length; I++) {
                if (!F(I)) {
                    if (I !== J) {
                        A(I, J);
                    }
                    J = I + 1;
                }
            }
        };
        var x = z.member10191;
        var u = function (I) {
            q.splice(I, 1);
            h.splice(I, 1);
            o.splice(I, 1);
        };
        z.member10192 = function (K, J) {
            D(i, K);
            D(i, J);
            if (J === i.length) {
                throw new Error('1657 ');
            }
            i.splice(J, 0, i.splice(K, 1)[0]);
            for (var I = 0; I < o.length; I++) {
                var L = o[I];
                L.splice(J, 0, L.splice(K, 1)[0]);
            }
        };
        var t = z.member10192;
        z.member9296 = function (J, I) {
            D(q, J);
            D(i, I);
            return o[J][I];
        };
        var s = z.member9296;
        z.member10193 = function (K, I, J) {
            if (J === undefined) {
                throw new Error('1658 ');
            }
            D(q, K);
            D(i, I);
            o[K][I] = J;
        };
        var r = z.member10193;
        return z;
    };
    return d;
}();
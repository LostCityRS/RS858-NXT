export var Class251 = function () {
    var a = function (j) {
        var d = {};
        var i = {};
        d.member2942 = function () {
            return i;
        };
        if (true) {
        } else {
        }
        d.getVarInt = function (n) {
            var o = i[n.getID()];
            if (o === undefined) {
                return n.member2944();
            } else {
                return o;
            }
        };
        var h = d.getVarInt;
        d.member2945 = function (n, o) {
            i[n.getID()] = o;
        };
        var e = d.member2945;
        var m = function (n) {
            return i[n];
        };
        d.member2946 = m;
        d.member2947 = function (o, n) {
            i[o] = n;
        };
        var k = d.member2947;
        var c = function (n) {
            return n.member2948(i[n.member2949().getID()]);
        };
        d.getVarBit = c;
        var b = function (q, o) {
            var n = q.member2949();
            e(n, q.member2951(h(n), o));
        };
        d.member2952 = b;
        d.clear = function () {
            i = {};
        };
        var g = d.clear;
        j = undefined;
        return d;
    };
    return a;
}();
export var Class255 = function () {
    var a = function (s) {
        var i = {};
        var c;
        var q;
        var o;
        i.member2981 = function () {
            return o;
        };
        var n;
        var b;
        var h;
        var r;
        var m;
        var k;
        var j;
        i.member2982 = function (t) {
            if (t > q) {
                t = q;
            }
            return k.member2982(t - j);
        };
        var g = i.member2982;
        i.member2983 = function (t) {
            return g(t) * 10;
        };
        var e = i.member2983;
        if (s.id !== undefined && s.member2984 !== undefined && s.member2981 !== undefined && s.member2985 !== undefined && s.member2986 !== undefined && s.member2987 !== undefined && s.member2988 !== undefined) {
            c = s.id;
            q = s.member2984;
            o = s.member2981;
            n = s.member2985;
            k = s.member2987;
            j = s.member2988;
            if (o) {
                m = s.member2986;
                r = e(s.member2986);
            } else {
                m = -1;
                r = -1;
            }
        } else {
            throw new Error('1060 ');
        }
        i.member2989 = function (t) {
            var u = k.member2989(t) + j;
            if (u > q) {
                return q;
            }
            return u;
        };
        var d = i.member2989;
        i.member2990 = function (t) {
            var u = t / 10;
            return d(u);
        };
        i.member2991 = function () {
            return r;
        };
        i.member2992 = function () {
            return m;
        };
        i.member2993 = function () {
            return r !== -1;
        };
        s = undefined;
        return i;
    };
    return a;
}();
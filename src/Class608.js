import { Class220 } from 'Class220.js';
import { Class438 } from 'Class438.js';
export var Class608 = function () {
    var b = false;
    var e = 10;
    var q = 5;
    var d = 100;
    var j = 500;
    var g = 300;
    var k = {};
    var n = 0;
    var o = new Array(5);
    var i = Class220(false);
    k.member9182 = function () {
        return i.member890();
    };
    k.member25 = function (v, s) {
        o[Class438.member402] = new h(e, v(Class438.member402, 0), s(Class438.member402, 0));
        o[Class438.member6636] = new h(q, v(Class438.member6636, 0), s(Class438.member6636, 0));
        o[Class438.member6633] = new h(d, v(Class438.member6633, 0), s(Class438.member6633, 0));
        o[Class438.member6635] = new h(j, v(Class438.member6635, 0), s(Class438.member6635, 0));
        o[Class438.member6634] = new h(g, v(Class438.member6634, 0), s(Class438.member6634, 0));
        var u;
        for (var r = 0; r < o.length; r++) {
            if (o[r] === undefined) {
                continue;
            }
            u = o[r];
            for (var t = 0; t < u.member9183; t++) {
                u.member9184[t] = new u.member9185(undefined, -1, -1, -1, -1, r);
                if (u.member9186 !== undefined) {
                    u.member9186(u.member9184[t]);
                }
            }
        }
    };
    var h = function (t, s, r) {
        this.member9183 = t;
        this.member9184 = new Array(t);
        this.member9187 = 0;
        this.member9188 = 0;
        this.member9185 = s;
        this.member9186 = r;
    };
    var c = function (x, v, u, t, r, z) {
        if (o === undefined) {
            throw new Error('935 ');
        }
        if (o[z] === undefined) {
            throw new Error('936 ' + z);
        }
        var s = o[z];
        if (s.member9184[s.member9187] === undefined) {
            m(z);
            return c(x, v, u, t, r, z);
        }
        var y = s.member9184[s.member9187];
        y.member7003(x, v, u, t, r);
        s.member9184[s.member9187++] = undefined;
        s.member9187 = s.member9187 % s.member9184.length;
        return y;
    };
    k.member7105 = c;
    var m = function (u) {
        if (o === undefined) {
            throw new Error('937 ');
        }
        if (o[u] === undefined) {
            throw new Error('938 ' + u);
        }
        var s = o[u];
        var t = new Array(s.member9183);
        s.member9184 = t.concat(s.member9184);
        for (var r = 0; r < s.member9183; r++) {
            s.member9184[r] = new s.member9185(undefined, -1, -1, -1, -1, u);
            if (s.member9186 !== undefined) {
                s.member9186(s.member9184[r]);
            }
        }
        s.member9187 = 0;
        s.member9188 = s.member9183;
        if (b) {
            console.member9189('Extended pool size of type ' + u + ' to size ' + s.member9184.length);
        }
    };
    var a = function (r) {
        i.member2715(r);
    };
    k.member7576 = a;
    k.member78 = function () {
        while (true) {
            var t = i.member2716();
            if (t === undefined) {
                break;
            }
            if (o === undefined) {
                throw new Error('939 ');
            }
            var s = t.member2794();
            if (o[s] === undefined) {
                throw new Error('940 ' + s);
            }
            var r = o[s];
            if (r.member9184[r.member9188] !== undefined) {
                continue;
            }
            t.member7026();
            r.member9184[r.member9188++] = t;
            r.member9188 = r.member9188 % r.member9184.length;
        }
    };
    return k;
}();
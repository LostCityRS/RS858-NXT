import { Class469 } from 'Class469.js';
import { Class421 } from 'Class421.js';
import { Class131 } from 'Class131.js';
export var Class655 = function () {
    var g = {};
    var c;
    var j;
    var h;
    var d = function (o) {
        c = o;
        if (true) {
            j = Class469.member7436;
            h = Class469.member7441;
        } else {
        }
    };
    g.member25 = d;
    if (true) {
        var b = function (r, q, o) {
            o.member6100[o.member6099++] = r.member6807();
        };
        Class421.member5478.member867 = function (o) {
            return h(o, b);
        };
        Class421.member5444.member867 = function (o) {
            return j(o, b);
        };
        var k = function (r, q, o) {
            if (r.member6807() !== -1) {
                o.member6100[o.member6099++] = r.member7044();
            } else {
                o.member6100[o.member6099++] = 0;
            }
        };
        Class421.member5479.member867 = function (o) {
            return h(o, k);
        };
        Class421.member5445.member867 = function (o) {
            return j(o, k);
        };
    } else {
    }
    Class421.member5494.member867 = function (r) {
        var o = r.member6100[--r.member6099];
        var q = c.member2970.member3227(Class131.member1208.member1204, o);
        if (q === member47) {
            r.member6099++;
            return true;
        }
        r.member6100[r.member6099++] = q.getSize();
    };
    Class421.member5531.member867 = function (r) {
        var q = r.member6100[--r.member6099];
        var o = c.member2970.member3227(Class131.member1208.member1204, q);
        if (o === member47) {
            r.member6099++;
            return true;
        }
        var s = c.member9208.member7552(q, false);
        if (s === null) {
            r.member6100[r.member6099++] = o.getSize();
        } else {
            r.member6100[r.member6099++] = s.member8474(o);
        }
    };
    Class421.member5492.member867 = function (o) {
        i(o, false);
    };
    Class421.member5532.member867 = function (o) {
        return e(o, false, false);
    };
    Class421.member5533.member867 = function (o) {
        return e(o, false, true);
    };
    Class421.member5493.member867 = function (o) {
        return a(o, false);
    };
    Class421.member5495.member867 = function (s) {
        s.member6099 -= 2;
        var r = s.member6100[s.member6100[s.member6099]];
        var q = c.member2970.member3227(Class131.member1208.member1204, r);
        if (q === member47) {
            s.member6099 += 2;
            return true;
        }
        var u = s.member6100[s.member6099 + 1];
        var o = -1;
        var t = q.member9702();
        for (var v = 0; v < q.member9703(); v++) {
            if (t[v] === u) {
                o = q.member9704(v);
                break;
            }
        }
        s.member6100[s.member6099++] = o;
    };
    Class421.member5490.member867 = function (o) {
        n(o, false);
    };
    Class421.member5491.member867 = function (o) {
        m(o, false);
    };
    Class421.member5519.member867 = function (o) {
        i(o, true);
    };
    Class421.member5517.member867 = function (o) {
        n(o, true);
    };
    Class421.member5518.member867 = function (o) {
        m(o, true);
    };
    var i = function (r, t) {
        r.member6099 -= 2;
        var q = r.member6100[r.member6099];
        var o = r.member6100[r.member6099 + 1];
        var s = c.member9208.member7552(q, t);
        if (s === null) {
            r.member6100[r.member6099++] = 0;
        } else {
            r.member6100[r.member6099++] = s.member8476(o);
        }
    };
    var n = function (r, t) {
        r.member6099 -= 2;
        var o = r.member6100[r.member6099];
        var q = r.member6100[r.member6099 + 1];
        var s = c.member9208.member7552(o, t);
        if (s === null) {
            r.member6100[r.member6099++] = -1;
        } else {
            r.member6100[r.member6099++] = s.member8469(q);
        }
    };
    var m = function (r, t) {
        r.member6099 -= 2;
        var o = r.member6100[r.member6099];
        var q = r.member6100[r.member6099 + 1];
        var s = c.member9208.member7552(o, t);
        if (s === null) {
            r.member6100[r.member6099++] = -1;
        } else {
            r.member6100[r.member6099++] = s.member8470(q);
        }
    };
    var a = function (r, u) {
        r.member6099 -= 2;
        var q = r.member6100[r.member6099];
        var o = r.member6100[r.member6099 + 1];
        var t = c.member9208.member7552(q, u);
        var s = -1;
        if (t !== null) {
            s = t.member8471(o);
            if (s === member47) {
                r.member6099 += 2;
                return true;
            }
        }
        r.member6100[r.member6099++] = s;
    };
    var e = function (q, u, v) {
        q.member6099 -= 2;
        var o = q.member6100[q.member6099];
        var t = q.member6100[q.member6099 + 1];
        var s = c.member9208.member7552(o, u);
        var r = -1;
        if (s !== null) {
            r = s.member8473(t, v);
            if (r === member47) {
                q.member6099 += 2;
                return true;
            }
        }
        q.member6100[q.member6099++] = r;
    };
    return g;
}();
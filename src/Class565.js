import { Class469 } from 'Class469.js';
import { Class421 } from 'Class421.js';
import { Class562 } from 'Class562.js';
import { Class303 } from 'Class303.js';
import { Class298 } from 'Class298.js';
import { Class563 } from 'Class563.js';
import { Class564 } from 'Class564.js';
import { Class448 } from 'Class448.js';
export var Class565 = function () {
    var h = {};
    var b;
    var n;
    var k;
    var a;
    var m;
    var q;
    var d = function (t, v, s, u) {
        b = t;
        n = Class469.member7436;
        k = Class469.member7441;
        a = v;
        m = s;
        q = u;
    };
    h.member25 = d;
    Class421.member5178.member867 = function (s) {
        m.member8840();
    };
    Class421.member5187.member867 = function (t) {
        t.member6099 -= 2;
        var v = t.member6100[t.member6099];
        var u = t.member6100[t.member6099 + 1];
        var s = Class562({
            member6675: u,
            member8803: v,
            member8804: 3,
            member8805: true
        });
        m.member8841(s, true);
    };
    Class421.member5188.member867 = function (t) {
        t.member6099 -= 1;
        var u = t.member6100[t.member6099];
        var s = m.member8842(u);
        if (s !== undefined && s.member8800() === 3) {
            m.member8843(s, true, true);
        }
    };
    Class421.member5480.member867 = function (t) {
        var u = t.member6100[--t.member6099];
        var s = m.member8842(u);
        if (s !== undefined) {
            t.member6100[t.member6099++] = 1;
        } else {
            t.member6100[t.member6099++] = 0;
        }
    };
    var i = function (t) {
        t.member6099 -= 2;
        var v = t.member6100[t.member6099];
        var u = t.member6100[t.member6099 + 1];
        var s = m.member8842(v);
        if (s !== undefined && s.member6719() === u) {
            t.member6100[t.member6099++] = 1;
        } else {
            t.member6100[t.member6099++] = 0;
        }
    };
    Class421.member5482.member867 = function (s) {
        i(s);
    };
    Class421.member5483.member867 = function (s) {
        i(s);
    };
    Class421.member5191.member867 = function (s) {
        s.member6099 -= 11;
        Class303.member3638(s.member6100[s.member6099], s.member6100[s.member6099 + 1], s.member6100[s.member6099 + 2], s.member6100[s.member6099 + 3], s.member6100[s.member6099 + 4], s.member6100[s.member6099 + 5], s.member6100[s.member6099 + 6], s.member6100[s.member6099 + 7], s.member6100[s.member6099 + 8], s.member6100[s.member6099 + 9], s.member6100[s.member6099 + 10]);
    };
    Class421.member5548.member867 = function (s) {
        s.member6100[s.member6099++] = m.member8844();
    };
    Class421.member5541.member867 = function (s) {
        s.member6100[s.member6099++] = Class298.member3558().x;
    };
    Class421.member5542.member867 = function (s) {
        s.member6100[s.member6099++] = Class298.member3558().y;
    };
    var c = function (v, u, t) {
        var s = t.member6100[--t.member6099];
        if (b.member7259.member7250() === b.member7259.member7249 && s < b.member7259.member7223()) {
            v.member6796(b.member7259.member7220(s).member7233, Class563.member8806);
        }
    };
    Class421.member5095.member867 = function (s) {
        return k(s, c);
    };
    Class421.member4975.member867 = function (s) {
        return n(s, c);
    };
    var e = function (v, u, t) {
        var s = t.member6100[--t.member6099];
        if (b.member8845.member8285() && s >= 0 && s < b.member8845.member8286()) {
            v.member6796(b.member8845.member8291()[s].member3009(), Class563.member8811);
        }
    };
    Class421.member5096.member867 = function (s) {
        return k(s, e);
    };
    Class421.member4976.member867 = function (s) {
        return n(s, e);
    };
    var j = function (x, v, u) {
        u.member6099 -= 2;
        var s = u.member6100[u.member6099];
        var t = u.member6100[u.member6099 + 1] === 1;
        if (b.member8846.member8444() !== undefined) {
            if (t) {
                x.member6796(b.member8846.member8444().member8419(s).member3009(), Class563.member8807);
            } else {
                x.member6796(b.member8846.member8444().member8420(s).member3009(), Class563.member8808);
            }
        }
    };
    Class421.member5097.member867 = function (s) {
        return k(s, j);
    };
    Class421.member4977.member867 = function (s) {
        return n(s, j);
    };
    var g = function (v, u, t) {
        var s = t.member6100[--t.member6099];
        v.member6796(t.member8847.member8848(s).member3009(), t.member8847 === q.member8849() ? Class563.member8809 : Class563.member8810);
    };
    Class421.member5098.member867 = function (s) {
        return k(s, g);
    };
    Class421.member4978.member867 = function (s) {
        return n(s, g);
    };
    var o = function (u, t, s) {
        u.member6796(undefined, undefined);
    };
    Class421.member5099.member867 = function (s) {
        return k(s, o);
    };
    Class421.member4979.member867 = function (s) {
        return n(s, o);
    };
    var r = function (x, v, s) {
        if (s.member8825 >= 10) {
            throw new Error('1138 ');
        }
        var u = x.member6792();
        if (u === undefined || u.member6607() === null) {
            return;
        }
        var t = Class564(u.member6607(), x.member6725(), x, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, s.member8825 + 1);
        m.member8850(t);
    };
    Class421.member5167.member867 = function (s) {
        return k(s, r);
    };
    Class421.member5047.member867 = function (s) {
        return n(s, r);
    };
    Class421.member5401.member867 = function (s) {
        Class448.member7120(true);
    };
    Class421.member5402.member867 = function (s) {
        Class448.member7107(null, null);
        Class448.member7108(null);
    };
    Class421.member5403.member867 = function (s) {
        s.member6100[s.member6099++] = m.member8851() ? 1 : 0;
    };
    Class421.member5404.member867 = function (s) {
        m.member7640();
    };
    return h;
}();
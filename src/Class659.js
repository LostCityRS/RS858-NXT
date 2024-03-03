import { Class140 } from 'Class140.js';
import { Class421 } from 'Class421.js';
import { Class588 } from 'Class588.js';
import { Class416 } from 'Class416.js';
import { Class394 } from 'Class394.js';
import { Class86 } from 'Class86.js';
import { Class415 } from 'Class415.js';
import { Class419 } from 'Class419.js';
import { Class586 } from 'Class586.js';
import { Class593 } from 'Class593.js';
import { Class41 } from 'Class41.js';
import { Class156 } from 'Class156.js';
import { Class584 } from 'Class584.js';
import { Class585 } from 'Class585.js';
import { Class590 } from 'Class590.js';
import { Class582 } from 'Class582.js';
export var Class659 = function () {
    var h = {};
    var a;
    var q;
    var c = function (s, t) {
        a = s;
        q = t;
    };
    h.member25 = c;
    var j = new Float64Array(3);
    var n = new Float64Array(3);
    var m = new Float64Array(3);
    var k = new Float64Array(3);
    var e = Class140.create();
    var d = [
        1,
        0,
        0
    ];
    var b = [
        0,
        1,
        0
    ];
    var r = [
        0,
        0,
        1
    ];
    var o = 1000;
    Class421.member5805.member867 = function (s) {
        s.member6100[s.member6099++] = a.member6101.member9071().member8991() === Class588.member8980 ? 1 : 0;
    };
    Class421.member5276.member867 = function (s) {
        if (!a.member7135()) {
            return true;
        }
        var t = a.member6101.member9070();
        if (!t.readyanim()) {
            return true;
        }
        s.member6099 -= 2;
        var u = s.member6100[s.member6099 + 1];
        var v = s.member6100[s.member6099];
        if (t.member8921()) {
            v = Math.min(Class416.member4778, Math.max(Class416.member4777, v));
            u %= Class394.member4542;
            if (u < 0) {
                u += Class394.member4542;
            }
        }
        Class416.member4789(v, u, 0, e);
        t.member8927(e, v, u);
    };
    Class421.member5281.member867 = function (s) {
        --s.member6099;
    };
    Class421.member5793.member867 = function (s) {
        s.member6100[s.member6099++] = 0;
    };
    Class421.member5791.member867 = function (s) {
        if (!a.member7135() || !a.member6101.member9070().readyanim()) {
            return true;
        }
        a.member6101.member9070().member8926(e, j);
        s.member6100[s.member6099++] = j[0];
    };
    Class421.member5792.member867 = function (s) {
        if (!a.member7135() || !a.member6101.member9070().readyanim()) {
            return true;
        }
        a.member6101.member9070().member8926(e, j);
        s.member6100[s.member6099++] = j[1];
    };
    Class421.member5275.member867 = function (s) {
        a.member6101.member7844(q.member6117().member7845());
    };
    Class421.member5804.member867 = function (s) {
        s.member6100[s.member6099++] = a.member6101.member9070().readyanim() ? 1 : 0;
    };
    Class421.member5272.member867 = function (t) {
        if (!a.member7135() || !a.member6101.member9070().readyanim()) {
            return true;
        }
        t.member6099 -= 4;
        var B = t.member6100[t.member6099];
        var C = t.member6100[t.member6099 + 1] << Class86.member719;
        var z = t.member6100[t.member6099 + 2];
        var A = t.member6100[t.member6099 + 3];
        var x = a.member6101.member6430();
        var v = (B >> 14 & 16383) * Class86.member718 + Class86.member718 / 2;
        var u = (B & 16383) * Class86.member718 + Class86.member718 / 2;
        var s = a.member6101.member9084(v, u);
        if (s === -1) {
            t.member6099 += 4;
            return true;
        }
        C += s;
        var y = a.member6101.member9068();
        a.member6101.member9071().member3650(j);
        if (y) {
            a.member6101.member9072(false);
        }
        a.member6101.member9070().moveTo(v, u, C, z, A, true, j);
        if (y) {
            a.member6101.member9071().member9024(j);
            a.member6101.member9070().member352(j[0], j[2], j[1], z, Class416.member4786, true, j);
        }
    };
    Class421.member5273.member867 = function (t) {
        if (!a.member7135() || !a.member6101.member9070().readyanim()) {
            return true;
        }
        t.member6099 -= 4;
        var B = t.member6100[t.member6099];
        var C = t.member6100[t.member6099 + 1] << Class86.member719;
        var z = t.member6100[t.member6099 + 2];
        var A = t.member6100[t.member6099 + 3];
        var x = a.member6101.member6430();
        var v = (B >> 14 & 16383) * Class86.member718 + Class86.member718 / 2;
        var u = (B & 16383) * Class86.member718 + Class86.member718 / 2;
        var s = a.member6101.member9084(v, u);
        if (s === -1) {
            t.member6099 += 4;
            return true;
        }
        C += s;
        var y = a.member6101.member9068();
        a.member6101.member9071().member9024(j);
        if (y) {
            a.member6101.member9072(false);
        }
        a.member6101.member9070().member352(v, u, C, z, A, true, j);
        if (y) {
            a.member6101.member9071().member3650(j);
            a.member6101.member9070().moveTo(j[0], j[2], j[1], z, Class416.member4786, true, j);
        }
    };
    Class421.member5282.member867 = function (u) {
        if (!a.member7135() || !a.member6101.member9070().readyanim()) {
            return true;
        }
        var t = u.member6100[--u.member6099];
        var y = (t >> 14 & 16383) * Class86.member718 + Class86.member718 / 2;
        var v = (t & 16383) * Class86.member718 + Class86.member718 / 2;
        var x = a.member6101.member9084(y, v);
        if (x === -1) {
            u.member6099++;
            return true;
        }
        var s = Class416.member4793(y, v, x, a.member6444.member6445());
        if (q.member6117().member7845()) {
            a.member6101.member9072(false);
        }
        a.member6101.member9070().member9053(s, a.member6116.member7139());
    };
    Class421.member5535.member867 = function (v) {
        v.member6099 -= 4;
        var u = v.member6100[v.member6099];
        var s = v.member6100[v.member6099 + 1];
        var x = v.member6100[v.member6099 + 2];
        var t = v.member6100[v.member6099 + 3];
        u += s << 14;
        u += x << 28;
        u += t;
        v.member6100[v.member6099++] = u;
    };
    Class421.member5283.member867 = function (t) {
        if (q.member6117().member7845()) {
            a.member6101.member9074();
        } else {
            if (!a.member7135() || !a.member6101.member9070().readyanim()) {
                return true;
            }
            var s = a.member7135();
            if (s !== undefined) {
                a.member6101.member9070().member9055(s.member6453(), a.member6116.member7139());
            }
        }
    };
    Class421.member5284.member867 = function (t) {
        var s = t.member6100[--t.member6099];
        a.member6101.member3959(s !== -1);
    };
    Class421.member5258.member867 = function (s) {
        s.member6099 -= 2;
        var u = s.member6100[s.member6099];
        var t = s.member6100[s.member6099 + 1];
        a.member6101.member9073().member9061(u, t);
    };
    Class421.member5259.member867 = function (v) {
        v.member6099 -= 7;
        var A = v.member6100[v.member6099];
        var y = v.member6100[v.member6099 + 1];
        var s = v.member6100[v.member6099 + 2];
        var u = v.member6100[v.member6099 + 3];
        var x = v.member6100[v.member6099 + 4];
        var z = v.member6100[v.member6099 + 5];
        var t = Class415.member4772(v.member6100[v.member6099 + 6]);
        j[0] = (s >> 14 & 16383 + 0.5) * Class86.member718;
        j[1] = u << Class86.member719;
        j[2] = (s & 16383 + 0.5) * Class86.member718;
        n[0] = (x >> 14 & 16383 + 0.5) * Class86.member718;
        n[1] = z << Class86.member719;
        n[2] = (x & 16383 + 0.5) * Class86.member718;
        a.member6101.member9073().member9062(A, y, j, n, t);
    };
    Class421.member5783.member867 = function (t) {
        var u = t.member6100[--t.member6099];
        var s = a.member6101.member9073().member9063(u);
        t.member6100[t.member6099++] = s;
    };
    Class421.member5274.member867 = function (t) {
        if (!a.member7135() || !a.member6101.member9070().readyanim()) {
            return true;
        }
        t.member6099 -= 6;
        var v = a.member6101.member9073();
        var z = t.member6100[t.member6099];
        var E = v.member9064(z);
        if (E === undefined) {
            throw new Error('1759 ');
        }
        var u = t.member6100[t.member6099 + 1];
        E = E.member8906(u, u + 1);
        var F = t.member6100[t.member6099 + 2];
        var C = t.member6100[t.member6099 + 3];
        var G = F / v.member9060;
        var A = C / v.member9060;
        var D = t.member6100[t.member6099 + 4];
        var B = v.member9064(D);
        if (B === undefined) {
            throw new Error('1760 ');
        }
        var y = t.member6100[t.member6099 + 5];
        B = B.member8906(y, y + 1);
        var x = F / v.member9060;
        var s = C / v.member9060;
        if (q.member6117().member7845()) {
            a.member6101.member9072(false);
        }
        a.member6101.member9070().member9057(E, G, A, B, x, s);
    };
    Class421.member5277.member867 = function (s) {
        if (!a.member7135() || !a.member6101.member9070().readyanim()) {
            return true;
        }
        a.member6101.member9070().member9046();
    };
    Class421.member5278.member867 = function (s) {
        if (!a.member7135() || !a.member6101.member9070().readyanim()) {
            return true;
        }
        a.member6101.member9070().member9047();
    };
    Class421.member5279.member867 = function (s) {
        if (!a.member7135() || !a.member6101.member9070().readyanim()) {
            return true;
        }
        a.member6101.member9070().member9049();
    };
    Class421.member5280.member867 = function (s) {
        if (!a.member7135() || !a.member6101.member9070().readyanim()) {
            return true;
        }
        a.member6101.member9070().member9048();
    };
    Class421.member5382.member867 = function (t) {
        t.member6099 -= 2;
        var u = t.member6100[t.member6099];
        var s = t.member6100[t.member6099 + 1];
        u = Class416.member4783 * 256 / u;
        s = Class416.member4783 * 256 / s;
        a.member6101.member9070().member9013(u, s);
        a.member6101.member9069().member9013(u, s);
    };
    Class421.member5383.member867 = function (s) {
        s.member6099 -= 2;
        a.member6101.member9070().member9043(s.member6100[s.member6099], s.member6100[s.member6099 + 1]);
    };
    Class421.member5384.member867 = function (u) {
        u.member6099 -= 4;
        var x = u.member6100[u.member6099];
        if (x <= 0) {
            x = 0;
        } else {
            x = Class416.member4783 * 256 / x;
        }
        var v = u.member6100[u.member6099 + 1];
        if (v <= 0) {
            v = 0;
        } else {
            v = Class416.member4783 * 256 / v;
        }
        var t = u.member6100[u.member6099 + 2];
        if (t <= 0) {
            t = 0;
        } else {
            t = Class416.member4784 * 256 * Class416.member4782 / t;
        }
        var s = u.member6100[u.member6099 + 3];
        if (s <= 0) {
            s = 0;
        } else {
            s = Class416.member4784 * 256 * Class416.member4782 / s;
        }
        a.member6101.member9070().member9016(x, v, t, s);
        a.member6101.member9069().member9016(x, v, t, s);
    };
    Class421.member5870.member867 = function (t) {
        var s = a.member7619.member7654();
        if (s !== undefined) {
            t.member6100[t.member6099++] = s.member6752();
            t.member6100[t.member6099++] = s.member6754();
        } else {
            t.member6100[t.member6099++] = -1;
            t.member6100[t.member6099++] = -1;
        }
    };
    Class421.member5872.member867 = function (s) {
        s.member6100[s.member6099++] = a.member6101.member9070().member9014();
        s.member6100[s.member6099++] = a.member6101.member9070().member9015();
    };
    Class421.member5871.member867 = function (s) {
        s.member6100[s.member6099++] = a.member6101.member9070().member9044();
        s.member6100[s.member6099++] = a.member6101.member9070().member9045();
    };
    Class421.member5803.member867 = function (s) {
        s.member6100[s.member6099++] = a.member6101.member9071().member8991() === Class588.member8985 ? 1 : 0;
    };
    Class421.member5319.member867 = function (t) {
        var s = t.member6100[--t.member6099] === 1;
        a.member6101.member9072(s);
    };
    Class421.member5285.member867 = function (t) {
        var s = t.member6100[--t.member6099];
        a.member6101.member9069().member8999(s, false);
    };
    Class421.member5286.member867 = function (t) {
        var s = t.member6100[--t.member6099];
        a.member6101.member9069().member9001(s, false);
    };
    Class421.member5287.member867 = function (u) {
        u.member6099 -= 2;
        var s = u.member6100[u.member6099];
        var t = u.member6100[u.member6099 + 1];
        if (s === -1) {
            s = Class419.member4864;
        }
        j[0] = s;
        j[1] = s;
        j[2] = s;
        a.member6101.member9069().member9030(j);
        a.member6101.member9069().member9028(t / o);
    };
    Class421.member5288.member867 = function (u) {
        u.member6099 -= 2;
        var s = u.member6100[u.member6099];
        var t = u.member6100[u.member6099 + 1];
        if (s === -1) {
            s = Class419.member4864;
        }
        j[0] = s;
        j[1] = s;
        j[2] = s;
        a.member6101.member9069().member9031(j);
        a.member6101.member9069().member9029(t / o);
    };
    Class421.member5289.member867 = function (t) {
        t.member6099 -= 2;
        var s = t.member6100[t.member6099];
        j[0] = s;
        j[1] = s;
        j[2] = s;
        a.member6101.member9069().member9032(j);
    };
    Class421.member5290.member867 = function (t) {
        t.member6099 -= 2;
        var s = t.member6100[t.member6099];
        j[0] = s;
        j[1] = s;
        j[2] = s;
        a.member6101.member9069().member9033(j);
    };
    Class421.member5293.member867 = function (t) {
        var s = t.member6142[--t.member6143];
        if (a.member6101.member9069().member8998() === Class586.member8971) {
            a.member6101.member9069().member9037(s);
        } else if (false) {
        }
    };
    Class421.member5292.member867 = function (u) {
        u.member6099 -= 2;
        var s = 2 * u.member6100[u.member6099], t = 2 * u.member6100[u.member6099 + 1];
        s = Class415.member4772(s);
        t = Class415.member4772(t);
        if (s < 0) {
            s += 2 * Math.PI;
        }
        if (t < 0) {
            t += 2 * Math.PI;
        }
        a.member6101.member9069().member9018(t, s);
    };
    Class421.member5294.member867 = function (t) {
        var s = t.member6142[--t.member6143];
        if (a.member6101.member9069().member9000() === Class593.member8971) {
            a.member6101.member9069().member9038(s);
        } else if (false) {
        }
    };
    Class421.member5295.member867 = function (s) {
        if (a.member6101.member9069().member9000() === Class593.member8971) {
            s.member6142[s.member6143++] = a.member6101.member9069().member7838();
        } else if (false) {
        }
    };
    Class421.member5302.member867 = function (s) {
        if (a.member6101.member9069().member8998() === Class586.member8972) {
        } else if (false) {
        }
    };
    Class421.member5301.member867 = function (s) {
        if (a.member6101.member9069().member9000() === Class593.member8972) {
        } else if (false) {
        }
    };
    Class421.member5799.member867 = function (t) {
        var s = t.member6100[--t.member6099];
        if (a.member6101.member9069().member8998() === Class586.member7656 && a.member6101.member9069().member9000() === Class593.member7656) {
            var B = j;
            a.member6101.member9069().member9021(B);
            var v = Class41.set(B, n);
            v[1] += s;
            var y = m;
            a.member6101.member9069().member9024(y);
            var x = k;
            Class41.member322(y, v, x);
            Class41.normalize(x);
            a.member6101.member9069().member9023(n);
            var A = Class41.length(n);
            var u = Class156.member1555(y, x, B, A);
            var C = undefined;
            if (u === undefined) {
                throw new Error('1761 ');
            } else if (u.member1557 === undefined) {
                C = Class41.set(u.member1556, k);
            } else if (Class41.length(Class41.member322(y, u.member1556, k)) < Class41.length(Class41.member322(y, u.member1557, k))) {
                C = Class41.set(u.member1557, k);
            } else {
                C = Class41.set(u.member1556, k);
            }
            var z = Math.atan2(B[0] - C[0], B[2] - C[2]);
            t.member6100[t.member6099++] = 0;
            t.member6100[t.member6099++] = Class415.member4774(-z);
        } else {
            throw new Error('1762 ');
        }
    };
    Class421.member5800.member867 = function (u) {
        if (a.member6101.member9069().member8998() === Class586.member7656 && a.member6101.member9069().member9000() === Class593.member7656) {
            var s = j;
            a.member6101.member9069().member9021(s);
            var t = n;
            a.member6101.member9069().member9025(n);
            Class41.member322(s, t, m);
            var v = Math.atan2(m[0], m[2]);
            u.member6100[u.member6099++] = Class415.member4774(-v);
        } else {
            throw new Error('1763 ');
        }
    };
    Class421.member5801.member867 = function (u) {
        if (a.member6101.member9069().member8998() === Class586.member7656 && a.member6101.member9069().member9000() === Class593.member7656) {
            var s = j;
            a.member6101.member9069().member9021(j);
            var t = n;
            a.member6101.member9069().member9025(n);
            Class41.member322(s, t, m);
            u.member6100[u.member6099++] = Class41.length(m);
        } else {
            throw new Error('1764 ');
        }
    };
    Class421.member5797.member867 = function (u) {
        if (a.member6101.member9069().member9000() === Class593.member7656) {
            a.member6101.member9069().member8926(e);
            Class140.member318(e, r, j);
            var v = Math.PI / 2 - Math.acos(j[1]);
            var x = Math.atan2(j[0], j[2]);
            var s = Class415.member4774(v);
            var t = Class415.member4774(x);
            u.member6100[u.member6099++] = s;
            u.member6100[u.member6099++] = t;
        } else {
            throw new Error('1765 ');
        }
    };
    Class421.member5298.member867 = function (t) {
        if (a.member6101.member9069().member9000() !== Class593.member7656) {
            throw new Error('1766 ');
        }
        var s = a.member7135();
        if (s !== undefined && s.member6453() !== undefined) {
            i(t, s.member6453());
        }
    };
    Class421.member5299.member867 = function (s) {
        if (a.member6101.member9069().member9000() !== Class593.member7656) {
            throw new Error('1767 ');
        }
        i(s, s.member8883);
    };
    var i = function (s, x) {
        s.member6099 -= 7;
        var y = s.member6100[s.member6099];
        var t = s.member6100[s.member6099 + 1];
        var A = s.member6100[s.member6099 + 2];
        var B = s.member6100[s.member6099 + 3];
        var z = s.member6100[s.member6099 + 4];
        var v = s.member6100[s.member6099 + 5] === 1;
        var u = s.member6100[s.member6099 + 6];
        a.member6101.member9069().member8930(x, y, t, A, B, z, v, u);
    };
    Class421.member5296.member867 = function (t) {
        if (a.member6101.member9069().member9000() !== Class593.member7656) {
            throw new Error('1768 ');
        }
        var s = a.member7135();
        if (s !== undefined && s.member6453() !== undefined) {
            g(t, s.member6453());
        }
    };
    Class421.member5297.member867 = function (s) {
        if (a.member6101.member9069().member9000() !== Class593.member7656) {
            throw new Error('1769 ');
        }
        g(s, s.member8883);
    };
    var g = function (v, u) {
        v.member6099 -= 4;
        var s = v.member6100[v.member6099];
        var y = v.member6100[v.member6099 + 1];
        var t = v.member6100[v.member6099 + 2];
        var x = v.member6100[v.member6099 + 3] === 1;
        a.member6101.member9069().member8858(u, s, y, t, x);
    };
    Class421.member5313.member867 = function (t) {
        var s = t.member6100[--t.member6099];
        if (Class419.member4863(s)) {
            a.member6101.member9069().member9009(s);
        } else if (false) {
        }
    };
    Class421.member5315.member867 = function (s) {
        a.member6101.member9069().member9028(s.member6100[--s.member6099] / 1000);
    };
    Class421.member5316.member867 = function (s) {
        a.member6101.member9069().member9029(s.member6100[--s.member6099] / 1000);
    };
    Class421.member5314.member867 = function (x) {
        x.member6099 -= 4;
        var v = x.member6100[x.member6099];
        var t = x.member6100[x.member6099 + 1];
        var s = x.member6100[x.member6099 + 2];
        var u = x.member6100[x.member6099 + 3] / 1000;
        a.member6101.member9069().member9034([
            v,
            t,
            s
        ], u);
    };
    Class421.member5317.member867 = function (x) {
        x.member6099 -= 4;
        var v = x.member6100[x.member6099];
        var t = x.member6100[x.member6099 + 1];
        var s = x.member6100[x.member6099 + 2];
        var u = x.member6100[x.member6099 + 3] / 1000;
        a.member6101.member9069().member9035([
            v,
            t,
            s
        ], u);
    };
    Class421.member5318.member867 = function (x) {
        x.member6099 -= 4;
        var v = x.member6100[x.member6099];
        var t = x.member6100[x.member6099 + 1];
        var s = x.member6100[x.member6099 + 2];
        var u = x.member6100[x.member6099 + 3] / 1000;
        a.member6101.member9069().member9036([
            v,
            t,
            s
        ], u);
    };
    Class421.member5305.member867 = function (y) {
        y.member6099 -= 4;
        var x = y.member6100[y.member6099];
        var u = y.member6100[y.member6099 + 1];
        var t = y.member6100[y.member6099 + 2];
        var v = y.member6100[y.member6099 + 3];
        var s = [
            x === -1 ? Class419.member4864 : x,
            u === -1 ? Class419.member4864 : u,
            t === -1 ? Class419.member4864 : t
        ];
        a.member6101.member9069().member9030(s);
        a.member6101.member9069().member9028(v / 1000);
    };
    Class421.member5306.member867 = function (y) {
        y.member6099 -= 4;
        var x = y.member6100[y.member6099];
        var u = y.member6100[y.member6099 + 1];
        var t = y.member6100[y.member6099 + 2];
        var v = y.member6100[y.member6099 + 3];
        var s = [
            x === -1 ? Class419.member4864 : x,
            u === -1 ? Class419.member4864 : u,
            t === -1 ? Class419.member4864 : t
        ];
        a.member6101.member9069().member9031(s);
        a.member6101.member9069().member9029(v / 1000);
    };
    Class421.member5307.member867 = function (v) {
        v.member6099 -= 4;
        var u = v.member6100[v.member6099];
        var t = v.member6100[v.member6099 + 1];
        var s = v.member6100[v.member6099 + 2];
        a.member6101.member9069().member9032([
            u,
            t,
            s
        ]);
    };
    Class421.member5308.member867 = function (v) {
        v.member6099 -= 4;
        var u = v.member6100[v.member6099];
        var t = v.member6100[v.member6099 + 1];
        var s = v.member6100[v.member6099 + 2];
        a.member6101.member9069().member9033([
            u,
            t,
            s
        ]);
    };
    Class421.member5794.member867 = function (s) {
        s.member6100[s.member6099++] = a.member6101.member9069().member8993() ? 1 : 0;
    };
    Class421.member5795.member867 = function (s) {
        s.member6100[s.member6099++] = a.member6101.member9069().member8998();
    };
    Class421.member5796.member867 = function (s) {
        s.member6100[s.member6099++] = a.member6101.member9069().member9000();
    };
    Class421.member5309.member867 = function (t) {
        t.member6099 -= 2;
        var u = t.member6100[t.member6099] == 1;
        var s = t.member6100[t.member6099 + 1] == 1;
        a.member6101.member9069().member9007(u, s);
    };
    Class421.member5310.member867 = function (s) {
        if (a.member6101.member9069().member9000() === Class593.member8971) {
            a.member6101.member9069().member8997().member8989(s.member6100[--s.member6099] === 1);
        } else if (false) {
        }
    };
    Class421.member5300.member867 = function (u) {
        u.member6099 -= 3;
        var v = u.member6100[u.member6099];
        var y = u.member6100[u.member6099 + 1];
        var x = u.member6100[u.member6099 + 2];
        var s = 4 * Math.atan(v / 2 / x);
        var t = 4 * Math.atan(y / 2 / x);
        a.member6101.member9069().member9018(t, s);
    };
    Class421.member5312.member867 = function (s) {
        s.member6099 -= 2;
        var u = s.member6100[s.member6099];
        var t = s.member6100[s.member6099 + 1] / 1000;
        a.member6101.member9069().member9010(u, t);
    };
    Class421.member5291.member867 = function (s) {
        s.member6099 -= 2;
        var t = s.member6100[s.member6099];
        a.member6101.member9069().member3656(t);
    };
    Class421.member5320.member867 = function (s) {
        s.member6099 -= 3;
        a.member6101.member9069().member9011(s.member6100[s.member6099], s.member6100[s.member6099 + 1], s.member6100[s.member6099 + 2]);
    };
    Class421.member5321.member867 = function (s) {
        a.member6101.member9069().member9012();
    };
    Class421.member5323.member867 = function (s) {
        s.member6099 -= 3;
        if (a.member6101.member9069().member8998() !== Class586.member8973) {
            throw new Error('1770 ');
        }
        a.member6101.member9069().member8996().member6212(s.member6100[s.member6099], s.member6100[s.member6099 + 1], s.member6100[s.member6099 + 2]);
    };
    Class421.member5325.member867 = function (s) {
        if (a.member6101.member9069().member8998() !== Class586.member8973) {
            throw new Error('1771 ');
        }
        a.member6101.member9069().member8996().member6210(s.member6100[--s.member6099]);
    };
    Class421.member5324.member867 = function (s) {
        if (a.member6101.member9069().member8998() !== Class586.member8973) {
            throw new Error('1772 ');
        }
        a.member6101.member9069().member8996().member6211(s.member6100[--s.member6099]);
    };
    Class421.member5326.member867 = function (s) {
        if (a.member6101.member9069().member8998() !== Class586.member8973 || a.member6101.member9069().member9000() !== Class593.member8971) {
            throw new Error('1773 ');
        }
        a.member6101.member9069().member8996().member6206(s.member6100[--s.member6099]);
    };
    Class421.member5327.member867 = function (s) {
        if (a.member6101.member9069().member8998() !== Class586.member8973 || a.member6101.member9069().member9000() !== Class593.member8971) {
            throw new Error('1774 ');
        }
        a.member6101.member9069().member8996().member6207(s.member6100[--s.member6099]);
    };
    Class421.member5328.member867 = function (t) {
        t.member6099 -= 6;
        var s = t.member6142[--t.member6143];
        if (a.member6101.member9069().member8998() !== Class586.member8973) {
            throw new Error('1775 ');
        }
        a.member6101.member9069().member8996().member6213(s.member3454, t.member6100[t.member6099], t.member6100[t.member6099 + 1], t.member6100[t.member6099 + 2], t.member6100[t.member6099 + 3], t.member6100[t.member6099 + 4], t.member6100[t.member6099 + 5]);
    };
    Class421.member5798.member867 = function (v) {
        v.member6099 -= 3;
        var y = a.member6101.member9069();
        var s = v.member6100[v.member6099];
        var u = v.member6100[v.member6099 + 1];
        var t = v.member6100[v.member6099 + 2] / 1000;
        if (s === Class584.member8962 || s === Class584.member8963 || s === Class584.member8964) {
            u = Class415.member4772(u);
            if (u < 0) {
                u += 2 * Math.PI;
            }
        }
        var z = y.member9006();
        var x = Class585({
            member8969: z,
            member3701: s,
            member4735: u,
            member8970: t
        });
        y.member9003(x);
        v.member6100[v.member6099++] = z;
    };
    Class421.member5802.member867 = function (s) {
        s.member6099--;
        var v = a.member6101.member9069();
        var u = Class415.member4772(s.member6100[s.member6099]);
        var x = v.member9006();
        var t = Class590({
            member8969: x,
            member8988: u
        });
        v.member9003(t);
        s.member6100[s.member6099++] = x;
    };
    Class421.member5311.member867 = function (s) {
        s.member6099 -= 2;
        var v = a.member6101.member9069();
        var x = s.member6100[s.member6099];
        var u = Class415.member4772(s.member6100[s.member6099 + 1]);
        var t = v.member941(x);
        if (t === undefined) {
            throw new Error('1776 ');
        }
        if (t.member8967() !== Class582.member8943) {
            throw new Error('1777 ');
        }
        t.member8987(u);
    };
    Class421.member5303.member867 = function (s) {
        var t = s.member6100[--s.member6099];
        a.member6101.member9069().member9004(t);
    };
    Class421.member5304.member867 = function (s) {
        a.member6101.member9069().member9005();
    };
    return h;
}();
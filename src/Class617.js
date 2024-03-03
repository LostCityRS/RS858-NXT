import { Class132 } from 'Class132.js';
import { Class298 } from 'Class298.js';
import { Class446 } from 'Class446.js';
import { Class264 } from 'Class264.js';
import { Class467 } from 'Class467.js';
export var Class617 = function () {
    var a = function (b) {
        b.member6811 = function (s, c, q, o, i, j) {
            if (!s.member9211()) {
                c.member6101.load(s.member9212(), c.member6116.member7139());
                return;
            }
            s.member9213(this);
            var e = s.member9214();
            c.member433.member3644();
            c.member433.member3640.member1630();
            var k = c.member6101.member9071().member9017();
            var r = this.member6752() - k.width;
            if (r < 0) {
                r = 0;
            }
            var n = this.member6754() - k.height;
            if (n < 0) {
                n = 0;
            }
            var g = c.member6444.member6445();
            if (g !== null && g.member4836()) {
                r = 0;
                n = 0;
            }
            e.x = q + r / 2;
            e.y = o + n / 2;
            e.w = this.member6752() - r;
            e.member1272 = this.member6754() - n;
            var d = {
                left: Math.max(0, c.member433.member3842 - e.x),
                top: Math.max(0, c.member433.member3843 - e.y),
                member596: Math.max(0, e.x + e.w - c.member433.member3844),
                member597: Math.max(0, e.y + e.member1272 - c.member433.member3845)
            };
            c.member433.member586();
            c.member6101.member486(s.member9212(), c.member6116.member7139(), e, d);
            c.member433.member585();
            c.member433.member3640.member1630();
            c.member433.member3645();
            Class132.member1267(Class132.member1265());
            if (g !== null && g.member4836()) {
                c.member9215.member486(s.member9212(), g, e, Class298.member3558().x, Class298.member3558().y);
            } else {
                c.member9216.member486(c.member6452, c.member6450, e);
            }
            for (var t = c.member6452.member776(); t !== undefined; t = c.member6452.member777()) {
                if (t.member7886()) {
                    var h = t.member7889();
                    s.member9087(h.member7460(), i, j, e.x, e.y, e.w, e.member1272);
                }
            }
            for (var m = c.member6450.member776(); m !== undefined; m = c.member6450.member777()) {
                if (m.member7886()) {
                    var h = m.member7889();
                    s.member9087(h.member7460(), i, j, e.x, e.y, e.w, e.member1272);
                }
            }
            if (r > 0) {
                c.member433.member3640.member3796(q, o, r / 2, this.member6754(), 255, true);
                c.member433.member3640.member3796(q + this.member6752() - r / 2, o, r / 2, this.member6754(), 255, true);
            }
            if (n > 0) {
                c.member433.member3640.member3796(q, o, this.member6752(), n / 2, 255, true);
                c.member433.member3640.member3796(q, o + this.member6754() - n / 2, this.member6752(), n / 2, 255, true);
            }
        };
        b.member6458 = function () {
            return true;
        };
        b.member6812 = function (D, z, g, e, d, B, t, s, C, y, n, k, j, i) {
            if (d && !z.member9179.isOpen()) {
                var h = z.member6101.member9071().member9017();
                var c = this.member6752() - h.width;
                if (c < 0) {
                    c = 0;
                }
                var E = this.member6754() - h.height;
                if (E < 0) {
                    E = 0;
                }
                z.member9179.member9217(B.x - (g + c / 2), B.y - (e + E / 2), this.member6752() - c, this.member6754() - E);
            }
            if (this.member6726() === Class446.member7092) {
                var u;
                var q = z.member6444.member6445();
                if (q !== null && q.member4836()) {
                    u = z.member9215.member9218(B.x - g, B.y - e, 0);
                    if (t) {
                        if (q !== null && q.member4836()) {
                            if (z.member7135().member8026() > 0 && Class264.member3132()) {
                                if (u !== undefined) {
                                    z.member9219.member9220(u.level, u.x, u.member756);
                                }
                            } else {
                                z.member7619.member9221(u);
                                z.member7619.member9222(true);
                            }
                        }
                        z.member7619.member9223(true);
                        return;
                    }
                    var v = z.member7619.member9224();
                    var r = z.member7619.member9225();
                    var o = z.member7619.member9226();
                    if (s && (o || r) && v !== undefined && u !== undefined) {
                        if (u.x !== v.x || u.member756 !== v.member756) {
                            z.member7619.member9227(true);
                        }
                    }
                    if (!s && o && !r) {
                        z.member9179.member9228(v);
                    }
                    if (!s) {
                        z.member7619.member9223(false);
                        z.member7619.member9227(false);
                        z.member7619.member9221(undefined);
                    }
                }
            }
            for (var x = z.member6452.member776(); x !== undefined; x = z.member6452.member777()) {
                z.member7887.member9229(Class467.member7421, -1, -1, x, x.member7649());
                if (x.member7886()) {
                    var m = x.member7889();
                    D.member9230(m, m.member7460(), C, y, n, k, j, i, B);
                }
            }
            for (var A = z.member6450.member776(); A !== undefined; A = z.member6450.member777()) {
                z.member7887.member9229(Class467.member7420, A.member9231(), -1, A, A.member7649());
                if (A.member7886()) {
                    var m = A.member7889();
                    D.member9230(m, m.member7460(), C, y, n, k, j, i, B);
                }
            }
        };
    };
    return a;
}();
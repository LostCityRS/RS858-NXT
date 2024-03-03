import { Class41 } from 'Class41.js';
import { Class291 } from 'Class291.js';
import { CoordFine } from 'Class290.js';
import { Class469 } from 'Class469.js';
import { Class515 } from 'Class515.js';
import { Class421 } from 'Class421.js';
import { Class140 } from 'Class140.js';
import { Class86 } from 'Class86.js';
import { Class432 } from 'Class432.js';
import { Class501 } from 'Class501.js';
export var Class619 = function () {
    var g = {};
    var a;
    var j = new Float32Array(3);
    var i = new Float32Array(4);
    var c = Class41.create();
    var b = Class291();
    var k = CoordFine();
    var d = Class469.member7449;
    g.member25 = function (n) {
        a = n;
    };
    var h = function (q, o, n) {
        n[1] += q.member6100[--q.member6099];
        Class515.member8337(n, o.member4085(), true);
        var r = a.member7619.member9214();
        q.member6100[q.member6099++] = r.x + Math.floor((n[0] + 1) * r.w / 2);
        q.member6100[q.member6099++] = r.y + Math.floor((n[1] + 1) * r.member1272 / 2);
        q.member6100[q.member6099++] = Math.floor(n[2]);
    };
    var m = function (q, n) {
        var o = n.member4095();
        var r = false;
        i[0] = i[1] = i[2] = i[3] = 0;
        if (o !== null) {
            r = n.member4097();
            if (r) {
                o.member4131(i);
            }
        }
        q.member6100[q.member6099++] = r ? 1 : 0;
        q.member6100[q.member6099++] = i[0];
        q.member6100[q.member6099++] = i[1];
        q.member6100[q.member6099++] = i[2];
        q.member6100[q.member6099++] = i[3];
    };
    Class421.member5958.member867 = function (n) {
        Class140.set(n.member8883.member3320().member4099(), j);
        h(n, n.member8883, j);
    };
    Class421.member5967.member867 = function (n) {
        Class140.set(n.member8884.member3320().member4099(), j);
        h(n, n.member8884, j);
    };
    Class421.member5968.member867 = function (n) {
        Class140.set(n.member8886.member3320().member4099(), j);
        j[0] += Class86.member718 / 2;
        j[2] += Class86.member718 / 2;
        h(n, n.member8886, j);
    };
    Class421.member5961.member867 = function (n) {
        n.member6100[n.member6099++] = n.member8883.getOverlayHeight();
    };
    Class421.member5969.member867 = function (n) {
        n.member6100[n.member6099++] = n.member8884.getOverlayHeight();
    };
    Class421.member5970.member867 = function (n) {
        n.member6100[n.member6099++] = n.member8886.getOverlayHeight();
    };
    Class421.member5973.member867 = function (n) {
        m(n, n.member8883);
    };
    Class421.member5971.member867 = function (n) {
        m(n, n.member8884);
    };
    Class421.member5972.member867 = function (n) {
        m(n, n.member8886);
    };
    Class421.member5965.member867 = function (o) {
        var q = 0;
        var n = a.member7135();
        if (n !== undefined) {
            q = n.member8045() === o.member8883.member6721() ? 1 : 0;
        }
        o.member6100[o.member6099++] = q;
    };
    Class421.member5954.member867 = function (n) {
        var o = n.member8883.member7809();
        if (o === undefined) {
            n.member6142[n.member6143++] = '';
        } else {
            n.member6142[n.member6143++] = o.member3637();
        }
    };
    Class421.member5955.member867 = function (n) {
        n.member6142[n.member6143++] = n.member8883.member7791(true);
    };
    Class421.member6078.member867 = function (r) {
        r.member6099 -= 2;
        var s = r.member6100[r.member6099];
        if (r.member6100[r.member6099 + 1] === -1) {
            throw new Error('975 ');
        }
        var q = Class291(r.member6100[r.member6099 + 1]);
        if (s !== Class432.member6228 && s !== Class432.member6229 && s !== Class432.member6230) {
            throw new Error('976 ' + s);
        }
        var o = a.member8252.member8259();
        var n = o.member8260(Class501.member8138);
        n.packet.p1_alt2(s);
        n.packet.p2_alt2(q.member756);
        n.packet.p2_alt1(q.x);
        o.member8261(n);
    };
    var e = 0.35;
    Class421.member6077.member867 = function (o) {
        var q = o.member6100[--o.member6099];
        var u = q > 0;
        q = Math.abs(q);
        var y = a.member6101.member9071();
        if (y.member8997() === undefined) {
            o.member6100[o.member6099++] = -1;
            return;
        }
        if (a.member7135() !== undefined) {
            var C = a.member7135().member6453();
            if (C !== undefined) {
                C.member7838(k);
                if (k.member3454[0] % Class86.member718 === 0 && k.member3454[2] % Class86.member718 === 0) {
                    o.member6100[o.member6099++] = -1;
                    return;
                }
                C.member7836(b);
                y.member3651(c);
                var A = c[0];
                var s = c[2];
                var t = Math.acos(A * Math.sqrt(A * A + s * s));
                if (s < 0) {
                    t = Math.PI - t + Math.PI;
                }
                var v = -Math.sin(t) * q;
                var r = Math.cos(t) * q;
                var B = Math.round(v);
                var z = Math.round(r);
                v = Math.abs(v);
                r = Math.abs(r);
                if (v > 0 && r > 0) {
                    var n = v > r ? r / v : v / r;
                    if (n > e) {
                        B = B > 0 ? q : -q;
                        z = z > 0 ? q : -q;
                    } else if (v > r) {
                        z = 0;
                    } else if (v < r) {
                        B = 0;
                    }
                }
                if (u) {
                    b.x += B;
                    b.member756 += z;
                } else {
                    b.x -= B;
                    b.member756 -= z;
                }
                o.member6100[o.member6099++] = b.member3462();
            }
        }
    };
    return g;
}();
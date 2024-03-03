import { Class292 } from 'Class292.js';
import { Class49 } from 'Class49.js';
import { Class41 } from 'Class41.js';
import { Class307 } from 'Class307.js';
import { Class37 } from 'Class37.js';
import { Class471 } from 'Class471.js';
import { Class120 } from 'Class120.js';
import { Class461 } from 'Class461.js';
import { Class317 } from 'Class317.js';
import { Class86 } from 'Class86.js';
import { Class415 } from 'Class415.js';
import { Cuboid } from 'Class166.js';
export var Class616 = function () {
    var h = Class292(Class49.create(), Class49.create(), Class41.create(), Class41.create());
    var e = Class41.create();
    var a = Class307();
    var c = Class37.member313();
    var i = Class49.create();
    var g = Class49.member313();
    var b = undefined;
    var d = function (n, m, u, v, o, q, r, j, t, k, s) {
        member46(this, Class471, n, m, u, v, o, q, r, j, t, k, s);
    };
    member45(Class471, d);
    d.prototype.member7652 = function (j, r, o, m, q, n, k) {
        if (true) {
            if (b === undefined) {
                b = Class120({
                    member433: j.member433,
                    member995: j.member995
                });
                b.member1008([
                    0,
                    0,
                    0,
                    0
                ], 0);
            }
            b.member1009([
                r * q[0],
                r * q[1],
                r * q[2]
            ], 0);
            b.member1010([
                o * q[0],
                o * q[1],
                o * q[2]
            ], 0);
            b.member1011([
                m * q[0],
                m * q[1],
                m * q[2]
            ], 0);
            b.member1012(n, 0);
        } else {
        }
    };
    d.prototype.member7653 = function () {
        b = undefined;
    };
    d.prototype.member6811 = function (L, H, q, m) {
        if (true) {
            if (b === undefined) {
                b = Class120({
                    member433: H.member433,
                    member995: H.member995
                });
                b.member1008([
                    0,
                    0,
                    0,
                    0
                ], 0);
                b.member1009([
                    1,
                    1,
                    1
                ], 0);
                b.member1010([
                    1,
                    1,
                    1
                ], 0);
                b.member1012([
                    -50,
                    10,
                    -50
                ], 0);
            }
            var t = undefined;
            var F = H.member7135();
            if (F !== undefined) {
                var r = F.member6453();
                if (r !== undefined) {
                    t = r.member7136();
                }
            }
            var u = this.member1886();
            if (u === Class461.member7276 || u === Class461.member7275 || u === Class461.member7278) {
                var k;
                if (this.member7501() === -1) {
                    k = H.member7135().member6453();
                } else if (this.member7501() < -1) {
                    k = H.member9207(this.member7501());
                } else {
                    k = H.member6452.member6453(this.member7501());
                    if (F === undefined || this.member7501() !== F.member7649() && Class317.member3717(k.member7787()) !== this.member7503()) {
                        return;
                    }
                }
                if (k === undefined || k === null) {
                    return;
                }
                t = k.member7136();
            }
            var G = this.member7075(H.member433, H.member4409, H.member9208, k, H.member6116.member7139());
            if (G === null || G === undefined) {
                return;
            }
            var y = 0;
            if (this.member6807() !== -1) {
                y = +G.member2098().member1793()[1] >> 1;
            }
            var K = 512, J = 512;
            if (this.member7510() > 0) {
                K = (this.member6752() << 9) / this.member7510();
            }
            if (this.member7512() > 0) {
                J = (this.member6754() << 9) / this.member7512();
            }
            var D = H.member433.member3844 - H.member433.member3842;
            var I = H.member433.member3845 - H.member433.member3843;
            var C = q + Math.floor(this.member6752() / 2) - H.member433.member3842;
            var B = m + Math.floor(this.member6754() / 2) - H.member433.member3843;
            var s = this.member7508();
            if (!this.member7527()) {
                C += s[0] * K >> 9;
                B += s[1] * J >> 9;
            }
            var j = this.member7506();
            if (!this.member7527()) {
                j <<= Class86.member719;
            }
            H.member433.member3640.member1630();
            H.member433.member586();
            L.member9209(D, I, b);
            if (this.member7516()) {
                H.member433.member942();
            }
            var o = this.member7505();
            if (this.member7527()) {
                Class49.translate(g, s, i);
                Class49.member345(i, Class415.member4772(o[0]));
                Class49.member346(i, Class415.member4772(o[1]));
                Class49.member347(i, Class415.member4772(o[2]));
            } else {
                var E = this.member7532();
                var x = E[1] << Class86.member719;
                e[0] = E[0] << Class86.member719;
                e[1] = -(x + y);
                e[2] = x;
                Class49.member345(g, -Class415.member4773(o[0]), i);
                Class49.translate(i, e);
                Class49.member346(i, Class415.member4773(o[1]));
                Class49.member347(i, Class415.member4773(o[2]));
                i[14] += j;
            }
            var A = Cuboid(G.member2098());
            A.transform(i);
            var v = A.member1792()[2], z = A.member1793()[2];
            z += this.member7506();
            v -= this.member7506();
            if (this.member7514()) {
                Class49.member357(C, B, K, J, v, z, D, I, j, h.member3463);
            } else {
                Class49.member356(C, B, K, J, v, z, D, I, h.member3463);
            }
            a.member3651(h.member1624);
            a.member3649(h.member3464);
            h.member3466();
            G.member1630(H.member6116.member7139(), h, i, c, this.getID6(H.member6116.member7139()), false, undefined);
            this.getID7(i, h);
            H.member433.member585();
            var n = L.member9210();
            H.member433.member3640.member3623(H.member433.member3842, H.member433.member3843, n.width, n.height, 4294967295, 0, 1 - n.member496, n.member495, 1, n.texture, false);
            H.member433.member3640.member1630();
        } else {
        }
    };
    return d;
}();
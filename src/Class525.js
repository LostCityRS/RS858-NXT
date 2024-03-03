import { Class385 } from 'Class385.js';
import { Class37 } from 'Class37.js';
import { Class372 } from 'Class372.js';
import { Class374 } from 'Class374.js';
import { Class50 } from 'Class50.js';
import { Class131 } from 'Class131.js';
import { Class288 } from 'Class288.js';
import { Class386 } from 'Class386.js';
import { Class387 } from 'Class387.js';
import { Class49 } from 'Class49.js';
import { Class132 } from 'Class132.js';
import { Class155 } from 'Class155.js';
import { Class72 } from 'Class72.js';
import { Class376 } from 'Class376.js';
import { Class140 } from 'Class140.js';
import { Class351 } from 'Class351.js';
import { Class371 } from 'Class371.js';
import { Class332 } from 'Class332.js';
import { Class347 } from 'Class347.js';
export var Class525 = function () {
    var a = function (e) {
        var q = {};
        var u;
        var t;
        var s;
        var o;
        var m;
        var b;
        var k;
        var c;
        var i;
        var C = null;
        var r = null;
        var z = null;
        var v = null;
        var B = Class385();
        var d = false;
        var h = undefined;
        var n = true;
        var A = false;
        var j = false;
        var x = Class37.create();
        if (e.node !== undefined && e.parent !== undefined && e.member4070 !== undefined && e.level !== undefined && e.member7710 !== undefined && e.member6432 !== undefined && e.member6439 !== undefined && e.member6448 !== undefined && e.member6440 !== undefined && e.member6449 !== undefined && e.member1788 !== undefined && e.member4345 !== undefined) {
            q = new Class372(e.node, e.parent, e.member4070, Class374.member4136, e.level);
            u = e.member7710;
            t = e.member6432;
            s = e.member6439;
            o = e.member6448;
            m = e.member6440;
            b = e.level;
            k = e.member1788;
            i = e.member4345;
            if (e.member6449) {
                c = Class50.member369;
            }
            if (e.member4179 !== null) {
                if (e.member4179 === u.member7135().member6453()) {
                    A = true;
                }
                n = false;
            }
            if (e.member4370 !== undefined) {
                h = e.member4370;
            }
        } else {
            throw new Error('865 ');
        }
        q.member8462 = function () {
            return t;
        };
        q.member8463 = function () {
            return n;
        };
        q.member1999 = function () {
            if (d && (v === null || v.member1999())) {
                j = true;
            }
            var D = d && (v !== null && v.member1999() && (z === null || z.member2062() === 0));
            return j && D;
        };
        q.member4380 = function (H, F) {
            if (C === null) {
                C = u.member2970.member3227(Class131.member1217.member1204, t);
                if (C === member47) {
                    return false;
                }
                if (c === undefined) {
                    if (C.member8464()) {
                        c = Class50.member368;
                    } else {
                        c = Class50.member370;
                    }
                }
            }
            if (r === null) {
                r = C.member7075(u.member433, q.member4116, q.member4119);
                if (r === null) {
                    return false;
                }
                r.member510();
            }
            if (z === null && r.member2101() !== undefined) {
                z = Class288({ member433: u.member433 });
            }
            if (v === null) {
                var D = C.member4609();
                if (D === -1) {
                    d = true;
                    return true;
                }
                v = Class386({
                    id: D,
                    member2970: u.member2970,
                    member4344: c,
                    member4383: i,
                    member4385: q.member8465,
                    member4370: h
                });
            }
            if (!v.member1540()) {
                var G = C.member2008();
                if (G === null) {
                    return false;
                }
                v.member4380(u.member2970, u.member4409, Class387.member104, t, G, H);
            }
            if (v.member1540()) {
                v.member4378();
                d = true;
            }
            var E = F;
            if (!C.member8464()) {
                E = 0;
            }
            v.member4224(H, E);
            return d;
        };
        var g = q.member4380;
        q.member952 = function (I, H, G, F, E) {
            if (!j) {
                Class49.member334(G, x);
                r.member952(I, F, H, G, x, B, false, E, undefined);
            }
            if (z !== null) {
                var D = Class132.member1266();
                I.member4228(Class155.member96, false);
                if (!D.member522(Class72.member499)) {
                    z.member952(I, H);
                }
                I.member4229(Class155.member96);
            }
        };
        q.member486 = function (H, G, F, E) {
            Class49.member334(G, x);
            r.member1630(F, H, G, x, B, false, E, undefined);
            if (z !== null) {
                var D = Class132.member1266();
                if (!D.member522(Class72.member499) && !D.member522(Class72.member96)) {
                    z.member486(H);
                }
            }
        };
        q.member3437 = function (D, H, I, J, G) {
            if (q.member4103(D)) {
                if (!d || v !== null && v.member4341() > 0) {
                    q.member4105(false);
                    return;
                }
                if (v !== null && v.member1540()) {
                    v.member1998(B, false);
                } else {
                    B = null;
                }
                if (C !== member47 && C.member8466()) {
                    this.member4085().member4114().member8328(b, r.member2098(), H, true);
                }
                q.member4102();
                if (z !== null) {
                    r.member2128(z, H, B, undefined, j);
                }
                q.member4105(true);
                var E = Class132.member1266();
                var F = E.member522(Class72.member499);
                if (F && C !== member47 && !C.member4494()) {
                    q.member4107(false);
                    return;
                }
            } else if (!q.member4104()) {
                return;
            }
            q.member4107(true);
        };
        q.member4102 = function () {
            if (v !== null && v.member1843()) {
                q.member4101(Class376.member4172);
                return;
            }
            var D = 0;
            if (z !== null) {
                D |= Class376.member4171;
            }
            if (r !== null) {
                if (r.member2121()) {
                    D |= Class376.member4171;
                }
                if (r.member2122()) {
                    D |= Class376.member4169;
                }
            }
            q.member4101(D);
        };
        q.member512 = function () {
            if (r !== null) {
                r.member511();
                r = null;
            }
            v = null;
            B = null;
            C = null;
            if (z !== null) {
                z.member512();
            }
            q.member3320().member4189();
            q.member4123();
        };
        var y = function () {
            q.member3320().member4193([
                s,
                o,
                m
            ]);
            var D = Class140.create();
            Class140.member1353([
                0,
                1,
                0
            ], k, D);
            q.member3320().member4197(D);
        };
        q.member8467 = function () {
            if (v === null) {
                return null;
            }
            return v.member4373();
        };
        q.member2928 = function () {
            if (v === null || v.member4373() === null) {
                return Class50.member371;
            }
            return v.member4373().member2928();
        };
        q.member4392 = function () {
            if (C === null || v === null) {
                return false;
            }
            if (C.member8464()) {
                return v.member4392();
            }
            return false;
        };
        q.member4391 = function (D) {
            if (C === null || v === null) {
                return true;
            }
            if (C.member8464()) {
                return v.member4391(D);
            }
            return true;
        };
        q.member4122 = function () {
            q.member4125();
        };
        q.member8465 = function (N, E, H, G, O, F, D, K, J) {
            var M = G != -1 ? H * G / 100 : H;
            var L;
            if (O === 0 && !A) {
                return;
            }
            if (A) {
                L = Class351.member3922;
            } else {
                L = Class351.member3918;
            }
            var I = Class371.member4059(Class332.member3787, N, E, M, Class347.member3911, q, L, {
                member4014: 0,
                maxDistance: O
            }, q.getWorldPosition(), q.member4081(), J);
            if (I !== undefined) {
                I.start();
                q.member4128(I);
            }
        };
        y();
        e = undefined;
        return q;
    };
    return a;
}();
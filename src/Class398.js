import { Class121 } from 'Class121.js';
import { Class397 } from 'Class397.js';
import { Class290 } from 'Class290.js';
import { Class32 } from 'Class32.js';
import { Class140 } from 'Class140.js';
import { Class372 } from 'Class372.js';
import { Class374 } from 'Class374.js';
import { Class166 } from 'Class166.js';
import { Class86 } from 'Class86.js';
import { Class129 } from 'Class129.js';
import { Class377 } from 'Class377.js';
import { Class389 } from 'Class389.js';
import { Class396 } from 'Class396.js';
import { Class198 } from 'Class198.js';
import { Class392 } from 'Class392.js';
import { Class391 } from 'Class391.js';
import { Class379 } from 'Class379.js';
import { Class170 } from 'Class170.js';
export var Class398 = function () {
    var o = [];
    for (var e in Class121) {
        var q = Class121[e];
        if (typeof q === 'number' && q !== Class121.member778) {
            o.push(q);
        }
    }
    o.sort(function (v, u) {
        return u - v;
    });
    var j = function (u) {
        switch (u) {
        case Class121.member1031:
        case Class121.member1028:
            return Class397.member4395;
        case Class121.member797:
            return Class397.member4396;
        case Class121.member1030:
        case Class121.member881:
            return Class397.member4398;
        case Class121.member1029:
        case Class121.member796:
        case Class121.member893:
            return Class397.member4401;
        default:
            throw new Error('1155 ' + u);
        }
    };
    var n = 0;
    var t = 1;
    var b = 2;
    var h = 3;
    var i = 0;
    var s = 1;
    var m = 3;
    var d = Class290();
    var g = new Array(Class32.member310);
    var k = new Float32Array(3);
    var c = Class140.create();
    var r = function (G, v, E, F, D, A, z, x, u, C, B) {
        this.member1643 = undefined;
        this.member1642 = undefined;
        this.member4549 = undefined;
        this.member4550 = undefined;
        this.member4551 = undefined;
        this.member4552 = undefined;
        this.member2563 = undefined;
        this.member4553 = new Array(0);
        this.member1566 = null;
        this.member4554 = new Array(0);
        this.member4555 = new Array(0);
        this.member4556 = new Array(0);
        this.member4557 = new Array(0);
        this.member4558 = new Array(0);
        this.member4559 = {};
        for (var y = 0; y < o.length; y++) {
            this.member4559[o[y]] = {
                member2563: new Array(0),
                member4560: undefined,
                member4561: n,
                member4562: member47,
                member4526: null
            };
        }
        this.member4563 = Class121.member778;
        if (G !== undefined && v !== undefined && E !== undefined && F !== undefined && D !== undefined && A !== undefined && z !== undefined && x !== undefined && u !== undefined && C !== undefined && B !== undefined) {
            member46(this, Class372, G, v, E, Class374.member4139, -1);
            this.member1643 = F;
            this.member1642 = D;
            this.member4549 = A;
            this.member4550 = z;
            this.member4551 = x;
            this.member4552 = u;
            this.member2563 = C;
            this.member1566 = B;
            this.member4093(Class166(new Float32Array([
                0,
                0,
                0
            ]), new Float32Array([
                (this.member4551 - this.member4549 + 1) * Class86.member718,
                Class86.member730,
                (this.member4552 - this.member4550 + 1) * Class86.member718
            ])));
            this.member4564();
        } else {
            throw new Error('1156 ');
        }
    };
    member45(Class372, r);
    r.prototype.member4521 = function () {
        return this.member4549;
    };
    r.prototype.member4522 = function () {
        return this.member4550;
    };
    r.prototype.member4565 = function () {
        return (this.member4551 - this.member4549) * Class86.member718;
    };
    r.prototype.member4566 = function () {
        return this.member4563 === Class121.member893;
    };
    r.prototype.member4564 = function () {
        var y = this.member4085().member4111();
        for (var v = 0; v < this.member2563.length; v++) {
            var x = this.member2563[v];
            if (!this.member4567(x)) {
                continue;
            }
            if (x.member4148.member4481()) {
                this.member4553.push(x);
                continue;
            }
            var z = this.member4568(x, y);
            x.member2529 = z;
            var u = new a(x, x.member4148.member4484(y, x.level, this.member1643 * Class86.member729 + x.x, this.member1642 * Class86.member729 + x.member756, x.member2520));
            this.member4559[z].member2563.push(u);
        }
        this.member2563 = undefined;
    };
    r.prototype.member4567 = function (u) {
        if (u === undefined) {
            return false;
        }
        if (u.x < this.member4549 || u.x > this.member4551) {
            return false;
        }
        if (u.member756 < this.member4550 || u.member756 > this.member4552) {
            return false;
        }
        if (u.member4148 === null) {
            throw new Error('1157 ' + u.member2506 + '1157 ' + this.member1643 + '1157 ' + this.member1642);
        }
        return true;
    };
    r.prototype.member4568 = function (D, G) {
        var y = D.member4148.member4164(D.member2520);
        var v = D.member4148.member4165(D.member2520);
        var z = true;
        var H = D.x - 1;
        if (H < 0) {
            H = 0;
        }
        var E = D.x + y + 1;
        if (E >= Class86.member729) {
            E = Class86.member729 - 1;
        }
        var F = D.member756 - 1;
        if (F < 0) {
            F = 0;
        }
        var C = D.member756 + v + 1;
        if (C >= Class86.member729) {
            C = Class86.member729 - 1;
        }
        member4569:
            for (var A = H; A < E; A++) {
                for (var u = F; u < C; u++) {
                    var B = G.member4570(D.level, this.member1643 * Class86.member729 + A, this.member1642 * Class86.member729 + u);
                    if (B !== -1 && (B & Class129.member1176) === 0) {
                        z = false;
                        break member4569;
                    }
                }
            }
        return this.member4571(D, z);
    };
    var a = function (u, v) {
        this.member4519 = u;
        this.member2523 = v;
        this.member4520 = member47;
        this.member4572 = 0;
        this.height = undefined;
        this.member2532 = undefined;
        this.member2533 = undefined;
        this.member2529 = -1;
    };
    a.prototype.member4573 = function () {
        if (this.member4520 !== undefined && this.member4520 !== member47) {
            this.member4520.member2621.member511();
        }
        this.member4520 = member47;
        this.height = undefined;
        this.member2532 = undefined;
        this.member2533 = undefined;
    };
    r.prototype.member4380 = function (v, u, K, H, C, y, I, A) {
        var E = this.member4087();
        var D = this.member4089();
        for (var z = 0; z < o.length; z++) {
            var B = o[z];
            if (D <= B) {
                if (!this.member4574(u, C, y, this.member4559[B], j(B), B)) {
                    return;
                }
            } else if (!A) {
                this.member4575(this.member4559[B], B);
                if (this.member4563 < B) {
                    this.member4563 = B;
                }
            }
        }
        var x = true;
        if (D === Class121.member893) {
            if (!this.member4576(u, K, H, C, y, I)) {
                x = false;
            }
            if (!this.member4577(this.member4556, u, K, H, C, y, I)) {
                x = false;
            }
            if (!this.member4577(this.member4557, u, K, H, C, y, I)) {
                x = false;
            }
        }
        if (!this.member4578(u, K, H, C, y, I)) {
            x = false;
        }
        if (x) {
            this.member4088(D);
            this.member4563 = D;
            for (var z = 0; z < o.length; z++) {
                var B = o[z];
                this.member4579(v, this.member4559[B], B, D);
            }
            var G = this.member3320();
            var F = this.member4085();
            if (D === Class121.member893) {
                for (var z = 0; z < this.member4558.length; z++) {
                    var J = this.member4558[z].member3320();
                    if (!J.member4188()) {
                        G.member2013(J);
                        J.member4190(v, F.member4580(), 0);
                    }
                }
            } else {
                for (var z = 0; z < this.member4558.length; z++) {
                    var J = this.member4558[z].member3320();
                    if (J.member4188()) {
                        J.member4189();
                    }
                }
            }
            this.member3320().member4202(true);
        }
    };
    r.prototype.member4576 = function (v, D, B, A, y, C) {
        var x = true;
        for (var z = 0; z < this.member4558.length; z++) {
            var u = this.member4558[z];
            u.member4380(v, D, B, A, y, C);
            if (u.member4087() !== Class121.member893) {
                x = false;
            }
        }
        return x;
    };
    r.prototype.member4578 = function (u, E, C, A, y, D) {
        if (this.member4555.length === 0 && this.member4553.length > 0) {
            for (var z = 0; z < this.member4553.length; z++) {
                var B = this.member4553[z];
                var x = Class377();
                var v = Class389(x, this, this.member4085(), B.level, B.member2506, B.member2519, B.member2520, B.member2527, !B.member2521, this.member1643 * Class86.member729 + B.x, this.member1642 * Class86.member729 + B.member756, B.x - this.member4549, B.member756 - this.member4550, B.member2523, undefined, B.member2535, B.member2536);
                x.member4185(v);
                this.member4555.push(v);
                this.member3320().member2013(x);
                v.member4090(Class121.member893);
            }
        }
        return this.member4577(this.member4555, u, E, C, A, y, D);
    };
    r.prototype.member4577 = function (E, u, D, B, z, x, C) {
        var v = true;
        for (var y = 0; y < E.length; y++) {
            var A = E[y];
            A.member4380(u, D, B, z, x, C);
            if (A.member4087() !== Class121.member893) {
                v = false;
            }
        }
        return v;
    };
    r.prototype.member4571 = function (y, z) {
        var B;
        var x = y.member4148.member4581();
        var u = y.member4148.member4582();
        var v = y.member2519;
        if (x !== -1) {
            B = x;
        } else if (u === Class396.member4547) {
            B = Class121.member893;
        } else if (Class198.member2353(v)) {
            B = Class121.member797;
        } else if (z && u !== Class396.member4548) {
            B = Class121.member893;
        } else if (Class198.member2354(v)) {
            B = Class121.member893;
        } else if (Class198.member2356(v) || Class198.member2355(v)) {
            B = Class121.member797;
        } else if (v === Class198.member2352) {
            B = Class121.member893;
        } else {
            var A = y.member4148.member4164(0) * y.member4148.member4165(0);
            if (A === 1) {
                B = Class121.member796;
            } else if (A >= 2 & A <= 4) {
                B = Class121.member881;
            } else {
                B = Class121.member797;
            }
        }
        if (B === Class121.member797) {
            B = Class121.member881;
        }
        if (B === Class121.member796) {
            B = Class121.member893;
        }
        return B;
    };
    r.prototype.member4579 = function (x, y, v, z) {
        if (y.member4526 !== null) {
            for (var u = 0; u < y.member4526.length; u++) {
                y.member4526[u].member4088(z);
            }
            if (z === Class121.member893) {
                for (var u = 0; u < y.member4526.length; u++) {
                    y.member4526[u].member4220();
                }
            } else {
                for (var u = 0; u < y.member4526.length; u++) {
                    y.member4526[u].member4221();
                }
            }
        }
    };
    r.prototype.member4574 = function (N, T, Q, P, J, S) {
        if (P.member2563.length === 0) {
            return true;
        }
        var B = this.member4085();
        if (P.member4526 === null) {
            if (this.member4085().member4583() === Class392.member1448) {
                var O = B.member4584();
                var x = 'lc_' + S + '_' + this.member1643 + '_' + this.member1642 + '_' + this.member4549 + '_' + this.member4550;
                if (P.member4561 === n && i < m) {
                    i++;
                    O.member4585(x, function (V, W) {
                        P.member4562 = W;
                        P.member4561 = h;
                        i--;
                    }, function (V) {
                        P.member4562 = undefined;
                        P.member4561 = b;
                        i--;
                    });
                    P.member4561 = t;
                }
                if (P.member4562 === member47) {
                    return false;
                }
                if (P.member4561 === h) {
                    try {
                        P.member4560 = Class391(J, S, N, this, P.member2563, this.member1643, this.member1642, false);
                        var M = P.member4560.member4244(P.member4562);
                        P.member4560.member4248(Class379.member4231, M);
                    } catch (A) {
                        if (false) {
                        }
                        P.member4560 = undefined;
                        P.member4562 = undefined;
                        P.member4561 = b;
                        O.member4586(x);
                    }
                }
            }
            if (P.member4560 === undefined) {
                var G = J;
                var E = B.member4114();
                var y = B.member4111();
                var D = true;
                var K = true;
                member4587:
                    for (var U = 0; U < P.member2563.length; U++) {
                        var u = P.member2563[U];
                        var L = u.member4519;
                        if (u.member4520 === member47) {
                            var H = L.member4148.member4487(Q, G, L.member2519, L.member2520, L.member2527, undefined, false);
                            if (H !== member47) {
                                u.member4520 = H;
                                if (H !== undefined) {
                                    H.member2621.member510();
                                    u.member4572 = H.member2621.member2098().member1793()[1];
                                }
                            } else {
                                D = false;
                            }
                        }
                        if (!Q.member4588(G)) {
                            continue;
                        }
                        var F = this.member1643 * Class86.member729 + L.x;
                        var C = this.member1642 * Class86.member729 + L.member756;
                        var z = L.level;
                        if (y.member4112(F, C)) {
                            z++;
                        }
                        if (u.height === undefined) {
                            var I = L.member4148.member4483(L.member4148, E, z, F, C, L.member2520, L.member2521);
                            if (I !== -1) {
                                u.height = I;
                            } else {
                                K = false;
                            }
                        }
                        var v = L.member4148.member4333();
                        if (u.member2532 === undefined) {
                            if (v === Class170.member1853 || v === Class170.member1854 || v === Class170.member1855) {
                                u.member2532 = L.member4148.member4488(L.member4148, u.height, E, z, F, C, L.member2520, L.member2521);
                            } else {
                                u.member2532 = false;
                            }
                        }
                        if (u.member2533 === undefined && u.member2532 === false && v !== Class170.member1852) {
                            u.member2533 = L.member4148.member4489(L.member4148, E, z, F, C, L.member2520, L.member2521);
                            if (u.member2533 === undefined) {
                                K = false;
                            }
                        }
                    }
                if (!D || !K) {
                    return false;
                }
                if (!Q.member4588(J)) {
                    return false;
                }
                P.member4560 = Class391(J, S, N, this, P.member2563, this.member1643, this.member1642, this.member4085().member4583() === Class392.member1448);
                Q.member4589(P.member4560);
                if (P.member4560.member1999()) {
                    P.member4560 = undefined;
                    return false;
                }
            }
            if (!P.member4560.member1999()) {
                return false;
            }
            if (!P.member4560.member4242()) {
                P.member4560 = undefined;
                return false;
            }
            var R = P.member4560.member4518();
            if (R !== undefined) {
                var O = B.member4584();
                O.member4590('lc_' + S + '_' + this.member1643 + '_' + this.member1642 + '_' + this.member4549 + '_' + this.member4550, R.getData());
            }
            var M = P.member4560.member4241();
            P.member4526 = M.member4526;
            for (var U = 0; U < M.member4529.length; U++) {
                this.member4558.push(M.member4529[U]);
            }
            P.member4560 = undefined;
            for (var U = 0; U < P.member2563.length; U++) {
                var u = P.member2563[U];
                u.member4573();
            }
            P.member4562 = undefined;
        }
        return true;
    };
    r.prototype.member512 = function () {
        for (var u = o.length - 1; u >= 0; u--) {
            this.member4575(this.member4559[o[u]], u);
        }
        this.member4591(this.member4555);
        this.member4591(this.member4556);
        this.member4591(this.member4557);
        this.member4088(Class121.member778);
        this.member4563 = Class121.member778;
    };
    r.prototype.member4575 = function (v, x) {
        if (v.member4526 !== null) {
            for (var u = 0; u < v.member4526.length; u++) {
                var y = v.member4526[u];
                y.member512();
                this.member3320().removeChild(y.member3320());
            }
            v.member4526 = null;
        }
        for (var u = 0; u < this.member4558.length; u++) {
            if (this.member4558[u].member4474() === x) {
                this.member4558[u].member512();
                this.member4558.splice(u, 1);
                u--;
            }
        }
        if (v.member4560 !== undefined) {
            v.member4560.cancel();
            v.member4560 = undefined;
        }
        v.member4562 = member47;
        v.member4561 = n;
    };
    r.prototype.member4591 = function (v) {
        for (var u = 0; u < v.length; u++) {
            v[u].member512();
        }
        v.length = 0;
    };
    r.prototype.member4592 = function (B) {
        if (B.member4593() === undefined) {
            var A = this.member4594(B);
            if (A !== undefined) {
                this.member4595(B, null, false);
                return A;
            }
        }
        this.member4595(B, null, true);
        var y = Class377();
        var z = B.member4596();
        var x = B.member4597();
        var v = B.member4598();
        B.member4599(-1);
        var u = Class389(y, this, this.member4085(), B.member4081(), z, B.member4472(), B.member4471(), B.member4472() === Class198.member2332, false, x, v, x % Class86.member729 - this.member4549, v % Class86.member729 - this.member4550, undefined, undefined, undefined, undefined, undefined, B, B.member4593());
        y.member4185(u);
        this.member4556.push(u);
        this.member3320().member2013(y);
        u.member4090(Class121.member893);
        this.member4092(1);
        return u;
    };
    r.prototype.member4493 = function (v, u) {
        this.member4595(v, u, true);
        if (this.member4595(v, u, false)) {
            return;
        } else {
            this.member4600(v);
        }
    };
    r.prototype.member4595 = function (z, x, v) {
        for (var u = 0; u < this.member4556.length; u++) {
            var y = this.member4556[u];
            if (y !== x && this.member4601(z, y)) {
                if (v && !y.member4475()) {
                    continue;
                }
                y.member512();
                this.member3320().removeChild(y.member3320());
                this.member4556.splice(u, 1);
                return true;
            }
        }
        return false;
    };
    r.prototype.member4600 = function (y) {
        var v = y.member4596();
        var x;
        for (var u = 0; u < this.member4555.length; u++) {
            x = this.member4555[u];
            if (!x.member4159() && (v === -1 || v === x.member444()) && this.member4601(y, x)) {
                x.hide();
                return true;
            }
        }
        for (var u = 0; u < this.member4557.length; u++) {
            x = this.member4557[u];
            if (!x.member4159() && (v === -1 || v === x.member444()) && this.member4601(y, x)) {
                x.hide();
                return true;
            }
        }
        for (var u = 0; u < this.member4558.length; u++) {
            x = this.member4558[u];
            if (!x.member4159() && (v === -1 || v === x.member444()) && this.member4601(y, x)) {
                x.hide();
                return true;
            }
        }
        for (var u = o.length - 1; u >= 0; u--) {
            if (this.member4602(y, this.member4559[o[u]])) {
                return true;
            }
        }
        return false;
    };
    r.prototype.member4602 = function (y, x) {
        if (x.member4526 !== null) {
            for (var u = 0; u < x.member4526.length; u++) {
                var v = x.member4526[u].member4216(y.member4596(), y.member4081(), y.member4597(), y.member4598(), y.member4472());
                if (v) {
                    return true;
                }
            }
        }
        return false;
    };
    r.prototype.member4594 = function (z) {
        var v = z.member4596();
        var y;
        for (var u = 0; u < this.member4555.length; u++) {
            y = this.member4555[u];
            if (y.member4159() && v === y.member444() && this.member4601(z, y)) {
                y.member4155();
                return y;
            }
        }
        for (var u = 0; u < this.member4557.length; u++) {
            y = this.member4557[u];
            if (y.member4159() && v === y.member444() && this.member4601(z, y)) {
                y.member4155();
                return y;
            }
        }
        for (var u = 0; u < this.member4558.length; u++) {
            y = this.member4558[u];
            if (y.member4159() && v === y.member444() && this.member4601(z, y)) {
                y.member4155();
                return y;
            }
        }
        for (var u = o.length - 1; u >= 0; u--) {
            var x = this.member4603(z, this.member4559[o[u]]);
            if (x !== undefined) {
                return x;
            }
        }
        return undefined;
    };
    r.prototype.member4603 = function (y, v) {
        if (v.member4526 !== null) {
            for (var u = 0; u < v.member4526.length; u++) {
                var x = v.member4526[u].member4217(y.member4596(), y.member4081(), y.member4597(), y.member4598(), y.member4472());
                if (x) {
                    return x;
                }
            }
        }
        return undefined;
    };
    r.prototype.member4601 = function (x, u) {
        var v = u.member4153();
        return x.member4081() === u.member4081() && x.member4597() === v.x && x.member4598() === v.member756 && x.member4472() === u.member4472();
    };
    r.prototype.member4604 = function (v, x) {
        this.member4605(v, x);
        for (var u = o.length - 1; u >= 0; u--) {
            this.member4606(v, x, this.member4559[o[u]]);
        }
    };
    r.prototype.member4605 = function (v, y) {
        for (var u = 0; u < this.member4556.length; u++) {
            var x = this.member4556[u];
            x.member3320().member344(k);
            if (k[0] >= v.member3454[0] && k[0] <= y.member3454[0] && k[2] >= v.member3454[2] && k[2] <= y.member3454[2]) {
                x.member512();
                this.member3320().removeChild(x.member3320());
                this.member4556.splice(u, 1);
                u--;
            }
        }
        for (var u = 0; u < this.member4558.length; u++) {
            var z = this.member4558[u];
            if (!z.member4159()) {
                continue;
            }
            z.member3320().member344(k);
            if (k[0] >= v.member3454[0] && k[0] <= y.member3454[0] && k[2] >= v.member3454[2] && k[2] <= y.member3454[2]) {
                z.member4155();
            }
        }
    };
    r.prototype.member4606 = function (v, x, y) {
        if (y.member4526 !== null) {
            for (var u = 0; u < y.member4526.length; u++) {
                y.member4526[u].member4218(v, x);
            }
        }
    };
    r.prototype.member4607 = function (x) {
        var u = this.member4608(x);
        if (u === null) {
            return true;
        }
        if (u.member4158()) {
            u.member4438(x.member4609(), x.member4610());
        } else {
            x.member4599(u.member444());
            var v = this.member4592(x);
            if (!v.member4158()) {
                throw new Error('1158 ');
            }
            v.member4438(x.member4609(), x.member4610());
        }
        return true;
    };
    r.prototype.member4608 = function (x) {
        var v = null;
        v = this.member4611(this.member4555, x);
        if (v !== null) {
            return v;
        }
        v = this.member4611(this.member4556, x);
        if (v !== null) {
            return v;
        }
        v = this.member4611(this.member4557, x);
        if (v !== null) {
            return v;
        }
        v = this.member4611(this.member4558, x);
        if (v !== null) {
            return v;
        }
        for (var u = o.length - 1; u >= 0; u--) {
            v = this.member4612(this.member4559[o[u]], x);
            if (v !== null) {
                return v;
            }
        }
        return null;
    };
    r.prototype.member4611 = function (v, x) {
        if (v === null) {
            return null;
        }
        for (var u = 0; u < v.length; u++) {
            if (this.member4601(x, v[u])) {
                return v[u];
            }
        }
        return null;
    };
    r.prototype.member4612 = function (x, y) {
        if (x.member4526 !== null) {
            for (var u = 0; u < x.member4526.length; u++) {
                var v = x.member4526[u].member4219(y.member4081(), y.member4597(), y.member4598(), y.member4472());
                if (v !== undefined) {
                    return v;
                }
            }
        }
        return null;
    };
    r.prototype.member4491 = function (y) {
        var x = y[0] - this.member1643 * Class86.member730;
        var v = y[2] - this.member1642 * Class86.member730;
        for (var u = 0; u < this.member1566.length; u++) {
            k[0] = x - this.member1566[u].member1593[0];
            k[1] = 0;
            k[2] = v - this.member1566[u].member1593[2];
            Class140.member318(Class140.member1355(this.member1566[u].member763, c), k);
            if (Math.abs(k[0]) > this.member1566[u].width / 2) {
                continue;
            }
            if (Math.abs(k[2]) > this.member1566[u].length / 2) {
                continue;
            }
            return this.member1566[u];
        }
        return undefined;
    };
    r.prototype.member4613 = function () {
        var y = this.member4085().member4114();
        for (var x = 0; x < o.length; x++) {
            var B = this.member4559[o[x]];
            if (B.member4526 === null) {
                continue;
            }
            for (var u = 0; u < B.member2563.length; u++) {
                var v = B.member2563[u];
                var C = v.member4519;
                var A = this.member1643 * Class86.member729 + C.x;
                var z = this.member1642 * Class86.member729 + C.member756;
                if (C.member4148.member4161(C.member2519, !C.member2521)) {
                    y.member4162(C.level, A, z, C.member4148.member4164(C.member2520), C.member4148.member4165(C.member2520), C.member4148.member4496(C.member2519) === 0 ? v.member4572 : C.member4148.member4496(C.member2519));
                }
            }
        }
    };
    return function (F, v, D, E, C, z, y, x, u, B, A) {
        return new r(F, v, D, E, C, z, y, x, u, B, A);
    };
}();
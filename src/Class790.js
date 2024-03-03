import { Class170 } from 'Class170.js';
import { Class396 } from 'Class396.js';
import { Class690 } from 'Class690.js';
import { Class198 } from 'Class198.js';
import { Class41 } from 'Class41.js';
import { Class166 } from 'Class166.js';
import { Class86 } from 'Class86.js';
import { Class465 } from 'Class465.js';
import { Class738 } from 'Class738.js';
import { Class379 } from 'Class379.js';
export var Class790 = function () {
    var a = 6;
    var b = 'null';
    var c = function (e, d, g) {
        this.member2896;
        this.member625;
        this.member8602 = null;
        if (e !== undefined && d !== undefined && g !== undefined) {
            this.member625 = e;
            this.member2896 = d;
            this.member8602 = g;
        } else {
            throw new Error('1812 ');
        }
        this.name = b;
        this.member8376 = false;
        this.member10481 = false;
        this.member8603 = null;
        this.member8605 = null;
        this.params = null;
        this.member10482 = null;
        this.member9904 = null;
        this.resize = null;
        this.offset = null;
        this.member10483 = null;
        this.member2614 = false;
        this.member2615 = null;
        this.member2616 = null;
        this.member8617 = null;
        this.member8618 = null;
        this.member8619 = null;
        this.member8620 = null;
        this.member8621 = null;
        this.member8622, this.member8623, this.member8624;
        this.member8625 = 0;
        this.member8628 = false;
        this.member2530 = Class170.member1852;
        this.member2531 = -1;
        this.member8626 = 64;
        this.member8627 = 0;
        this.member10484 = false;
        this.member10485 = true;
        this.member8611 = true;
        this.member10486 = -1;
        this.member10487 = Class396.member778;
        this.member8631 = null;
        this.member10488 = null;
        this.member10489 = null;
        this.member4492 = true;
        this.member4479 = false;
        this.member2243 = 1;
        this.member2244 = 1;
        this.member10490 = 2;
        this.member10491 = true;
        this.member2524 = -1;
        this.member10492 = 64;
        this.member10493;
        this.member10494 = false;
        this.member10495 = -1;
        this.member10496 = 0;
        this.member10497 = false;
        this.member10498 = Class690.member9897;
        this.member8641 = -1;
        this.member10499 = -1;
        this.member10500 = false;
        this.member10501 = 0;
        this.member10502 = false;
        this.member10503 = null;
        this.member8643 = -1, this.member8644 = -1;
        this.member2540 = -1;
        this.member8649 = 0;
        this.member8650 = 0;
        this.member8651 = 255;
        this.member10504 = false;
        this.member8653 = 256;
        this.member8654 = 256;
        this.member2541 = 0;
        this.member2545 = false;
        this.member2546 = 3000;
        this.member2547 = 0;
        this.member2548 = 1;
        this.member2550 = 0;
        this.member2551 = 0;
        this.member2549 = undefined;
        this.member2552 = 0;
        this.member2553 = false;
        this.member2554 = 3000;
        this.member2555 = 0;
        this.member2556 = 1;
    };
    c.prototype.member682 = function () {
        return this.member625;
    };
    c.prototype.member8656 = function () {
        if (!this.member2896.member8682() && this.member8376) {
            return null;
        }
        return this.member8602;
    };
    c.prototype.getName = function () {
        return this.name;
    };
    c.prototype.member4495 = function () {
        return this.member10481;
    };
    c.prototype.member8657 = function (d) {
        if (this.member8603 === null) {
            return -1;
        } else {
            return this.member8603[d];
        }
    };
    c.prototype.member8660 = function () {
        return this.member8605;
    };
    c.prototype.member10168 = function () {
        return this.member10482;
    };
    c.prototype.member4486 = function () {
        return this.member9904;
    };
    c.prototype.member8600 = function () {
        return this.resize;
    };
    c.prototype.member2968 = function () {
        return this.offset;
    };
    c.prototype.member10169 = function () {
        return this.member2614;
    };
    c.prototype.member8599 = function () {
        return this.member2615;
    };
    c.prototype.member7607 = function () {
        return this.member2616;
    };
    c.prototype.member7661 = function () {
        return this.member8619;
    };
    c.prototype.member7608 = function () {
        return this.member8620;
    };
    c.prototype.member4333 = function () {
        return this.member2530;
    };
    c.prototype.member4334 = function () {
        return this.member2531;
    };
    c.prototype.member8601 = function () {
        return this.member8626;
    };
    c.prototype.member4581 = function () {
        return this.member10486;
    };
    c.prototype.member4582 = function () {
        return this.member10487;
    };
    c.prototype.member4494 = function (d) {
        if (!this.member8611) {
            return false;
        }
        if (d === Class198.member2352 && !this.member10485) {
            return false;
        }
        return true;
    };
    c.prototype.member4470 = function () {
        return this.member8631;
    };
    c.prototype.member4524 = function () {
        return this.member10488;
    };
    c.prototype.member10505 = function () {
        return this.member4479;
    };
    c.prototype.member4164 = function (d) {
        if (d === 0 || d === 2) {
            return this.member2243;
        } else {
            return this.member2244;
        }
    };
    c.prototype.member4165 = function (d) {
        if (d === 0 || d === 2) {
            return this.member2244;
        } else {
            return this.member2243;
        }
    };
    c.prototype.member2985 = function () {
        return this.member2524 === 1;
    };
    c.prototype.member4619 = function () {
        return this.member10492;
    };
    c.prototype.member4496 = function (d) {
        return d === Class198.member2352 ? this.member10496 : 0;
    };
    c.prototype.member4161 = function (d, e) {
        if (e) {
            return false;
        }
        return Class198.member2359(d) && this.member10495 === 1 || d === Class198.member2352 && this.member10496 !== 0;
    };
    c.prototype.member4523 = function () {
        return this.member10497;
    };
    c.prototype.member10506 = function () {
        return this.member10498;
    };
    c.prototype.member8672 = function () {
        return this.member8641;
    };
    c.prototype.member9114 = function () {
        return this.member10499;
    };
    c.prototype.member9115 = function () {
        return this.member10500;
    };
    c.prototype.member9116 = function () {
        return this.member10501;
    };
    c.prototype.member9117 = function () {
        return this.member10502;
    };
    c.prototype.member4497 = function () {
        return this.member2540;
    };
    c.prototype.member4500 = function () {
        return this.member8649;
    };
    c.prototype.member4501 = function () {
        return this.member8650;
    };
    c.prototype.member4499 = function () {
        return this.member8651;
    };
    c.prototype.member8677 = function () {
        return true;
    };
    c.prototype.member10507 = function () {
        return this.member10504;
    };
    c.prototype.member8678 = function () {
        return this.member8653;
    };
    c.prototype.member8679 = function () {
        return this.member8654;
    };
    c.prototype.member4498 = function () {
        return this.member2541;
    };
    c.prototype.member4502 = function () {
        return this.member2545;
    };
    c.prototype.member4503 = function () {
        return this.member2546;
    };
    c.prototype.member4504 = function () {
        return this.member2547;
    };
    c.prototype.member4505 = function () {
        return this.member2548;
    };
    c.prototype.member4512 = function () {
        return this.member2550;
    };
    c.prototype.member4513 = function () {
        return this.member2551;
    };
    c.prototype.member4506 = function () {
        return this.member2549;
    };
    c.prototype.member4507 = function () {
        return this.member2552;
    };
    c.prototype.member4508 = function () {
        return this.member2553;
    };
    c.prototype.member4509 = function () {
        return this.member2554;
    };
    c.prototype.member4510 = function () {
        return this.member2555;
    };
    c.prototype.member4511 = function () {
        return this.member2556;
    };
    c.prototype.decode = function (g) {
        var e = -1;
        while (true) {
            var d = g.member609();
            if (d === undefined) {
                throw new Error('1813 ' + e);
                break;
            }
            if (d === 0) {
                break;
            }
            this.member2932(g, d, e);
            e = d;
        }
    };
    c.prototype.member2932 = function (N, i, I) {
        if (i === 1) {
            var h = N.member609();
            this.member10482 = new Int32Array(h);
            this.member9904 = new Array(h);
            for (var t = 0; t < h; t++) {
                this.member10482[t] = N.member1070();
                var x = N.member609();
                this.member9904[t] = new Int32Array(x);
                for (var G = 0; G < x; G++) {
                    this.member9904[t][G] = N.member1086();
                }
            }
        } else if (i === 2) {
            this.name = N.member1089();
        } else if (i === 14) {
            this.member2243 = N.member609();
        } else if (i === 15) {
            this.member2244 = N.member609();
        } else if (i === 17) {
            this.member10490 = 0;
            this.member10491 = false;
        } else if (i === 18) {
            this.member10491 = false;
        } else if (i === 19) {
            this.member2524 = N.member609();
        } else if (i === 21) {
            this.member2530 = Class170.member1853;
        } else if (i === 22) {
        } else if (i === 23) {
        } else if (i === 24) {
            var D = N.member1086();
            if (D !== -1) {
                this.member10488 = [D];
            }
        } else if (i === 27) {
            this.member10490 = 1;
        } else if (i === 28) {
            this.member10492 = N.member609() << 2;
        } else if (i === 29) {
            this.member8626 = N.member1070() + 64;
        } else if (i >= 30 && i < 35) {
            this.member8602[i - 30] = N.member1089();
        } else if (i === 39) {
            this.member8627 = N.member1070() * 5;
        } else if (i === 40) {
            var y = N.member609();
            this.member2615 = new Uint32Array(y);
            this.member2616 = new Uint32Array(y);
            for (var r = 0; r < y; r++) {
                this.member2615[r] = N.member608();
                this.member2616[r] = N.member608();
            }
        } else if (i === 41) {
            var O = N.member609();
            this.member8619 = new Int32Array(O);
            this.member8620 = new Int32Array(O);
            for (var q = 0; q < O; q++) {
                this.member8619[q] = N.member1071();
                this.member8620[q] = N.member1071();
            }
        } else if (i === 42) {
            var d = N.member609();
            this.member8617 = new Int32Array(d);
            for (var m = 0; m < d; m++) {
                this.member8617[m] = N.member1070();
            }
        } else if (i === 44) {
            var M = N.member608();
            var g = 0;
            for (var C = M; C > 0; C = C >> 1) {
                g++;
            }
            this.member8618 = new Int32Array(g);
            var s = 0;
            for (var C = 0; C < g; C++) {
                if ((M & 1 << C) > 0) {
                    this.member8618[C] = s++;
                } else {
                    this.member8618[C] = -1;
                }
            }
        } else if (i === 45) {
            var K = N.member608();
            var L = 0;
            for (var C = K; C > 0; C = C >> 1) {
                L++;
            }
            this.member8621 = new Int32Array(L);
            var s = 0;
            for (var C = 0; C < L; C++) {
                if ((K & 1 << C) > 0) {
                    this.member8621[C] = s++;
                } else {
                    this.member8621[C] = -1;
                }
            }
        } else if (i === 62) {
            this.member2614 = true;
        } else if (i === 64) {
        } else if (i === 65 || i === 66 || i === 67) {
            if (this.resize === null) {
                this.resize = new Int32Array(3);
                this.resize[0] = this.resize[1] = this.resize[2] = 128;
            }
            this.resize[i - 65] = N.member608();
        } else if (i === 69) {
            this.member10493 = N.member609();
        } else if (i === 70 || i === 71 || i === 72) {
            if (this.offset === null) {
                this.offset = new Int32Array(3);
            }
            if (i === 71) {
                this.offset[i - 70] = -(N.member1071() << 2);
            } else {
                this.offset[i - 70] = N.member1071() << 2;
            }
        } else if (i === 73) {
        } else if (i === 74) {
            this.member10494 = true;
        } else if (i === 75) {
            this.member10495 = N.member609();
        } else if (i === 77 || i === 92) {
            this.member8644 = N.member608();
            if (this.member8644 == 65535) {
                this.member8644 = -1;
            }
            this.member8643 = N.member608();
            if (this.member8643 === 65535) {
                this.member8643 = -1;
            }
            var B = -1;
            if (i === 92) {
                B = N.member1086();
            }
            var k = N.member609();
            this.member10503 = new Int32Array(k + 2);
            for (var j = 0; j <= k; j++) {
                this.member10503[j] = N.member1086();
            }
            this.member10503[k + 1] = B;
        } else if (i === 78) {
            this.member2540 = N.member608();
            this.member8649 = N.member609();
        } else if (i === 79) {
            this.member2550 = N.member608() * 10;
            this.member2551 = N.member608() * 10;
            this.member8649 = N.member609();
            var A = N.member609();
            this.member2549 = new Int32Array(A);
            for (var z = 0; z < A; z++) {
                this.member2549[z] = N.member608();
            }
        } else if (i === 81) {
            this.member2530 = Class170.member1854;
            this.member2531 = N.member609() * 256;
        } else if (i === 82) {
            this.member10484 = true;
        } else if (i === 88) {
            this.member10485 = false;
        } else if (i === 89) {
            this.member4492 = false;
        } else if (i === 91) {
            this.member8376 = true;
        } else if (i === 93) {
            this.member2530 = Class170.member1855;
            this.member2531 = N.member608();
        } else if (i === 94) {
            this.member2530 = Class170.member1856;
        } else if (i === 95) {
            this.member2530 = Class170.member1857;
            this.member2531 = N.member1071();
        } else if (i === 97) {
            this.member10500 = true;
        } else if (i === 98) {
        } else if (i === 101) {
            this.member10501 = N.member609();
        } else if (i === 102) {
            this.member10499 = N.member608();
        } else if (i === 103) {
        } else if (i === 104) {
            this.member8651 = N.member609();
        } else if (i === 105) {
            this.member10502 = true;
        } else if (i === 106) {
            var H = N.member609();
            var F = 0;
            this.member10488 = new Int32Array(H);
            this.member10489 = new Int32Array(H);
            for (D = 0; D < H; D++) {
                this.member10488[D] = N.member1086();
                F += this.member10489[D] = N.member609();
            }
            for (var D = 0; D < H; D++) {
                this.member10489[D] = this.member10489[D] * 65535 / F;
            }
        } else if (i === 107) {
            this.member8641 = N.member608();
        } else if (i >= 150 && i < 155) {
            this.member8602[i - 150] = N.member1089();
        } else if (i === 160) {
            var J = N.member609();
            this.member8605 = new Int32Array(J);
            for (var E = 0; E < J; E++) {
                this.member8605[E] = N.member608();
            }
        } else if (i === 162) {
            this.member2530 = Class170.member1855;
            this.member2531 = N.member1074();
        } else if (i === 163) {
            this.member8622 = N.member1070();
            this.member8623 = N.member1070();
            this.member8624 = N.member1070();
            this.member8625 = N.member1070();
        } else if (i === 164 || i === 165 || i === 166) {
            if (this.member10483 === null) {
                this.member10483 = Class41.create();
            }
            this.member10483[i - 164] = N.member1071();
        } else if (i === 167) {
            this.member10496 = N.member608();
        } else if (i === 168) {
        } else if (i === 169) {
        } else if (i === 170) {
            N.member1080();
        } else if (i === 171) {
            N.member1080();
        } else if (i === 173) {
            this.member8653 = N.member608();
            this.member8654 = N.member608();
        } else if (i === 177) {
        } else if (i === 178) {
            this.member8650 = N.member609();
        } else if (i === 179) {
            this.member10504 = true;
        } else if (i === 186) {
            this.member10498 = N.member609();
        } else if (i === 188) {
            this.member10497 = true;
        } else if (i === 189) {
            this.member8628 = true;
        } else if (i >= 190 && i < 196) {
            if (this.member8603 === null) {
                this.member8603 = new Int32Array(a);
                for (var P = 0; P < a; P++) {
                    this.member8603[P] = -1;
                }
            }
            this.member8603[i - 190] = N.member608();
        } else if (i === 196) {
            this.member10486 = N.member609();
        } else if (i === 197) {
            this.member10487 = N.member609();
        } else if (i === 198) {
            this.member10481 = true;
        } else if (i === 199) {
            this.member8611 = false;
        } else if (i === 200) {
            this.member4479 = true;
        } else if (i === 201) {
            this.member8631 = Class166({ member1795: N });
        } else if (i === 249) {
            var e = N.member609();
            if (this.params === null) {
                this.params = {};
            }
            for (var o = 0; o < e; o++) {
                var v = N.member609() === 1;
                var u = N.g3();
                if (v) {
                    this.params[u] = N.member1089();
                } else {
                    this.params[u] = N.member1074();
                }
            }
        } else if (i === 250) {
            this.member2541 = N.member609();
        } else if (i === 251) {
            this.member2545 = N.member609();
        } else if (i === 252) {
            this.member2546 = N.member608();
            this.member2547 = N.member608();
            this.member2548 = N.member608() / 1000;
        } else if (i === 253) {
            this.member2552 = N.member609();
        } else if (i === 254) {
            this.member2553 = N.member609();
        } else if (i === 255) {
            this.member2554 = N.member608();
            this.member2555 = N.member608();
            this.member2556 = N.member608() / 1000;
        } else if (false) {
        }
    };
    c.prototype.member2934 = function () {
        if (this.member2524 === -1) {
            this.member2524 = 0;
            if (this.member10482 !== null && this.member10482.length === 1 && this.member10482[0] === Class198.member2350) {
                this.member2524 = 1;
            }
            for (var d = 0; d < 5; d++) {
                if (this.member8602[d] !== null) {
                    this.member2524 = 1;
                    break;
                }
            }
        }
        if (this.member2524 > 0 || this.member10498 === Class690.member9896) {
            this.member10497 = true;
        }
        if (this.member10495 === -1) {
            this.member10495 = this.member10490 !== 0 ? 1 : 0;
        }
    };
    c.prototype.member4488 = function (s, u, g, e, r, o, m, d) {
        var q = r;
        var i = r + s.member4164(m);
        var j = o;
        var n = o + s.member4165(m);
        var v = g.member4763(e, q, j, d);
        if (v === -1 || u !== v) {
            return false;
        }
        var k = g.member4763(e, i, j, d);
        if (k === -1 || u !== k) {
            return false;
        }
        var h = g.member4763(e, i, n, d);
        if (h === -1 || u !== h) {
            return false;
        }
        var t = g.member4763(e, q, n, d);
        if (t === -1 || u !== t) {
            return false;
        }
        return true;
    };
    c.prototype.member4483 = function (s, g, e, q, o, m, d) {
        var r = q + s.member4164(m) / 2;
        var i = Math.ceil(r);
        r = Math.floor(r);
        var j = o + s.member4165(m) / 2;
        var n = Math.ceil(j);
        j = Math.floor(j);
        var u = g.member4763(e, r, j, d);
        if (u === -1) {
            return -1;
        }
        var k = g.member4763(e, i, j, d);
        if (k === -1) {
            return -1;
        }
        var h = g.member4763(e, i, n, d);
        if (h === -1) {
            return -1;
        }
        var t = g.member4763(e, r, n, d);
        if (t === -1) {
            return -1;
        }
        return (u + k + h + t) / 4;
    };
    c.prototype.member4489 = function (r, g, e, n, m, k, d) {
        var o = {};
        var j = r.member4164(k);
        var i = r.member4165(k);
        if (this.member2530 === Class170.member1855 || this.member2530 === Class170.member1853 || this.member2530 === Class170.member1854 || this.member2530 === Class170.member1857) {
            o.member2534 = new Array(j + 1);
            for (var q = 0; q < j + 1; q++) {
                o.member2534[q] = new Int32Array(i + 1);
                for (var h = 0; h < i + 1; h++) {
                    o.member2534[q][h] = g.member4763(e, n + q, m + h, d);
                    if (o.member2534[q][h] === -1) {
                        return undefined;
                    }
                }
            }
        }
        if (e < Class86.member414 - 1 && (this.member2530 === Class170.member1856 || this.member2530 === Class170.member1857)) {
            o.member2371 = new Array(j + 1);
            for (var q = 0; q < j + 1; q++) {
                o.member2371[q] = new Int32Array(i + 1);
                for (var h = 0; h < i + 1; h++) {
                    if (d) {
                        o.member2371[q][h] = g.member4763(e + 1, n + q, m + h, d);
                    } else {
                        o.member2371[q][h] = g.member4763(e, n + q, m + h, true);
                    }
                    if (o.member2371[q][h] === -1) {
                        return undefined;
                    }
                }
            }
        }
        return o;
    };
    c.prototype.member4484 = function (o, d, m, k, i) {
        for (var j = d - 1; j >= 0; j--) {
            var h = this.member4164(i);
            var g = this.member4165(i);
            for (var n = m - 1; n < m + h + 1; n++) {
                for (var e = k - 1; e < k + g + 1; e++) {
                    if (o.member8301(j, n, e)) {
                        if (o.member4112(n, e)) {
                            return j + 1;
                        } else {
                            return j;
                        }
                    }
                }
            }
        }
        return undefined;
    };
    c.prototype.member4481 = function () {
        return this.member10503 !== null;
    };
    c.prototype.member4482 = function () {
        if (this.member10503 === null || this.member2896.member8687() === null) {
            return this;
        }
        var h = -1;
        if (this.member8644 !== -1) {
            var g = this.member2896.member7539().member7394(this.member8644);
            if (g !== member47) {
                h = this.member2896.member8687().member2950(g);
            }
        } else if (this.member8643 !== -1) {
            var d = this.member2896.member7539().member7393(Class465.member4134, this.member8643);
            if (d !== member47) {
                h = this.member2896.member8687().member2943(d);
            }
        }
        if (h < 0 || h >= this.member10503.length - 1) {
            var e = this.member10503[this.member10503.length - 1];
            if (e !== -1) {
                return this.member2896.list(e);
            } else {
                return undefined;
            }
        }
        if (this.member10503[h] === -1) {
            return undefined;
        }
        return this.member2896.list(this.member10503[h]);
    };
    if (true) {
        c.prototype.member4487 = function (j, o, k, h, r, n, d) {
            if (this.member10482 === null) {
                return undefined;
            }
            if (k === Class198.member2351) {
                k = Class198.member2350;
            }
            if (Class198.member2354(k)) {
                k = Class198.member2335;
            }
            var g = this.member625 + (r ? 1 : 0) * Math.pow(2, 20) + k * Math.pow(2, 21) + h * Math.pow(2, 26);
            if (n !== undefined) {
                g += n.member6725() * Math.pow(2, 29);
            }
            var e = this.member2896.member10508().find(g);
            if (e === null || d && e.member2619 === undefined) {
                var m = g + (d ? 1 : 0) * Math.pow(2, 28);
                var i = this.member2896.member10509().find(m);
                if (i === null) {
                    if (j.member4588(o) && this.member2896.member10509().member906() > 0) {
                        var i = Class738(o, this, k, h, r, n, d);
                        j.member4589(i);
                        if (!i.member1999()) {
                            this.member2896.member10509().put(i, 1, m);
                        }
                        return member47;
                    } else {
                        return member47;
                    }
                } else {
                    if (!i.member1999()) {
                        return member47;
                    }
                    if (!i.member4242()) {
                        this.member2896.member10509().remove(m);
                        var q = i.member2893();
                        if (q === Class379.member4232) {
                            if (false) {
                            }
                            return undefined;
                        } else {
                            return member47;
                        }
                    }
                    e = i.member4241();
                    this.member2896.member10508().put(e, 1, g);
                    this.member2896.member10509().remove(m);
                    i.member2885();
                    return e;
                }
            } else {
                return e;
            }
        };
        c.prototype.member10510 = function (e) {
            if (e === Class198.member2351) {
                e = Class198.member2350;
            }
            if (Class198.member2354(e)) {
                e = Class198.member2335;
            }
            var j = -1;
            for (var d = 0; d < this.member10482.length; d++) {
                if (this.member10482[d] === e) {
                    j = d;
                    break;
                }
            }
            if (j === -1) {
                return -1;
            }
            var g = this.member9904[j];
            var i = 0;
            for (var h = 0; h < g.length; h++) {
                i += g[h] * Math.pow(2, h * 20);
            }
            return i;
        };
    } else {
    }
    c.prototype.member2142 = function () {
        if (this.member10488 !== null) {
            if (this.member10488.length > 1) {
                var e = Math.floor(Math.random() * 65535);
                for (var d = 0; d < this.member10488.length; d++) {
                    if (e <= this.member10489[d]) {
                        return this.member10488[d];
                    }
                    e -= this.member10489[d];
                }
            } else {
                return this.member10488[0];
            }
        }
        return -1;
    };
    c.prototype.member4425 = function () {
        return this.member10488 !== null && this.member10488.length === 1 ? this.member10488[0] : -1;
    };
    c.prototype.getParam = function (g, e) {
        if (this.params === null) {
            return e;
        }
        var d = this.params[g];
        if (d === undefined) {
            return e;
        } else {
            return d;
        }
    };
    c.prototype.member2941 = function (g, e) {
        if (this.params === null) {
            return e;
        }
        var d = this.params[g];
        if (d === undefined) {
            return e;
        } else {
            return d;
        }
    };
    return function (e, d, g) {
        return new c(e, d, g);
    };
}();
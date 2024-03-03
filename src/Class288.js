import { Class185 } from 'Class185.js';
import { Class29 } from 'Class29.js';
import { Class182 } from 'Class182.js';
import { Class99 } from 'Class99.js';
import { Class132 } from 'Class132.js';
import { Class72 } from 'Class72.js';
import { Class155 } from 'Class155.js';
import { Class83 } from 'Class83.js';
import { Class82 } from 'Class82.js';
import { Class5 } from 'Class5.js';
import { Class68 } from 'Class68.js';
import { Class63 } from 'Class63.js';
import { Class150 } from 'Class150.js';
import { Class147 } from 'Class147.js';
import { Class154 } from 'Class154.js';
import { Class7 } from 'Class7.js';
import { Class287 } from 'Class287.js';
export var Class288 = function () {
    var m = new Array(100);
    var v = 0;
    var e = 8192;
    var g = 256;
    var i = new Uint16Array(e * (g + 1));
    var h = 0;
    var o = Number.MAX_VALUE, n = -Number.MAX_VALUE;
    var k = Math.max(Class185.member2045 / 16, 256);
    var a = 2 * Math.PI;
    var j = 0;
    j += 3 * 4;
    j += 4 * 1;
    j += 4 * 4;
    j += 2 * 1;
    j += 2 * 1;
    var r = -1;
    var t = null;
    var u = null;
    var x = null;
    var y = -1;
    var s = Class29();
    var q = Math.sqrt(2);
    var d = function (z) {
        this.member433 = z.member433;
        this.member3430 = false;
        this.member1569 = undefined;
        this.member3431 = Class182();
        this.member3432 = 0;
        Class185.member2057(this);
        this.member3433();
    };
    d.prototype.member3433 = function () {
        if (t !== null) {
            return;
        }
        r = this.member433.gl.createBuffer();
        t = new ArrayBuffer(k * 4 * j);
        u = new Float32Array(t);
        x = new Uint8Array(t);
        y = this.member433.gl.createBuffer();
        var B = new ArrayBuffer(k * 6 * 2);
        var A = new Uint16Array(B);
        for (var z = 0; z < k; z++) {
            A[z * 6 + 0] = z * 4 + 0;
            A[z * 6 + 1] = z * 4 + 1;
            A[z * 6 + 2] = z * 4 + 2;
            A[z * 6 + 3] = z * 4 + 0;
            A[z * 6 + 4] = z * 4 + 2;
            A[z * 6 + 5] = z * 4 + 3;
            this.member433.gl.bindBuffer(this.member433.gl.ELEMENT_ARRAY_BUFFER, y);
            this.member433.gl.bufferData(this.member433.gl.ELEMENT_ARRAY_BUFFER, B, this.member433.gl.STATIC_DRAW);
        }
        B = undefined;
        A = undefined;
    };
    d.prototype.member2039 = function () {
        return this.member3431.getSize();
    };
    d.prototype.member2062 = function () {
        return this.member3432;
    };
    d.prototype.member512 = function () {
        Class185.member2058(this);
        if (this.member1569 !== undefined) {
            this.member1569.member512();
        }
        for (var z = this.member3431.member776(); z !== undefined; z = this.member3431.member777()) {
            z.member512();
        }
    };
    d.prototype.member487 = function () {
        this.member3432 = 0;
        for (var A = this.member3431.member776(); A !== undefined; A = this.member3431.member777()) {
            if (A.member3401) {
                for (var z = 0; z < A.member2030().member688(); z++) {
                    A.member487(true);
                }
                A.member3401 = false;
            }
        }
        for (var A = this.member3431.member776(); A !== undefined; A = this.member3431.member777()) {
            var B = A.member487(false);
            if (B) {
                this.member3431.remove();
                A.member512();
            } else {
                this.member3432 += A.member3415().getSize();
            }
        }
    };
    var b = function () {
        member46(this, Class99);
        this.member3434 = undefined;
        this.member433 = undefined;
        this.member1608 = undefined;
        this.member3435 = undefined;
        this.member441 = undefined;
        this.member3436 = undefined;
    };
    member45(Class99, b);
    b.prototype.member867 = function () {
        this.member1608.member990(this.member3435);
        this.member3434.member1618(this.member441, this.member3436);
        this.member433.member587();
    };
    var c = function () {
        return new b();
    };
    d.prototype.member952 = function (D, B) {
        if (!this.member3437(B)) {
            return;
        }
        var z = Class132.member1266();
        var A = z.member522(Class72.member117);
        var C = undefined;
        if (A) {
            C = this.member3438();
        } else {
            C = this.member3439();
        }
        if (C === undefined) {
            return;
        }
        if (D.member1626(D.member1627)) {
            this.member1628(D, D.member1627, B, C);
        }
        if (D.member1627 !== Class155.member117 && D.member1626(Class155.member117)) {
            C = this.member3438();
            if (C !== undefined) {
                this.member1628(D, Class155.member117, B, C);
            }
        }
    };
    d.prototype.member1628 = function (F, D, E, z) {
        var B = Class83.member619(Class82.member2866, c);
        var A = Class132.member1266();
        var G = A.member941(Class72.member498);
        var C = G.member987();
        B.member862 = z.member444();
        B.member863 = F.member863;
        B.member865 = F.member1939();
        B.member3434 = this;
        B.member433 = this.member433;
        B.member1608 = G;
        B.member3435 = C;
        B.member441 = E;
        B.member3436 = z;
        F.member1629(D, B);
    };
    d.prototype.member3437 = function (z) {
        if (this.member3430) {
            this.member3440();
            this.member3430 = false;
        }
        return true;
    };
    d.prototype.member3441 = function (z) {
        o = Number.MAX_VALUE;
        n = -Number.MAX_VALUE;
        this.member3442(z);
        if (o === Number.MAX_VALUE) {
            return false;
        }
        this.member3443();
        return true;
    };
    d.prototype.member3438 = function () {
        var C = this.member433.gl;
        var z = Class132.member1266();
        s.member301();
        s.enable(Class5.member117);
        if (this.member1569 !== undefined) {
            s.enable(Class5.member93);
            if (this.member1569.member1531()) {
                s.enable(Class5.member94);
            }
        }
        var B = Class68.member421(Class63.member392.id, s);
        var A = B.member445();
        if (s.member291(Class5.member94) && A.member308(Class5.member94)) {
            return undefined;
        }
        return B;
    };
    d.prototype.member3439 = function () {
        var C = this.member433.gl;
        var z = Class132.member1266();
        s.member301();
        if (this.member1569 !== undefined) {
            s.enable(Class5.member93);
            if (this.member1569.member1531()) {
                s.enable(Class5.member94);
            }
        }
        if (z.member1025(Class72.member500)) {
            s.enable(Class5.member100);
        }
        var B = Class68.member421(Class63.member392.id, s);
        var A = B.member445();
        if (s.member291(Class5.member94) && A.member308(Class5.member94)) {
            return undefined;
        }
        return B;
    };
    d.prototype.member486 = function (B) {
        if (!this.member3437(B)) {
            return;
        }
        var z = Class132.member1266();
        var A = z.member522(Class72.member117);
        var C = undefined;
        if (A) {
            C = this.member3438();
        } else {
            C = this.member3439();
        }
        if (C === undefined) {
            return;
        }
        this.member1618(B, C);
    };
    d.prototype.member3444 = function (z) {
        this.member433.member590(true);
        this.member433.member942();
    };
    d.prototype.member3445 = function (z) {
        this.member433.member944();
    };
    d.prototype.member1618 = function (R, L) {
        if (!this.member3441(R.member1624)) {
            return;
        }
        this.member3444();
        Class68.member483(L, true);
        var Q = L.member445();
        if (Q.member291(Class5.member93)) {
            Class150.member1515(this.member1569, L);
        }
        if (Q.member291(Class5.member100)) {
            var O = Class132.member1266();
            O.member1026(Class72.member500, L);
        }
        R.member1631(L);
        var D = 0;
        var G = 0;
        for (var I = h - 1; I >= 0; I--) {
            var J = i[I * (g + 1)];
            for (var M = 0; M < J; M++) {
                var N = Class185.member2059(i[I * (g + 1) + 1 + M]);
                var K = N.position;
                var E = N.size;
                var z = N.member546;
                var S = N.member2015;
                var P = N.member2019;
                var C = E * q;
                for (var F = 0; F < 4; F++) {
                    var A = (D * 4 + F) * j;
                    var H = A / 4;
                    u[H++] = K[0];
                    u[H++] = K[1];
                    u[H++] = K[2];
                    u[H++] = C;
                    u[H++] = C;
                    u[H++] = S.member3416();
                    u[H++] = S.member3417();
                    A += 28;
                    x[A++] = z >> 24 & 255;
                    x[A++] = z >> 16 & 255;
                    x[A++] = z >> 8 & 255;
                    x[A++] = z & 255;
                    x[A++] = S.member3418() ? 1 : 0;
                    var B = P * 256 / a;
                    if (F === 0) {
                        B = (B + 160) % 256;
                    } else if (F === 1) {
                        B = (B + 224) % 256;
                    } else if (F === 2) {
                        B = (B + 32) % 256;
                    } else if (F === 3) {
                        B = (B + 96) % 256;
                    }
                    x[A++] = B;
                    if (F === 0 || F === 3) {
                        x[A++] = 0;
                    } else {
                        x[A++] = 1;
                    }
                    if (F === 0 || F === 1) {
                        x[A++] = 0;
                    } else {
                        x[A++] = 1;
                    }
                }
                D++;
                if (D === k) {
                    this.member3446(L, D, R);
                    G += D;
                    D = 0;
                }
            }
        }
        if (D > 0) {
            this.member3446(L, D, R);
            G += D;
            D = 0;
        }
        this.member3445();
        this.member433.member3447();
        this.member433.member3448(this.member3432 - G);
    };
    d.prototype.member3440 = function () {
        v = 0;
        for (var A = this.member3431.member776(); A !== undefined; A = this.member3431.member777()) {
            var z = A.member2030().member701();
            var B = undefined;
            if (z !== -1) {
                B = Class147.member1484(z);
            }
            if (B !== undefined) {
                m[v++] = B;
            }
        }
        m.length = v;
        if (this.member1569 !== undefined) {
            this.member1569.member512();
        }
        this.member1569 = Class150.member1512(m);
        for (var A = this.member3431.member776(); A !== undefined; A = this.member3431.member777()) {
            var z = A.member2030().member701();
            var B = undefined;
            if (z !== -1) {
                B = Class147.member1484(z);
            }
            if (B !== undefined) {
                var C = this.member1569.member1516();
                if (B.member1469() && Class154.member553()) {
                    C = this.member1569.member1517();
                }
                A.member3419(C.member1330(z), C.member1331(z), C.member559());
            } else {
                A.member3419(0, 0, true);
            }
        }
    };
    d.prototype.member3442 = function (C) {
        for (var z = this.member3431.member776(); z !== undefined; z = this.member3431.member777()) {
            var B = z.member3415();
            for (var D = B.member776(); D !== undefined; D = B.member777()) {
                var A = D.member2026();
                D.member2024 = -(C[2] * A[0] + C[6] * A[1] + C[10] * A[2] + C[14]);
                if (D.member2024 !== Infinity && D.member2024 > 0) {
                    if (D.member2024 < o) {
                        o = D.member2024;
                    }
                    if (D.member2024 > n) {
                        n = D.member2024;
                    }
                }
            }
        }
    };
    d.prototype.member3443 = function () {
        var E = Math.max(1, Math.ceil((n - o) / (e - 1)));
        for (var A = 0; A < h; A++) {
            i[A * (g + 1)] = 0;
        }
        for (var C = this.member3431.member776(); C !== undefined; C = this.member3431.member777()) {
            this.member433.member3449();
            var D = C.member3415();
            for (var F = D.member776(); F !== undefined; F = D.member777()) {
                if (F.member2024 !== Infinity && F.member2024 > 0) {
                    var z = Math.floor((F.member2024 - o) / E);
                    var B = i[z * (g + 1)];
                    if (B < g) {
                        i[z * (g + 1)]++;
                        i[z * (g + 1) + 1 + B] = F.member444();
                    }
                }
            }
        }
        h = Math.ceil((n - o) / E);
    };
    d.prototype.member3446 = function (C, z, B) {
        var D = this.member433.gl;
        var A = C.member445();
        D.bindBuffer(D.ARRAY_BUFFER, r);
        D.bufferData(this.member433.gl.ARRAY_BUFFER, t, this.member433.gl.DYNAMIC_DRAW);
        D.vertexAttribPointer(C.member459(Class7.member262.id), 3, D.FLOAT, false, j, 0);
        D.vertexAttribPointer(C.member459(Class7.member265.id), 4, D.UNSIGNED_BYTE, true, j, 28);
        if (A.member291(Class5.member93)) {
            D.vertexAttribPointer(C.member459(Class7.member270.id), 4, D.FLOAT, false, j, 12);
            D.vertexAttribPointer(C.member459(Class7.member279.id), 4, D.UNSIGNED_BYTE, false, j, 32);
        }
        D.bindBuffer(D.ELEMENT_ARRAY_BUFFER, y);
        D.drawElements(this.member433.member1198, z * 6, D.UNSIGNED_SHORT, 0);
        this.member433.member1632();
        this.member433.member1633(z * 2);
        this.member433.member3450(z);
        this.member433.member3451();
    };
    d.prototype.member2129 = function (B, F, E, z, C) {
        if (!Class185.member2055()) {
            return;
        }
        var D = undefined;
        for (var A = this.member3431.member776(); A !== undefined; A = this.member3431.member777()) {
            if (A.member3414() === B) {
                D = A;
                break;
            }
        }
        if (D === undefined) {
            var D = Class287({ member3412: B });
            this.member3431.member2038(D);
            this.member3430 = true;
        }
        if (C !== undefined && C === true) {
            D.member3420();
        }
        D.member3429(F, E, z);
    };
    d.prototype.member3452 = function (z, A) {
    };
    d.prototype.member3453 = function () {
        for (var z = this.member3431.member776(); z !== undefined; z = this.member3431.member777()) {
            z.member512();
            this.member3431.remove(z);
        }
    };
    return function (z) {
        return new d(z);
    };
}();
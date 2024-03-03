import { Class260 } from 'Class260.js';
import { Class520 } from 'Class520.js';
export var Class522 = function () {
    var b = 1;
    var o = 2;
    var q = 3;
    var m = 4;
    var i = 5;
    var j = 6;
    var n = 7;
    var d = 8;
    var c = 9;
    var k = 10;
    var e = 11;
    var a = 12;
    var h = 13;
    var g = 14;
    return function (I, K) {
        var L = {};
        var H = -1;
        L.member8416 = function () {
            return H;
        };
        var G;
        L.member8434 = function (N) {
            if (N.member8416() !== H) {
                throw new Error('966 ');
            }
            for (var M = 0; M < G.length; M++) {
                G[M].apply(N);
            }
            N.member8417();
        };
        L.member8435 = function () {
            return G.length > 0;
        };
        var x = function () {
            this.member3022;
        };
        x.prototype.decode = function (M, N) {
            if (M.member609() !== 255) {
                throw new Error('967 ');
            }
            this.member3022 = Class260(M, N);
        };
        x.prototype.apply = function (M) {
            M.member8421(this.member3022);
        };
        var A = function () {
            this.member8436;
        };
        A.prototype.decode = function (M, N) {
            this.member8436 = M.member608();
        };
        A.prototype.apply = function (M) {
            M.member8422(this.member8436);
        };
        var D = function () {
            this.member8437;
        };
        D.prototype.decode = function (M, N) {
            if (M.member609() !== 255) {
                throw new Error('968 ');
            }
            this.member8437 = Class520(M);
        };
        D.prototype.apply = function (M) {
            M.member8423(this.member8437);
        };
        var r = function () {
            this.member8436;
        };
        r.prototype.decode = function (M, N) {
            this.member8436 = M.member608();
        };
        r.prototype.apply = function (M) {
            M.member8424(this.member8436);
        };
        var t = function () {
            this.member8436;
            this.member8438;
        };
        t.prototype.decode = function (M, N) {
            this.member8436 = M.member608();
            this.member8438 = M.member609();
        };
        t.prototype.apply = function (M) {
            M.member8425(this.member8436, this.member8438);
        };
        var B = function () {
            this.member8436;
            this.member8439;
        };
        B.prototype.decode = function (M, N) {
            this.member8436 = M.member608();
            this.member8439 = M.member608();
        };
        B.prototype.apply = function (M) {
            M.member8426(this.member8436, this.member8439);
        };
        var z = function () {
            this.member8436;
        };
        z.prototype.decode = function (M, N) {
            this.member8436 = M.member608();
        };
        z.prototype.apply = function (M) {
            M.member8427(this.member8436);
        };
        var C = function () {
            this.member8436;
            this.member3590;
        };
        C.prototype.decode = function (M, N) {
            this.member8436 = M.member608();
            this.member3590 = M.member609() === 1;
        };
        C.prototype.apply = function (M) {
            M.member8428(this.member8436, this.member3590);
        };
        var u = function () {
            this.member8436;
            this.member7996;
        };
        u.prototype.decode = function (M, N) {
            this.member8436 = M.member608();
            this.member7996 = M.member609();
        };
        u.prototype.apply = function (M) {
            M.member8429(this.member8436, this.member7996);
        };
        var v = function () {
        };
        v.prototype.decode = function (M, N) {
        };
        v.prototype.apply = function (M) {
            M.member8430();
        };
        var y = function () {
        };
        y.prototype.decode = function (M, N) {
        };
        y.prototype.apply = function (M) {
            M.member8431();
        };
        var s = function () {
            this.member8436;
            this.member3022;
        };
        s.prototype.decode = function (M, N) {
            this.member8436 = M.member608();
            this.member3022 = Class260(M, N);
        };
        s.prototype.apply = function (M) {
            M.member8432(this.member8436, this.member3022);
        };
        var E = function () {
            this.member8440;
        };
        E.prototype.decode = function (N, O) {
            var M = N.member1047();
            if (N.member608() !== 65535) {
                N.member607(M);
                this.member8440 = O.member8433().member3026(N);
            } else {
                this.member8440 = undefined;
            }
        };
        E.prototype.apply = function (M) {
            if (this.member8440 === undefined) {
                return;
            }
            M.member8412().member2945(K.member8433().list(this.member8440.id), this.member8440.value);
        };
        var F = function () {
            this.member8441;
            this.member8442;
        };
        F.prototype.decode = function (N, O) {
            var M = N.member608();
            if (M !== 65535) {
                this.member8441 = M;
                this.member8442 = N.member1073();
            } else {
                this.member8441 = -1;
                this.member8442 = 0;
            }
        };
        F.prototype.apply = function (M) {
            if (this.member8441 !== -1) {
                M.member8412().member2952(K.member8443().list(this.member8441), this.member8442);
            }
        };
        var J = function (O, P) {
            var N = O.member1077();
            H = O.member1073();
            var Q = O.member609();
            G = new Array();
            while (Q !== 0) {
                var M;
                switch (Q) {
                case b:
                    M = new x();
                    break;
                case o:
                    M = new A();
                    break;
                case q:
                    M = new D();
                    break;
                case m:
                    M = new r();
                    break;
                case i:
                    M = new t();
                    break;
                case j:
                    M = new B();
                    break;
                case n:
                    M = new z();
                    break;
                case d:
                    M = new C();
                    break;
                case c:
                    M = new v();
                    break;
                case k:
                    M = new y();
                    break;
                case e:
                    M = new s();
                    break;
                case a:
                    M = new E();
                    break;
                case h:
                    M = new F();
                    break;
                case g:
                    M = new u();
                    break;
                default:
                    throw new Error();
                }
                M.decode(O, P);
                G.push(M);
                Q = O.member609();
            }
        };
        if (I !== undefined && K !== undefined) {
            J(I, K);
        } else {
            throw new Error('970 ');
        }
        return L;
    };
}();
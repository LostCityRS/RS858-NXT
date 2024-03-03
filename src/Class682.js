export var Class682 = function () {
    var j = 1;
    var q = 2;
    var h = 3;
    var a = 4;
    var e = 5;
    var c = 6;
    var i = 7;
    var n = 8;
    var m = 9;
    var o = 10;
    var g = 11;
    var k = 12;
    var d = 13;
    var b = 14;
    return function (A) {
        var G = {};
        var H;
        var v;
        var z = function () {
            this.member9861;
        };
        z.prototype.decode = function (M) {
            if (M.member609() !== 255) {
                throw new Error();
            }
            this.member9861 = M.member1089();
            if (this.member9861 === '') {
                this.member9861 = undefined;
            }
        };
        z.prototype.apply = function (M) {
            M.member8547(this.member9861, 0);
        };
        var y = function () {
            this.member9861;
            this.member9862;
        };
        y.prototype.decode = function (M) {
            if (M.member609() !== 255) {
                throw new Error();
            }
            this.member9861 = M.member1089();
            if (this.member9861 === '') {
                this.member9861 = undefined;
            }
            this.member9862 = M.member608();
        };
        y.prototype.apply = function (M) {
            M.member8547(this.member9861, this.member9862);
        };
        var r = function () {
            this.member8436;
        };
        r.prototype.decode = function (M) {
            this.member8436 = M.member608();
        };
        r.prototype.apply = function (M) {
            M.member8548(this.member8436);
        };
        var I = function () {
            this.member8436;
            this.member9863;
        };
        I.prototype.decode = function (M) {
            this.member8436 = M.member608();
            this.member9863 = M.member1070();
        };
        I.prototype.apply = function (M) {
            M.member8551(this.member8436, this.member9863);
        };
        var E = function () {
            this.member8436;
            this.member9864;
            this.member9865;
            this.member9866;
        };
        E.prototype.decode = function (M) {
            this.member8436 = M.member608();
            this.member9864 = M.member1073();
            this.member9865 = M.member609();
            this.member9866 = M.member609();
        };
        E.prototype.apply = function (M) {
            M.member8552(this.member8436, this.member9864, this.member9865, this.member9866);
        };
        var B = function () {
            this.member8436;
            this.member9857;
        };
        B.prototype.decode = function (M) {
            this.member8436 = M.member608();
            this.member9857 = M.member609() === 1;
        };
        B.prototype.apply = function (M) {
            M.member8553(this.member8436, this.member9857);
        };
        var L = function () {
            this.member9867;
        };
        L.prototype.decode = function (M) {
            if (M.member609() !== 255) {
                throw new Error();
            }
            this.member9867 = M.member1089();
            if (this.member9867 === '') {
                this.member9867 = undefined;
            }
        };
        L.prototype.apply = function (M) {
            M.member8549(this.member9867);
        };
        var u = function () {
            this.member8436;
        };
        u.prototype.decode = function (M) {
            this.member8436 = M.member608();
        };
        u.prototype.apply = function (M) {
            M.member8550(this.member8436);
        };
        var t = function () {
            this.member2808;
            this.member8554;
        };
        t.prototype.decode = function (M) {
            this.member2808 = M.member1089();
            this.member8554 = M.member1073();
        };
        t.prototype.apply = function (M) {
            M.member8555(this.member2808, this.member8554);
        };
        var x = function () {
            this.member9868;
            this.member9869;
            this.member9870;
            this.member9871;
            this.member9872;
        };
        x.prototype.decode = function (M) {
            this.member9868 = M.member609() === 1;
            this.member9869 = M.member1070();
            this.member9870 = M.member1070();
            this.member9871 = M.member1070();
            this.member9872 = M.member1070();
        };
        x.prototype.apply = function (M) {
            M.member8556(this.member9868, this.member9869, this.member9870, this.member9871, this.member9872);
        };
        var s = function () {
            this.id;
            this.value;
        };
        s.prototype.decode = function (M) {
            this.id = M.member1073();
            this.value = M.member1073();
        };
        s.prototype.apply = function (M) {
            M.member8557(this.id, this.value);
        };
        var F = function () {
            this.id;
            this.value;
            this.member9865;
            this.member9866;
        };
        F.prototype.decode = function (M) {
            this.id = M.member1073();
            this.value = M.member1073();
            this.member9865 = M.member609();
            this.member9866 = M.member609();
        };
        F.prototype.apply = function (M) {
            M.member8558(this.id, this.value, this.member9865, this.member9866);
        };
        var J = function () {
            this.id;
            this.value;
        };
        J.prototype.decode = function (M) {
            this.id = M.member1073();
            this.value = M.member1077();
        };
        J.prototype.apply = function (M) {
            M.member8557(this.id, this.value);
        };
        var K = function () {
            this.id;
            this.value;
        };
        K.prototype.decode = function (M) {
            this.id = M.member1073();
            this.value = M.member1089();
        };
        K.prototype.apply = function (M) {
            M.member8557(this.id, this.value);
        };
        var D = function (N) {
            N.member1077();
            v = N.member1073();
            H = [];
            var M = N.member609();
            while (M !== 0) {
                var O;
                switch (M) {
                case h:
                    O = new L();
                    break;
                case j:
                    O = new z();
                    break;
                case d:
                    O = new y();
                    break;
                case a:
                    O = new x();
                    break;
                case c:
                    O = new u();
                    break;
                case e:
                    O = new r();
                    break;
                case q:
                    O = new I();
                    break;
                case i:
                    O = new E();
                    break;
                case b:
                    O = new B();
                    break;
                case n:
                    O = new s();
                    break;
                case m:
                    O = new J();
                    break;
                case o:
                    O = new K();
                    break;
                case g:
                    O = new F();
                    break;
                case k:
                    O = new t();
                    break;
                default:
                    throw new Error();
                }
                O.decode(N);
                H.push(O);
                M = N.member609();
            }
        };
        var C = function (N) {
            if (N.member8525() !== v) {
                if (false) {
                } else {
                    throw new Error();
                }
            }
            for (var M = 0; M < H.length; M++) {
                H[M].apply(N);
            }
            N.member8526();
        };
        G.member9873 = C;
        if (A !== undefined) {
            D(A);
        } else {
            throw new Error('1580 ');
        }
        return G;
    };
}();
export var Class558 = function (q) {
    var ab = {};
    var i = 4;
    var o = i;
    ab.member7712 = function () {
        return o;
    };
    var I = null;
    var H = null;
    ab.member8767 = function (t) {
        if (t === undefined || t < 0 || t >= o) {
            return 0;
        }
        return I[t];
    };
    ab.member8768 = function (t) {
        if (t === undefined || t < 0 || t >= o) {
            return 0;
        }
        return H[t];
    };
    var M = 4;
    var B = M;
    ab.member7723 = function () {
        return B;
    };
    var s = 4;
    var a = s;
    ab.member7715 = function () {
        return a;
    };
    var C = 7;
    var ai = C;
    ab.member8769 = function () {
        return ai;
    };
    var n = -1;
    var al = -1;
    ab.member8770 = function () {
        return al;
    };
    var K = -1;
    ab.member8771 = function () {
        return K;
    };
    var ao = true;
    ab.member8772 = function () {
        return ao;
    };
    var F = -1;
    ab.member8662 = function () {
        return F;
    };
    var Z = 0;
    ab.member8663 = function () {
        return Z;
    };
    var U;
    ab.member7920 = function () {
        return U;
    };
    var N;
    ab.member7921 = function () {
        return N;
    };
    var af;
    ab.member7923 = function () {
        return af;
    };
    var h;
    ab.member7924 = function () {
        return h;
    };
    var an = true;
    var g = 2;
    ab.member8773 = function () {
        return g;
    };
    var r = true;
    var ah = 3;
    ab.member8022 = function () {
        return ah;
    };
    var ae = false;
    ab.member7895 = function () {
        return ae;
    };
    ab.member8774 = function (t) {
        ae = t;
    };
    var L = false;
    ab.member7845 = function () {
        return L;
    };
    var ad = 16776960;
    ab.member7072 = function () {
        return ad;
    };
    var k = 16777215;
    ab.member7073 = function () {
        return k;
    };
    var ag = 65408;
    ab.member7074 = function () {
        return ag;
    };
    var Q = 100;
    ab.member8775 = function () {
        return Q;
    };
    var aj = -1;
    var j = -1;
    var O = -1;
    ab.member6118 = function () {
        return O;
    };
    var d = -1;
    ab.member6119 = function () {
        return d;
    };
    var P = -1;
    ab.member6120 = function () {
        return P;
    };
    var e = -1;
    ab.member6127 = function () {
        return e;
    };
    var T = -1;
    ab.member6128 = function () {
        return T;
    };
    var W = -1;
    ab.member6122 = function () {
        return W;
    };
    var ac = -1;
    ab.member6125 = function () {
        return ac;
    };
    var v = -1;
    ab.member6123 = function () {
        return v;
    };
    var S = -1;
    ab.member6126 = function () {
        return S;
    };
    var G = -1;
    ab.member8776 = function () {
        return G;
    };
    var u = -1;
    ab.member6121 = function () {
        return u;
    };
    var b = -1;
    ab.member6124 = function () {
        return b;
    };
    var ak = -1;
    ab.member6129 = function () {
        return ak;
    };
    var A;
    ab.member8777 = function () {
        return A;
    };
    var y;
    ab.member8778 = function () {
        return y;
    };
    if (q.data !== undefined) {
        var aa = q.data;
        var Y = false;
        while (true) {
            var X = aa.member609();
            if (X === 0) {
                break;
            } else if (X === 1) {
                if (I === null) {
                    o = i;
                    I = new Array(i);
                    H = new Array(i);
                }
                for (var am = 0; am < I.length; am++) {
                    I[am] = aa.member1071();
                    H[am] = aa.member1071();
                }
                Y = true;
            } else if (X === 2) {
                n = aa.member1086();
            } else if (X === 3) {
                o = aa.member609();
                I = new Array(o);
                H = new Array(o);
            } else if (X === 4) {
                ao = false;
            } else if (X === 5) {
                al = aa.g3();
            } else if (X === 6) {
                K = aa.g3();
            } else if (X === 7) {
                U = new Array(10);
                N = new Array(10);
                for (var R = 0; R < 10; R++) {
                    U[R] = new Array(4);
                    N[R] = new Array(4);
                    for (var x = 0; x < 4; x++) {
                        var c = aa.member608();
                        if (c === 65535) {
                            c = -1;
                        }
                        U[R][x] = c;
                        var z = aa.member608();
                        N[R][x] = new Array(z);
                        for (var m = 0; m < z; m++) {
                            var E = aa.member608();
                            if (E === 65535) {
                                E = -1;
                            }
                            N[R][x][m] = E;
                        }
                    }
                }
            } else if (X === 8) {
                an = false;
            } else if (X === 9) {
                g = aa.member609();
            } else if (X === 10) {
                r = false;
            } else if (X === 11) {
                ah = aa.member609();
            } else if (X === 12) {
                aj = aa.member608();
                j = aa.member608();
            } else if (X === 13) {
                a = aa.member609();
            } else if (X === 14) {
                B = aa.member609();
            } else if (X === 15) {
                ai = aa.member609();
            } else if (X === 16) {
                L = true;
            } else if (X === 17) {
                ad = aa.member1073();
            } else if (X === 18) {
                k = aa.member1073();
            } else if (X === 19) {
                ag = aa.member1073();
            } else if (X === 20) {
                F = aa.member608();
                Z = aa.member609();
            } else if (X === 21) {
                Q = aa.member609();
            } else if (X === 22) {
                O = aa.member1086();
                d = aa.member1086();
                P = aa.member1086();
                e = aa.member1086();
                T = aa.member1086();
                W = aa.member1086();
                A = aa.member1070();
                y = aa.member1070();
                ac = aa.member1086();
                v = aa.member1086();
                S = aa.member1086();
                G = aa.member1086();
                u = aa.member1086();
                b = aa.member1086();
                ak = aa.member1086();
            } else if (X === 23) {
                af = new Array(10);
                h = new Array(10);
                for (var R = 0; R < 10; R++) {
                    af[R] = new Array(4);
                    h[R] = new Array(4);
                    for (var x = 0; x < 4; x++) {
                        var D = aa.member608();
                        if (D === 65535) {
                            D = -1;
                        }
                        af[R][x] = D;
                        var z = aa.member608();
                        h[R][x] = new Array(z);
                        for (var J = 0; J < z; J++) {
                            var V = aa.member608();
                            if (V === 65535) {
                                V = -1;
                            }
                            h[R][x][J] = V;
                        }
                    }
                }
            } else {
                throw new Error('1554 ' + X);
            }
        }
        if (!Y) {
            if (I == null) {
                o = i;
                I = new Array(i);
                H = new Array(i);
            }
            for (var am = 0; am < I.length; am++) {
                I[am] = 0;
                H[am] = am * 20;
            }
        }
    } else {
        throw new Error('1555 ');
    }
    q = undefined;
    return ab;
};
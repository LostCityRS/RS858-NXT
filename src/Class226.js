import { Class124 } from 'Class124.js';
import { Class215 } from 'Class215.js';
export var Class226 = function () {
    var a = function (u) {
        var ae = {};
        var O;
        ae.member2743 = function () {
            return O;
        };
        var z;
        var d;
        ae.member556 = function () {
            return d;
        };
        var j;
        ae.member557 = function () {
            return j;
        };
        var X;
        var Q;
        var S = 0;
        var T = 2;
        var B = 3;
        var ac = 4;
        var h = 6;
        var P;
        var r = 0;
        var s;
        var i = 0;
        var m;
        var x = 0;
        var ai = 1;
        var U;
        var C;
        var k = 0;
        var af = 1;
        var A = 2;
        var F = 3;
        var c = 4;
        var W = false;
        if (u.member2744 !== undefined) {
            var aj = Class124(undefined, u.member2744);
            if (u.member2745) {
                W = true;
            }
            aj.member609();
            var o = aj.member609();
            var q = aj.member609();
            var v = aj.member609();
            if (o !== 80 || q !== 78 || v !== 71) {
                throw new Error('1069 ');
            }
            aj.member1073();
            var Y = null;
            while (true) {
                var H = aj.member1073();
                var ak = '';
                for (var an = 0; an < 4; an++) {
                    ak += String.fromCharCode(aj.member609());
                }
                var aa = aj.member1047();
                if (ak === 'IHDR') {
                    d = aj.member1073();
                    j = aj.member1073();
                    X = aj.member609();
                    if (X !== 8) {
                        throw new Error('1070 ' + X);
                    }
                    Q = aj.member609();
                    P = aj.member609();
                    if (P !== r) {
                        throw new Error('1071 ' + P);
                    }
                    s = aj.member609();
                    if (s !== i) {
                        throw new Error('1072 ' + s);
                    }
                    m = aj.member609();
                    if (m !== x && m !== ai) {
                        throw new Error('1073 ' + m);
                    }
                    O = new Uint8Array(d * j * 4);
                    var e;
                    if (Q === S) {
                        e = 1;
                    } else if (Q === T) {
                        e = 3;
                    } else if (Q === B) {
                        e = 1;
                    } else if (Q === ac) {
                        e = 2;
                    } else if (Q === h) {
                        e = 4;
                    }
                    U = e * X;
                    C = U / 8;
                } else if (ak === 'PLTE') {
                    var M = H / 3;
                    z = new Array(M);
                    for (var an = 0; an < M; an++) {
                        var Z = aj.g3();
                        if (W && Z === 0) {
                            z[an] = 0;
                        } else {
                            z[an] = Z << 8 | 255;
                        }
                    }
                } else if (ak === 'IDAT') {
                    if (Y === null) {
                        Y = Class124(H);
                    } else {
                        var K = Y;
                        Y = Class124(K.getSize() + H);
                        Y.member1067(K.getData(), 0, K.getSize());
                    }
                    Y.member1067(aj.getData(), aj.member1047(), H);
                    aj.member607(aj.member1047() + H);
                } else if (ak === 'tRNS') {
                    if (Q === B) {
                        for (var an = 0; an < z.length; an++) {
                            z[an] &= 4294967040;
                            z[an] |= aj.member609();
                        }
                    } else if (Q === T) {
                        throw new Error('1074 ');
                    } else if (Q === S) {
                        throw new Error('1075 ');
                    } else {
                        throw new Error('1076 ');
                    }
                } else if (ak === 'IEND') {
                    break;
                } else {
                    aj.member607(aj.member1047() + H);
                    if (false) {
                    }
                }
                if (aa + H !== aj.member1047()) {
                    throw new Error('1077 ' + ak);
                }
                var am = aj.member1073();
            }
            var g = new Class215.member2649(new Uint8Array(Y.getData()));
            var R = Class124(undefined, g.member2645());
            var ab = new Uint8Array(d * j * (U / 8));
            var y = 0;
            var N = 0;
            while (y < j) {
                var t = R.member609();
                if (t === k) {
                    for (var an = 0; an < d * C; an++) {
                        ab[N++] = R.member609();
                    }
                } else if (t === af) {
                    for (var an = 0; an < d * C; an++) {
                        var al = R.member609();
                        var n = an < C ? 0 : ab[N - C];
                        ab[N++] = al + n & 255;
                    }
                } else if (t === A) {
                    for (var an = 0; an < d * C; an++) {
                        var al = R.member609();
                        var ah = y <= 0 ? 0 : ab[N - d * C];
                        ab[N++] = al + ah & 255;
                    }
                } else if (t === F) {
                    for (var an = 0; an < d * C; an++) {
                        var al = R.member609();
                        var n = an < C ? 0 : ab[N - C];
                        var ah = y <= 0 ? 0 : ab[N - d * C];
                        var E = Math.floor((n + ah) / 2);
                        ab[N++] = al + E & 255;
                    }
                } else if (t === c) {
                    for (var an = 0; an < d * C; an++) {
                        var al = R.member609();
                        var n = an < C ? 0 : ab[N - C];
                        var ah = y <= 0 ? 0 : ab[N - d * C];
                        var ag = y <= 0 || an < C ? 0 : ab[N - d * C - C];
                        var ad = n + ah - ag;
                        var J = Math.abs(ad - n);
                        var I = Math.abs(ad - ah);
                        var G = Math.abs(ad - ag);
                        var L;
                        if (J <= I && J <= G) {
                            L = n;
                        } else if (I <= G) {
                            L = ah;
                        } else {
                            L = ag;
                        }
                        ab[N++] = al + L & 255;
                    }
                } else {
                    throw new Error('1078 ' + t);
                }
                y++;
            }
            if (N !== d * j * (U / 8)) {
                throw new Error('1079 ' + N);
            }
            ab = Class124(undefined, ab.buffer);
            if (Q === S) {
                for (var an = 0; an < d * j; an++) {
                    var D = ab.member609();
                    O[an * 4 + 0] = D;
                    O[an * 4 + 1] = D;
                    O[an * 4 + 2] = D;
                    O[an * 4 + 3] = 255;
                }
            } else if (Q === T) {
                for (var an = 0; an < d * j; an++) {
                    O[an * 4 + 0] = ab.member609();
                    O[an * 4 + 1] = ab.member609();
                    O[an * 4 + 2] = ab.member609();
                    if (W && O[an * 4 + 0] === O[an * 4 + 1] === O[an * 4 + 2] === 0) {
                        O[an * 4 + 3] = 0;
                    } else {
                        O[an * 4 + 3] = 255;
                    }
                }
            } else if (Q === B) {
                for (var an = 0; an < d * j; an++) {
                    var V = z[ab.member609()];
                    if (V === undefined) {
                        throw new Error('1080 ');
                    }
                    O[an * 4 + 0] = V >> 24 & 255;
                    O[an * 4 + 1] = V >> 16 & 255;
                    O[an * 4 + 2] = V >> 8 & 255;
                    O[an * 4 + 3] = V & 255;
                }
            } else if (Q === ac) {
                for (var an = 0; an < d * j; an++) {
                    var D = ab.member609();
                    O[an * 4 + 0] = D;
                    O[an * 4 + 1] = D;
                    O[an * 4 + 2] = D;
                    O[an * 4 + 3] = ab.member609();
                }
            } else if (Q === h) {
                for (var an = 0; an < d * j; an++) {
                    O[an * 4 + 0] = ab.member609();
                    O[an * 4 + 1] = ab.member609();
                    O[an * 4 + 2] = ab.member609();
                    O[an * 4 + 3] = ab.member609();
                }
            }
            if (ab.member1047() !== ab.getSize()) {
                throw new Error('1081 ');
            }
        } else {
            throw new Error('1082 ');
        }
        u = undefined;
        return ae;
    };
    return a;
}();
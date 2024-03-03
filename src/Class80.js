import { Class79 } from 'Class79.js';
import { Class78 } from 'Class78.js';
export var Class80 = function () {
    var c = {};
    var h = 65535;
    var e = 0;
    var g = 1;
    var a = 0;
    var i = 1;
    var d = function (k) {
        return j(k)[0];
    };
    c.member605 = d;
    var b = function (k) {
        return j(k);
    };
    c.member606 = b;
    var j = function (v) {
        v.member607(v.getSize() - 2);
        var M = v.member608();
        var N = M & 32767;
        var o = M >> 15;
        var k = new Array(N);
        if (o === a) {
            var u = new Array(N);
            for (var J = 0; J < N; J++) {
                u[J] = {};
            }
            v.member607(v.getSize() - 7 - N * 8);
            var G = v.member608(), m = v.member608();
            var z = (v.member609() & 255) + 1;
            for (J = 0; J < N; J++) {
                u[J].member591 = v.member608();
            }
            for (J = 0; J < N; J++) {
                u[J].member593 = v.member608();
            }
            for (J = 0; J < N; J++) {
                u[J].width = v.member608();
            }
            for (J = 0; J < N; J++) {
                u[J].height = v.member608();
            }
            for (J = 0; J < N; J++) {
                var L = u[J];
                L.member592 = G - L.width - L.member591;
                L.member594 = m - L.height - L.member593;
            }
            v.member607(v.getSize() - 7 - N * 8 - (z - 1) * 3);
            var r = new Array(z);
            for (var P = 1; P < z; P++) {
                r[P] = v.g3();
                if (r[P] === 0) {
                    r[P] = 1;
                }
            }
            for (J = 0; J < N; J++) {
                u[J].member603 = r;
            }
            v.member607(0);
            for (J = 0; J < N; J++) {
                var L = u[J];
                var F = L.width * L.height;
                L.image = new Uint8Array(F);
                var s = v.member609();
                if ((s & 2) == 0) {
                    if ((s & 1) == 0) {
                        for (var t = 0; t < F; t++) {
                            L.image[t] = v.member609();
                        }
                    } else {
                        for (var B = 0; B < L.width; B++) {
                            for (var A = 0; A < L.height; A++) {
                                L.image[B + A * L.width] = v.member609();
                            }
                        }
                    }
                } else {
                    var C = false;
                    L.alpha = new Uint8Array(F);
                    if ((s & 1) == 0) {
                        for (t = 0; t < F; t++) {
                            L.image[t] = v.member609();
                        }
                        for (t = 0; t < F; t++) {
                            var q = L.alpha[t] = v.member609();
                            C |= q != -1;
                        }
                    } else {
                        for (B = 0; B < L.width; B++) {
                            for (A = 0; A < L.height; A++) {
                                L.image[B + A * L.width] = v.member609();
                            }
                        }
                        for (B = 0; B < L.width; B++) {
                            for (A = 0; A < L.height; A++) {
                                var q = L.alpha[B + A * L.width] = v.member609();
                                C |= q != -1;
                            }
                        }
                    }
                    if (!C) {
                        L.alpha = undefined;
                    }
                }
                k[J] = Class79(L);
            }
        } else {
            v.member607(0);
            var O = v.member609();
            if (O == e) {
                var K = v.member609() === 1;
                var I = v.member608();
                var E = v.member608();
                for (var J = 0; J < N; J++) {
                    var H = new Uint8Array(I * E * 4);
                    for (var P = 0; P < I * E; P++) {
                        var D = v.g3();
                        H[P * 4 + 0] = D >> 16 & 255;
                        H[P * 4 + 1] = D >> 8 & 255;
                        H[P * 4 + 2] = D & 255;
                        H[P * 4 + 3] = 255;
                    }
                    if (K) {
                        for (var P = 0; P < I * E; P++) {
                            H[P * 4 + 3] = v.member609();
                        }
                    }
                    k[J] = Class78({
                        width: I,
                        height: E,
                        image: H
                    });
                }
            } else if (O == g) {
                throw new Error('1693 ');
            } else {
                throw new Error('1694 ' + O);
            }
        }
        return k;
    };
    return c;
}();
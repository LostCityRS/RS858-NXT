import { Class484 } from 'Class484.js';
import { Class465 } from 'Class465.js';
import { Class95 } from 'Class95.js';
import { Class96 } from 'Class96.js';
import { Class80 } from 'Class80.js';
import { Class76 } from 'Class76.js';
export var Class783 = function (q) {
    var A = {};
    var G;
    var b;
    if (q.member625 !== undefined && q.member2896 !== undefined) {
        b = q.member625;
        G = q.member2896;
    } else {
        throw new Error('1008 ');
    }
    var o = false;
    A.member10430 = function () {
        return o;
    };
    A.member7624 = function (N) {
        o = N;
    };
    var I = -1;
    A.member9787 = function () {
        return I;
    };
    var v = Class484.member7705;
    A.member993 = function () {
        return v;
    };
    var c = Class484.member7706;
    A.member7682 = function () {
        return c;
    };
    var C = -1;
    var y = -1;
    var E = -1;
    var K = -1;
    var n = 0;
    A.member10431 = function () {
        return n;
    };
    var m = 0;
    A.member10432 = function () {
        return m;
    };
    var e = -1;
    A.member9987 = function () {
        return e;
    };
    var u = '';
    var s = Class484.member7702;
    A.member7721 = function () {
        return s;
    };
    var h = 0;
    A.member10433 = function () {
        return h;
    };
    var B = 0;
    var z = 0;
    A.member10434 = function () {
        return B;
    };
    A.member10435 = function () {
        return z;
    };
    var k = null;
    var j = -1;
    var g = -1;
    var r = 1;
    var D = 1;
    A.decode = function (O) {
        while (true) {
            var N = O.member609();
            if (N === undefined) {
                throw new Error('1009 ');
                break;
            }
            if (N === 0) {
                break;
            }
            t(O, N);
        }
    };
    var x = A.decode;
    var t = function (R, N) {
        if (N === 1) {
            I = R.member1086();
        } else if (N === 2) {
            v = R.g3();
            o = true;
        } else if (N === 3) {
            C = R.member1086();
        } else if (N === 4) {
            E = R.member1086();
        } else if (N === 5) {
            y = R.member1086();
        } else if (N === 6) {
            K = R.member1086();
        } else if (N === 7) {
            n = R.member1071();
        } else if (N === 8) {
            u = R.member1089(true);
        } else if (N === 9) {
            c = R.member608();
        } else if (N === 10) {
            m = R.member1071();
        } else if (N === 11) {
            e = 0;
        } else if (N === 12) {
            s = R.member609();
        } else if (N === 13) {
            h = R.member1071();
        } else if (N === 14) {
            e = R.member608();
        } else if (N === 16) {
            B = R.member1071();
            z = R.member1071();
        } else if (N === 17 || N === 18) {
            g = R.member608();
            if (g === 65535) {
                g = -1;
            }
            j = R.member608();
            if (j === 65535) {
                j = -1;
            }
            var O = -1;
            if (N === 18) {
                O = R.member608();
                if (O === 65535) {
                    O = -1;
                }
            }
            var Q = R.member609();
            k = new Array(Q + 2);
            for (var P = 0; P <= Q; P++) {
                k[P] = R.member608();
                if (k[P] === 65535) {
                    k[P] = -1;
                }
            }
            k[Q + 1] = O;
        } else if (N === 19) {
            r = R.member1071();
        } else if (N === 20) {
            D = R.member1071();
        } else if (false) {
        }
    };
    A.member3637 = function (P) {
        var O = u;
        P = Math.floor(P * r / D);
        while (true) {
            var N = O.indexOf('%1');
            if (N < 0) {
                break;
            }
            O = O.slice(0, N) + String(P) + O.slice(N + 2);
        }
        return O;
    };
    var d = A.member3637;
    A.member10436 = function (O) {
        if (C < 0) {
            return null;
        }
        var N = G.member8753(C);
        if (N === null) {
            i(O);
            var N = G.member8753(C);
        }
        return N;
    };
    var a = A.member10436;
    A.member10437 = function (O) {
        if (y < 0) {
            return null;
        }
        var N = G.member8753(y);
        if (N === null) {
            i(O);
            var N = G.member8753(y);
        }
        return N;
    };
    var M = A.member10437;
    A.member10438 = function (O) {
        if (E < 0) {
            return null;
        }
        var N = G.member8753(E);
        if (N === null) {
            i(O);
            var N = G.member8753(E);
        }
        return N;
    };
    var L = A.member10438;
    A.member10439 = function (O) {
        if (K < 0) {
            return null;
        }
        var N = G.member8753(K);
        if (N === null) {
            i(O);
            var N = G.member8753(K);
        }
        return N;
    };
    var J = A.member10439;
    A.member10440 = function () {
        return k !== null;
    };
    var H = A.member10440;
    A.member10441 = function () {
        if (k === null || G.member8687() === null) {
            return this;
        }
        var Q = -1;
        if (g !== -1) {
            var P = G.member7539().member7394(g);
            if (P !== member47 && P !== undefined) {
                Q = G.member8687().member2950(P);
            }
        } else if (j !== -1) {
            var N = G.member7539().member7393(Class465.member4134, j);
            if (N !== member47 && N !== undefined) {
                Q = G.member8687().member2943(N);
            }
        }
        if (Q < 0 || Q >= k.length - 1) {
            var O = k[k.length - 1];
            if (O !== -1) {
                return G.list(O);
            } else {
                return undefined;
            }
        }
        if (k[Q] === -1) {
            return undefined;
        }
        return G.list(k[Q]);
    };
    var F = A.member10441;
    var i = function (O) {
        var T = G.member7535();
        if (C >= 0 && G.member8753(C) === null) {
            var U = T.getFile(Class95.member811, C, 0, Class96.member840);
            if (U !== null) {
                var W = Class80.member606(U);
                var V = W[0].member600();
                var Y = Class76(O, W[0].member556(), W[0].member557(), V, false);
                Y.member563();
                G.member8754(Y, C);
            }
        }
        if (y >= 0 && G.member8753(y) === null) {
            var P = T.getFile(Class95.member811, y, 0, Class96.member840);
            if (P !== null) {
                var X = Class80.member606(P);
                var V = X[0].member600();
                var Y = Class76(O, X[0].member556(), X[0].member557(), V, false);
                Y.member563();
                G.member8754(Y, y);
            }
        }
        if (E >= 0 && G.member8753(E) === null) {
            var N = T.getFile(Class95.member811, E, 0, Class96.member840);
            if (N !== null) {
                var Q = Class80.member606(N);
                var V = Q[0].member600();
                var Y = Class76(O, Q[0].member556(), Q[0].member557(), V, false);
                Y.member563();
                G.member8754(Y, E);
            }
        }
        if (K >= 0 && G.member8753(K) === null) {
            var R = T.getFile(Class95.member811, K, 0, Class96.member840);
            if (R !== null) {
                var S = Class80.member606(R);
                var V = S[0].member600();
                var Y = Class76(O, S[0].member556(), S[0].member557(), V, false);
                Y.member563();
                G.member8754(Y, K);
            }
        }
    };
    q = undefined;
    return A;
};
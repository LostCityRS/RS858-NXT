import { Class228 } from 'Class228.js';
import { Class182 } from 'Class182.js';
import { Class197 } from 'Class197.js';
import { Class150 } from 'Class150.js';
import { Class246 } from 'Class246.js';
import { Class295 } from 'Class295.js';
import { Class299 } from 'Class299.js';
import { Class293 } from 'Class293.js';
import { Class147 } from 'Class147.js';
import { Class154 } from 'Class154.js';
import { Class174 } from 'Class174.js';
import { Class185 } from 'Class185.js';
import { Class137 } from 'Class137.js';
export var Class802 = function () {
    var H = {};
    var y = false;
    var A = false;
    var L;
    var B;
    var v = 0;
    if (true) {
        v = 2;
    } else {
    }
    var k = 50;
    var O = new Array(v);
    var t = false;
    var d = false;
    var q = false;
    var C = false;
    var x = 0;
    var z = false;
    var o = console;
    if (false) {
    }
    var E = v * 10000;
    var e = Class228({
        member2750: 2,
        member2751: E
    });
    var g = v * 10000;
    var I = Class182(1000);
    var u = Class182(50);
    var F = new Uint32Array(200);
    var r = new Uint32Array(200);
    var D = new Array(v);
    var h = new Array(v);
    for (var N = 0; N < v; N++) {
        D[N] = [];
        h[N] = [];
    }
    var i;
    var n = {
        member59: Class197.member2316,
        member1569: null,
        member2381: null,
        member2375: null
    };
    var b = [n];
    var s = function (P) {
        if (false) {
        }
        var W = Date.now();
        var V = P.data;
        var T = Date.now() - W;
        var X = V.member59;
        var Q = Date.now();
        if (X === Class197.LOG) {
            o.log('%c' + V.logMessage, 'color:#bada55');
        } else if (X === Class197.ERROR) {
            i = V.stack;
        } else if (X === Class197.member2313) {
            O[V.member2376].activity = V.activity;
            O[V.member2376].member2788 = V.member2788;
        } else if (X === Class197.member2314) {
            if (false) {
            }
            if (!a(V)) {
                u.member2038(V);
            }
        } else if (X === Class197.member2316) {
            if (false) {
            }
            var R = Class150.member1513(V.materialIDList);
            O[V.member2376].member10515[V.member2375].member2884(R);
            n.member1569 = R.member681(true, true);
            n.member2381 = V.member2381;
            n.member2375 = V.member2375;
            if (false) {
            }
            O[V.member2376].postMessage(b);
            if (false) {
            }
        } else if (X === Class197.COMPLETE) {
            var Y = V.member2376;
            var U = V.member2375;
            var S = O[Y].member10515[U];
            if (S !== undefined) {
                if (false) {
                }
                S.member2892(V.result);
                if (false) {
                }
                S.member2876(Class246.FINISHED);
                O[Y].member10515[U] = undefined;
                O[Y].member10516--;
            } else {
                throw new Error('1088 ');
            }
        } else {
            throw new Error('1089 ' + X);
        }
        F[X]++;
        if (false) {
        }
    };
    var m = function () {
        if (false) {
        } else {
            throw new Error(arguments);
        }
    };
    var a = function (Q) {
        var R = Q.member2385;
        var S = Q.member2384;
        var U = new Array(S.length);
        var V = true;
        for (var P = 0; P < S.length; P++) {
            var T = B.member3227(R, S[P]);
            if (T === member47) {
                V = false;
            } else {
                U[P] = T.member681();
            }
        }
        if (V) {
            r[Class197.member2314]++;
            O[Q.member2376].postMessage([{
                    member59: Class197.member2314,
                    member2382: U,
                    member2381: Q.member2381,
                    member2375: Q.member2375
                }]);
            if (false) {
            }
        }
        return V;
    };
    H.member25 = function (S, R, Q, P) {
        L = S;
        B = R;
        if (Q !== undefined) {
            v = Q;
        }
        if (P !== undefined) {
            k = P;
        }
        J();
    };
    var M = H.member25;
    var J = function () {
        if (!Class295.isWebWorkersSupported()) {
            throw new Error('1092 ');
        }
        for (var P = 0; P < v; P++) {
            if (O[P] !== undefined) {
                O[P].terminate();
            }
            O[P] = new Worker(Class299.member3584().member3476() + 'f.js?1445359120652');
            O[P].postMessage = O[P].webkitPostMessage || O[P].postMessage;
            O[P].onmessage = s;
            O[P].onerror = m;
            O[P].activity = 0;
            O[P].member2788 = 0;
            r[Class197.member2312]++;
            O[P].postMessage([{
                    member59: Class197.member2312,
                    member2376: P
                }]);
            O[P].member10515 = new Array(k);
            O[P].member10516 = 0;
        }
        t = false;
        z = false;
    };
    var K;
    var c;
    Class293.member3473(function (P) {
        K = P.getElementById('builderactivity');
        c = new Array(v);
        for (var Q = 0; Q < v; Q++) {
            c[Q] = {
                member2788: P.getElementById('w' + Q + 'lps'),
                member2524: P.getElementById('w' + Q + 'active'),
                activity: P.getElementById('w' + Q + 'activity')
            };
        }
    });
    var G = function (R, U) {
        var X = R.member2723();
        if (X === Class246.member2865) {
            R.member2876(Class246.FINISHED);
            X = Class246.FINISHED;
        }
        if (X === Class246.member2860) {
            var S = R.member10517;
            if (S === undefined) {
                S = R.member2889(L, B);
            }
            if (S !== member47) {
                R.member10517 = S;
                if (false) {
                }
                if (S === undefined) {
                    R.member2876(Class246.FINISHED);
                } else {
                    var Q;
                    var P = -1;
                    for (var W = 0; W < v; W++) {
                        var V = O[W];
                        if (V.member10516 < k && (P === -1 || V.member10516 < P)) {
                            Q = W;
                            P = V.member10516;
                        }
                    }
                    if (Q !== undefined) {
                        var Y = O[Q];
                        for (var T = 0; T < k; T++) {
                            if (Y.member10515[T] === undefined) {
                                if (false) {
                                }
                                r[R.member2875()]++;
                                D[Q].push({
                                    member59: R.member2875(),
                                    member2375: T,
                                    request: S.member2890
                                });
                                if (S.member2891 !== undefined && S.member2891 !== null && S.member2891.length > 0) {
                                    h[Q] = h[Q].concat(S.member2891);
                                }
                                Y.member10515[T] = R;
                                Y.member10516++;
                                R.member2876(Class246.member2861);
                                R.member2878(Q, T);
                                break;
                            }
                        }
                    }
                }
            }
        } else if (X === Class246.member2861) {
            if (R.member2883() > 30000) {
                throw new Error('1093 ' + R.member2874() + '1093 ');
            }
        } else if (X === Class246.member2862) {
        } else if (X === Class246.FINISHED) {
            R.tidyup();
            if (false) {
            }
            return true;
        } else {
            throw new Error('1094 ' + X);
        }
        return false;
    };
    var j = function () {
        for (var P = 0; P < v; P++) {
            if (D[P].length > 0) {
                try {
                    O[P].postMessage(D[P], h[P]);
                } catch (T) {
                    var S = 'Wwe, jq:\n';
                    for (var R = 0; R < D[P].length; R++) {
                        S += 'Mt: ' + D[P][R].member59 + '\n';
                        var Q = T.member3492 === undefined ? T : T.member3492;
                        if (Q !== undefined) {
                            S += 'Message: ' + Q + '\n';
                        }
                        throw new Error('1095 ' + S);
                    }
                }
                D[P] = [];
                h[P] = [];
            }
        }
    };
    H.member78 = function () {
        if (i !== undefined) {
            throw new Error(i);
        }
        if (!t && Class147.member1483()) {
            var U = Class147.member681();
            for (var X = 0; X < v; X++) {
                r[Class197.member2315]++;
                O[X].postMessage([{
                        member59: Class197.member2315,
                        member2377: U,
                        member1546: Class154.member553()
                    }]);
            }
            t = true;
        }
        if (!d && Class174.member1900()) {
            var S = Class174.member681();
            for (var X = 0; X < v; X++) {
                r[Class197.member2318]++;
                O[X].postMessage([{
                        member59: Class197.member2318,
                        member2378: S
                    }]);
            }
            d = true;
        }
        if (!q && Class185.member2055()) {
            var R = Class185.member681();
            for (var X = 0; X < v; X++) {
                r[Class197.member2321]++;
                O[X].postMessage([{
                        member59: Class197.member2321,
                        member2379: R
                    }]);
            }
            q = true;
        }
        if (!C && Class137.member1310()) {
            var P = Class137.member681();
            for (var X = 0; X < v; X++) {
                r[Class197.member2322]++;
                O[X].postMessage([{
                        member59: Class197.member2322,
                        member2380: P
                    }]);
            }
            C = true;
        }
        if (!t || !d || !q || !C) {
            return;
        }
        while (!z && I.getSize() < g && e.member890() > 0) {
            var V = e.member776();
            if (false) {
            }
            V.unlink2();
            if (V.member2723() === Class246.member2865) {
                V.member2876(Class246.FINISHED);
                continue;
            }
            I.member2038(V);
            V.member2876(Class246.member2860);
        }
        for (var Q = I.member776(); Q !== undefined; Q = I.member777()) {
            if (G(Q, true)) {
                I.remove();
            }
        }
        j();
        for (var T = u.member776(); T !== undefined; T = u.member777()) {
            if (a(T)) {
                u.remove();
            }
        }
        if (x % 10 === 0 && K !== null) {
            K.textContent = 'Queue: ' + e.member890() + '/' + I.getSize();
            for (var X = 0; X < v; X++) {
                var W = 'Idle';
                if (O[X].member10516 !== 0) {
                    W = 'In progress: ' + O[X].member10516;
                }
                if (c[X].member2788 !== null) {
                    c[X].member2788.textContent = O[X].member2788;
                    c[X].member2524.textContent = O[X].activity + '%';
                    c[X].activity.textContent = W;
                }
            }
        }
        if (z && I.getSize() === 0) {
            J();
        }
        x++;
    };
    H.member2939 = function (P) {
        if (z) {
            return e.add(P, P.member2703());
        }
        if (false) {
        }
        P.member2876(Class246.member2860);
        if (!G(P, false)) {
            I.member2038(P);
        }
        return true;
    };
    H.member9783 = function () {
        return e.member890() + I.getSize();
    };
    H.member10518 = function () {
        z = true;
    };
    H.member4009 = function () {
        for (var P = 0; P < v; P++) {
            r[Class197.member2317]++;
            O[P].postMessage([{ member59: Class197.member2317 }]);
        }
    };
    H.member4010 = function () {
        for (var P = 0; P < v; P++) {
            r[Class197.member2319]++;
            O[P].postMessage([{ member59: Class197.member2319 }]);
        }
    };
    H.member9 = function () {
        for (var P = 0; P < v; P++) {
            r[Class197.member2320]++;
            O[P].postMessage([{ member59: Class197.member2320 }]);
        }
    };
    return H;
}();
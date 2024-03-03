import { Class443 } from 'Class443.js';
import { Class264 } from 'Class264.js';
import { Class320 } from 'Class320.js';
import { Class66 } from 'Class66.js';
import { Class315 } from 'Class315.js';
import { Class291 } from 'Class291.js';
import { Class317 } from 'Class317.js';
import { Class423 } from 'Class423.js';
import { Class302 } from 'Class302.js';
import { Class301 } from 'Class301.js';
import { Class140 } from 'Class140.js';
import { Class416 } from 'Class416.js';
import { Class726 } from 'Class726.js';
import { Class299 } from 'Class299.js';
import { Class501 } from 'Class501.js';
export var Class727 = function () {
    var K = {};
    var P;
    var o;
    var v;
    var g = 350;
    var q = '\\/.:, _-+[]~@';
    var e = 'Success';
    var C = 'Failure';
    var G = 20;
    var y = 15;
    var M = 0;
    var N = null;
    var D = new Float64Array(3);
    var u = false;
    K.isOpen = function () {
        return u;
    };
    var E = null;
    var d = 0;
    var c = 0;
    var b = '';
    var x = 0;
    var s = 0;
    var k;
    var t = -1;
    var O;
    var m = false;
    K.member25 = function (R) {
        P = R;
        o = P.member433.member3640;
        v = document;
        E = new Array(500);
        for (var Q = 0; Q < E.length; Q++) {
            E[Q] = '';
        }
        n(Class443.member6813[P.clientParameters.member7138.value.id]);
    };
    var J = function () {
        if (E === null) {
            member25();
        }
        u = true;
        M = 0;
        z = v.onpaste;
        v.onpaste = I;
    };
    var L = function () {
        u = false;
        P.member7619.member9236();
        v.onpaste = z;
    };
    var z;
    var I = function (Q) {
        if (Q !== undefined && Q.clipboardData !== undefined) {
            var R = Q.clipboardData.getData('text/plain');
            if (R !== undefined) {
                H(R.split('\n'));
            }
        }
    };
    var A = function () {
        var W = P.member7619.member9234();
        var Q = P.member7619.member9235();
        if (!m && Class264.member3129(Class264.member3113)) {
            m = true;
            if ((P.member4480().member3968.getValue() == Class320.member3739 || Class264.member3131()) && Class264.member3130() && member48) {
                var aa = Class66.member432('debugconsole');
                if (localStorage[aa + 'directlogin.username'] !== undefined) {
                    var V = localStorage[aa + 'directlogin.username'];
                    var ad = r(localStorage[aa + 'directlogin.password']);
                    if (P.member8234.member8235()) {
                        P.member8234.member9726();
                    }
                    P.member8234.member9719(V, ad, '', true);
                    n('Attempting direct login as: ' + V);
                } else {
                    n('No previous direct login attempt found - please login manually the first time');
                }
            } else if (!u) {
                if (P.member4480().member3968.getValue() == Class320.member3739 || Class264.member3131()) {
                    J();
                } else {
                    P.member8023.member7184(Class443.member6814[P.clientParameters.member7138.value.id]);
                }
            } else if (P.member4480().member3968.getValue() == Class320.member3739 || Class264.member3131()) {
                L();
            }
        } else if (!Class264.member3129(Class264.member3113)) {
            m = false;
        }
        var ac = P.member7135();
        if (ac !== undefined && (P.clientParameters.member8025.value !== Class315.member3696 || ac.member8026() >= 2)) {
            if (Class264.member3132() && Class264.member3130()) {
                var X = ac.member6453();
                if (X !== undefined) {
                    var ab = Class291();
                    X.member7836(ab, false);
                    var Z = P.member7619.member9232();
                    if (Z !== 0) {
                        j(ab.level - Z, ab.x, ab.member756);
                    }
                }
            }
        }
        if (!u) {
            return;
        }
        if (M < 102) {
            M += 6;
        }
        if (t != -1) {
            if (k < Date.now()) {
                for (var T = t; T < O.length; T++) {
                    if (O[T].member57('pause')) {
                        var R = 5;
                        try {
                            R = parseInt(O[T].substring(6));
                        } catch (S) {
                        }
                        n('Pausing for ' + R + ' seconds...');
                        t = T + 1;
                        k = Date.now() + R * 1000;
                        return;
                    } else {
                        b = O[T];
                        a(false);
                    }
                }
                t = -1;
            }
        }
        if (P.member7619.member9232() !== 0) {
            c -= Math.floor(P.member7619.member9232() * 5);
            if (c >= d) {
                c = d - 1;
            } else if (c < 0) {
                c = 0;
            }
        }
        for (var Y = 0; Y < Q; Y++) {
            var U = W[Y];
            if (U.keyCode === Class264.member3108) {
                a(false);
            } else if (U.keyCode === Class264.member3104) {
                a(true);
            } else if (U.keyCode === Class264.member3109 && s > 0) {
                b = b.substring(0, s - 1) + b.substring(s);
                s--;
            } else if (U.keyCode === Class264.member3124 && s < b.length) {
                b = b.substring(0, s) + b.substring(s + 1);
            } else if (U.keyChar === 0) {
                if (U.keyCode === Class264.member3119 && s > 0) {
                    s--;
                } else if (U.keyCode === Class264.member3120 && s < b.length) {
                    s++;
                } else if (U.keyCode === Class264.member3125) {
                    s = 0;
                } else if (U.keyCode === Class264.member3126) {
                    s = b.length;
                } else if (U.keyCode === Class264.member3127) {
                    if (U.member3139) {
                        c += 5;
                        if (c >= d) {
                            c = d - 1;
                        }
                    } else if (x < E.length) {
                        x++;
                        h();
                        s = b.length;
                    }
                } else if (U.keyCode === Class264.member3128) {
                    if (U.member3139) {
                        c -= 5;
                        if (c < 0) {
                            c = 0;
                        }
                    } else if (x > 0) {
                        x--;
                        h();
                        s = b.length;
                    }
                }
            } else if (Class317.member3723(U.keyChar) || q.indexOf(String.fromCharCode(U.keyChar)) !== -1) {
                b = b.substring(0, s) + String.fromCharCode(U.keyChar) + b.substring(s);
                s++;
            }
        }
        P.member7619.member9236();
    };
    K.member487 = A;
    var h = function () {
        if (x > 0) {
            var R = 0;
            for (var Q = 0; Q < E.length; Q++) {
                if (E[Q].indexOf('--> ') !== -1 && ++R === x) {
                    b = E[Q].substring(E[Q].indexOf('>') + 2);
                    break;
                }
            }
        } else {
            b = '';
        }
    };
    K.member9735 = function (Q) {
        b = Q;
        s = b.length;
    };
    var B = function () {
        if (!u) {
            return;
        }
        if (N === null) {
            var aa = Class423.member6115.member6106.member1204;
            if (aa !== -1) {
                N = P.member7137.member3639(aa);
            }
        }
        var Q = P.member433.member588();
        var ad = P.member433.member589();
        P.member433.member1344(0, 0, Q, g);
        o.member3627(0, 0, Q, g, 3351159 << 8 | M, 0, 0, 0, 0, null, M === 255);
        o.member3627(0, g - G, Q, g - G + 1, 4294967295, 0, 0, 0, 0, null, M === 255);
        var X = (g - y) / y;
        if (d > 0) {
            var ac = g - 4 - y - 9;
            var ab = X * ac / (X + d - 1);
            var ae = 4;
            if (d > 1) {
                ae += (d - 1 - c) * (ac - ab) / (d - 1);
            }
            o.member3627(Q - 16, ae, Q - 4, ae + ab, 16777215 << 8 | M, 0, 0, 0, 0, null, M === 255);
            if (N !== null) {
                for (var W = c; W < c + X && W < d; W++) {
                    var S = E[W].split('\b');
                    var U = (Q - 8 - 16) / S.length;
                    for (var T = 0; T < S.length; T++) {
                        var V = 8 + T * U;
                        Class302.member3604(F(S[T]), V, g - G - (W - c) * y, N, -1, -1, Class301.member3594, Class301.member3596, 0, 0, 4294967295, 255, null, null);
                    }
                }
            }
        }
        if (N !== null) {
            var R = new Date(P.member10105() * 1000);
            Class302.member3604('Build: ' + P.member3565() + ':' + P.member3566() + '/JS', Q - 25, g - G * 2, N, -1, -1, Class301.member3596, Class301.member3596, 0, 0, 4294967295, 255, null, null);
            Class302.member3604('Build Time: ' + R.toLocaleString(), Q - 25, g - G, N, -1, -1, Class301.member3596, Class301.member3596, 0, 0, 4294967295, 255, null, null);
            Class302.member3604('--> ' + F(b), 10, g - G + 3, N, -1, -1, Class301.member3594, Class301.member3594, 0, 0, 4294967295, 255, null, null);
            if (document.hasFocus() && P.member6116.member7139() % 30 > 15) {
                var Z = 10 + Class302.member3609('--> ' + F(b).substring(0, s), N, null);
                var Y = g - 15;
                o.member3627(Z, Y, Z + 1, Y + 12, 4294967295, 0, 0, 0, 0, null, true);
            }
        }
        o.member1630();
    };
    K.member486 = B;
    var F = function (V) {
        var U = null;
        var T = V.indexOf('--> ');
        if (T >= 0) {
            U = V.substring(0, T + 4);
            V = V.substring(T + 4);
        }
        if (V.substring(0, 12) === 'directlogin ') {
            var S = V.indexOf(' ', 12);
            if (S >= 0) {
                var R = V.length;
                V = V.substring(0, S + 1);
                for (var Q = S + 1; Q < R; Q++) {
                    V += '*';
                }
            }
        }
        if (U !== null) {
            return U + V;
        } else {
            return V;
        }
    };
    var n = function (T) {
        if (E === null) {
            member25();
        }
        var R = new Date();
        var S = R.getHours() + ':' + R.getMinutes() + ':' + R.getSeconds();
        for (var Q = d; Q > 0; Q--) {
            E[Q] = E[Q - 1];
        }
        E[0] = S + ': ' + T;
        if (d < E.length - 1) {
            d++;
            if (c > 0) {
                c++;
            }
        }
    };
    K.member9734 = n;
    var H = function (Q) {
        if (Q.length > 1) {
            for (var T = 0; T < Q.length; T++) {
                if (Q[T].member57('pause')) {
                    var S = 5;
                    try {
                        S = parseInt(Q[T].substring(6));
                    } catch (R) {
                    }
                    n('Pausing for ' + S + ' seconds...');
                    O = Q;
                    t = T + 1;
                    k = Date.now() + S * 1000;
                    return;
                } else {
                    b = Q[T];
                    a(false);
                }
            }
        } else {
            b += Q[0];
            s += Q[0].length;
        }
    };
    var j = function (T, Q, R) {
        var S = 'tele ' + T + ',' + (Q >> 6) + ',' + (R >> 6) + ',' + (Q & 63) + ',' + (R & 63);
        console.log(S);
        i(S, true, false);
    };
    K.member9220 = j;
    var a = function (Q) {
        b = b.trim();
        s = b.length;
        if (b.length === 0) {
            return;
        }
        n('--> ' + b);
        i(b, false, Q);
        x = 0;
        if (!Q) {
            s = 0;
            b = '';
        }
    };
    var r = function (Q) {
        return Q.replace(/[a-zA-Z]/g, function (R) {
            return String.fromCharCode((R <= 'Z' ? 90 : 122) >= (R = R.charCodeAt(0) + 13) ? R : R - 26);
        });
    };
    var i = function (X, ab, ak) {
        X = X.toLowerCase();
        try {
            if (X === 'commands' || X === 'help') {
                n('commands - This command');
                n('cls - Clear console');
                n('displayfps - Toggle FPS and other information');
                n('getcamerapos - Print location and direction of camera for use in bug reports');
                return;
            }
            if (X === 'cls') {
                d = 0;
                c = 0;
                return;
            }
            if (X === 'displayfps') {
                P.member9190.member10106();
                if (P.member9190.member9278()) {
                    n('FPS on');
                } else {
                    n('FPS off');
                }
                return;
            }
            if (X === 'getcamerapos') {
                var aj = P.member6101.member9070();
                if (aj.readyanim()) {
                    var Y = Class140.create();
                    aj.member8926(Y);
                    var ah = Class416.member4790(Y);
                    n('Camera look: xa: ' + ah.member4791 + ', ya:' + ah.member4792);
                    var ac = P.member7135();
                    if (ac !== undefined) {
                        var V = ac.member6453();
                        if (V !== undefined) {
                            var ae = Class291();
                            V.member7836(ae, false);
                            n('Player pos: ' + ae.level + ',' + Math.floor(ae.x / 64) + ',' + Math.floor(ae.member756 / 64) + ',' + ae.x % 64 + ',' + ae.member756 % 64);
                        }
                    }
                    return;
                } else {
                    n('Camera not available yet');
                }
            }
        } catch (aa) {
            n('There was an error executing the command.');
            return;
        }
        var U = X.split(' ');
        var ai = P.member7135();
        if (P.clientParameters.member8025.value !== Class315.member3696 || ai !== undefined && ai.member8026() >= 2) {
            if (false) {
            }
            var R = P.member8252.member9083();
            if (X === 'debug') {
                if (P.member9767.isOpen()) {
                    P.member9767.member10107();
                } else {
                    P.member9767.member10108();
                }
                return;
            } else if (X === 'debugcamera') {
                P.member6101.member9066();
                return;
            } else if (X === 'disable2d') {
                o.member3795();
                return;
            } else if (U.length >= 3 && U[0] === 'directlogin') {
                var af = '';
                if (U.length >= 4) {
                    af = U[3];
                }
                if (P.member8234.member8235()) {
                    P.member8234.member9726();
                }
                P.member8234.member9719(U[1], U[2], af, true);
                var Q = Class66.member432('debugconsole');
                localStorage[Q + 'directlogin.username'] = U[1];
                localStorage[Q + 'directlogin.password'] = r(U[2]);
                return;
            } else if (U.length >= 3 && U[0] === 'setlobby') {
                if (R.member8239()) {
                    n(C);
                    return;
                }
                try {
                    var W = parseInt(U[1]);
                    W += 1099;
                } catch (aa) {
                    n(C);
                    return;
                }
                var ag = U[2].trim();
                ag += '.runescape.com';
                var ad = P.clientParameters.member8025.value;
                var T = ServerPorts.member9301(ad, ServerPorts.member9299.member7199, W);
                var S = ServerPorts.member9300(ad, ServerPorts.member9299.member7199, W);
                Class726.member8560(ag, W, T, S);
                n(e);
                return;
            } else if (U.length >= 3 && U[0] === 'setmediastream') {
                if (R.member8239()) {
                    n(C);
                    return;
                }
                try {
                    var W = parseInt(U[1]);
                    W += 1099;
                } catch (aa) {
                    n(C);
                    return;
                }
                var ag = U[2].trim();
                ag += '.runescape.com';
                Class726.setMediaStream(ag, W);
                P.member995.member4000(undefined, Class726.getCurrentMediaStream().member7142());
                P.member995.member4006();
                n(e);
                return;
            } else if (X === 'clientdrop') {
                P.member8252.member10109();
            } else if (X === 'errortest') {
                throw new Error('1785 ');
            } else if (X === 'togglefilteredfps') {
                Class299.member3574();
                if (Class299.member3575()) {
                    n('Filtering FPS data');
                } else {
                    n('Not filtering FPS data');
                }
                return;
            }
            if (R.member8239()) {
                var Z = R.member8260(Class501.member8136);
                Z.packet.p1(X.length + 3);
                Z.packet.p1(ab ? 1 : 0);
                Z.packet.p1(ak ? 1 : 0);
                Z.packet.pjstr(X);
                R.member8261(Z);
            }
        }
    };
    K.member9620 = i;
    return K;
}();
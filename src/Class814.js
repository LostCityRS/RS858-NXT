import { Class49 } from 'Class49.js';
import { Class291 } from 'Class291.js';
import { Class515 } from 'Class515.js';
import { Class423 } from 'Class423.js';
import { Class131 } from 'Class131.js';
import { Class623 } from 'Class623.js';
import { Class302 } from 'Class302.js';
import { Class484 } from 'Class484.js';
import { Class301 } from 'Class301.js';
import { Class486 } from 'Class486.js';
import { Class709 } from 'Class709.js';
import { Class447 } from 'Class447.js';
export var Class814 = function () {
    var t = {};
    var F;
    var x;
    var e;
    var A;
    var D = false;
    var n = {
        x: 0,
        y: 0
    };
    var c = new Float32Array(3);
    var i = Class49.member313();
    var h = {
        x: 0,
        y: 0,
        w: 0,
        member1272: 0
    };
    var d = Class291();
    var r = {
        member10537: new Float32Array(3),
        member2840: Class49.member313()
    };
    var E = undefined;
    var y = [];
    var v = {
        member10537: new Float32Array(3),
        member2840: Class49.member313()
    };
    var z = [];
    var u = 256;
    var a = 0;
    var q = new Array(u);
    t.member25 = function (J) {
        F = J;
        x = F.member6116;
        e = F.member2970;
        A = F.member433;
    };
    var C = t.member25;
    t.member487 = function (J) {
        if (z.length > 0) {
            z = [];
        }
        a = 0;
        F.member6450.member6457(G);
    };
    t.member486 = function (J, K, L) {
        h.x = L.x;
        h.y = L.y;
        h.w = L.w;
        h.member1272 = L.member1272;
        F.member6450.member6457(o);
        k();
        F.member6452.member6456(B);
        y = [];
    };
    var I = t.member486;
    var o = function (K) {
        var J = K.member9627();
        if (J === null || J === undefined) {
            return;
        }
        B(K);
    };
    var b = function (J) {
        if (D) {
            if (n.y <= 0) {
                return false;
            } else {
                return true;
            }
        }
        J.member2026(c);
        c[1] += J.member4121();
        Class515.member8337(c, J.member4085());
        if (!Class515.member8340(c)) {
            return false;
        }
        n.x = h.x + (c[0] + 1) * h.w / 2;
        n.y = h.y + (c[1] + 1) * h.member1272 / 2;
        D = true;
        return true;
    };
    var B = function (M) {
        if (E === undefined) {
            var K = Class423.member6115.member6107.member1204;
            if (K !== -1) {
                var J = F.member7137.member3639(K);
                if (J !== member47) {
                    E = J.member3598().member3599() + J.member3598().member3603();
                }
            }
        }
        D = false;
        var L = x.member7139();
        H(M, L);
        if (!s(M, L) || !g(M, L) || !j(M)) {
            return;
        }
    };
    var j = function (L) {
        if (L.member7831 !== undefined && L.member7831() === true) {
            return true;
        }
        var K = L.member7817();
        if (K === null) {
            return true;
        }
        if (!b(L)) {
            return false;
        }
        for (var J = 0; J < K.length; J++) {
            if (K[J] !== undefined && K[J] !== member47) {
                n.y -= m(K[J], n.x, n.y) + 2;
            }
        }
        return true;
    };
    var m = function (L, J, N) {
        var K = L.member3606.member1539();
        var M = K.member1285(L.member3606.member1494());
        A.member3640.member3623(J - M.member1292 / 2, N - M.member1293, M.member1292, M.member1293, 4294967295, M.member493, M.member494, M.member495, M.member496, K.member1277(), false);
        return M.member1293;
    };
    var H = function (Q, R) {
        var K = Q.member7807().member7716();
        for (var O = 0; O < K.length; O++) {
            var S = K[O];
            if (S === undefined) {
                continue;
            }
            r.member10538 = null;
            r.member10539 = null;
            r.duration = 0;
            if (S.member444() >= 0) {
                if (S.member7685() <= R) {
                    continue;
                }
                r.member10538 = e.member3227(Class131.member1234.member1204, S.member444());
                if (r.member10538 === member47) {
                    continue;
                }
                if (r.member10538.member10440()) {
                    r.member10538 = r.member10538.member10441();
                    if (r.member10538 === member47) {
                        continue;
                    }
                }
                r.duration = r.member10538.member7682();
            }
            if (S.member7686() >= 0) {
                r.member10539 = e.member3227(Class131.member1234.member1204, S.member7686());
                if (r.member10539 === member47) {
                    continue;
                }
                if (r.member10539.member10440()) {
                    r.member10539 = r.member10539.member10441();
                    if (r.member10539 === member47) {
                        continue;
                    }
                }
            }
            if (S.member7685() - r.duration > R) {
                continue;
            }
            r.member10540 = Q.member4121();
            Q.member2026(r.member10537);
            r.member10537[1] += r.member10540;
            Class515.member8337(r.member10537, Q.member4085());
            if (!Class515.member8340(r.member10537)) {
                continue;
            }
            r.x = h.x + (r.member10537[0] + 1) * h.w / 2;
            r.y = h.y + (r.member10537[1] + 1) * h.member1272 / 2;
            r.x += x.member6117().member8767(O);
            r.y += x.member6117().member8768(O);
            r.member10541 = r.member10538.member10436(A);
            if (r.member10541 !== null) {
                r.member10541.member510();
            }
            r.member10542 = r.member10538.member10437(A);
            if (r.member10542 !== null) {
                r.member10542.member510();
            }
            r.member10543 = r.member10538.member10438(A);
            if (r.member10543 !== null) {
                r.member10543.member510();
            }
            r.member10544 = r.member10538.member10439(A);
            if (r.member10544 !== null) {
                r.member10544.member510();
            }
            r.member10545 = r.member10538.member9787();
            if (r.member10545 === -1) {
                r.member10545 = Class423.member6115.member6105.member1204;
            }
            r.member10546 = Class623.member3639(r.member10545);
            r.member10547 = null;
            r.member10548 = null;
            r.member10549 = null;
            r.member10550 = null;
            r.member10551 = null;
            if (r.member10539 !== null) {
                r.member10547 = r.member10539.member10436(A);
                if (r.member10547 !== null) {
                    r.member10547.member510();
                }
                r.member10548 = r.member10539.member10437(A);
                if (r.member10548 !== null) {
                    r.member10548.member510();
                }
                r.member10549 = r.member10539.member10438(A);
                if (r.member10549 !== null) {
                    r.member10549.member510();
                }
                r.member10550 = r.member10539.member10439(A);
                if (r.member10550 !== null) {
                    r.member10550.member510();
                }
                r.member10552 = r.member10539.member9787();
                if (r.member10552 === -1) {
                    r.member10552 = Class423.member6115.member6105.member1204;
                }
                r.member10551 = Class623.member3639(r.member10552);
            }
            r.member10553 = null;
            r.member10554 = 0;
            r.member10555 = null;
            r.member10556 = 0;
            if (r.member10546 !== null) {
                r.member10553 = r.member10538.member3637(S.getParam());
                r.member10554 = Class302.member3609(r.member10553, r.member10546);
            }
            if (r.member10551 != null) {
                r.member10555 = r.member10539.member3637(S.member7687());
                r.member10556 = Class302.member3609(r.member10555, r.member10551);
            }
            r.member10557 = 0;
            r.member10558 = 0;
            if (r.member10542 !== null) {
                r.member10557 = Math.ceil(r.member10554 / r.member10542.member556());
            }
            if (r.member10548 !== null) {
                r.member10558 = Math.ceil(r.member10556 / r.member10548.member556());
            }
            r.width = 0;
            r.member10559 = r.width;
            if (r.member10541 !== null) {
                r.width += r.member10541.member556();
            }
            r.width += Class484.member7707;
            r.member10560 = r.width;
            if (r.member10543 !== null) {
                r.width += r.member10543.member556();
            }
            r.member10561 = r.width;
            r.member10562 = r.width;
            r.member10562 += r.member10554 / 2;
            if (r.member10542 !== null) {
                r.member10563 = r.member10542.member556() * r.member10557;
                r.width += r.member10563;
            } else {
                r.width += r.member10554;
            }
            r.member10564 = r.width;
            if (r.member10544 !== null) {
                r.width += r.member10544.member556();
            }
            var L = r.member10538.member10434();
            r.member10560 += L;
            r.member10561 += L;
            r.member10564 += L;
            r.member10565 = r.member10538.member10435();
            r.member10566 = 0;
            r.member10567 = 0;
            r.member10568 = 0;
            r.member10569 = 0;
            r.member10570 = 0;
            r.member10571 = 0;
            if (r.member10539 !== null) {
                r.width += Class484.member7707;
                r.member10566 = r.width;
                if (r.member10547 !== null) {
                    r.width += r.member10547.member556();
                }
                r.width += Class484.member7707;
                r.member10567 = r.width;
                if (r.member10549 !== null) {
                    r.width += r.member10549.member556();
                }
                r.member10568 = r.width;
                r.member10571 = r.width;
                r.member10571 += r.member10556 / 2;
                if (r.member10548 !== null) {
                    r.member10563 = r.member10548.member556() * r.member10558;
                    r.width += r.member10563;
                } else {
                    r.width += r.member10556;
                }
                r.member10569 = r.width;
                if (r.member10550 !== null) {
                    r.width += r.member10550.member556();
                }
                var J = r.member10539.member10434();
                r.member10567 += J;
                r.member10568 += J;
                r.member10569 += J;
                r.member10570 = r.member10539.member10435();
            }
            r.member10572 = S.member7685() - R;
            r.member10573 = r.member10538.member10431() - r.member10538.member10431() * r.member10572 / r.member10538.member7682();
            r.member10574 = r.member10538.member10432() + r.member10538.member10432() * r.member10572 / r.member10538.member7682();
            r.member10575 = r.x - (r.width >> 1) + r.member10573;
            r.member10576 = r.y + Class484.member7708 + r.member10574;
            r.member10577 = r.member10576 + Class484.member7709 + r.member10538.member10433();
            r.member10578 = 0;
            if (r.member10539 !== null) {
                r.member10578 = r.member10576 + Class484.member7709 + r.member10539.member10433();
            }
            r.alpha = 255;
            if (r.member10538.member9987() >= 0) {
                r.alpha = r.member10572 * 255 / (r.duration - r.member10538.member9987());
                if (r.alpha > 255) {
                    r.alpha = 255;
                }
                if (r.alpha < 0) {
                    r.alpha = 0;
                }
            }
            r.member10579 = r.alpha + 4294967040;
            var P = 0;
            if (r.member10541 !== null) {
                P = r.member10541.member556();
                A.member3640.member3627(r.member10575 + r.member10559, r.member10576, r.member10575 + r.member10559 + P, r.member10576 + r.member10541.member557(), r.member10579, 0, 0, 1, 1, r.member10541, false);
                r.member10541.member511();
            }
            if (r.member10543 !== null) {
                A.member3640.member3627(r.member10575 + r.member10560, P > 0 ? r.member10576 - (r.member10543.member557() / 2 - P / 2) : r.member10576, r.member10575 + r.member10560 + r.member10543.member556() + r.backgroundOffsetX, r.member10576 + r.member10565 + r.member10543.member557(), r.member10579, 0, 0, 1, 1, r.member10543, false);
                r.member10543.member511();
            }
            if (r.member10542 !== null) {
                for (var N = 0; N < r.member10557; N++) {
                    A.member3640.member3627(r.member10575 + r.member10561 + N * r.member10542.member556(), P > 0 ? r.member10576 - (r.member10542.member557() / 2 - P / 2) : r.member10576, r.member10575 + r.member10561 + (N + 1) * r.member10542.member556(), r.member10576 + r.member10565 + r.member10542.member557(), r.member10579, 0, 0, 1, 1, r.member10542, false);
                }
                r.member10542.member511();
            }
            if (r.member10544 !== null) {
                A.member3640.member3627(r.member10575 + r.member10564, P > 0 ? r.member10576 - (r.member10544.member557() / 2 - P / 2) : r.member10576, r.member10575 + r.member10564 + r.member10544.member556(), r.member10576 + r.member10565 + r.member10544.member557(), r.member10579, 0, 0, 1, 1, r.member10544, false);
                r.member10544.member511();
            }
            if (r.member10546 !== null) {
                var M = 0;
                if (r.member10541 !== null) {
                    M = r.member10576 - r.member10577;
                }
                Class302.member3601(r.member10553, r.member10575 + r.member10562, r.member10577 + M, r.member10546, 0, Class301.member3595, r.member10538.member993() << 8 | r.alpha);
            }
            if (r.member10539 !== null) {
                var T = 0;
                if (r.member10547 !== null) {
                    T = r.member10547.member556();
                    A.member3640.member3627(r.member10575 + r.member10566, r.member10576, r.member10575 + r.member10566 + T, r.member10576 + r.member10547.member557(), r.member10579, 0, 0, 1, 1, r.member10547, false);
                    r.member10547.member511();
                }
                if (r.member10549 !== null) {
                    A.member3640.member3627(r.member10575 + r.member10567, T > 0 ? r.member10576 - (r.member10549.member557() / 2 - r.member10547.member557() / 2) : r.member10576, r.member10575 + r.member10567 + T, r.member10576 + r.member10570 + r.member10549.member557(), r.member10579, 0, 0, 1, 1, r.member10549, false);
                    r.member10549.member511();
                }
                if (r.member10548 !== null) {
                    for (var N = 0; N < r.member10558; N++) {
                        A.member3640.member3627(r.member10575 + r.member10568 + N * r.member10548.member556(), T > 0 ? r.member10576 - (r.member10548.member557() / 2 - T / 2) : r.member10576, r.member10575 + r.member10568 + (N + 1) * r.member10548.member556(), r.member10576 + r.member10570 + r.member10548.member557(), r.member10579, 0, 0, 1, 1, r.member10548, false);
                    }
                    r.member10548.member511();
                }
                if (r.member10550 !== null) {
                    A.member3640.member3627(r.member10575 + r.member10569, T > 0 ? r.member10576 - (r.member10550.member557() / 2 - T / 2) : r.member10576, r.member10575 + r.member10569 + r.member10550.member556(), r.member10576 + r.member10570 + r.member10550.member557(), r.member10579, 0, 0, 1, 1, r.member10550, false);
                    r.member10550.member511();
                }
                if (r.member10551 !== null) {
                    var M = 0;
                    if (r.member10547 !== null) {
                        M = r.member10576 - r.member10578;
                    }
                    Class302.member3601(r.member10555, r.member10575 + r.member10571, r.member10578 - M, r.member10551, 0, Class301.member3595, r.member10539.member993() << 8 | r.alpha);
                }
            }
        }
    };
    var g = function (J, N) {
        if (!J.member7807().member7719()) {
            return true;
        }
        var aa = J.member7807().member7717();
        if (!aa[0]) {
            return true;
        }
        if (!b(J)) {
            return false;
        }
        for (var ac = 0; ac < aa.length; ac++) {
            if (aa[ac] === undefined) {
                return true;
            }
            var W = aa[ac].member776();
            var L = W.member2794();
            var S = -1;
            var Z = -1;
            switch (J.member7798()) {
            case Class486.member7730:
                S = L.member9992();
                Z = L.member9991();
                break;
            case Class486.member7731:
                S = L.member9994();
                Z = L.member9993();
                break;
            case Class486.member7729:
                S = L.member9990();
                Z = L.member9989();
                break;
            }
            var Q = null;
            var O = null;
            if (S !== -1) {
                Q = L.member8752(A, S);
                if (Q !== null && Q !== undefined) {
                    Q.member510();
                }
            }
            if (Z !== -1) {
                O = L.member8752(A, Z);
                if (O !== null && O !== undefined) {
                    O.member510();
                }
            }
            if (Q === null || O === null) {
                continue;
            }
            var M = 255;
            var X = 4294967295;
            var V = N - W.member7679();
            var T;
            var R = O.member556() * W.member7681() / 255;
            if (W.member7682() > V) {
                var ab = L.member9988() === 0 ? 0 : Math.floor(V / L.member9988()) * L.member9988;
                var U = O.member556() * W.member7680 / 255;
                T = U + (R - U) * ab / W.member7682();
            } else {
                T = R;
                var P = W.member7682() + L.member7728() - V;
                if (L.member9987() >= 0) {
                    M = P * 256 / (L.member7728() - L.member9987());
                    if (M > 255) {
                        M = 255;
                    }
                    if (M < 0) {
                        M = 0;
                    }
                    X = M + 4294967040;
                }
            }
            if (W.member7681 > 0 && T < 2) {
                T = 2;
            }
            var Y = Q.member557();
            var K = n.x - Q.member556() / 2;
            n.y -= Y;
            A.member3640.member3627(K, n.y, K + Q.member556(), n.y + Q.member557(), X, 0, 0, 1, 1, Q, false);
            Q.member511();
            A.member3640.member3627(K, n.y, K + T, n.y + O.member557(), X, 0, 0, 1, 1, O, false);
            O.member511();
            n.y -= Class709.member9986;
        }
        return true;
    };
    var s = function (P, O) {
        if (!b(P)) {
            return false;
        }
        var N = P.member7809();
        if (E !== undefined) {
            n.y -= E + 2;
        }
        if (N === undefined) {
            return true;
        }
        var M = Class423.member6115.member6107.member1204;
        if (M === -1) {
            return true;
        }
        var L = F.member7137.member3639(M);
        if (L === member47) {
            return true;
        }
        v.x = n.x;
        v.y = n.y + 4;
        v.width = Class302.member3609(N.member3637(), L, null) / 2;
        v.rect = Class447({
            member1789: [
                v.x - v.width,
                v.y - L.member3598().member3603()
            ],
            member1790: [
                v.x + v.width,
                v.y + L.member3598().member3599()
            ]
        });
        var K = true;
        while (K) {
            K = false;
            for (var J = 0; J < y.length; J++) {
                if (v.rect.member7104(y[J])) {
                    v.y = y[J].member1793()[1] + L.member3598().member3603() + 2;
                    v.rect = Class447({
                        member1789: [
                            v.x - v.width,
                            v.y - L.member3598().member3603()
                        ],
                        member1790: [
                            v.x + v.width,
                            v.y + L.member3598().member3599()
                        ]
                    });
                    if (v.y > h.y + h.member1272) {
                        return true;
                    }
                    K = true;
                }
            }
        }
        y[y.length] = v.rect;
        N.member486(v.x, v.y - L.member3598().member3603(), v.width, L, O);
        return true;
    };
    var G = function (M) {
        D = false;
        if (!b(M)) {
            return;
        }
        var J = M.member10142();
        if (J === undefined || !J.member10118()) {
            return;
        }
        M.member7836(d);
        var N = d.member3462();
        if (z[N] === undefined) {
            z[N] = 1;
        } else {
            z[N]++;
        }
        var L = 1 + n.x + J.member10120 * Math.floor((z[N] - 1) / 4) + (J.member10121 * Math.floor((z[N] - 1) / 4) - 1);
        var K = 1 + n.y + J.member10120 * ((z[N] - 1) % 4) + (J.member10121 * Math.floor((z[N] - 1) % 4) - 1);
        J.setPosition(L, K);
        q[a++] = {
            icon: J,
            member10580: N,
            member4159: M.member7815()
        };
        if (J.member10122()) {
            F.member9179.member9847(M);
        }
    };
    var k = function () {
        for (var J = 0; J < a; J++) {
            var N = q[J].member10580;
            var M = q[J].icon;
            if (z[N] === undefined || z[N] <= 1) {
                continue;
            }
            if (!q[J].member4159) {
                A.member3640.member3796(M.member2026().x - 1, M.member2026().y - 1, M.member10120 + 2, M.member10120 + 2, 4294902015, true);
            }
            var K = M.member10119().member1539();
            var L = K.member1285(M.member10119().member1494());
            A.member3640.member3623(M.member2026().x, M.member2026().y, M.member10120, M.member10120, 4294967295, L.member493, L.member494, L.member495, L.member496, K.member1277(), false);
        }
    };
    return t;
}();
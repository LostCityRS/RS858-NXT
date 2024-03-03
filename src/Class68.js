import { Class64 } from 'Class64.js';
import { Class29 } from 'Class29.js';
import { Class66 } from 'Class66.js';
import { Class65 } from 'Class65.js';
import { Class63 } from 'Class63.js';
import { Class67 } from 'Class67.js';
export var Class68 = function () {
    var v = {};
    var y = false;
    var x;
    var m = Class64();
    var n = false;
    var j = 0;
    var e = 250;
    var o = Class29();
    var B = true;
    v.member470 = function (H) {
        B = H;
    };
    var G = 1000 * 60 * 60 * 24 * 3;
    var g = 500;
    v.member471 = function (H) {
        g = H;
    };
    var i;
    var s = undefined;
    var F = 0;
    var t = undefined;
    var h = '0.3';
    var z = undefined;
    var E = undefined;
    var b = undefined;
    var u = -1;
    if (false) {
    }
    v.member25 = function (H) {
        x = H.member433;
        d();
        if (H.member472) {
            q(H.member473, H.member474);
        }
    };
    v.member475 = function () {
        if (x !== undefined) {
            var H = k();
            var I = Class66.member432();
            localStorage[I + 'usedShaders'] = H.member430();
            localStorage[I + 'usedShadersVersion'] = h;
        }
    };
    v.member476 = function () {
        var I = Class65();
        var J = m.member423();
        for (var H = 0; H < J.length; H++) {
            var M = J[H];
            try {
                var K = M.member451();
                if (K > Date.now() - G) {
                    I.member422(Class63.member418(M.getID()), M.member445(), K);
                }
            } catch (L) {
                if (false) {
                }
            }
        }
        return I;
    };
    var k = v.member476;
    var q = function (J, I) {
        var K = Class66.member432();
        i = localStorage[K + 'usedShaders'];
        var L = localStorage[K + 'usedShadersVersion'];
        if (i !== undefined && L === h) {
            s = Class65(i);
            if (s.getSize() < 1) {
                s = J;
            }
        } else {
            s = J;
        }
        if (s === undefined) {
            return;
        }
        s.member429(Date.now() - G);
        if (I !== undefined) {
            for (var H = 0; H < I.length; H++) {
                s.member428(I[H]);
            }
        }
        if (false) {
        }
        C();
    };
    var C = function () {
        var H = Date.now();
        var I = s.member427();
        while (F < I.length) {
            if (!B) {
                t = setTimeout(C, 1000);
                return;
            }
            var K = I[F++];
            if (m.member421(K.member424.id, K.member425) === undefined) {
                var J = r(K.member424.id, K.member425, true);
                if (K.member426 !== undefined) {
                    J.member450(K.member426);
                }
            }
            if (Date.now() - H >= g) {
                t = setTimeout(C, 1000);
                return;
            }
        }
        t = undefined;
        s = undefined;
        if (false) {
        }
    };
    v.member477 = function () {
        return t !== undefined;
    };
    v.member478 = function () {
        return Math.floor(F * 100 / s.getSize());
    };
    v.member479 = function () {
        return j > Date.now() - e;
    };
    var d = function () {
        if (false) {
        }
        var I = 0;
        for (var J in Class63) {
            var K = Class63[J];
            var H = K.member388;
            if (H !== undefined) {
                r(K.id, H, true);
                I++;
            }
        }
        if (false) {
        }
    };
    v.member480 = d;
    var r = function (J, I, H) {
        var K = Class63.member418(J);
        if (K === undefined) {
            throw new Error('1516 ' + J);
        }
        if (j > Date.now() - e && K.member388 !== undefined && !H) {
            var L = m.member421(J, K.member388);
            if (L === undefined) {
                var M = Date.now();
                L = Class67({
                    member439: J,
                    member433: x,
                    member386: K.member386,
                    member387: K.member387,
                    member300: I.member307(K.member388, true)
                });
                j = Date.now();
                if (false) {
                }
                m.member422(J, K.member388, L);
            }
            return L;
        } else {
            var M = Date.now();
            var L = Class67({
                member439: J,
                member433: x,
                member386: K.member386,
                member387: K.member387,
                member300: I.member307(undefined, true)
            });
            j = Date.now();
            if (false) {
            }
            m.member422(J, I, L);
            return L;
        }
    };
    var c = function (I, H) {
        if (H === undefined) {
            H = o;
        }
        if (I !== z || H.member303(E) === false) {
            var J = m.member421(I, H);
            if (J === undefined) {
                J = r(I, H, false);
            }
            return J;
        } else {
            return b;
        }
    };
    v.member421 = c;
    var a = function (L, J) {
        if (L !== b || J) {
            if (J) {
                var I = -1;
                if (u !== -1) {
                    I = u;
                } else if (b !== undefined) {
                    I = b.member460();
                }
                var H = L.member460();
                for (var K = H + 1; K <= I; K++) {
                    x.member481();
                    x.gl.disableVertexAttribArray(K);
                }
                if (u !== -1) {
                    I = -1;
                    u = -1;
                }
                if (L !== b) {
                    x.gl.useProgram(L.member446());
                    L.member456();
                }
                for (var K = I + 1; K <= H; K++) {
                    x.member482();
                    x.gl.enableVertexAttribArray(K);
                }
            } else {
                if (b !== undefined) {
                    u = Math.max(u, b.member460());
                }
                x.gl.useProgram(L.member446());
                L.member456();
            }
            L.member449();
            z = L.getID();
            E = L.member445();
            b = L;
        }
        if (L !== undefined) {
            L.member454();
        }
    };
    v.member483 = a;
    v.member484 = function () {
        z = undefined;
        E = undefined;
        b = undefined;
    };
    v.member485 = function () {
        m.clear();
        v.member484();
    };
    if (false) {
    }
    var D = function () {
        v.member484();
        if (false) {
        }
    };
    v.member486 = D;
    var A = function () {
    };
    v.member487 = A;
    return v;
}();
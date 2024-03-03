import { Class294 } from 'Class294.js';
import { Class293 } from 'Class293.js';
import { Class295 } from 'Class295.js';
import { Class297 } from 'Class297.js';
import { Class66 } from 'Class66.js';
import { Class296 } from 'Class296.js';
import { Class264 } from 'Class264.js';
import { Class298 } from 'Class298.js';
export var Class299 = function () {
    var X = {};
    var i;
    X.member3565 = function () {
        return i;
    };
    var G;
    X.member3566 = function () {
        return G;
    };
    var ae = false;
    var v = true;
    X.member3567 = function () {
        v = false;
    };
    X.member3568 = function () {
        return !ae;
    };
    var N;
    var j;
    var J;
    var m;
    var M;
    var I;
    var Z;
    X.member3569 = function () {
        return Z;
    };
    var C;
    var z = member55(window, 'requestAnimationFrame');
    var K = member55(window, 'cancelAnimationFrame');
    X.member3570 = true ? 20 : {};
    X.member3571 = 1000 / X.member3570;
    var y;
    var E;
    var ab = 0;
    var R;
    var T;
    var a;
    var Y;
    var t = 0, u = 0;
    X.member3572 = function () {
        return t;
    };
    var Q = 0, e = 0;
    X.member3573 = function () {
        return Q;
    };
    var aa = true;
    X.member3574 = function () {
        aa = !aa;
    };
    X.member3575 = function () {
        return aa;
    };
    var U = 30;
    var q = new Array(U);
    var b = 0;
    var S = 0;
    X.member3576 = function () {
        return S;
    };
    var k;
    var h = true;
    X.member3577 = function (al) {
        if (!aa) {
            return;
        }
        h = false;
        if (al) {
            S = 0;
        }
        c();
    };
    var c = function () {
        k = undefined;
        A = undefined;
        o = undefined;
    };
    var x = function () {
        if (S === 0) {
            k = 0;
            o = 0;
            A = 0;
            return;
        }
        var al = 0;
        var ao = b - 1;
        var an = 0;
        A = Number.MAX_VALUE;
        o = 0;
        while (al < S) {
            if (ao < 0) {
                ao = U - 1;
            }
            var am = q[ao--];
            an += am;
            if (am < A) {
                A = am;
            }
            if (am > o) {
                o = am;
            }
            al++;
        }
        k = Math.floor(an / S);
        return k;
    };
    var A;
    X.member3578 = function () {
        if (A === undefined) {
            x();
        }
        return A;
    };
    var o;
    X.member3579 = function () {
        if (o === undefined) {
            x();
        }
        return o;
    };
    X.member3580 = function () {
        if (k === undefined) {
            x();
        }
        return k;
    };
    var F = 0, ai = 0;
    var ak = 0;
    X.member3581 = function () {
        return ak;
    };
    var r = 0;
    X.member3582 = function () {
        return r;
    };
    var H, s, P;
    var B;
    var L = 1000;
    var n;
    var ah;
    var D = null;
    X.member3583 = function () {
        return D;
    };
    var ad = Class294();
    X.member3584 = function () {
        return ad;
    };
    var aj = function (av, ao, aq, ax, aw, ap, an, al, ar, ay, au) {
        i = av;
        G = ao;
        N = aq;
        j = ax;
        J = aw;
        m = ap;
        M = an;
        I = au;
        Z = al;
        C = ar;
        window.focus();
        if (false) {
        }
        window.onunload = d;
        if (true) {
            Class293.member3473(function (az) {
                H = az.getElementById('gamelps');
                s = az.getElementById('gamefps');
                P = az.getElementById('gameft');
            });
        } else {
        }
        try {
            if (I !== undefined) {
                I(ad);
            }
            var at = {
                fileSystem: ad.member3474(),
                webSocketsOnWebWorkers: ad.member3476()
            };
            Class295.testFeatureSet(at, function (aC) {
                D = aC;
                if (false) {
                }
                var aE = undefined;
                if (ad.member3478() !== undefined) {
                    var az = X.member3583();
                    az.supportedBrowser = true;
                    var aD = JSON.stringify(az);
                    aE = Class297.get(ad.member3478() + encodeURIComponent(aD));
                }
                if (!Class295.isTypedArraysSupported()) {
                    throw new Error('1085 ');
                }
                Class66.member25(ad.member3482(), ad.member3486());
                if (true) {
                    if (ad.member3490()) {
                        Class296.member25();
                        Class264.member25(undefined, true, ay);
                        Class298.member25(Z);
                    }
                } else {
                }
                try {
                    var aA = N(i, G, Z, C);
                    if (!aA) {
                        if (false) {
                        }
                        v = false;
                    }
                } catch (aB) {
                    ag(aB);
                }
                if (!v) {
                    if (aE === undefined) {
                        d();
                    } else {
                        aE(d);
                    }
                } else {
                    O();
                }
            });
        } catch (am) {
            ag(am);
        }
    };
    X.member25 = aj;
    var O = function () {
        var al = Date.now();
        E = al;
        R = al;
        T = al;
        a = al - 1000;
        if (true) {
            B = setInterval(W, L);
            n = z(af);
        } else {
        }
    };
    var W = function () {
        ac(true);
    };
    var af = function () {
        ac(false);
    };
    var g = function (al) {
        var am = al - T;
        if (am > 0) {
            c();
            Q = e / am * 1000;
            if (e > 0) {
                F = Math.floor(ai / e);
            } else {
                F = 99999;
            }
            e = 0;
            ai = 0;
            T = al;
        }
    };
    X.member3585 = g;
    var ac = function (al) {
        if (true) {
            clearInterval(B);
            K(n);
        } else {
        }
        var am = Date.now();
        var aq = am - 1000;
        if (Y || al) {
            a = am;
            e = 0;
            ai = 0;
        }
        Y = al;
        if (R < aq) {
            t = u;
            u = 0;
            R = am;
            if (true) {
                if (H !== null) {
                    H.textContent = t;
                }
            } else {
            }
        }
        if (T < aq && a < aq) {
            g(am);
            if (h) {
                q[b++] = Q;
                if (b === U) {
                    b = 0;
                }
                if (S < U) {
                    S++;
                }
            } else {
                h = true;
            }
            if (true) {
                if (s !== null) {
                    s.textContent = Q;
                }
                if (P !== null) {
                    P.textContent = F + 'ms';
                }
            } else {
            }
        }
        var an = Math.floor((am - E) / X.member3570) - ab;
        if (an > 100) {
            ab = Math.floor((am - E) / X.member3570) - 100;
            an = 100;
        }
        try {
            for (; an > 0; an--) {
                if (true) {
                    Class296.member78();
                } else {
                }
                j();
                u++;
                ab++;
            }
        } catch (ao) {
            ag(ao);
        }
        try {
            J();
        } catch (ao) {
            ag(ao);
        }
        e++;
        r++;
        var ap = Date.now() - am;
        ai += ap;
        ak += ap;
        if (!v) {
            d();
        } else if (true) {
            B = setInterval(W, L);
            n = z(af);
        } else {
        }
    };
    var ag = function (al) {
        V(al);
        if (false) {
        }
        v = false;
        if (!member52) {
            clearInterval(ah);
        }
        if (M !== undefined) {
            M(al);
        }
    };
    var V = function (ao) {
        ae = true;
        var ap = document.getElementById(Z);
        if (ap !== null) {
            var al = document.getElementById(C);
            if (al !== null) {
                ap.removeChild(al);
            }
            ap.style.color = 'white';
            ap.style.fontSize = '16px';
            ap.innerHTML = '<div style=\'padding:20px;\'>';
            ap.innerHTML += '<div style=\'margin:20px;font-size:200%;font-weight:bold;\'>Wowsers, something didn\'t quite go to plan, sorry.</div>';
            ap.innerHTML += '<div style=\'margin:20px;\'>If this is the first time you\'ve seen this page, please refresh the page and try again.</div>';
            ap.innerHTML += '<div style=\'margin:20px;\'>If this happens repeatedly, please submit a bug report with the information below and what you were doing at the time the crash occured.</div>';
            ap.innerHTML += '<div style=\'border:1px solid white;margin:20px;\'>' + ao.stack + '</div>';
            ap.innerHTML += '</div>';
        } else {
            var am = '';
            if (ao.member3492 !== undefined && (ao.stack === undefined || ao.stack.indexOf(ao.member3492) === -1)) {
                am += ao.member3492 + '\n';
            }
            if (ao.stack !== undefined) {
                am += ao.stack;
            }
            var an = document.getElementsByTagName('body')[0];
            an.innerHTML = '<h3 style="margin: 10px;">Oops, looks like we made a mistake</h3><p style="margin: 10px; font-weight: bold;">If this is the first time you\'ve seen this error, please reload the page or close the app and try again.</p><p style="margin: 10px;">If it persists, please submit a bug report with the information below, and what you were doing at the time:</p><p style="margin: 10px;">' + am + '</p><p style="margin: 10px;"><button onclick="window.location.reload(false);">Reload</button>';
            an.setAttribute('class', '');
            an.setAttribute('style', 'color:white;');
        }
    };
    var d = function () {
        if (false) {
        }
        if (true) {
            if (ad.member3490()) {
                Class298.member475();
            }
        } else {
        }
        window.onunload = null;
        if (m !== undefined) {
            m();
        }
        if (false) {
        }
    };
    return X;
}();
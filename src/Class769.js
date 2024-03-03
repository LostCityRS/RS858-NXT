import { Class103 } from 'Class103.js';
import { Class453 } from 'Class453.js';
import { Class501 } from 'Class501.js';
import { Class465 } from 'Class465.js';
import { Class438 } from 'Class438.js';
export var Class769 = function () {
    var aa = {};
    var ad = 1;
    var q = 2;
    var Z = 3;
    var af = 4;
    var o = 5;
    var e = 6;
    var d = 7;
    var O = 8;
    var r = 9;
    var ag = 10;
    var m = 11;
    var i = 12;
    var c = 13;
    var W = 14;
    var z = 15;
    var a = 17;
    var n = 18;
    var g = 19;
    var j = 20;
    var X = 21;
    var Y = 1000 / 2;
    var ah;
    var h = 0;
    aa.member10380 = function () {
        return h;
    };
    var ac = function () {
        h++;
        ab = true;
    };
    aa.member9780 = ac;
    var ab = false;
    var V = Class103();
    var v = Class103();
    var E = new Array(25);
    var ae = function (ai) {
        ah = ai;
        y(undefined, undefined);
    };
    aa.member25 = ae;
    var y = function (ak, aj) {
        if (aj !== Class453.member7202 && ak !== Class453.member7202) {
            V.member301();
            v.member301();
            for (var ai = 0; ai < E.length; ai++) {
                E[ai] = {};
            }
            h = 0;
            ab = false;
        }
    };
    aa.member7183 = y;
    var L = function () {
        for (var al = V.member776(); al !== null; al = V.member777()) {
            N(al);
        }
        var aj = Date.now();
        for (var al = v.member776(); al !== null; al = v.member777()) {
            if (al.setTime <= aj) {
                N(al);
            }
        }
        if (ab) {
            var ak = ah.member8252.member8259();
            if (ak !== undefined) {
                var ai = ak.member8260(Class501.member8118);
                ai.member2698.member1056(h);
                ak.member8261(ai);
                ab = false;
            }
        }
    };
    aa.member487 = L;
    var N = function (ar) {
        var ao = true;
        if (ar.member2971) {
            if (ar.type === ad) {
                var ax = ah.member2970.member7393(Class465.member7379, ar.member4249);
                ah.member6116.member9766().member2945(ax, ar.value);
                ah.member7187.member9140(ar.member4249);
            } else if (ar.type === q) {
                var ax = ah.member2970.member7393(Class465.member7379, ar.member4249);
                ah.member6116.member9766().member2945(ax, ar.value);
                ah.member7187.member9142(ar.member4249);
            } else if (ar.type === Z) {
                var aq = ah.member7619.member7745().member7438(ar.member4249);
                if (aq === null) {
                    ao = false;
                } else {
                    aq.member6805(ar.value);
                }
            } else if (ar.type === e) {
                var aq = ah.member7619.member7745().member7438(ar.member4249);
                if (aq === null) {
                    ao = false;
                } else {
                    aq.member4647(ar.value);
                }
            } else if (ar.type === d) {
                var aq = ah.member7619.member7745().member7438(ar.member4249);
                if (aq === null) {
                    ao = false;
                } else {
                    aq.member6756(ar.value);
                }
            } else if (ar.type === c) {
                var aq = ah.member7619.member7745().member7438(ar.member4249);
                if (aq === null) {
                    ao = false;
                } else {
                    aq.member6808(ar.value);
                }
            } else if (ar.type === W) {
                ah.member9171.member9532(ar.value, ar.member10381, true);
            } else if (ar.type === af) {
                var aq = ah.member7619.member7745().member7438(ar.member4249);
                if (aq === null) {
                    ao = false;
                } else {
                    aq.member7500(ar.value);
                    if (ar.member10381 !== undefined) {
                        aq.member7497(ar.member10381);
                    }
                    if (ar.member10382 !== undefined) {
                        aq.member7502(ar.member10382);
                    }
                    aq.member7529(undefined);
                }
            } else if (ar.type === o) {
                var aq = ah.member7619.member7745().member7438(ar.member4249);
                if (aq === null) {
                    ao = false;
                } else {
                    aq.member7530(ar.value);
                }
            } else if (ar.type === O) {
                var aq = ah.member7619.member7745().member7438(ar.member4249);
                if (aq === null) {
                    ao = false;
                } else {
                    var am = aq.member7505();
                    am[0] = ar.value;
                    am[1] = ar.member10381;
                    aq.member7507(ar.member10382);
                    if (aq.member6807() !== -1) {
                        if (aq.member7510() > 0) {
                            aq.member7507(aq.member7506() * 32 / aq.member7510());
                        } else if (aq.member6740() > 0) {
                            aq.member7507(aq.member7506() * 32 / aq.member6740());
                        }
                    }
                }
            } else if (ar.type === ag) {
                var aq = ah.member7619.member7745().member7438(ar.member4249);
                if (aq === null) {
                    ao = false;
                } else {
                    var ak = aq.member7532();
                    ak[0] = ar.value;
                    ak[1] = ar.member10381;
                    var am = aq.member7505();
                    am[2] = ar.member10382;
                }
            } else if (ar.type === m) {
                var aq = ah.member7619.member7745().member7438(ar.member4249);
                if (aq === null) {
                    ao = false;
                } else {
                    aq.member6729(0);
                    aq.member6749(ar.value);
                    aq.member6737(ar.value);
                    aq.member6731(0);
                    aq.member6751(ar.member10381);
                    aq.member6739(ar.member10381);
                }
            } else if (ar.type === r) {
                var aq = ah.member7619.member7745().member7438(ar.member4249);
                if (aq === null) {
                    ao = false;
                } else {
                    aq.member7043(ar.value);
                    aq.member7045(ar.member10381);
                }
            } else if (ar.type === i) {
                var aq = ah.member7619.member7745().member7438(ar.member4249);
                if (aq === null) {
                    ao = false;
                } else if (aq.member2794() === Class438.member6632) {
                    var ap = ar.value;
                    if (ap > aq.member7573() - aq.member6754()) {
                        ap = aq.member7573() - aq.member6754();
                    }
                    if (ap < 0) {
                        ap = 0;
                    }
                    if (aq.member6810() !== ap) {
                        aq.member7570(ap);
                    }
                }
            } else if (ar.type === z) {
                var aq = ah.member7619.member7745().member7438(ar.member4249);
                if (aq === null) {
                    ao = false;
                } else if (aq.member2794() === Class438.member6634) {
                    var au = ar.value;
                    aq.member7587(au);
                }
            } else if (ar.type === n) {
                var aq = ah.member7619.member7745().member7438(ar.member4249);
                if (aq === null) {
                    ao = false;
                } else if (aq.member2794() === Class438.member6636) {
                    var ai = ar.value;
                    var at = ar.member10381;
                    aq.member7518(ai, at);
                }
            } else if (ar.type === a) {
                var aq = ah.member7619.member7745().member7438(ar.member4249);
                if (aq === null) {
                    ao = false;
                } else if (aq.member2794() === Class438.member6636) {
                    var aw = value;
                    var an = member10381;
                    aq.member7517(aw, an);
                }
            } else if (ar.type === g) {
                var aq = ah.member7619.member7745().member7438(ar.member4249);
                if (aq === null) {
                    ao = false;
                } else if (aq.member2794() === Class438.member6634) {
                    var aj = ar.value;
                    aq.member7589(aj);
                }
            } else if (ar.type === X) {
                var aq = ah.member7619.member7745().member7438(ar.member4249);
                if (aq === null) {
                    ao = false;
                } else if (aq.member2794() === Class438.member6634) {
                    var al = ar.value;
                    aq.member7600(al);
                }
            } else if (ar.type === j) {
                var aq = ah.member7619.member7745().member7438(ar.member4249);
                if (aq === null) {
                    ao = false;
                } else {
                    var av = ar.value;
                    aq.member7042(av);
                }
            } else if (false) {
            }
        }
        if (ao) {
            if (ar.member10383) {
                v.unlink(ar);
                ar.member10383 = false;
            }
            if (ar.member10384) {
                V.unlink(ar);
                ar.member10384 = false;
            }
            E[ar.type][ar.member4249] = undefined;
        }
    };
    var C = false;
    var k = function (ai, aj) {
        C = false;
        var ak = E[ai][aj];
        if (ak === undefined) {
            ak = new b(ai, aj);
            E[ai][aj] = ak;
            C = true;
        }
        return ak;
    };
    var b = function (ai, aj) {
        this.type = ai;
        this.member4249 = aj;
        this.member10383 = false;
        this.member10384 = false;
        this.setTime = undefined;
        this.member2971 = false;
    };
    b.prototype.member10385 = function () {
        this.setTime = Date.now() + Y;
        if (this.member10383) {
            v.unlink(this);
            this.member10383 = false;
        }
        if (this.member10384) {
            V.unlink(this);
            this.member10384 = false;
        }
        v.member887(this);
        this.member10383 = true;
    };
    b.prototype.member10386 = function () {
        this.member2971 = true;
        if (this.setTime === undefined) {
            if (this.member10383) {
                v.unlink(this);
                this.member10383 = false;
            }
            if (this.member10384) {
                V.unlink(this);
                this.member10384 = false;
            }
            V.member887(this);
            this.member10384 = true;
        }
    };
    var U = function (ak, ai, aj) {
        var al = k(ad, ai.member444());
        if (ak) {
            al.member10386();
            al.value = aj;
        } else {
            al.member10385();
        }
    };
    aa.member9622 = U;
    var T = function (ak, aj, ai) {
        var al = k(ad, aj.member2949().member444());
        if (ak) {
            al.member10386();
            if (C) {
                al.value = ah.member6116.member9766().member2943(aj.member2949());
            }
            al.value = aj.member2951(al.value, ai);
        } else {
            al.member10385();
        }
    };
    aa.member10204 = T;
    var S = function (ak, ai, aj) {
        var al = k(q, ai.member444());
        if (ak) {
            al.member10386();
            al.value = aj;
        } else {
            al.member10385();
        }
    };
    aa.member9623 = S;
    var R = function (ak, aj, ai) {
        var al = k(Z, aj);
        if (ak) {
            al.member10386();
            al.value = ai;
        } else {
            al.member10385();
        }
    };
    aa.member7646 = R;
    var Q = function (ak, aj, ai) {
        var al = k(e, aj);
        if (ak) {
            al.member10386();
            al.value = ai;
        } else {
            al.member10385();
        }
    };
    aa.member7630 = Q;
    var P = function (ak, aj, ai) {
        var al = k(d, aj);
        if (ak) {
            al.member10386();
            al.value = ai;
        } else {
            al.member10385();
        }
    };
    aa.member7629 = P;
    var M = function (ak, aj, ai) {
        var al = k(c, aj);
        if (ak) {
            al.member10386();
            al.value = ai;
        } else {
            al.member10385();
        }
    };
    aa.member7642 = M;
    aa.member9533 = function (ak, aj, ai) {
        var al = k(W, 0);
        if (ak) {
            al.member10386();
            al.value = aj;
            al.member10381 = ai;
        } else {
            al.member10385();
        }
    };
    aa.member7643 = function (al, ak, an, aj, ai) {
        var am = k(af, ak);
        if (al) {
            am.member10386();
            am.value = aj;
            am.member10381 = an;
            am.member10382 = ai;
        } else {
            am.member10385();
        }
    };
    var K = aa.member7643;
    aa.member7636 = function (ak, aj, ai) {
        var al = k(i, aj);
        if (ak) {
            al.member10386();
            al.value = ai;
        } else {
            al.member10385();
        }
    };
    var J = aa.member7636;
    aa.member7648 = function (ak, aj, ai) {
        var al = k(o, aj);
        if (ak) {
            al.member10386();
            al.value = ai;
        } else {
            al.member10385();
        }
    };
    var I = aa.member7648;
    aa.member7632 = function (am, al, aj, ak, ai) {
        var an = k(O, al);
        if (am) {
            an.member10386();
            an.value = aj;
            an.member10381 = ak;
            an.member10382 = ai;
        } else {
            an.member10385();
        }
    };
    var H = aa.member7632;
    aa.member7633 = function (am, al, ai, ak, aj) {
        var an = k(ag, al);
        if (am) {
            an.member10386();
            an.value = ai;
            an.member10381 = ak;
            an.member10382 = aj;
        } else {
            an.member10385();
        }
    };
    var G = aa.member7633;
    aa.member7628 = function (ak, aj, ai, am) {
        var al = k(m, aj);
        if (ak) {
            al.member10386();
            al.value = ai;
            al.member10381 = am;
        } else {
            al.member10385();
        }
    };
    var F = aa.member7628;
    aa.member7631 = function (al, ak, aj, ai) {
        var am = k(r, ak);
        if (al) {
            am.member10386();
            am.value = aj;
            am.member10381 = ai;
        } else {
            am.member10385();
        }
    };
    var D = aa.member7631;
    aa.member7647 = function (ak, aj, ai) {
        var al = k(z, aj);
        if (ak) {
            al.member10386();
            al.value = ai;
        } else {
            al.member10385();
        }
    };
    var B = aa.member7647;
    aa.member7625 = function (ak, aj, ai) {
        var al = k(g, aj);
        if (ak) {
            al.member10386();
            al.value = ai;
        } else {
            al.member10385();
        }
    };
    var A = aa.member7625;
    aa.member7623 = function (am, al, aj, ak, ai) {
        var an = k(n, aj * Math.pow(2, 32) | al);
        if (am) {
            an.member10386();
            an.value = ak;
            an.member10381 = ai;
        } else {
            an.member10385();
        }
    };
    var x = aa.member7623;
    aa.member7622 = function (am, al, aj, ak, ai) {
        var an = k(a, aj * Math.pow(2, 32) | al);
        if (am) {
            an.member10386();
            an.value = ak;
            chamge.member10381 = ai;
        } else {
            an.member10385();
        }
    };
    var u = aa.member7622;
    aa.member7644 = function (ak, aj, ai) {
        var al = k(X, aj);
        if (ak) {
            al.member10386();
            al.value = ai;
        } else {
            al.member10385();
        }
    };
    var t = aa.member7644;
    aa.member7645 = function (ak, aj, ai) {
        var al = k(j, aj);
        if (ak) {
            al.member10386();
            al.value = ai;
        } else {
            al.member10385();
        }
    };
    var s = aa.member7645;
    return aa;
}();
import { Class469 } from 'Class469.js';
import { Class468 } from 'Class468.js';
import { Class421 } from 'Class421.js';
export var Class660 = function () {
    var T = {};
    var L;
    var r;
    var O;
    var H;
    var G;
    var Z = function (af, ae, ad) {
        L = af;
        r = ae;
        O = ad;
        H = Class469.member7437;
        G = Class469.member7442;
    };
    T.member25 = Z;
    var b = function (ak, ai, aj, ae, ad, af) {
        var ah = ae.member6142[--ae.member6143];
        var ag = n(ah, ae);
        if (ag !== null) {
            ah = ah.substring(0, ah.length - 1);
        }
        aj.call(ai, ab(ah, ae), ag);
        ai.member6518(ad, af);
    };
    var n = function (ag, ae) {
        var af = null;
        if (ag.length > 0 && ag.charAt(ag.length - 1) === 'Y') {
            var ad = ae.member6100[--ae.member6099];
            if (ad > 0) {
                af = new Int32Array(ad);
                while (ad-- > 0) {
                    af[ad] = ae.member6100[--ae.member6099];
                }
            }
        }
        return af;
    };
    var ab = function (ae, ad) {
        var af = {};
        af.member6801 = new Array(ae.length);
        for (var ag = af.member6801.length - 1; ag >= 0; ag--) {
            if (ae.charAt(ag) === 's') {
                af.member6801[ag] = {
                    isObject: true,
                    isInteger: false,
                    member9707: false,
                    value: ad.member6142[--ad.member6143]
                };
            } else if (ae.charAt(ag) === 'l') {
                af.member6801[ag] = {
                    isObject: false,
                    isInteger: false,
                    member9707: true,
                    value: ad.member8877[--ad.member8878]
                };
            } else {
                af.member6801[ag] = {
                    isObject: false,
                    isInteger: true,
                    member9707: false,
                    value: ad.member6100[--ad.member6099]
                };
            }
        }
        af.scriptID = ad.member6100[--ad.member6099];
        if (af.scriptID !== -1) {
            Class468.member7430(af.scriptID, false);
            return af;
        } else {
            return null;
        }
    };
    var u = function (ag, ae, af, ad) {
        b(ag, ae, ae.member6606, ad, false, false);
    };
    Class421.member5156.member867 = function (ad) {
        return G(ad, u);
    };
    Class421.member5036.member867 = function (ad) {
        return H(ad, u);
    };
    var I = function (ag, ae, af, ad) {
        b(ag, ae, ae.member6538, ad, true, false);
    };
    Class421.member5131.member867 = function (ad) {
        return G(ad, I);
    };
    Class421.member5011.member867 = function (ad) {
        return H(ad, I);
    };
    var d = function (ag, ae, af, ad) {
        b(ag, ae, ae.member6540, ad, true, false);
    };
    Class421.member5136.member867 = function (ad) {
        return G(ad, d);
    };
    Class421.member5016.member867 = function (ad) {
        return H(ad, d);
    };
    var t = function (ag, ae, af, ad) {
        b(ag, ae, ae.member6526, ad, true, false);
    };
    Class421.member5137.member867 = function (ad) {
        return G(ad, t);
    };
    Class421.member5017.member867 = function (ad) {
        return H(ad, t);
    };
    var ac = function (ag, ae, af, ad) {
        b(ag, ae, ae.member6532, ad, true, false);
    };
    Class421.member5129.member867 = function (ad) {
        return G(ad, ac);
    };
    Class421.member5009.member867 = function (ad) {
        return H(ad, ac);
    };
    var M = function (ag, ae, af, ad) {
        b(ag, ae, ae.member6536, ad, true, false);
    };
    Class421.member5130.member867 = function (ad) {
        return G(ad, M);
    };
    Class421.member5010.member867 = function (ad) {
        return H(ad, M);
    };
    var S = function (ag, ae, af, ad) {
        b(ag, ae, ae.member6534, ad, true, false);
    };
    Class421.member5138.member867 = function (ad) {
        return G(ad, S);
    };
    Class421.member5018.member867 = function (ad) {
        return H(ad, S);
    };
    var K = function (ag, ae, af, ad) {
        b(ag, ae, ae.member6524, ad, true, false);
    };
    Class421.member5126.member867 = function (ad) {
        return G(ad, K);
    };
    Class421.member5006.member867 = function (ad) {
        return H(ad, K);
    };
    var s = function (ag, ae, af, ad) {
        b(ag, ae, ae.member6528, ad, true, false);
    };
    Class421.member5128.member867 = function (ad) {
        return G(ad, s);
    };
    Class421.member5008.member867 = function (ad) {
        return H(ad, s);
    };
    var h = function (ag, ae, af, ad) {
        b(ag, ae, ae.member6530, ad, true, false);
    };
    Class421.member5127.member867 = function (ad) {
        return G(ad, h);
    };
    Class421.member5007.member867 = function (ad) {
        return H(ad, h);
    };
    var V = function (ag, ae, af, ad) {
        b(ag, ae, ae.member6575, ad, true, false);
    };
    Class421.member5142.member867 = function (ad) {
        return G(ad, V);
    };
    Class421.member5022.member867 = function (ad) {
        return H(ad, V);
    };
    var A = function (ag, ae, af, ad) {
        b(ag, ae, ae.member6579, ad, true, false);
    };
    Class421.member5144.member867 = function (ad) {
        return G(ad, A);
    };
    Class421.member5024.member867 = function (ad) {
        return H(ad, A);
    };
    var C = function (ag, ae, af, ad) {
        b(ag, ae, ae.member6581, ad, true, false);
    };
    Class421.member5145.member867 = function (ad) {
        return G(ad, C);
    };
    Class421.member5025.member867 = function (ad) {
        return H(ad, C);
    };
    var k = function (ag, ae, af, ad) {
        b(ag, ae, ae.member6583, ad, true, false);
    };
    Class421.member5146.member867 = function (ad) {
        return G(ad, k);
    };
    Class421.member5026.member867 = function (ad) {
        return H(ad, k);
    };
    var o = function (ag, ae, af, ad) {
        b(ag, ae, ae.member6585, ad, true, false);
    };
    Class421.member5147.member867 = function (ad) {
        return G(ad, o);
    };
    Class421.member5027.member867 = function (ad) {
        return H(ad, o);
    };
    var W = function (ag, ae, af, ad) {
        b(ag, ae, ae.member6587, ad, true, false);
    };
    Class421.member5148.member867 = function (ad) {
        return G(ad, W);
    };
    Class421.member5028.member867 = function (ad) {
        return H(ad, W);
    };
    var F = function (ag, ae, af, ad) {
        b(ag, ae, ae.member6569, ad, false, false);
    };
    Class421.member5134.member867 = function (ad) {
        return G(ad, F);
    };
    Class421.member5014.member867 = function (ad) {
        return H(ad, F);
    };
    var J = function (ag, ae, af, ad) {
        b(ag, ae, ae.member6605, ad, false, false);
    };
    Class421.member5155.member867 = function (ad) {
        return G(ad, J);
    };
    Class421.member5035.member867 = function (ad) {
        return H(ad, J);
    };
    var x = function (ag, ae, af, ad) {
        b(ag, ae, ae.member6603, ad, false, false);
    };
    Class421.member5153.member867 = function (ad) {
        return G(ad, x);
    };
    Class421.member5033.member867 = function (ad) {
        return H(ad, x);
    };
    var a = function (ag, ae, af, ad) {
        b(ag, ae, ae.member6571, ad, false, false);
    };
    Class421.member5135.member867 = function (ad) {
        return G(ad, a);
    };
    Class421.member5015.member867 = function (ad) {
        return H(ad, a);
    };
    var g = function (ag, ae, af, ad) {
        b(ag, ae, ae.member6546, ad, false, true);
    };
    Class421.member5133.member867 = function (ad) {
        return G(ad, g);
    };
    Class421.member5013.member867 = function (ad) {
        return H(ad, g);
    };
    var j = function (ag, ae, af, ad) {
        b(ag, ae, ae.member6558, ad, false, true);
    };
    Class421.member5157.member867 = function (ad) {
        return G(ad, j);
    };
    Class421.member5037.member867 = function (ad) {
        return H(ad, j);
    };
    var v = function (ag, ae, af, ad) {
        b(ag, ae, ae.member6562, ad, false, true);
    };
    Class421.member5158.member867 = function (ad) {
        return G(ad, v);
    };
    Class421.member5038.member867 = function (ad) {
        return H(ad, v);
    };
    var z = function (ag, ae, af, ad) {
        b(ag, ae, ae.member6573, ad, false, false);
    };
    Class421.member5159.member867 = function (ad) {
        return G(ad, z);
    };
    Class421.member5039.member867 = function (ad) {
        return H(ad, z);
    };
    var N = function (ag, ae, af, ad) {
        b(ag, ae, ae.member6576, ad, false, true);
    };
    Class421.member5143.member867 = function (ad) {
        return G(ad, N);
    };
    Class421.member5023.member867 = function (ad) {
        return H(ad, N);
    };
    var R = function (ag, ae, af, ad) {
        b(ag, ae, ae.member6589, ad, false, true);
    };
    Class421.member5149.member867 = function (ad) {
        return G(ad, R);
    };
    Class421.member5029.member867 = function (ad) {
        return H(ad, R);
    };
    var Y = function (ag, ae, af, ad) {
        b(ag, ae, ae.member6591, ad, false, true);
    };
    Class421.member5150.member867 = function (ad) {
        return G(ad, Y);
    };
    Class421.member5030.member867 = function (ad) {
        return H(ad, Y);
    };
    var E = function (ag, ae, af, ad) {
        b(ag, ae, ae.member6593, ad, false, true);
    };
    Class421.member5160.member867 = function (ad) {
        return G(ad, E);
    };
    Class421.member5040.member867 = function (ad) {
        return H(ad, E);
    };
    var aa = function (ag, ae, af, ad) {
        b(ag, ae, ae.member6595, ad, false, true);
    };
    Class421.member5161.member867 = function (ad) {
        return G(ad, aa);
    };
    Class421.member5041.member867 = function (ad) {
        return H(ad, aa);
    };
    var X = function (ag, ae, af, ad) {
        b(ag, ae, ae.member6542, ad, true, false);
    };
    Class421.member5141.member867 = function (ad) {
        return G(ad, X);
    };
    Class421.member5021.member867 = function (ad) {
        return H(ad, X);
    };
    var e = function (ag, ae, af, ad) {
        b(ag, ae, ae.member6544, ad, true, false);
    };
    Class421.member5132.member867 = function (ad) {
        return G(ad, e);
    };
    Class421.member5012.member867 = function (ad) {
        return H(ad, e);
    };
    var U = function (ag, ae, af, ad) {
        b(ag, ae, ae.member6550, ad, false, true);
    };
    Class421.member5139.member867 = function (ad) {
        return G(ad, U);
    };
    Class421.member5019.member867 = function (ad) {
        return H(ad, U);
    };
    var D = function (ag, ae, af, ad) {
        b(ag, ae, ae.member6554, ad, false, true);
    };
    Class421.member5140.member867 = function (ad) {
        return G(ad, D);
    };
    Class421.member5020.member867 = function (ad) {
        return H(ad, D);
    };
    var Q = function (ag, ae, af, ad) {
        b(ag, ae, ae.member6599, ad, false, true);
    };
    Class421.member5154.member867 = function (ad) {
        return G(ad, Q);
    };
    Class421.member5034.member867 = function (ad) {
        return H(ad, Q);
    };
    var c = function (ag, ae, af, ad) {
        b(ag, ae, ae.member6597, ad, false, true);
    };
    Class421.member5151.member867 = function (ad) {
        return G(ad, c);
    };
    Class421.member5031.member867 = function (ad) {
        return H(ad, c);
    };
    var y = function (ag, ae, af, ad) {
        b(ag, ae, ae.member6601, ad, false, false);
    };
    Class421.member5152.member867 = function (ad) {
        return G(ad, y);
    };
    Class421.member5032.member867 = function (ad) {
        return H(ad, y);
    };
    var P = function (ag, ae, af, ad) {
        b(ag, ae, ae.member6567, ad, false, true);
    };
    Class421.member5162.member867 = function (ad) {
        return G(ad, P);
    };
    Class421.member5042.member867 = function (ad) {
        return H(ad, P);
    };
    var q = function (ag, ae, af, ad) {
        b(ag, ae, ae.member6609, ad, false, true);
    };
    Class421.member5163.member867 = function (ad) {
        return G(ad, q);
    };
    Class421.member5043.member867 = function (ad) {
        return H(ad, q);
    };
    var i = function (ag, ae, af, ad) {
        b(ag, ae, ae.member6611, ad, false, true);
    };
    Class421.member5164.member867 = function (ad) {
        return G(ad, i);
    };
    Class421.member5044.member867 = function (ad) {
        return H(ad, i);
    };
    var m = function (ag, ae, af, ad) {
        b(ag, ae, ae.member6613, ad, false, true);
    };
    Class421.member5165.member867 = function (ad) {
        return G(ad, m);
    };
    Class421.member5045.member867 = function (ad) {
        return H(ad, m);
    };
    var B = function (ag, ae, af, ad) {
        ag.member6804();
    };
    Class421.member5166.member867 = function (ad) {
        return G(ad, B);
    };
    Class421.member5046.member867 = function (ad) {
        return H(ad, B);
    };
    return T;
}();
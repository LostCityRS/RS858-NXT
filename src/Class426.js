import { Class421 } from 'Class421.js';
import { Js5ConfigGroup } from 'Class131.js';
export var Class426 = function () {
    var b = {};
    var a;
    var c = function (d) {
        a = d;
    };
    b.member25 = c;
    Class421.member5714.member867 = function (e) {
        e.member6099 -= 2;
        var g = e.member6100[e.member6099];
        var h = e.member6100[e.member6099 + 1];
        var i = a.getConfigType(Js5ConfigGroup.PARAMTYPE.member1204, h);
        var d = a.getConfigType(Js5ConfigGroup.STRUCTTYPE.member1204, g);
        if (i === NULL || d === NULL) {
            e.member6099 += 2;
            return true;
        }
        if (i.member6141()) {
            e.member6142[e.member6143++] = d.member2941(h, i.member6144());
        } else {
            e.member6100[e.member6099++] = d.getParam(h, i.member6145());
        }
    };
    Class421.member5715.member867 = function (g) {
        g.member6099 -= 2;
        var d = g.member6100[g.member6099];
        var h = g.member6100[g.member6099 + 1];
        var i = a.getConfigType(Js5ConfigGroup.PARAMTYPE.member1204, h);
        var e = a.getConfigType(Js5ConfigGroup.SEQTYPE.member1204, d);
        if (i === NULL || e === NULL) {
            g.member6099 += 2;
            return true;
        }
        if (i.member6141()) {
            g.member6142[g.member6143++] = e.member2941(h, i.member6144());
        } else {
            g.member6100[g.member6099++] = e.getParam(h, i.member6145());
        }
    };
    Class421.member5716.member867 = function (g) {
        var d = g.member6100[--g.member6099];
        var e = a.getConfigType(Js5ConfigGroup.SEQTYPE.member1204, d);
        if (e === NULL) {
            g.member6099++;
            return true;
        }
        g.member6100[g.member6099++] = e.member2917();
    };
    Class421.member5712.member867 = function (d) {
        d.member6099 -= 2;
        var e = d.member6100[d.member6099];
        var h = d.member6100[d.member6099 + 1];
        var i = a.getConfigType(Js5ConfigGroup.PARAMTYPE.member1204, h);
        var g = a.getConfigType(Js5ConfigGroup.NPCTYPE.member1204, e);
        if (i === NULL || g === NULL) {
            d.member6099 += 2;
            return true;
        }
        if (i.member6141()) {
            d.member6142[d.member6143++] = g.member2941(h, i.member6144());
        } else {
            d.member6100[d.member6099++] = g.getParam(h, i.member6145());
        }
    };
    Class421.member5713.member867 = function (e) {
        e.member6099 -= 2;
        var g = e.member6100[e.member6099];
        var h = e.member6100[e.member6099 + 1];
        var i = a.getConfigType(Js5ConfigGroup.PARAMTYPE.member1204, h);
        var d = a.getConfigType(Js5ConfigGroup.LOCTYPE.member1204, g);
        if (i === NULL || d === NULL) {
            e.member6099 += 2;
            return true;
        }
        if (i.member6141()) {
            e.member6142[e.member6143++] = d.member2941(h, i.member6144());
        } else {
            e.member6100[e.member6099++] = d.getParam(h, i.member6145());
        }
    };
    Class421.member5717.member867 = function (i) {
        var m = i.member6100[--i.member6099];
        var k = a.getConfigType(Js5ConfigGroup.BASTYPE.member1204, m);
        if (k === NULL) {
            i.member6099++;
            return true;
        }
        var e = k.getRandomReadyAnims();
        var h = k.getRandomReadyAnimWeights();
        if (e !== null && e.length > 0) {
            var j = 0;
            var g = h[0];
            for (var d = 0; d < e.length; d++) {
                if (h[d] > g) {
                    j = d;
                    g = h[d];
                }
            }
            i.member6100[i.member6099++] = e[j];
        } else {
            i.member6100[i.member6099++] = k.getReadyAnim();
        }
    };
    return b;
}();